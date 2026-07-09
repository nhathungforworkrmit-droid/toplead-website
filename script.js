/* TopLead Website - JavaScript */

var currentLang = "vi";

var translations = {
  vi: {
    "nav.services": "Dịch vụ",
    "nav.approach": "Cách tiếp cận",
    "nav.jobs": "Việc làm",
    "nav.contact": "Liên hệ",
    "nav.login": "Đăng nhập",
    "hero.badge": "TopLead Recruitment",
    "hero.title1": "Tuyển Dụng",
    "hero.title2": "Chất Lượng Cao",
    "hero.stat1": "Ứng viên",
    "hero.stat2": "Doanh nghiệp",
    "hero.stat3": "Tỷ lệ thành công",
    "hero.cta1": "Xem vị trí tuyển dụng",
    "hero.cta2": "Liên hệ ngay",
    "founders.tag": "Đội ngũ sáng lập",
    "founders.title": "Những người sáng lập",
    "founders.f1.role": "CEO & Founder",
    "founders.f1.bio": "15+ năm kinh nghiệm trong ngành tuyển dụng cấp cao.",
    "founders.f2.role": "COO & Co-founder",
    "founders.f2.bio": "Chuyên gia về xây dựng đội ngũ và văn hóa công ty.",
    "founders.f3.role": "CTO & Co-founder",
    "founders.f3.bio": "Chuyên gia công nghệ với 10+ năm trong ngành IT.",
    "logos.label": "Đối tác tin cậy của các công ty hàng đầu",
    "value.title": "Những nhân sự giỏi luôn đến từ người bạn tin tưởng",
    "value.card1.title": "Mạng lưới chuyên gia",
    "value.card1.desc": "Kết nối với hơn 10,000 ứng viên chất lượng cao từ nhiều ngành nghề khác nhau.",
    "value.card2.title": "Tìm kiếm chủ động",
    "value.card2.desc": "Không chờ ứng viên ứng tuyển, chúng tôi chủ động tìm kiếm và tiếp cận nhân tài phù hợp.",
    "services.tag": "Dịch vụ",
    "services.title": "Giải pháp tuyển dụng toàn diện",
    "services.subtitle": "Phục vụ mọi nhu cầu nhân sự của doanh nghiệp",
    "services.s1.title": "Tìm kiếm nhân sự cấp cao",
    "services.s1.desc": "Tuyển dụng CEO, CFO, Director và các vị trí quản lý cao cấp với quy trình kín đáo và hiệu quả.",
    "services.s2.title": "Xây dựng đội ngũ",
    "services.s2.desc": "Giúp startup và doanh nghiệp đang phát triển xây dựng đội ngũ từ giai đoạn foundation.",
    "services.s3.title": "Tuyển dụng công nghệ",
    "services.s3.desc": "Chuyên tuyển Developer, Data Scientist, Product Manager cho các công ty công nghệ.",
    "pain.tag": "Thách thức",
    "pain.title": "Bạn đang gặp vấn đề nào?",
    "pain.p1.title": "Cần nhân sự gấp nhưng tuyển hoài không được",
    "pain.p1.desc": "Chúng tôi giúp bạn tiếp cận ứng viên phù hợp trong thời gian ngắn nhất.",
    "pain.p2.title": "Founder giỏi kỹ thuật nhưng không biết tuyển người",
    "pain.p2.desc": "Đội ngũ của chúng tôi hỗ trợ bạn xây dựng đội ngũ chuyên nghiệp.",
    "pain.p3.title": "Nhân sự cũ nghỉ, công việc bị đình trệ",
    "pain.p3.desc": "Quy trình handover nhanh chóng, giảm thiểu gián đoạn công việc.",
    "stats.title": "Bạn đang có đối tác tốt",
    "stats.s1.role": "Nhân sự cấp cao",
    "stats.s1.company": "cho TechCorp trong 12 tháng",
    "stats.s2.role": "Vị trí tuyển",
    "stats.s2.company": "cho VietRetail từ đầu năm",
    "stats.s3.role": "Nhân sự",
    "stats.s3.company": "cho BuildPro tại 14 chi nhánh",
    "stats.s4.role": "Vị trí Tech",
    "stats.s4.company": "cho LogiGroup trong 6 tháng",
    "jobs.tag": "Việc làm",
    "jobs.title": "Vị trí đang tuyển dụng",
    "jobs.subtitle": "Cơ hội nghề nghiệp hấp dẫn từ các doanh nghiệp hàng đầu",
    "jobs.apply": "Ứng tuyển ngay",
    "testimonials.tag": "Đánh giá",
    "testimonials.title": "Khách hàng nói gì về chúng tôi",
    "contact.tag": "Liên hệ",
    "contact.title": "Bắt đầu hợp tác",
    "contact.subtitle": "Để lại thông tin, chúng tôi sẽ liên hệ lại trong 24 giờ.",
    "contact.phone": "Điện thoại",
    "contact.address": "Địa chỉ",
    "footer.tagline": "Kết nối nhân tài với doanh nghiệp Việt Nam từ năm 2018.",
    "footer.services": "Dịch vụ",
    "footer.company": "Công ty",
    "footer.about": "Về chúng tôi",
    "footer.jobs": "Việc làm",
    "footer.contact": "Liên hệ",
    "footer.login": "Đăng nhập",
    "footer.connect": "Kết nối",
    "footer.rights": "Tất cả quyền được bảo lưu."
  },
  en: {
    "nav.services": "Services",
    "nav.approach": "Our Approach",
    "nav.jobs": "Jobs",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "hero.badge": "TopLead Recruitment",
    "hero.title1": "Executive",
    "hero.title2": "Recruitment",
    "hero.stat1": "Candidates",
    "hero.stat2": "Companies",
    "hero.stat3": "Success Rate",
    "hero.cta1": "View Open Positions",
    "hero.cta2": "Contact Us",
    "founders.tag": "Founding Team",
    "founders.title": "Our Founders",
    "founders.f1.role": "CEO & Founder",
    "founders.f1.bio": "15+ years of experience in executive recruitment.",
    "founders.f2.role": "COO & Co-founder",
    "founders.f2.bio": "Expert in team building and company culture.",
    "founders.f3.role": "CTO & Co-founder",
    "founders.f3.bio": "Tech expert with 10+ years in IT industry.",
    "logos.label": "Trusted by leading companies",
    "value.title": "Great hires always come from people you trust",
    "value.card1.title": "Expert Network",
    "value.card1.desc": "Connect with over 10,000 quality candidates from various industries.",
    "value.card2.title": "Proactive Search",
    "value.card2.desc": "We actively search and approach suitable talent.",
    "services.tag": "Services",
    "services.title": "Comprehensive Recruitment Solutions",
    "services.subtitle": "Serving all staffing needs of businesses",
    "services.s1.title": "Executive Search",
    "services.s1.desc": "Recruit CEO, CFO, Directors and senior management with confidential process.",
    "services.s2.title": "Team Buildout",
    "services.s2.desc": "Help startups build teams from foundation stage.",
    "services.s3.title": "Tech Hiring",
    "services.s3.desc": "Specialized recruitment for Developers, Data Scientists, Product Managers.",
    "pain.tag": "Challenges",
    "pain.title": "What challenge are you facing?",
    "pain.p1.title": "Need staff urgently but cannot hire anyone",
    "pain.p1.desc": "We help you reach suitable candidates in the shortest time.",
    "pain.p2.title": "Founder good at tech but does not know how to hire",
    "pain.p2.desc": "Our team supports you in building a professional team.",
    "pain.p3.title": "Old staff left, work got delayed",
    "pain.p3.desc": "Quick handover process, minimizing disruption.",
    "stats.title": "You have a good partner",
    "stats.s1.role": "Senior Positions",
    "stats.s1.company": "for TechCorp in 12 months",
    "stats.s2.role": "Positions Filled",
    "stats.s2.company": "for VietRetail this year",
    "stats.s3.role": "Staff",
    "stats.s3.company": "for BuildPro at 14 branches",
    "stats.s4.role": "Tech Positions",
    "stats.s4.company": "for LogiGroup in 6 months",
    "jobs.tag": "Jobs",
    "jobs.title": "Open Positions",
    "jobs.subtitle": "Exciting career opportunities from leading companies",
    "jobs.apply": "Apply Now",
    "testimonials.tag": "Reviews",
    "testimonials.title": "What Our Clients Say",
    "contact.tag": "Contact",
    "contact.title": "Start Your Partnership",
    "contact.subtitle": "Leave your info and we will get back to you within 24 hours.",
    "contact.phone": "Phone",
    "contact.address": "Address",
    "footer.tagline": "Connecting talent with Vietnamese businesses since 2018.",
    "footer.services": "Services",
    "footer.company": "Company",
    "footer.about": "About Us",
    "footer.jobs": "Jobs",
    "footer.contact": "Contact",
    "footer.login": "Login",
    "footer.connect": "Connect",
    "footer.rights": "All rights reserved."
  }
};

document.addEventListener("DOMContentLoaded", function() {
  // Language Switcher
  var langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      var lang = this.getAttribute("data-lang");
      if (lang === currentLang) return;
      currentLang = lang;
      langBtns.forEach(function(b) { b.classList.remove("active"); });
      this.classList.add("active");
      updateLanguage(lang);
      localStorage.setItem("toplead-lang", lang);
    });
  });

  var savedLang = localStorage.getItem("toplead-lang");
  if (savedLang) {
    currentLang = savedLang;
    langBtns.forEach(function(b) {
      if (b.getAttribute("data-lang") === savedLang) b.classList.add("active");
      else b.classList.remove("active");
    });
    updateLanguage(savedLang);
  }

  function updateLanguage(lang) {
    var t = translations[lang];
    var els = document.querySelectorAll("[data-i18n]");
    els.forEach(function(el) {
      var key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });
    document.documentElement.lang = lang;
    document.title = lang === "vi"
      ? "TopLead Recruitment - Tuyển dụng uy tín hàng đầu"
      : "TopLead Recruitment - Premier Executive Search";
  }

  // Navbar scroll
  var navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });

  // Mobile menu
  var mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  var navLinks = document.querySelector(".nav-links");
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function() {
      navLinks.classList.toggle("active");
      this.classList.toggle("active");
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
        navLinks.classList.remove("active");
        if (mobileMenuBtn) mobileMenuBtn.classList.remove("active");
      }
    });
  });

  // Scroll animations
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  [".value-card", ".service-card", ".job-card", ".testimonial-card", ".stats-card", ".founder-card"].forEach(function(sel) {
    document.querySelectorAll(sel).forEach(function(el) {
      el.classList.add("fade-in");
      observer.observe(el);
    });
  });

  // Form tabs
  var tabBtns = document.querySelectorAll(".tab-btn");
  var employerFields = document.querySelector(".employer-fields");
  var candidateFields = document.querySelector(".candidate-fields");

  tabBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      tabBtns.forEach(function(b) { b.classList.remove("active"); });
      this.classList.add("active");
      var tab = this.getAttribute("data-tab");
      if (tab === "employer") {
        if (employerFields) employerFields.style.display = "block";
        if (candidateFields) candidateFields.style.display = "none";
      } else {
        if (employerFields) employerFields.style.display = "none";
        if (candidateFields) candidateFields.style.display = "block";
      }
    });
  });

  // File upload
  var cvUpload = document.getElementById("cvUpload");
  var cvFileInput = document.getElementById("cvFile");
  var cvPreview = document.getElementById("cvPreview");
  var cvFileNameEl = document.getElementById("cvFileName");
  var removeCvBtn = document.getElementById("removeCv");

  if (cvUpload && cvFileInput) {
    cvUpload.addEventListener("click", function() { cvFileInput.click(); });
    cvFileInput.addEventListener("change", function() { handleFile(this.files); });

    cvUpload.addEventListener("dragover", function(e) { e.preventDefault(); this.classList.add("dragover"); });
    cvUpload.addEventListener("dragleave", function(e) { e.preventDefault(); this.classList.remove("dragover"); });
    cvUpload.addEventListener("drop", function(e) {
      e.preventDefault();
      this.classList.remove("dragover");
      handleFile(e.dataTransfer.files);
    });

    if (removeCvBtn) {
      removeCvBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        cvFileInput.value = "";
        cvPreview.style.display = "none";
        cvUpload.style.display = "block";
      });
    }
  }

  function handleFile(files) {
    if (files.length > 0) {
      var file = files[0];
      var allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (allowedTypes.indexOf(file.type) === -1) {
        alert(currentLang === "vi" ? "Vui lòng chọn file PDF, DOC, hoặc DOCX" : "Please select PDF, DOC, or DOCX file");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert(currentLang === "vi" ? "File quá lớn. Tối đa 5MB" : "File too large. Max 5MB");
        return;
      }
      cvFileNameEl.textContent = file.name;
      cvPreview.style.display = "flex";
      cvUpload.style.display = "none";
    }
  }

  // Contact form
  var contactForm = document.getElementById("contactForm");
  var formSuccess = document.getElementById("formSuccess");

  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      var data = {};
      new FormData(this).forEach(function(v, k) { data[k] = v; });
      var activeTab = document.querySelector(".tab-btn.active");
      data.type = activeTab ? activeTab.getAttribute("data-tab") : "candidate";

      if (!validateForm(data)) return;

      var submitBtn = this.querySelector(".btn-submit");
      var origText = submitBtn.innerHTML;
      submitBtn.innerHTML = "<span>" + (currentLang === "vi" ? "Đang gửi..." : "Submitting...") + "</span>";
      submitBtn.disabled = true;

      setTimeout(function() {
        contactForm.style.display = "none";
        formSuccess.style.display = "block";
        contactForm.reset();
        if (cvPreview) cvPreview.style.display = "none";
        if (cvUpload) cvUpload.style.display = "block";
        submitBtn.innerHTML = origText;
        submitBtn.disabled = false;
        setTimeout(function() {
          formSuccess.style.display = "none";
          contactForm.style.display = "block";
        }, 5000);
      }, 1500);
    });
  }

  function validateForm(data) {
    if (!data.name || data.name.trim().length < 2) {
      showError("name", currentLang === "vi" ? "Nhập họ tên (ít nhất 2 ký tự)" : "Enter name (at least 2 chars)");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      showError("email", currentLang === "vi" ? "Email không hợp lệ" : "Invalid email");
      return false;
    }
    if (!data.phone || data.phone.trim().length < 10) {
      showError("phone", currentLang === "vi" ? "Nhập số điện thoại" : "Enter phone number");
      return false;
    }
    if (data.type === "employer") {
      if (!data.company || !data.company.trim()) {
        showError("company", currentLang === "vi" ? "Nhập tên công ty" : "Enter company name");
        return false;
      }
      if (!data.position || !data.position.trim()) {
        showError("position", currentLang === "vi" ? "Nhập vị trí cần tuyển" : "Enter position to hire");
        return false;
      }
      if (!data.quantity || data.quantity < 1) {
        showError("quantity", currentLang === "vi" ? "Nhập số lượng" : "Enter quantity");
        return false;
      }
    }
    return true;
  }

  function showError(fieldId, msg) {
    var field = document.getElementById(fieldId);
    if (!field) return;
    field.classList.add("error");
    var parent = field.parentNode;
    var err = parent.querySelector(".error-msg");
    if (!err) {
      err = document.createElement("div");
      err.className = "error-msg";
      err.style.cssText = "color:#ff6b6b;font-size:0.8rem;margin-top:4px;";
      parent.appendChild(err);
    }
    err.textContent = msg;
    field.addEventListener("input", function handler() {
      field.classList.remove("error");
      if (err.parentNode) err.remove();
      field.removeEventListener("input", handler);
    });
    field.focus();
  }

  // Counter animation
  var statsSection = document.querySelector(".stats");
  if (statsSection) {
    var statsObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".stats-number").forEach(function(el) {
            var n = parseInt(el.textContent);
            if (!isNaN(n)) animateCounter(el, n);
          });
          statsObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    statsObs.observe(statsSection);
  }

  function animateCounter(el, target) {
    var start = 0, inc = target / 125;
    (function update() {
      start += inc;
      el.textContent = Math.floor(Math.min(start, target));
      if (start < target) requestAnimationFrame(update);
    })();
  }

  // Carousel dots
  var dots = document.querySelectorAll(".carousel-dots .dot");
  var slide = 0;
  setInterval(function() {
    slide = (slide + 1) % 3;
    dots.forEach(function(d, i) {
      if (i === slide) d.classList.add("active");
      else d.classList.remove("active");
    });
  }, 5000);

  console.log("TopLead Website loaded");
});
