/* TopLead - jobs engine
   Shared by jobs.html (list + filters + admin mode) and job-detail.html (one
   template driven by ?id=). jobs.json is the single source of truth; nothing
   about a job is written into HTML.

   Loaded only on the jobs pages, so the other twelve pages carry none of it. */

(function () {
  "use strict";

  var JOBS_URL = "jobs.json";

  /* ---------- helpers ---------- */

  // Everything from the JSON goes through this before it touches innerHTML.
  // The file is ours, but it is data, and data rendered as markup is how an
  // escaped quote or angle bracket turns into broken layout or worse.
  function esc(v) {
    return String(v == null ? "" : v)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function t(key, fallback) {
    try {
      var lang = document.documentElement.lang || "vi";
      var dict = (window.translations && window.translations[lang]) || null;
      if (dict && dict[key] !== undefined) return dict[key];
    } catch (e) { /* translations not loaded yet: fall through */ }
    return fallback;
  }

  function partnerLabel() { return t("jobs.partner", "Đối tác TopLead"); }

  function displayCompany(job) {
    return job.showCompany === false ? partnerLabel() : (job.company || partnerLabel());
  }

  // Initial-in-a-circle stands in whenever there is no logo file, or the file
  // fails to load. A broken-image icon on a job card reads as a broken site.
  function logoHTML(job) {
    var name = displayCompany(job);
    var initial = esc(name.trim().charAt(0).toUpperCase() || "T");
    var fallback = '<span class="job-logo-fallback" aria-hidden="true">' + initial + "</span>";
    if (job.showCompany === false || !job.companyLogo) return fallback;
    return '<img class="job-logo-img" src="' + esc(job.companyLogo) + '" alt="" loading="lazy" decoding="async" ' +
           'onerror="this.parentNode.innerHTML=\'<span class=&quot;job-logo-fallback&quot; aria-hidden=&quot;true&quot;>' + initial + '</span>\'">';
  }

  function fetchJobs() {
    return fetch(JOBS_URL, { cache: "no-store" }).then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    });
  }

  function loadError(err) {
    // Opening the page with file:// blocks fetch under the browser's origin
    // rules, and the failure looks identical to a missing file. Say which.
    var isFile = location.protocol === "file:";
    console.error(
      "[TopLead] Could not load jobs.json:", err,
      isFile
        ? "\nThe page was opened directly from disk (file://), where fetch is blocked. Serve the folder over http - for example `node server.js`, then open http://localhost:3000/jobs.html"
        : "\nCheck that jobs.json sits next to this page and contains valid JSON."
    );
    return isFile;
  }

  /* ================================================================
     JOBS LIST PAGE
     ================================================================ */
  function initList() {
    var grid = document.getElementById("jobsGrid");
    if (!grid) return;

    var countEl   = document.getElementById("jobsCount");
    var emptyEl   = document.getElementById("jobsEmpty");
    var errorEl   = document.getElementById("jobsError");
    var searchEl  = document.getElementById("filterSearch");
    var indEl     = document.getElementById("filterIndustry");
    var locEl     = document.getElementById("filterLocation");
    var lvlEl     = document.getElementById("filterLevel");
    var adminBar  = document.getElementById("adminBar");
    var exportBtn = document.getElementById("adminExport");
    var resetBtn  = document.getElementById("adminReset");

    var allJobs = [];      // as loaded from disk
    var workingJobs = [];  // what admin edits; export writes this out
    var adminMode = new URLSearchParams(location.search).get("admin") === "1";

    function matches(job) {
      var q = (searchEl && searchEl.value || "").trim().toLowerCase();
      if (q && String(job.title || "").toLowerCase().indexOf(q) === -1) return false;
      if (indEl && indEl.value && indEl.value !== "*" && job.industry !== indEl.value) return false;
      if (locEl && locEl.value && locEl.value !== "*" && job.location !== locEl.value) return false;
      if (lvlEl && lvlEl.value && lvlEl.value !== "*" && job.level !== lvlEl.value) return false;
      return true;
    }

    function cardHTML(job, index) {
      var tags = (job.tags || []).map(function (tg) {
        return '<span class="job-tag">' + esc(tg) + "</span>";
      }).join("");

      var del = adminMode
        ? '<button type="button" class="job-del" data-id="' + esc(job.id) + '" aria-label="' +
          esc(t("jobs.admin.remove", "Xoá vị trí này")) + '">' +
          '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1L1 11"/></svg></button>'
        : "";

      return '' +
        '<article class="job-card" style="--i:' + index + '">' + del +
          '<div class="job-head">' +
            '<span class="job-logo">' + logoHTML(job) + "</span>" +
            '<span class="job-head-text">' +
              '<span class="job-company">' + esc(displayCompany(job)) + "</span>" +
              '<span class="job-location">' + esc(job.location) + "</span>" +
            "</span>" +
          "</div>" +
          '<h3 class="job-title">' + esc(job.title) + "</h3>" +
          '<p class="job-desc">' + esc(job.shortDescription) + "</p>" +
          '<div class="job-tags">' + tags + "</div>" +
          '<div class="job-meta">' +
            '<span class="job-salary">' + esc(job.salaryRange) + "</span>" +
            '<span class="job-level">' + esc(job.level) + "</span>" +
          "</div>" +
          '<div class="job-actions">' +
            '<a class="job-detail-link" href="job-detail.html?id=' + encodeURIComponent(job.id) + '">' +
              '<span data-i18n="jobs.detail">Xem chi tiết</span></a>' +
            '<a class="job-apply" href="contact.html">' +
              '<span data-i18n="jobs.apply">Ứng tuyển ngay</span></a>' +
          "</div>" +
        "</article>";
    }

    function render() {
      var visible = workingJobs.filter(matches);

      grid.innerHTML = visible.map(cardHTML).join("");
      if (countEl) {
        countEl.textContent = t("jobs.showing", "Hiển thị") + " " + visible.length + " " +
                              t("jobs.positions", "vị trí tuyển dụng");
      }
      if (emptyEl) emptyEl.hidden = visible.length !== 0;

      // The cards were just built, so their data-i18n spans have never been
      // through the translator. Re-run it for the strings inside them.
      if (typeof window.updateLanguage === "function") {
        window.updateLanguage(document.documentElement.lang || "vi");
      }

      if (adminMode) {
        Array.prototype.forEach.call(grid.querySelectorAll(".job-del"), function (btn) {
          btn.addEventListener("click", function () {
            var id = btn.getAttribute("data-id");
            workingJobs = workingJobs.filter(function (j) { return j.id !== id; });
            render();
          });
        });
      }
    }

    function initFilters() {
      [searchEl, indEl, locEl, lvlEl].forEach(function (el) {
        if (!el) return;
        el.addEventListener(el.tagName === "SELECT" ? "change" : "input", render);
      });
    }

    function initAdmin() {
      if (!adminMode || !adminBar) return;
      adminBar.hidden = false;
      document.body.classList.add("is-admin");

      if (exportBtn) {
        exportBtn.addEventListener("click", function () {
          var blob = new Blob([JSON.stringify(workingJobs, null, 2)], { type: "application/json" });
          var url = URL.createObjectURL(blob);
          var a = document.createElement("a");
          a.href = url;
          a.download = "jobs.json";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        });
      }
      if (resetBtn) {
        resetBtn.addEventListener("click", function () {
          workingJobs = allJobs.slice();
          render();
        });
      }
    }

    fetchJobs().then(function (data) {
      allJobs = Array.isArray(data) ? data : [];
      workingJobs = allJobs.slice();
      initFilters();
      initAdmin();
      render();
    }).catch(function (err) {
      loadError(err);
      if (errorEl) errorEl.hidden = false;
      if (countEl) countEl.textContent = "";
    });
  }

  /* ================================================================
     JOB DETAIL PAGE
     ================================================================ */
  function initDetail() {
    var root = document.getElementById("jobDetail");
    if (!root) return;

    var missingEl = document.getElementById("jobMissing");
    var id = new URLSearchParams(location.search).get("id");

    function list(items, cls) {
      if (!items || !items.length) return "";
      return '<ul class="' + cls + '">' + items.map(function (x) {
        return "<li>" + esc(x) + "</li>";
      }).join("") + "</ul>";
    }

    function show(job) {
      var company = displayCompany(job);
      var facts = [
        [t("jd.location", "Địa điểm"), job.location],
        [t("jd.level", "Cấp bậc"), job.level],
        [t("jd.type", "Hình thức"), job.employmentType],
        [t("jd.salary", "Mức lương"), job.salaryRange]
      ].map(function (f) {
        return '<div class="jd-fact"><span class="jd-fact-k">' + esc(f[0]) + "</span>" +
               '<span class="jd-fact-v">' + esc(f[1]) + "</span></div>";
      }).join("");

      root.innerHTML = '' +
        '<div class="jd-top">' +
          '<span class="job-logo jd-logo">' + logoHTML(job) + "</span>" +
          '<div class="jd-top-text">' +
            '<span class="jd-company">' + esc(company) + "</span>" +
            '<h1 class="jd-title">' + esc(job.title) + "</h1>" +
            '<div class="job-tags">' + (job.tags || []).map(function (tg) {
              return '<span class="job-tag">' + esc(tg) + "</span>";
            }).join("") + "</div>" +
          "</div>" +
        "</div>" +
        '<div class="jd-facts">' + facts + "</div>" +
        '<div class="jd-body">' +
          '<section class="jd-block"><h2>' + esc(t("jd.about", "Mô tả công việc")) + "</h2>" +
            "<p>" + esc(job.fullDescription) + "</p></section>" +
          '<section class="jd-block"><h2>' + esc(t("jd.resp", "Trách nhiệm")) + "</h2>" +
            list(job.responsibilities, "jd-list") + "</section>" +
          '<section class="jd-block"><h2>' + esc(t("jd.req", "Yêu cầu")) + "</h2>" +
            list(job.requirements, "jd-list") + "</section>" +
          '<section class="jd-block"><h2>' + esc(t("jd.ben", "Quyền lợi")) + "</h2>" +
            list(job.benefits, "jd-list") + "</section>" +
        "</div>" +
        '<div class="jd-cta">' +
          '<a class="job-apply jd-apply" href="contact.html"><span data-i18n="jobs.apply">Ứng tuyển ngay</span></a>' +
          '<a class="jd-back" href="jobs.html"><span data-i18n="jd.back">Quay lại danh sách</span></a>' +
        "</div>";

      if (typeof window.updateLanguage === "function") {
        window.updateLanguage(document.documentElement.lang || "vi");
      }
      // After the translator, never before: updateLanguage rewrites
      // document.title to the generic site title on every run, so setting the
      // job-specific title first would just be overwritten.
      document.title = job.title + " - " + company + " | TopLead Recruitment";
    }

    function notFound() {
      root.hidden = true;
      if (missingEl) missingEl.hidden = false;
    }

    if (!id) { notFound(); return; }

    fetchJobs().then(function (data) {
      var job = (Array.isArray(data) ? data : []).filter(function (j) { return j.id === id; })[0];
      if (!job) { notFound(); return; }
      show(job);
    }).catch(function (err) {
      loadError(err);
      notFound();
    });
  }

  function boot() { initList(); initDetail(); }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
