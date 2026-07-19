/* ============================================================
   TopLead — Shared interactive background (homepage only)
   - One persistent Three.js particle field behind all sections
   - Palette shifts based on the section currently in view
   - Reacts to the cursor (parallax) with slow idle drift
   - Honors prefers-reduced-motion; pauses when the tab is hidden
   ============================================================ */
(function () {
  "use strict";

  var canvas = document.getElementById("bg-canvas");
  if (!canvas) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // --- Section palette (matches the real brand copper/brown tones) -----------
  // key = a class present on the <section>; value = particle color (hex).
  var SECTION_COLORS = {
    hero:       0xC77B3C,
    showcase:   0xD0843A,
    partner:    0xC79A4B,
    philosophy: 0x9A5A2C,
    "cine-strip": 0xD0843A,
    _default:   0x8B5A32
  };

  // Graceful fallback: if Three.js failed to load (offline/CDN blocked),
  // do nothing — the sections keep their own solid/gradient backgrounds.
  if (typeof THREE === "undefined") {
    // Keep the canvas (its CSS dark base) as a static fallback background.
    return;
  }

  var renderer, scene, camera, points, material;
  var targetColor = new THREE.Color(SECTION_COLORS.hero);
  var currentColor = new THREE.Color(SECTION_COLORS.hero);
  var pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  var running = true;
  var scrollProg = 0;       // 0 (top) .. 1 (bottom) — drives the field's evolution
  var scrollTick = false;
  var DPR = Math.min(window.devicePixelRatio || 1, 2);

  function init() {
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: false, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(DPR);
    renderer.setClearColor(0x0f0c0a, 1); // dark base shown through transparent sections
    renderer.setSize(window.innerWidth, window.innerHeight, false);

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0f0c0a, 0.055);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 18;

    // Particle field — count scales with screen size, capped for perf.
    var count = Math.min(1600, Math.floor((window.innerWidth * window.innerHeight) / 1400));
    if (window.innerWidth < 700) count = Math.min(count, 800);
    var positions = new Float32Array(count * 3);
    var spread = 34;
    for (var i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
    }
    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    material = new THREE.PointsMaterial({
      color: currentColor,
      size: 0.14,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    points = new THREE.Points(geometry, material);
    scene.add(points);

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    if (!reduceMotion) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }
    document.addEventListener("visibilitychange", function () {
      running = !document.hidden;
      if (running) requestAnimationFrame(render);
    });

    observeSections();
    requestAnimationFrame(render);
  }

  function onResize() {
    if (!renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight, false);
  }

  function onPointerMove(e) {
    // Normalised -1..1; drives a gentle camera parallax.
    pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
  }

  // Whole-page scroll progress -> drives the field's depth/rotation and a CSS var.
  function onScroll() {
    if (scrollTick) return;
    scrollTick = true;
    requestAnimationFrame(function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      scrollProg = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      document.documentElement.style.setProperty("--scroll", scrollProg.toFixed(3));
      scrollTick = false;
      if (reduceMotion && renderer) renderer.render(scene, camera);
    });
  }

  // --- Section-aware palette: whichever section is most in view sets color ---
  function colorForSection(el) {
    for (var key in SECTION_COLORS) {
      if (key !== "_default" && el.classList.contains(key)) return SECTION_COLORS[key];
    }
    return SECTION_COLORS._default;
  }

  function observeSections() {
    var targets = document.querySelectorAll("section, .footer");
    if (!("IntersectionObserver" in window) || !targets.length) return;
    var io = new IntersectionObserver(function (entries) {
      // Pick the most-visible intersecting section.
      var best = null, bestRatio = 0;
      entries.forEach(function (en) {
        if (en.isIntersecting && en.intersectionRatio > bestRatio) {
          bestRatio = en.intersectionRatio;
          best = en.target;
        }
      });
      if (best) targetColor.set(colorForSection(best));
    }, { threshold: [0.25, 0.5, 0.75] });
    targets.forEach(function (t) { io.observe(t); });
  }

  var t = 0;
  function render() {
    if (!running) return;
    t += 0.0016;

    // Ease the palette toward the current section's color.
    currentColor.lerp(targetColor, 0.05);
    material.color.copy(currentColor);

    if (!reduceMotion) {
      // Idle drift + scroll-driven evolution (field turns and deepens as you descend).
      points.rotation.y = t * 0.6 + scrollProg * 0.9;
      points.rotation.x = Math.sin(t * 0.4) * 0.08;
      // Cursor parallax (eased) + scroll pulls the camera deeper into the field.
      pointer.x += (pointer.tx - pointer.x) * 0.04;
      pointer.y += (pointer.ty - pointer.y) * 0.04;
      camera.position.x += (pointer.x * 3 - camera.position.x) * 0.05;
      camera.position.y += (-pointer.y * 2 - camera.position.y) * 0.05;
      camera.position.z += ((18 - scrollProg * 6) - camera.position.z) * 0.05;
      camera.lookAt(0, 0, 0);
      requestAnimationFrame(render);
    } else {
      // Reduced motion: render one settled frame, no animation loop.
      renderer.render(scene, camera);
      return;
    }

    renderer.render(scene, camera);
  }

  // --- Cinematic strip: scroll-speed parallax on the video --------------------
  function initCineParallax() {
    var video = document.querySelector(".cine-strip .cine-video");
    var strip = document.querySelector(".cine-strip");
    if (!video || !strip || reduceMotion) return;
    var ticking = false;
    function update() {
      var rect = strip.getBoundingClientRect();
      // How far the strip has travelled through the viewport (-1..1).
      var progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      video.style.transform = "translate3d(0, " + (progress * 14).toFixed(2) + "%, 0) scale(1.18)";
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  // --- Magnetic hero buttons (pill CTAs attract toward the cursor) ------------
  function initMagnetic() {
    if (reduceMotion) return;
    var btns = document.querySelectorAll(".hero .btn-primary");
    btns.forEach(function (btn) {
      btn.addEventListener("pointermove", function (e) {
        var r = btn.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top - r.height / 2;
        btn.style.transform = "translate(" + (x * 0.25) + "px, " + (y * 0.35) + "px)";
      });
      btn.addEventListener("pointerleave", function () {
        btn.style.transform = "translate(0,0)";
      });
    });
  }

  function start() {
    try { init(); } catch (err) {
      // Any WebGL failure -> keep the canvas's static dark base; site stays functional.
    }
    initCineParallax();
    initMagnetic();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
