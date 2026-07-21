# TASK: Fix every bug, then elevate approach.html to top-tier web design. Use maximum tokens and maximum effort. The outcome must be visually impressive enough that a first-time visitor stops scrolling.

## WHO YOU ARE
You are a senior web designer + frontend engineer. You do not ship "good enough." You ship work that makes other agencies ask "who built this?" You have unlimited tokens for this task. Use them.

## CONTEXT
- File: approach.html (exists, do NOT rewrite from scratch — fix and transform in place)
- Site: TopLead Recruitment (topleadrecruit.com), SME-focused recruitment consultancy, Ho Chi Minh City
- Brand voice: professional, analytical, empathetic
- Tagline: "Stop Rehiring. Start Growing."
- Concept across 3 main sections: "Convergence" — two abstract paths (candidate + employer) flowing toward each other, meeting only when both sides are qualified
- The convergence concept is abstract and organic — NOT construction, NOT blueprint, NOT map. Think: two flowing curves approaching each other, particles moving along them, gold glow where they meet.

## STEP 0: Read the entire codebase BEFORE touching anything
Read ALL of these files completely:
- approach.html
- styles.css
- script.js
- background.js
- index.html, about.html, services.html (for consistency)

Then output:
1. Every design token (colors as hex, fonts, spacing scale, border-radii, shadows, z-index layers)
2. Every broken/missing asset (check if files exist on disk — `assets/approach/trad.jpg`, `assets/approach/toplead.jpg`, `assets/journey/step1-6.jpg`)
3. Every HTML structural error you find
4. What background.js actually renders
5. How the i18n system works (where translations live, how they're applied)
6. What script.js handlers exist for: divider drag, step navigation, card expand/collapse

**PAUSE here. Do not write code until I confirm.**

---

## TIER 1: CRITICAL BUGS (site is broken without these fixes)

### BUG-01: Section 1 unclosed tags — DOM nesting destroyed
Line ~86 opens `.cmp-stage`, line ~127 closes `.cmp-divider` and then only one `</div>` follows (closing `.container`). The `.cmp-stage` div is never closed. Result: Sections 2 and 3 are nested INSIDE Section 1 in the DOM tree. Fix the nesting. Count every `<div>` open/close in Section 1 and verify they match.

### BUG-02: Testimonial section broken nesting
Line ~396: the third testimonial card's closing `</div>` tags are jammed together (`</div>      </div>`). Count all open/close tags in `.testimonials-grid` — there is likely a missing `</div>` for `.testimonial-author` or `.author-info` on card 3.

### BUG-03: Section 1 `<ul class="cmp-rows">` possibly unclosed
Verify line 101's `<ul>` has a matching `</ul>` before the divider element. It should close around line 122 but may be missing.

### BUG-04: SVG curves are empty — Section 2 visually blank
Lines 223-224: `#jrCurveA` and `#jrCurveB` have `d=""`. The convergence visualization depends 100% on JS injecting path data. If JS fails → the entire right column of Section 2 is a blank white/transparent rectangle.

FIX: Add hardcoded fallback `d` attribute values — two curves starting from opposite top corners, converging toward bottom center. JS can still override on load, but SVG must render something without JS.

Also fix:
- Line 221: `#jrGlowC` has `r="0"` — invisible. Set a small default radius (r="30") so the glow dot exists even without JS.
- Line 234: `#jrWaypoints` is empty `<g>` — add 6 hardcoded circle waypoints at reasonable positions along the fallback curves.
- Lines 228-231: `<animateMotion>` with `<mpath>` referencing empty paths → particles stuck at origin. Fallback paths fix this automatically.

### BUG-05: Missing image assets — broken `<img>` tags
Check disk for ALL these files:
- `assets/approach/trad.jpg`
- `assets/approach/toplead.jpg`
- `assets/journey/step1.jpg` through `step6.jpg`

For ANY file that does not exist:
- Section 1 art figures (trad.jpg, toplead.jpg): Remove the `<figure>` elements entirely. The convergence curves/visual treatment IS the art — static photos are redundant. Replace with CSS-only visual treatment (gradient overlays, color tinting) that differentiates the two sides.
- Section 2 step photos (step1-6.jpg): Remove the `<figure class="jr-photo">` elements. Step cards work with number + text + deliverable. The convergence SVG is the visual anchor.
- If images DO exist, keep them but verify they're not AI-generated stock garbage.

### BUG-06: i18n system kills the Guardian Screen cross-reference link
Line 108: `<a href="#exclusive">` sits inside `<span data-i18n="ap.l2">`. When the i18n system replaces innerHTML with translated text, the `<a>` tag is destroyed. Fix: move the link OUTSIDE the i18n span, or restructure so the link wraps the i18n span.

### BUG-07: SMIL animations ignore prefers-reduced-motion
Lines 228-231: `<animateMotion>` is SMIL, not CSS — it does NOT respect `@media (prefers-reduced-motion)`. Users with motion sensitivity see perpetually moving dots. Fix: wrap the `.jr-flowdots` group in a JS check or CSS class that hides it when reduced motion is preferred. Add:
```css
@media (prefers-reduced-motion: reduce) {
  .jr-flowdots { display: none; }
}
```

### BUG-08: No JavaScript fallback
If JS is disabled or fails to load, the following ALL break simultaneously:
- Divider drag (Section 1)
- Step navigation (Section 2)
- Card expand/collapse (Section 3)
- SVG curve rendering (Section 2)
- Waypoint rendering (Section 2)

Add a `<noscript>` block with a message, AND ensure base content is readable without JS:
- Section 1: both columns fully visible side by side (no divider needed)
- Section 2: all 6 step cards visible stacked (remove `aria-hidden="true"` via CSS `:not(.js)` body class)
- Section 3: all panels visible expanded (remove `hidden` attribute via CSS)

---

## TIER 2: INTERACTION FIXES (features exist but don't work properly)

### INT-01: Divider drag reveals NOTHING — interaction is theater
The divider moves but no new information appears. A user drags it and thinks "so what?"

FIX: Add a `.cmp-detail` paragraph to each side of each `.cmp-row` that reveals when the user drags toward that side.

Content for each row's hidden details:

**Row 1:**
- Traditional detail: "Phụ thuộc vào lượng CV tự đến — chất lượng không kiểm soát được, thời gian không dự đoán được."
- TopLead detail: "Chủ động tiếp cận từ database 2,000+, referral network, và headhunting trực tiếp trên LinkedIn."

**Row 2:**
- Traditional detail: "CV được lọc bằng từ khóa tự động — bỏ sót ứng viên giỏi không dùng đúng keyword, giữ lại ứng viên biết 'hack' CV."
- TopLead detail: "5 lớp sàng lọc thực tế: kỹ năng, phỏng vấn, văn hóa, tham chiếu, duyệt cuối. Từ 80 ứng viên chỉ còn 3."

**Row 3:**
- Traditional detail: "Gọi 1 reference cho có thủ tục — thường là người ứng viên tự chọn, không phản ánh thực tế."
- TopLead detail: "Gọi tối thiểu 3 references do TopLead chọn — hỏi sâu về performance, work ethic, và lý do thực sự nghỉ việc."

**Row 4:**
- Traditional detail: "Ứng viên nghỉ sau 2 tuần? Đó là vấn đề của bạn. Agency đã nhận phí xong."
- TopLead detail: "90 ngày theo dõi chủ động. Nếu không phù hợp trong 3 tháng — thay thế miễn phí, không phát sinh thêm chi phí."

**Row 5:**
- Traditional detail: "Từ lúc đăng tin đến lúc có người nhận offer: trung bình 45-90 ngày. Vị trí trống càng lâu, chi phí ẩn càng cao."
- TopLead detail: "Shortlist 3-5 CV chất lượng trong 48 giờ đầu. Interview trong tuần đầu. Fill role trung bình 2-4 tuần."

Behavior:
- Divider at 50%: only headline statements visible (current)
- Divider dragged past 60% toward TopLead: TopLead details fade in (opacity 0→1, translateY 8px→0, transition 300ms)
- Divider dragged past 40% toward Traditional: Traditional details fade in
- Visual contrast between sides must be dramatic: Traditional side gets desaturated muted treatment, TopLead side gets gold warmth
- When fully dragged to one side (>85%): show subtle hint text "← Kéo về giữa để so sánh"

### INT-02: Section 2 ARIA tablist pattern incomplete
Line 191: `.jr-dots` has `role="tablist"` but dot buttons lack `role="tab"`. Step cards lack `role="tabpanel"` and `aria-labelledby`. Fix the full ARIA tabs pattern:
- Each dot: `role="tab"`, `aria-selected="true/false"`, `aria-controls="jr-panel-N"`
- Each card: `role="tabpanel"`, `id="jr-panel-N"`, `aria-labelledby` pointing to its dot

### INT-03: Section 2 step transitions are instant swaps
Cards appear/disappear with no transition. Fix: add slide + fade transition (outgoing card fades + slides left, incoming fades in + slides from right, 400ms ease-out).

### INT-04: Section 3 expand/collapse has no animation
Panels use `hidden` attribute — toggle is instant. Replace with smooth max-height transition (or FLIP animation). Expanding: panel grows from 0, content fades in. Collapsing: reverse.

### INT-05: Section 3 focus management missing
When user clicks "Xem chi tiết" → panel opens but focus stays on the toggle button. Fix: move focus to the panel's close button (or first focusable element inside panel) on open. On close, return focus to the toggle button.

### INT-06: No smooth scroll for nav dropdown anchors
Clicking #comparison / #journey / #exclusive in the nav dropdown causes a hard jump. Add `scroll-behavior: smooth` on `html` element, or JS `scrollIntoView({ behavior: 'smooth' })`.

---

## TIER 3: CONTENT / COPY FIXES

### COPY-01: Mixed EN/VI in role labels
- Line 265: "Entry filter - ai được bước lên hành trình" → Change to all VI: "Bộ lọc đầu vào — ai được bước lên hành trình"
- Line 297: "Alignment - giữ hai bên đi đúng hướng" → "Sự đồng nhất — giữ hai bên đi đúng hướng"
- Line 338: "Protection - bảo vệ kết nối sau khi đã khớp" → "Bảo vệ — giữ kết nối bền vững sau khi đã khớp"

### COPY-02: Funnel layer descriptions are mostly English
Lines 276-280: "Hard skills, số năm kinh nghiệm, industry relevance, career trajectory" — 3/4 terms are English.
Rewrite ALL funnel descriptions in consistent Vietnamese:
- L1: "Kỹ năng chuyên môn, số năm kinh nghiệm, mức độ phù hợp với ngành, lộ trình nghề nghiệp"
- L2: "Kỹ năng giao tiếp, động lực làm việc, kỳ vọng lương, thời gian sẵn sàng"
- L3: "Phong cách làm việc, sở thích quản lý, sự phù hợp với giá trị và văn hóa doanh nghiệp"
- L4: "3+ cuộc gọi reference — lịch sử performance, thái độ làm việc, lý do nghỉ việc thực tế"
- L5: "Hội đồng TopLead đánh giá toàn diện hồ sơ, chọn top 3 gửi khách hàng"

### COPY-03: Deliverable strings inconsistently bilingual
- "Brief document - nhu cầu, budget, timeline, văn hóa" → "Tài liệu brief — nhu cầu, ngân sách, thời hạn, văn hóa công ty"
- "Interview coordination + feedback report" → "Điều phối phỏng vấn và báo cáo feedback hai chiều"
- "Offer support + onboarding + bảo hành 3 tháng" → "Hỗ trợ offer, onboarding, và bảo hành 3 tháng"
Keep "Long list" and "Shortlist" as-is (industry terms understood in VN recruitment).

### COPY-04: Trustcare summary grammar
Line 300: "...ngay cả khi nó khiến chúng tôi mất hợp đồng" — "nó" is ambiguous.
Change to: "...ngay cả khi điều đó khiến chúng tôi mất hợp đồng."

### COPY-05: Testimonial heading vs content mismatch
Line 365: "Đối tác nói gì về TopLead" — but all 3 reviews are from CANDIDATES, not employer partners.
Change heading to: "Ứng viên nói gì về TopLead" or add actual client/employer reviews.

### COPY-06: Testimonial 3 tone mismatch
"Em đã có job thông qua TopLead, bạn Cường cũng vậy, bạn Quân cũng thế. Bạn Hiếu rồi cũng sẽ qua!" — reads like a text message, references specific people who are not public figures.
Options: (a) keep for authenticity but add context like role title, (b) replace with a more professional review, (c) add quotation attribution that explains the casual context. PAUSE and ask me.

### COPY-07: Page title language mismatch
Line 6: `<title>Our Approach - TopLead Recruitment</title>` — English title on a `lang="vi"` page.
Change to: `<title>Phương pháp tuyển dụng | TopLead Recruitment</title>`

### COPY-08: TopLead header missing i18n key
Line 98: `.cmp-head--tl` text "TopLead" has no `data-i18n` attribute. Every other label in this section does. Add one for consistency even though the value stays "TopLead" in both languages.

---

## TIER 4: DESIGN / VISUAL ELEVATION

### VIS-01: Section 1 — no visual contrast between sides
Currently both sides look the same (same background, same text color). The drag has no visual impact.

FIX: Create dramatically different visual zones:
- Traditional side: darker background (rgba overlay), text in muted warm gray (#9a8e82 range), subtle grain/noise texture overlay at 0.03 opacity. Feels old, tired, risky.
- TopLead side: slightly warmer background (very subtle gold tint), text in clean white, gold accent on markers. Feels clear, confident, premium.
- The divider line itself: gold, 2px, with a soft gold glow (box-shadow or SVG filter)
- Grip handle: visible, interactive-looking (small circle or diamond, gold fill, cursor: grab on hover, cursor: grabbing on drag, scale 1→1.15 on grab)

### VIS-02: Section 3 Guardian Screen funnel is inadequate
Current: 3 trapezoids in a 240×200 SVG. Claims "5 lớp" but only shows 3 shapes.

FIX — complete redesign of the funnel visualization:
- Increase SVG viewBox to at least 480×360
- Render ALL 5 layers as horizontal bars (not trapezoids — bars are cleaner and width difference is more dramatic)
- Width proportional to candidate count: Layer 1 = 100% (80), Layer 2 = 37.5% (30), Layer 3 = 18.75% (15), Layer 4 = 10% (8), Layer 5 = 7.5% (6), Output = 3.75% (3)
- Each bar: gold fill with decreasing opacity (1.0 → 0.6), rounded ends (rx)
- Layer NAMES visible to the left of each bar
- Candidate NUMBERS visible to the right of each bar (large, bold)
- Pass % in small muted text below each number
- Animate on scroll-into-view: bars grow from 0 width to final width, staggered 200ms per layer
- The visual DROP from a wide bar (80) to a tiny bar (3) must be visceral — this is the "wow" moment
- Below the funnel: summary line "Chỉ ~4% ứng viên vượt qua toàn bộ Guardian Screen" in gold

### VIS-03: Section 3 Trustcare visual is meaningless
Current: 3 tiny 16px-wide rectangles + 1 line. Communicates nothing.

FIX — redesign the 3-pillar visualization:
- 3 distinct vertical elements, each labeled at the base: "Trung thực", "Trách nhiệm", "Đồng hành"
- Tall enough to be visually significant (at least 120px rendered height)
- Above them: a horizontal arch or platform labeled "Cam kết chất lượng" — what the pillars support
- Design: NOT bar charts, NOT loading bars. Abstract columns of light, rounded pillars, or vertical gradient bands. Each pillar should feel structural — "if you remove one, the thing above falls."
- Connecting lines between pillars (subtle, dashed gold)
- Animate on scroll: pillars rise from bottom sequentially (stagger 300ms), then the top element settles onto them
- Interaction: hover/click a pillar → other 2 dim to 30% opacity, selected pillar glows, its description appears

### VIS-04: Section 3 Guarantee timeline is too minimal
Current: 3 dots on a line with "D30 D60 D90" text labels.

FIX:
- Full-width horizontal timeline (not cramped in a 240×200 SVG)
- 3 milestone markers — not just dots. Labeled nodes with names: "Review" / "Check-in" / "Evaluation"
- A progress fill line (gold) that animates on scroll — fills from left to right, pausing briefly at each milestone
- Below timeline: "Thay thế miễn phí trong 90 ngày" in gold
- Each milestone clickable/hoverable to show its detail description
- Add subtle visual sense of "coverage" — an abstract arc or gradient band over the timeline suggesting protection for the full 90 days

### VIS-05: Section 3 cards lack connecting visual
3 cards float independently — no visual says "these are parts of one system."

FIX: Add a vertical connecting line (thin gold, 1px) running along the left edge of all 3 cards, with gold node dots at each card. Suggests sequential flow: Guardian filters → Trustcare aligns → Guarantee protects.

### VIS-06: Section 3 cards have no visible numbering
Add visible sequential numbers or labels connecting them to the convergence concept:
- Guardian: step icon/number indicating "Before convergence"
- Trustcare: "During convergence"
- Guarantee: "After convergence"

### VIS-07: No section transitions — hard cuts everywhere
Sections end and the next begins with zero visual transition.

FIX: Add gradient fade transitions between sections — bottom of one section fades into top of next. Use pseudo-elements with linear-gradient from section-bg to transparent. At minimum 60px overlap zone.

### VIS-08: Background is boring
The Three.js "4D" starfield is either invisible or too subtle to matter. The page reads as flat dark background.

FIX options (choose the most impactful that doesn't break performance):
- Enhance the starfield: increase particle count, increase brightness, add very subtle parallax on scroll
- OR add CSS-only atmospheric effects: radial gradient spots (gold at 0.03 opacity) positioned behind each section for depth variation
- OR both
- Remove the "4D" comment (line 12) — it's overclaiming

### VIS-09: Color is monotone — no variation
Gold on dark navy throughout. Every section, every element, same palette. Eyes have no anchor.

FIX: Introduce subtle VARIATION within the gold palette across sections:
- Section 1: cooler gold (amber-leaning, #D4A76A)
- Section 2: warm gold (standard, #E4B678)
- Section 3: bright gold (luminous, #F0D2A0)
This creates a subtle warm-up progression as user scrolls deeper — the page "warms up" as TopLead's process gets closer to convergence.

### VIS-10: Hero section is generic
Two CSS circles on a dark background. Could be any SaaS template.

FIX: Replace `.hero-circle` elements with the convergence concept — two abstract curves starting at opposite edges of the hero, suggesting the journey that the page content will explain. Gold gradients, subtle animation. The hero should PREVIEW the visual language of the rest of the page.

### VIS-11: No scroll-triggered entrance animations
All sections appear instantly — no stagger, no reveal, nothing draws attention.

FIX: Add IntersectionObserver-based entrance animations:
- Section headers: fade in + translateY(20px→0), 500ms
- Comparison rows: stagger in from alternating sides (trad from left, TopLead from right), 100ms stagger
- Journey step card: fade + slide on step change (already covered in INT-03)
- Exclusive cards: fade in + translateY(30px→0), 300ms stagger between cards
- All respect prefers-reduced-motion: instant display, no animation

### VIS-12: Section 2 step number needs to dominate
`.jr-num` is probably small text. It should be a HERO element:
- Size: clamp(80px, 12vw, 180px)
- Style: gold outline only (transparent fill, 2px text-stroke or SVG outline)
- Position: background watermark behind card content, opacity 0.12
- Creates visual rhythm: 01... 02... 03... even if user is scrolling fast

### VIS-13: Section 2 time chips need to pop
`.jr-chip` elements ("Ngày 1", "Ngày 2-5") should use gold background, dark text, pill shape (border-radius, padding). These are the most scannable elements for a busy SME owner who asks "how long does this take?"

### VIS-14: Section 2 deliverable box needs distinct treatment
`.jr-deliv` should look like an actual deliverable:
- Left gold border (4px solid)
- Slightly different background shade (rgba gold at 0.05)
- Label "Bạn nhận được:" in gold, small-caps or uppercase letter-spacing
- Feels like a real output/document, not just another paragraph

### VIS-15: Section 2 dot navigation is plain
Replace dots with mini step indicators showing numbers (1-6). Active step = gold fill. Others = gold outline. On hover: show step name as tooltip.

### VIS-16: Section 2 convergence SVG needs more visual punch
- Increase curve stroke width to 1.5-2px
- Increase particle count to 3-4 per curve with varied sizes (2-4px)
- Add waypoint markers at 6 positions — current step marker enlarged (r=8 vs r=4)
- Convergence glow at step 6: pulsing radial gradient, not just a static circle
- The GAP between curves must visually narrow with each step — this is the core promise

---

## TIER 5: TESTIMONIALS SECTION OVERHAUL

### TEST-01: Link to Google Reviews
Add a "Xem tất cả đánh giá trên Google" link/button below the testimonials grid. Link to TopLead's Google Business Profile reviews page. Use the URL pattern: `https://www.google.com/maps/place/TopLead+Recruitment/` (verify the actual URL from footer map link or search).

### TEST-02: Add star rating visual
Each card says "Đánh giá 5★ trên Google" as text. Add actual visual stars — 5 gold SVG stars (or Unicode ★ styled gold) above or below the text.

### TEST-03: Auto-scroll carousel
Current: 3 static cards. When TopLead gets more reviews, this won't scale.

FIX: Convert to a horizontal auto-scrolling carousel:
- Cards scroll slowly left (CSS animation, `translateX`, infinite loop)
- Pause on hover
- Touch-swipeable on mobile
- Navigation dots or arrows optional
- Duplicate cards for seamless infinite loop illusion
- Respect prefers-reduced-motion: no auto-scroll, show static grid

### TEST-04: Avatar styling
Initials-in-box (MA, TH, TN) is fine but bland. Enhance:
- Circular container (not square)
- Subtle gold gradient background
- White text, medium weight
- Consistent size (48×48px)

---

## TIER 6: SEO / META / PERFORMANCE

### SEO-01: Add Open Graph tags
```html
<meta property="og:title" content="Phương pháp tuyển dụng | TopLead Recruitment">
<meta property="og:description" content="So sánh tuyển dụng truyền thống với TopLead. Hành trình 6 bước, Guardian Screen 5 lớp, bảo hành 3 tháng.">
<meta property="og:image" content="https://topleadrecruit.com/assets/images/og-approach.jpg">
<meta property="og:url" content="https://topleadrecruit.com/approach.html">
<meta property="og:type" content="website">
```

### SEO-02: Add canonical URL
```html
<link rel="canonical" href="https://topleadrecruit.com/approach.html">
```

### SEO-03: Three.js is 600KB for a starfield
If the starfield effect is subtle enough to be replaceable, consider swapping to vanilla Canvas2D or pure CSS animations. If Three.js is used on other pages too and is cached, keep it but note the cost.

### SEO-04: Step 1 image should not be lazy-loaded
Line 144: step1.jpg has `loading="lazy"` but it's in the ACTIVE card (visible on page load). Change to `loading="eager"` or remove the attribute.

### SEO-05: Inline styles on funnel items
Lines 276-280: `style="--w:100%"` etc. are inline CSS custom properties. Functional but tightly couples presentation to HTML. Move to CSS with `:nth-child()` selectors if possible.

---

## TIER 7: ACCESSIBILITY GAPS

### A11Y-01: Funnel list items unreadable by screen reader
Each `<li>` in `.ex-funnel` has 4 inline `<span>` elements with no separation. Screen reader output: "Lớp 1: Năng lực & kinh nghiệm80 → 30~40% passHard skills..." — unreadable.
FIX: Add `aria-label` on each `<li>` with a clean sentence: "Lớp 1: Năng lực và kinh nghiệm. 80 ứng viên vào, 30 ra. Khoảng 40 phần trăm vượt qua."

### A11Y-02: Section 2 SVG title too long
Line 204: `<title>` content is 65+ characters. Screen reader reads all of it when SVG gets focus. Shorten to: "Convergence: hai luồng tiến lại gần nhau" and move the long description to `<desc>`.

### A11Y-03: Section 3 close button × character
Line 274, 306, 347: `&times;` renders fine visually but inconsistent across fonts. Replace with an SVG × icon (12×12, 2px stroke, currentColor) for reliability. Keep `aria-label="Đóng"`.

### A11Y-04: Section 3 ex-card--flip class
Line 287: `.ex-card--flip` on Trustcare card — if this triggers a CSS flip animation, ensure the back face content is accessible. If it's dead code, remove it.

### A11Y-05: Focus rings not verified
Verify ALL interactive elements have visible `:focus-visible` styles:
- Divider grip
- Step navigation dots
- Expand/collapse toggle buttons
- Close buttons
- CTA buttons
- Nav links
Gold focus ring (2px outline, 2px offset) preferred for brand consistency.

---

## TIER 8: MISSING FEATURES

### FEAT-01: Inline micro-CTA after Section 1
After the comparison, the user is convinced TopLead is better. Capture that moment:
Add a subtle inline CTA: "Muốn biết quy trình cụ thể? Kéo xuống — hoặc liên hệ ngay." with a small "Liên hệ" link. Not a full banner — just a text line with a link, centered, gold accent.

### FEAT-02: Scroll progress indicator
Add a thin gold progress bar at the very top of the page (below navbar, fixed position, 2px height) that fills left-to-right as user scrolls. Gives orientation on a long page.

### FEAT-03: Back to top button
Floating button, bottom-right, appears after scrolling past the hero. Gold outline, subtle. Smooth scrolls to top on click.

### FEAT-04: Section 2 convergence SVG should respond to step changes
Currently: curves may or may not update when user switches steps (depends on script.js).
Ensure: when user is on Step 1, the gap between curves is widest. Each subsequent step narrows the gap. By Step 6, curves touch at convergence point and glow pulses. The SVG is not just decoration — it's synchronized with the content.

---

## EXECUTION ORDER

1. **Read codebase + audit** → output findings → PAUSE
2. **Fix all TIER 1 bugs** (structural HTML, empty SVGs, missing assets, i18n link, SMIL, noscript) → PAUSE, show me the fix summary
3. **Fix TIER 2 interactions** (divider content reveal, ARIA, transitions, focus management, smooth scroll) → Screenshot Section 1 + Section 2 at 1440px and 375px → PAUSE
4. **Fix TIER 3 copy** (mixed languages, testimonial heading, grammar) → PAUSE, show me the text changes for approval
5. **Apply TIER 4 visual elevation** — this is the BIG pass:
   - Section 1 visual contrast + grip polish → Screenshot → PAUSE
   - Section 2 step number hero + chips + deliverable box + dot nav + SVG enhancement → Screenshot → PAUSE
   - Section 3 Guardian funnel redesign → Screenshot → PAUSE
   - Section 3 Trustcare pillar redesign → Screenshot → PAUSE
   - Section 3 Guarantee timeline redesign → Screenshot → PAUSE
   - Section transitions + background + entrance animations → Screenshot full page → PAUSE
6. **Apply TIER 5 testimonials overhaul** (Google link, stars, carousel, avatars) → Screenshot → PAUSE
7. **Apply TIER 6 SEO/meta/performance** → output changes
8. **Apply TIER 7 accessibility** → run through all checks
9. **Apply TIER 8 features** (micro-CTA, scroll progress, back-to-top)
10. **FINAL REVIEW — 4 passes:**
    - Pass A: Content accuracy — every VI string reads natural professional Vietnamese, every EN translation natural, no contradictions
    - Pass B: Visual cohesion — convergence concept visible across all sections, color progression works, no orphan styles
    - Pass C: Interaction — tab through page, all focus rings visible, all hover states work, all drag/click/expand work on mouse + keyboard + touch, reduced motion mode fully usable
    - Pass D: Code quality — no console errors, valid HTML, no orphan CSS, semantic elements used
11. **Final screenshots:** all sections at 1440px, 768px, 375px
12. **List all modified files + summary of changes**
13. **DO NOT commit — wait for my approval**

## CONSTRAINTS
- Do NOT touch: navbar, footer, CTA banner (except minor fixes if broken)
- Do NOT add: new UI libraries (no GSAP, no Framer Motion, no external carousel lib — use native Web APIs)
- Do NOT use: emojis anywhere, stock icons for decoration, placeholder content
- Do NOT create: new font loads, new color tokens not derived from existing palette
- DO: use maximum tokens, maximum effort, maximum quality passes
- DO: take screenshots at every pause point
- DO: fix issues in dependency order (structural HTML first, then interactions, then visuals)
- If credit runs low: prioritize Tier 1 → Tier 4 (VIS-02 funnel, VIS-03 pillars) → Tier 2 (INT-01 divider)
