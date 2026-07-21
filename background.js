/* ============================================================
   TopLead - Shared interactive background engine
   One particle system, two modes:
   1. Page mode  (#bg-canvas)    - a fixed field behind every homepage section
   2. Panel mode (auto-injected) - the same field scoped to a single band, used
      for the inner-page heroes and the CTA strip above the footer, so every
      page opens and closes with the landing page's look

   The field is made of two populations:
   - nodes: fewer, brighter particles that link up into chains when they drift
     close, and push apart when they collide
   - dust:  many small particles travelling alone, each at its own speed, each
     breathing between bright and dim on its own cycle

   Both react to the cursor: a steady pull while it moves over the field, and a
   hard gather on click. Honors prefers-reduced-motion; pauses when the tab is
   hidden and, for panels, whenever the band is scrolled out of view.
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var DPR = Math.min(window.devicePixelRatio || 1, 2);

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

  // Bands on the inner pages that get their own scoped field. The canvas is
  // injected by JS, so no page markup has to carry it.
  var PANELS = [
    { selector: ".page-hero",          color: SECTION_COLORS.hero, dim: 0.55 },
    { selector: ".post-hero--dark",    color: SECTION_COLORS.hero },
    { selector: ".cv-band",            color: SECTION_COLORS.partner, dim: 0.3, fixed: true },
    { selector: ".cta-banner",         color: SECTION_COLORS.showcase },
    { selector: ".newsletter-section", color: SECTION_COLORS.showcase },
    { selector: ".post-cta-box",       color: SECTION_COLORS.showcase }
  ];

  // World tuning.
  var LINK_DIST  = 4.2;   // nodes closer than this draw a connecting line
  var HIT_DIST   = 1.2;   // ...and closer than this push each other apart
  var PULL_RANGE = 10;    // how far the cursor's influence reaches
  var CAM_Z      = 18;
  var TIME_STEP  = 0.0011;  // master clock - lower is slower and more composed
  var TRAIL_LEN  = 60;      // how many frames of travel the tail represents
  var TRAIL_MAX  = 1.8;     // ...but never longer than this, in world units
  var TRAIL_MIN_V = 0.006;  // below this speed a particle draws no tail at all,
  var TRAIL_FULL_V = 0.022; // and at this speed the tail is at full strength.
                            // Only the quick ones streak, so the field reads as
                            // a few comets among still points, not as rain.

  // Graceful fallback: if Three.js failed to load (offline/CDN blocked),
  // do nothing - the sections keep their own solid/gradient backgrounds.
  if (typeof THREE === "undefined") return;

  // A pale gold mixed into a share of the particles, so the field reads as a
  // warm metal rather than one flat colour.
  var ACCENT = new THREE.Color(0xF0D2A0);

  function rand(a, b) { return a + Math.random() * (b - a); }

  // The field is sized to what the camera actually sees, so particles are not
  // wasted off-screen and the density on screen is the density we asked for.
  // Nodes get a thinner slab than dust: they have to stay close enough in depth
  // to find each other and link up.
  function extentsFor(aspect) {
    var halfH = Math.tan(Math.PI / 6) * CAM_Z * 1.12;
    return { x: halfH * Math.max(aspect, 0.6), y: halfH, z: 6, nodeZ: 3.2 };
  }

  // A soft round sprite - without it, WebGL points render as hard squares.
  var _sprite = null;
  function sprite() {
    if (_sprite) return _sprite;
    var c = document.createElement("canvas");
    c.width = c.height = 64;
    var g = c.getContext("2d");
    var grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grd.addColorStop(0, "rgba(255,255,255,1)");
    grd.addColorStop(0.3, "rgba(255,255,255,0.5)");
    grd.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = grd;
    g.fillRect(0, 0, 64, 64);
    _sprite = new THREE.CanvasTexture(c);
    return _sprite;
  }

  /* ==========================================================================
     The field itself
     ========================================================================== */
  function makeField(canvas, opts) {
    var renderer = new THREE.WebGLRenderer({
      canvas: canvas, antialias: false, alpha: true, powerPreference: "high-performance"
    });
    renderer.setPixelRatio(DPR);
    renderer.setClearColor(opts.clearColor, opts.clearAlpha);
    renderer.setSize(opts.width, opts.height, false);

    var scene = new THREE.Scene();
    if (opts.fog) scene.fog = new THREE.FogExp2(0x0f0c0a, 0.055);

    var camera = new THREE.PerspectiveCamera(60, opts.width / opts.height, 0.1, 100);
    camera.position.z = CAM_Z;
    var ext = extentsFor(opts.width / opts.height);

    // Everything lives in one group so the whole field can drift as a unit
    // while individual particles still move on their own.
    var group = new THREE.Group();
    scene.add(group);

    // --- population builder ---------------------------------------------------
    // home[]  the position a particle drifts back to, so the field re-spreads
    //         after the cursor has gathered it
    // spd[]   per-particle speed multiplier: some race, some barely move
    // ph[]    phase + rate of its own brightness cycle
    function makePopulation(count, size, depth) {
      var p = {
        count: count,
        pos:  new Float32Array(count * 3),
        home: new Float32Array(count * 3),
        vel:  new Float32Array(count * 3),
        col:  new Float32Array(count * 3),
        spd:  new Float32Array(count),
        ph:   new Float32Array(count),
        rate: new Float32Array(count),
        tint: new Float32Array(count)
      };
      for (var i = 0; i < count; i++) {
        var x = rand(-ext.x, ext.x), y = rand(-ext.y, ext.y), z = rand(-depth, depth);
        p.pos[i * 3] = p.home[i * 3] = x;
        p.pos[i * 3 + 1] = p.home[i * 3 + 1] = y;
        p.pos[i * 3 + 2] = p.home[i * 3 + 2] = z;
        // A wide speed spread is what makes the field feel alive rather than
        // like one sheet of stars sliding past.
        p.spd[i]  = rand(0.25, 1.9);
        p.vel[i * 3]     = rand(-1, 1) * 0.0075 * p.spd[i];
        p.vel[i * 3 + 1] = rand(-1, 1) * 0.0075 * p.spd[i];
        p.vel[i * 3 + 2] = rand(-1, 1) * 0.0075 * p.spd[i];
        p.ph[i]   = rand(0, Math.PI * 2);
        p.rate[i] = rand(0.25, 1.1);
        // Most particles stay copper; a minority runs pale gold.
        p.tint[i] = Math.random() < 0.28 ? rand(0.35, 0.95) : rand(0, 0.18);
      }
      var geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(p.pos, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(p.col, 3));
      p.geo = geo;
      p.mat = new THREE.PointsMaterial({
        size: size,
        map: sprite(),            // soft round dot instead of a hard square
        vertexColors: true,       // per-particle brightness lives in the colors
        transparent: true,
        opacity: opts.opacity,
        depthWrite: false,
        depthTest: false,      // nothing clears the depth buffer now; additive
                               // blending makes draw order irrelevant anyway
        blending: opts.blending || THREE.AdditiveBlending,
        sizeAttenuation: true
      });
      p.obj = new THREE.Points(geo, p.mat);
      group.add(p.obj);

      // --- motion trail -------------------------------------------------------
      // One short line per particle, drawn backwards along its own velocity:
      // bright at the head, transparent at the tail. Length follows speed, so
      // the quick ones streak and the slow ones stay near-still points. Drawing
      // the tail explicitly (rather than letting frames pile up on the canvas)
      // keeps slow particles from blooming into white blobs where they linger.
      p.trailPos = new Float32Array(count * 6);
      p.trailCol = new Float32Array(count * 6);
      var tg = new THREE.BufferGeometry();
      tg.setAttribute("position", new THREE.BufferAttribute(p.trailPos, 3));
      tg.setAttribute("color", new THREE.BufferAttribute(p.trailCol, 3));
      p.trailGeo = tg;
      p.trailObj = new THREE.LineSegments(tg, new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.3,
        depthWrite: false,
        depthTest: false,
        blending: opts.blending || THREE.AdditiveBlending
      }));
      group.add(p.trailObj);
      return p;
    }

    var nodes = makePopulation(opts.nodeCount, opts.nodeSize, ext.nodeZ);
    var dust  = makePopulation(opts.dustCount, opts.dustSize, ext.z);

    // --- links between nearby nodes ------------------------------------------
    var maxLinks = opts.nodeCount * 8;
    var linkPos = new Float32Array(maxLinks * 6);   // 2 vertices per link
    var linkCol = new Float32Array(maxLinks * 6);
    var linkGeo = new THREE.BufferGeometry();
    linkGeo.setAttribute("position", new THREE.BufferAttribute(linkPos, 3));
    linkGeo.setAttribute("color", new THREE.BufferAttribute(linkCol, 3));
    var linkObj = new THREE.LineSegments(linkGeo, new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      depthTest: false,
      blending: opts.blending || THREE.AdditiveBlending
    }));
    group.add(linkObj);

    return {
      renderer: renderer, scene: scene, camera: camera, group: group, ext: ext,
      nodes: nodes, dust: dust,
      linkGeo: linkGeo, linkPos: linkPos, linkCol: linkCol, maxLinks: maxLinks,
      draw: function () { renderer.render(scene, camera); },
      wipe: function () { renderer.clear(true, true, true); }
    };
  }

  /* ==========================================================================
     Simulation
     ========================================================================== */

  // Where the cursor sits in the field's own coordinates. The group drifts, so
  // the pointer has to be pushed through the same transform or the particles
  // would gather next to the cursor instead of under it.
  var _v = new THREE.Vector3();
  function pointerToLocal(f, ndcX, ndcY, out) {
    _v.set(ndcX, ndcY, 0.5).unproject(f.camera);
    _v.sub(f.camera.position).normalize();
    var dist = -f.camera.position.z / _v.z;
    out.copy(f.camera.position).add(_v.multiplyScalar(dist));
    f.group.updateMatrixWorld();
    f.group.worldToLocal(out);
    return out;
  }

  function stepPopulation(p, st, base, isNode, ext) {
    var m = st.mouse, pull = st.pull, i, ix;
    var bx = ext.x, by = ext.y, bz = isNode ? ext.nodeZ : ext.z;
    for (i = 0; i < p.count; i++) {
      ix = i * 3;
      var x = p.pos[ix], y = p.pos[ix + 1], z = p.pos[ix + 2];

      // Cursor pull: stronger the closer you are, and much stronger right
      // after a click, which is what makes the field bunch up at the click.
      if (pull > 0.001) {
        var dx = m.x - x, dy = m.y - y, dz = m.z - z;
        var d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < PULL_RANGE * PULL_RANGE) {
          var d = Math.sqrt(d2) || 0.001;
          var falloff = 1 - d / PULL_RANGE;
          var k = 0.0035 * pull * falloff * falloff * (isNode ? 1.25 : 1);
          p.vel[ix]     += (dx / d) * k;
          p.vel[ix + 1] += (dy / d) * k;
          p.vel[ix + 2] += (dz / d) * k;
        }
      }

      // A very weak spring home, so a gathered field spreads back out again
      // over a few seconds instead of staying clumped.
      p.vel[ix]     += (p.home[ix] - x) * 0.00022;
      p.vel[ix + 1] += (p.home[ix + 1] - y) * 0.00022;
      p.vel[ix + 2] += (p.home[ix + 2] - z) * 0.00022;

      p.vel[ix] *= 0.991; p.vel[ix + 1] *= 0.991; p.vel[ix + 2] *= 0.991;

      x += p.vel[ix]; y += p.vel[ix + 1]; z += p.vel[ix + 2];

      // Bounce off the walls of the box so density stays even.
      if (x >  bx) { x =  bx; p.vel[ix]     = -p.vel[ix] * 0.7; }
      if (x < -bx) { x = -bx; p.vel[ix]     = -p.vel[ix] * 0.7; }
      if (y >  by) { y =  by; p.vel[ix + 1] = -p.vel[ix + 1] * 0.7; }
      if (y < -by) { y = -by; p.vel[ix + 1] = -p.vel[ix + 1] * 0.7; }
      if (z >  bz) { z =  bz; p.vel[ix + 2] = -p.vel[ix + 2] * 0.7; }
      if (z < -bz) { z = -bz; p.vel[ix + 2] = -p.vel[ix + 2] * 0.7; }

      p.pos[ix] = x; p.pos[ix + 1] = y; p.pos[ix + 2] = z;

      // Own brightness cycle: each particle glows and dims on its own clock.
      var b = 0.5 + 0.7 * (0.5 + 0.5 * Math.sin(st.t * p.rate[i] * 2.2 + p.ph[i]));
      if (isNode) b = 0.85 + b * 0.75;
      // ...and its own place on the copper-to-gold ramp.
      var w = p.tint[i];
      var cr = (base.r + (ACCENT.r - base.r) * w) * b;
      var cg = (base.g + (ACCENT.g - base.g) * w) * b;
      var cb = (base.b + (ACCENT.b - base.b) * w) * b;
      p.col[ix] = cr; p.col[ix + 1] = cg; p.col[ix + 2] = cb;

      // Trail: from the head backwards along the velocity, capped so a cursor
      // burst streaks dramatically without turning into a full-screen slash.
      var vx = p.vel[ix], vy = p.vel[ix + 1], vz = p.vel[ix + 2];
      var v = Math.sqrt(vx * vx + vy * vy + vz * vz);
      var tw = (v - TRAIL_MIN_V) / (TRAIL_FULL_V - TRAIL_MIN_V);
      tw = tw < 0 ? 0 : (tw > 1 ? 1 : tw);
      var len = v * TRAIL_LEN;
      var s = len > TRAIL_MAX ? TRAIL_MAX / len : 1;
      var o = i * 6;
      p.trailPos[o]     = x;  p.trailPos[o + 1] = y;  p.trailPos[o + 2] = z;
      p.trailPos[o + 3] = x - vx * TRAIL_LEN * s;
      p.trailPos[o + 4] = y - vy * TRAIL_LEN * s;
      p.trailPos[o + 5] = z - vz * TRAIL_LEN * s;
      p.trailCol[o] = cr * tw; p.trailCol[o + 1] = cg * tw; p.trailCol[o + 2] = cb * tw;
      p.trailCol[o + 3] = 0; p.trailCol[o + 4] = 0; p.trailCol[o + 5] = 0;
    }
    p.geo.attributes.position.needsUpdate = true;
    p.geo.attributes.color.needsUpdate = true;
    p.trailGeo.attributes.position.needsUpdate = true;
    p.trailGeo.attributes.color.needsUpdate = true;
  }

  // Nodes that drift close link up; nodes that get too close bounce apart.
  function stepLinks(f, base) {
    var n = f.nodes, pos = n.pos, vel = n.vel;
    var lp = f.linkPos, lc = f.linkCol;
    var count = n.count, links = 0, i, j;

    for (i = 0; i < count; i++) {
      var ix = i * 3, xi = pos[ix], yi = pos[ix + 1], zi = pos[ix + 2];
      for (j = i + 1; j < count; j++) {
        var jx = j * 3;
        var dx = pos[jx] - xi, dy = pos[jx + 1] - yi, dz = pos[jx + 2] - zi;
        var d2 = dx * dx + dy * dy + dz * dz;
        if (d2 > LINK_DIST * LINK_DIST) continue;

        var d = Math.sqrt(d2) || 0.001;

        // Collision: closer than HIT_DIST and they shove each other apart.
        if (d < HIT_DIST) {
          var push = (HIT_DIST - d) * 0.010;
          var nx = dx / d, ny = dy / d, nz = dz / d;
          vel[ix] -= nx * push; vel[ix + 1] -= ny * push; vel[ix + 2] -= nz * push;
          vel[jx] += nx * push; vel[jx + 1] += ny * push; vel[jx + 2] += nz * push;
        }

        if (links >= f.maxLinks) continue;

        // The line fades out as the pair drifts apart, so chains form and
        // dissolve instead of popping in and out.
        var a = (1 - d / LINK_DIST) * 0.85;
        var o = links * 6;
        lp[o]     = xi;       lp[o + 1] = yi;           lp[o + 2] = zi;
        lp[o + 3] = pos[jx];  lp[o + 4] = pos[jx + 1];  lp[o + 5] = pos[jx + 2];
        lc[o]     = base.r * a; lc[o + 1] = base.g * a; lc[o + 2] = base.b * a;
        lc[o + 3] = base.r * a; lc[o + 4] = base.g * a; lc[o + 5] = base.b * a;
        links++;
      }
    }

    f.linkGeo.setDrawRange(0, links * 2);
    f.linkGeo.attributes.position.needsUpdate = true;
    f.linkGeo.attributes.color.needsUpdate = true;
  }

  function stepField(f, st, base) {
    stepPopulation(f.nodes, st, base, true, f.ext);
    stepPopulation(f.dust, st, base, false, f.ext);
    stepLinks(f, base);
  }

  // Drift the whole field and move the camera through it. `prog` 0..1 keeps the
  // field evolving as the page scrolls; `ptr` is the eased cursor position.
  function driveCamera(f, ptr, prog, t) {
    // A sway rather than a full spin: the field is now sized to the frame, so
    // spinning it would swing particles out of view.
    f.group.rotation.y = Math.sin(t * 0.5) * 0.14 + prog * 0.22;
    f.group.rotation.x = Math.sin(t * 0.31) * 0.05;
    // Gentle camera parallax. This shifts the entire field, so it is the single
    // biggest source of "the background chases my mouse" - keep it small.
    ptr.x += (ptr.tx - ptr.x) * 0.02;
    ptr.y += (ptr.ty - ptr.y) * 0.02;
    f.camera.position.x += (ptr.x * 1.3 - f.camera.position.x) * 0.025;
    f.camera.position.y += (-ptr.y * 0.9 - f.camera.position.y) * 0.025;
    f.camera.position.z += ((CAM_Z - prog * 5) - f.camera.position.z) * 0.03;
    f.camera.lookAt(0, 0, 0);
  }

  // Shared cursor state for one field: NDC position, how hard it is pulling,
  // and the click burst that decays back to nothing.
  function makeCursor() {
    return { ndcX: 0, ndcY: 0, over: false, burst: 0, pull: 0, local: new THREE.Vector3() };
  }

  function cursorPull(cur) {
    // Steady pull only while the cursor is over the field; a click adds a
    // short, much stronger gather on top. Both are eased in slowly - reacting
    // instantly to the cursor made the whole field twitch and read as noise.
    var want = (cur.over ? 0.16 : 0) + cur.burst * 1.8;
    cur.pull += (want - cur.pull) * 0.045;
    cur.burst *= 0.972;
    if (cur.burst < 0.002) cur.burst = 0;
    return cur.pull;
  }

  // Density: particles per pixel, so every band reads at the same weight.
  function densityFor(w, h, cap) {
    var n = Math.floor((w * h) / 480);
    if (window.innerWidth < 700) n = Math.floor(n * 0.5);
    return Math.max(160, Math.min(cap, n));
  }
  // Node count is what decides whether chains form: too few and they never meet.
  function nodesFor(w, h, cap) {
    var n = Math.floor((w * h) / 5200);
    if (window.innerWidth < 700) n = Math.floor(n * 0.6);
    return Math.max(45, Math.min(cap, n));
  }

  /* ==========================================================================
     Page mode - homepage only: one field behind everything, palette follows
     whichever section is in view.
     ========================================================================== */
  function initPageField(canvas) {
    var W = window.innerWidth, H = window.innerHeight;
    var targetColor = new THREE.Color(SECTION_COLORS.hero);
    var base = new THREE.Color(SECTION_COLORS.hero);
    var pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    var cur = makeCursor();
    var running = true, scrollProg = 0, scrollTick = false, t = 0;

    var f = makeField(canvas, {
      width: W, height: H,
      dustCount: densityFor(W, H, 4200), dustSize: 0.20,
      nodeCount: nodesFor(W, H, 190),    nodeSize: 0.46,
      clearColor: 0x0f0c0a, clearAlpha: 1,  // dark base shown through transparent sections
      fog: true, opacity: 1
    });

    function onResize() {
      f.camera.aspect = window.innerWidth / window.innerHeight;
      f.camera.updateProjectionMatrix();
      f.renderer.setSize(window.innerWidth, window.innerHeight, false);
      f.wipe();
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
      });
    }

    function onPointerMove(e) {
      pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
      cur.ndcX = pointer.tx;
      cur.ndcY = -pointer.ty;
      cur.over = true;
    }

    // Section-aware palette: whichever section is most in view sets the color.
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

    function render() {
      if (!running) return;
      t += TIME_STEP;
      base.lerp(targetColor, 0.05);
      driveCamera(f, pointer, scrollProg, t);
      stepField(f, {
        t: t,
        pull: cursorPull(cur),
        mouse: pointerToLocal(f, cur.ndcX, cur.ndcY, cur.local)
      }, base);
      f.draw();
      requestAnimationFrame(render);
    }

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    observeSections();

    if (reduceMotion) {
      // One settled frame, no loop and no cursor reaction.
      stepField(f, { t: 0, pull: 0, mouse: cur.local.set(0, 0, 0) }, base);
      f.draw();
      return;
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", function (e) {
      onPointerMove(e);
      cur.burst = 1;              // gather hard at the click
    }, { passive: true });
    document.addEventListener("visibilitychange", function () {
      running = !document.hidden;
      if (running) requestAnimationFrame(render);
    });
    requestAnimationFrame(render);
  }

  /* ==========================================================================
     Panel mode - inner pages: the same field, sized to one band. The canvas is
     transparent, so the band's own gradient stays as the no-WebGL fallback.
     ========================================================================== */
  function initPanel(el, color, light, dim, fixed) {
    // A band can run many screens tall. Sizing the canvas to all of it spreads
    // the field so thin it disappears and allocates an enormous buffer, so a
    // fixed band renders one viewport's worth and lets the page scroll past it.
    var w = fixed ? window.innerWidth : el.clientWidth;
    var h = fixed ? window.innerHeight : el.clientHeight;
    if (!w || !h) return;

    var canvas = document.createElement("canvas");
    canvas.className = "fx-panel";
    canvas.setAttribute("aria-hidden", "true");
    el.appendChild(canvas);

    var f;
    try {
      f = makeField(canvas, {
        width: w, height: h,
        // `dim` thins the field for bands that carry a drawing of their own,
        // so the particles stay atmosphere instead of competing with it.
        dustCount: Math.round(densityFor(w, h, 2800) * (dim || 1)),
        dustSize: 0.22,
        nodeCount: Math.round(nodesFor(w, h, 165) * (dim || 1)),
        nodeSize: 0.48,
        clearColor: 0x000000, clearAlpha: 0,  // band keeps its own gradient underneath
        fog: false, opacity: (light ? 0.5 : 1) * (dim ? 0.55 : 1),
        // Additive light is invisible on a pale ground, so panels drawn on the
        // page's own cream paper composite normally instead.
        blending: light ? THREE.NormalBlending : THREE.AdditiveBlending
      });
    } catch (err) {
      canvas.remove();  // WebGL unavailable - leave the band exactly as it was
      return;
    }

    var base = new THREE.Color(color);
    var pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    var cur = makeCursor();
    var running = false, visible = false;
    var t = Math.random() * 20;  // desync bands so they don't drift in lockstep

    // How far the band has travelled through the viewport: 0 (just below) .. 1 (just above).
    function progress() {
      var r = el.getBoundingClientRect();
      var vh = window.innerHeight || 1;
      return Math.min(Math.max((vh - r.top) / (vh + r.height), 0), 1);
    }

    function frame() {
      if (!running) return;
      t += TIME_STEP;
      driveCamera(f, pointer, progress(), t);
      stepField(f, {
        t: t,
        pull: cursorPull(cur),
        mouse: pointerToLocal(f, cur.ndcX, cur.ndcY, cur.local)
      }, base);
      f.draw();
      requestAnimationFrame(frame);
    }

    function start() {
      if (running || reduceMotion) return;
      running = true;
      requestAnimationFrame(frame);
    }
    function stop() { running = false; }

    function onResize() {
      w = fixed ? window.innerWidth : el.clientWidth;
      h = fixed ? window.innerHeight : el.clientHeight;
      if (!w || !h) return;
      f.camera.aspect = w / h;
      f.camera.updateProjectionMatrix();
      f.renderer.setSize(w, h, false);
      f.wipe();
      if (!running) f.draw();
    }

    // Track the cursor against this band, so each field reacts to the pointer
    // only while it is actually over it.
    function onPointerMove(e) {
      var r = el.getBoundingClientRect();
      var nx = (e.clientX - r.left) / r.width;
      var ny = (e.clientY - r.top) / r.height;
      pointer.tx = nx * 2 - 1;
      pointer.ty = ny * 2 - 1;
      cur.ndcX = pointer.tx;
      cur.ndcY = -pointer.ty;
      cur.over = nx >= 0 && nx <= 1 && ny >= 0 && ny <= 1;
    }

    window.addEventListener("resize", onResize);

    if (reduceMotion) {
      stepField(f, { t: 0, pull: 0, mouse: cur.local.set(0, 0, 0) }, base);
      f.draw();
      return;
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    el.addEventListener("pointerdown", function (e) {
      onPointerMove(e);
      cur.burst = 1;              // gather hard at the click
    }, { passive: true });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop();
      else if (visible) start();
    });

    // Only burn frames while the band is actually on screen.
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        if (visible && !document.hidden) start(); else stop();
      }, { rootMargin: "150px" }).observe(el);
    } else {
      visible = true;
      start();
    }

    driveCamera(f, pointer, progress(), t);
    stepField(f, { t: t, pull: 0, mouse: cur.local.set(0, 0, 0) }, base);
    f.draw();  // settled first frame, so the band is never briefly empty
  }

  function initPanels() {
    PANELS.forEach(function (p) {
      Array.prototype.forEach.call(document.querySelectorAll(p.selector), function (el) {
        try { initPanel(el, p.color, p.light, p.dim, p.fixed); } catch (err) { /* band keeps its gradient */ }
      });
    });
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
    var pageCanvas = document.getElementById("bg-canvas");
    if (pageCanvas) {
      // Homepage: the full-page field already covers every band.
      try { initPageField(pageCanvas); } catch (err) {
        // Any WebGL failure -> keep the canvas's static dark base; site stays functional.
      }
    } else {
      initPanels();
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
