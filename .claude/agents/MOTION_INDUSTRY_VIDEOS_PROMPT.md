# TASK: Generate cinematic industry videos with Motion, then build an auto-playing industry showcase for TopLead's services page. Videos must NOT look AI-generated.

## CRITICAL: Avoiding the "AI-generated look"
Motion is an AI video tool, so the AI vibe must be actively suppressed through prompt craft. The tells of AI video are: warped human faces, floating/morphing motion, plastic skin, impossible physics, uncanny eyes, text that melts. AVOID ALL OF THESE by following these rules in EVERY video prompt:

1. **No close-up human faces.** Faces are where AI fails hardest. Prefer: b-roll of environments, hands at work, objects, wide establishing shots, over-the-shoulder framing, silhouettes, backs of people, people small in frame. If a person appears, they are distant, in motion, or seen from behind/side — never a lingering face close-up.
2. **Slow, deliberate, physically plausible motion.** Ask for "slow camera push," "subtle drift," "gentle pan" — NOT fast action, NOT complex choreography. Slow motion hides AI artifacts.
3. **Real-world lighting and texture.** Ask for "natural light," "documentary style," "realistic depth of field," "film grain," "handheld feel" — this reads as footage, not render.
4. **Environmental storytelling over people.** Show the INDUSTRY through its setting and objects, not through actors performing. A tech office is monitors + code + workspace, not a person smiling at a laptop.
5. **Use style_reference_url** where possible — point Motion at a real cinematic b-roll style on YouTube to anchor the aesthetic away from generic AI output.
6. **Asian/Vietnamese context** where relevant — specify "modern Vietnamese city," "Southeast Asian setting," so environments don't default to generic Western stock.

## STEP 0: Check Motion credits FIRST
Call the Motion credit balance tool. Report the balance to me before generating anything. Each premium video costs credits and 9 videos is significant. If credits are low, tell me and stop.

## PHASE 1: Test batch (hero + 3 industries) — DO NOT generate all 9 at once
Generate ONLY these 4 videos first so I can approve the style before committing the rest:
- Hero video
- Technology
- Finance & Banking
- Manufacturing

After these 4 render, display them to me and PAUSE for approval. If the style is wrong (too AI-looking), I'll give feedback and you'll regenerate before doing the remaining 5. Do NOT proceed to Phase 2 without my approval.

## Video specifications

### Aspect ratios (by placement)
- **Hero video**: 16:9 (cinematic centerpiece at top of industry section) — or 21:9 if it reads more cinematic
- **8 industry videos**: 16:9 (they live in an auto-scrolling horizontal carousel; 16:9 gives a clean film-strip look)

### Duration
- Hero: 10-15s
- Each industry: 5-10s

### Quality
- Highest quality Motion offers (pro model, highest resolution)

## HERO VIDEO prompt
Concept: A cinematic montage suggesting the breadth of industries and people TopLead serves — but WITHOUT relying on faces. Think: a slow, elegant sequence of professional Vietnamese work environments, connected by smooth transitions, warm cinematic grade.

Motion prompt:
"Cinematic documentary b-roll montage, slow and elegant. A sequence of modern professional environments in a Vietnamese city: a bright open-plan office with people working at a distance, a financial trading floor with screens, a busy retail space, a clean manufacturing line, all shot with slow camera movements — gentle push-ins and smooth pans. Natural light, shallow depth of field, subtle film grain, warm cinematic color grade with deep shadows. People appear only in the distance or from behind, never close-up faces. The mood is aspirational, calm, premium — the feeling of many industries moving forward together. Golden hour tones. Handheld documentary feel."
- Duration: 10-15s
- Aspect: 16:9
- Style reference: if helpful, a corporate/documentary b-roll reel on YouTube

## 8 INDUSTRY VIDEO prompts
Each is environmental — showing the industry through its space and objects, minimal or distant people, slow cinematic motion.

**1. Technology**
"Slow cinematic b-roll of a modern software office. Close-up drifting shots of code on monitors, a mechanical keyboard, glowing screens in a dim room, server lights blinking. A developer seen from behind, out of focus. Slow camera push. Cool blue and warm amber accents, shallow depth of field, film grain, documentary style. No faces. Modern Southeast Asian tech company setting."

**2. Finance & Banking**
"Slow cinematic b-roll of a financial workspace. Drifting close-ups of stock charts on screens, a hand writing figures, a calculator, glass office towers through a window. Distant silhouettes of people in business attire. Slow pan. Sophisticated cool tones with gold accents, shallow depth of field, film grain. No close-up faces. Modern Asian financial district."

**3. Retail & E-commerce**
"Slow cinematic b-roll of a modern retail environment. Drifting shots of product displays, a shopping bag, a point-of-sale screen, packages being sorted. People shopping seen at a distance and blurred. Warm inviting light, shallow depth of field, film grain, documentary feel. No close-up faces. Contemporary Vietnamese retail space."

**4. Manufacturing**
"Slow cinematic b-roll of a clean modern factory. Drifting shots of a production line, robotic arms moving slowly, sparks from precision work, quality control on a conveyor. Workers in uniform seen at a distance. Industrial but clean aesthetic, cool tones with warm highlights, shallow depth of field, film grain. No close-up faces. Modern Southeast Asian manufacturing facility."

**5. Real Estate**
"Slow cinematic b-roll of premium real estate. Slow aerial drift over a modern city skyline, then interior of a bright luxury apartment, architectural details, floor-to-ceiling windows, a model building. Warm golden light, elegant and aspirational, shallow depth of field, film grain. No people close-up. Modern Vietnamese urban development."

**6. Healthcare**
"Slow cinematic b-roll of a modern medical environment. Drifting shots of clean clinic corridors, medical equipment, a stethoscope, soft light through blinds, gloved hands preparing equipment. Staff in uniform seen at a distance and blurred. Calm, clean, trustworthy mood, cool tones with soft warmth, shallow depth of field, film grain. No close-up faces. Modern Asian healthcare facility."

**7. Logistics**
"Slow cinematic b-roll of a logistics operation. Drifting shots of a warehouse with tall shelving, packages on a conveyor, a forklift moving slowly, delivery trucks at a loading dock, a route map on a screen. Workers seen at a distance. Efficient industrial mood, cool tones with warm accents, shallow depth of field, film grain. No close-up faces. Modern Southeast Asian distribution center."

**8. Education**
"Slow cinematic b-roll of a modern learning environment. Drifting shots of a bright lecture hall, books on a desk, a chalkboard or digital screen, sunlight through large windows, an empty modern classroom. Students seen at a distance and blurred. Warm, hopeful, aspirational mood, golden light, shallow depth of field, film grain. No close-up faces. Contemporary Vietnamese university setting."

## PHASE 2: Remaining 5 industries (only after Phase 1 approval)
Generate: Retail & E-commerce, Real Estate, Healthcare, Logistics, Education (using the prompts above).

## After all videos render
1. Download all 9 videos. Save industry videos to `assets/videos/industry-[name].mp4` (e.g. `industry-technology.mp4`) and hero to `assets/videos/industry-hero.mp4`
2. Compress each video for web (target: under 2MB per industry clip, under 4MB for hero) while keeping quality high. Use ffmpeg with a reasonable CRF (e.g. 23-26) and H.264 for broad browser support. Also generate a poster frame (first frame as .jpg) for each video as a loading placeholder.

## PHASE 3: Build the industry showcase in services.html
Replace the current Industry Focus section (the 8 plain text items) with a cinematic showcase.

### Layout
1. **Hero video** at the top of the section — full-width (or contained to match section width), autoplay, muted, loop, plays inline. Poster frame shows while loading. Overlaid or beneath it: the section heading "Ngành nghề chúng tôi phục vụ" / EN "Industries We Serve" and a subtitle.
2. **Auto-scrolling carousel** of the 8 industry videos below the hero — MATCHING the same auto-scroll mechanism used in the "Why Choose TopLead" / testimonials auto-scroll on other pages. Look at how that existing auto-scroll is implemented in the codebase and reuse the SAME technique for consistency.

### Carousel behavior
- 8 industry video cards scroll horizontally, continuously, automatically (infinite loop)
- Each card: the industry video (autoplay, muted, loop, inline) + industry name label overlaid or below
- Videos autoplay as required (muted is mandatory for autoplay to work in browsers)
- Pause auto-scroll on hover (so user can look at one)
- Touch/swipe enabled on mobile
- Duplicate the card set for seamless infinite loop (same trick as the existing auto-scroll)
- respects prefers-reduced-motion: if reduced motion, STOP auto-scroll AND replace autoplaying videos with their poster frames (static images) — motion-sensitive users should not get moving video or moving carousel

### Video element requirements (CRITICAL for autoplay to work)
Every `<video>` must have ALL of these attributes or autoplay will fail in browsers:
```html
<video autoplay muted loop playsinline poster="assets/videos/industry-technology-poster.jpg">
  <source src="assets/videos/industry-technology.mp4" type="video/mp4">
</video>
```
- `muted` is REQUIRED — browsers block autoplay with sound
- `playsinline` is REQUIRED — prevents fullscreen takeover on iOS
- `loop` for continuous play
- `poster` for graceful loading
- Add `preload="metadata"` to avoid loading all 8 videos' full data on page load (performance)
- Consider lazy-loading videos that are off-screen (only play videos currently visible in the carousel viewport) to save bandwidth — use IntersectionObserver to play/pause based on visibility

### Card labels
Each industry card shows its name. Industry names stay in English in both language modes (Technology, Finance & Banking, etc. — standard in Vietnamese business context). The section heading and subtitle are bilingual with proper i18n keys.

### Performance safeguards
- 8 autoplaying videos is heavy. Mitigations:
  - `preload="metadata"` not `auto`
  - IntersectionObserver: only play videos visible in viewport, pause the rest
  - Compressed files (under 2MB each)
  - Poster frames show instantly while video buffers
- Test that the page still loads fast and doesn't jank

## Consistency & quality requirements
- Match the existing site: same fonts, colors, spacing, the SAME auto-scroll technique as "Why Choose"/testimonials
- The showcase must feel premium and cinematic, integrated with TopLead's dark + gold aesthetic
- Section heading and subtitle need bilingual i18n keys (VI + EN both in the dictionary)
- No layout shift when videos load (reserve space with aspect-ratio CSS)
- Works at 375px, 768px, 1440px
- No console errors

## Zero-error checklist (run before finishing)
1. Every `<video>` has autoplay + muted + loop + playsinline + poster + a valid source path
2. Auto-scroll carousel uses the same technique as the existing one (verify by reading that code)
3. prefers-reduced-motion stops both carousel motion AND video motion (shows posters)
4. IntersectionObserver correctly plays visible / pauses hidden videos
5. Section heading/subtitle i18n keys have both VI and EN values
6. No broken video paths (all 9 files exist in assets/videos/ after download+compress)
7. Poster frames exist for all videos
8. No layout shift (aspect-ratio reserved)
9. Tag balance correct in the modified services.html
10. No console errors, works across breakpoints

## Execution flow
1. Check Motion credits → report → (stop if low)
2. Generate Phase 1 (hero + 3 industries) → display → PAUSE for style approval
3. On approval: generate Phase 2 (remaining 5 industries)
4. Download all 9 → compress → generate poster frames → save to assets/videos/
5. Build the showcase section in services.html (hero video + auto-scroll carousel) reusing the existing auto-scroll technique
6. Add bilingual i18n keys
7. Run the 10-point checklist → report
8. Screenshots at 1440px and 375px
9. List all files created/modified
10. Present for review — do NOT commit

## What NOT to do
- Do NOT generate all 9 videos before I approve the Phase 1 style
- Do NOT create videos with close-up human faces (AI-look risk)
- Do NOT forget muted/playsinline (autoplay will silently fail)
- Do NOT autoplay all 8 videos simultaneously without IntersectionObserver throttling (performance)
- Do NOT invent a new carousel — reuse the existing auto-scroll technique for consistency
- Do NOT leave i18n keys without both translations
- Do NOT commit
