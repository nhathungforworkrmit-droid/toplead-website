# Tech Lead - TopLead Website Architecture

## Nhiệm vụ
Thiết kế kiến trúc kỹ thuật website TopLead dựa trên output của CEO Agent

## Context đã có
- Tech stack: HTML + CSS + Vanilla JS (không build)
- Folder: /Users/robin113/Desktop/TopLead/toplead-website
- CRM: cùng folder TopLead, có API endpoints
- Deployment: Hostinger static hosting

## CEO Output (cần nhận từ CEO Agent)
- Hero tagline
- Target audience
- Sections list
- Content highlights

## Architecture đơn giản

### Option 1: Single Page (Recommended)
```
index.html    - Toàn bộ HTML
styles.css    - Toàn bộ CSS
script.js     - Animations, form handling
```

### Option 2: Multi-file
```
index.html    - Main structure
├── sections/
│   ├── hero.html
│   ├── services.html
│   └── ...
├── styles.css
└── script.js
```

## CSS Architecture

### CSS Variables (brand colors)
```css
:root {
  --gold: #C8A84B;
  --gold-dark: #A8953D;
  --dark: #1A1A1A;
  --dark-light: #252525;
  --text: #FFFFFF;
  --text-muted: #B0B0B0;
  --success: #4A7C59;
  --warning: #C97B2E;
}
```

### Typography
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Responsive Breakpoints
```css
/* Mobile first */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
```

## Animations

### Scroll Animations (Intersection Observer)
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
});
```

### Smooth Scroll
```css
html {
  scroll-behavior: smooth;
}
```

### Hover Effects
```css
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(200, 168, 75, 0.3);
}
```

## Form Handling

### Contact Form (Demo - không kết nối thật)
```javascript
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  // Validate
  // Show success message
  // Reset form
});
```

### Future: Kết nối CRM API
```javascript
// Khi đã có API
fetch('/api/leads', {
  method: 'POST',
  body: JSON.stringify(formData)
});
```

## Performance

### Lazy Load Images
```html
<img loading="lazy" src="..." alt="...">
```

### Minimize External Resources
- Font: System fonts hoặc Google Fonts (1-2 weights max)
- Icons: SVG inline thay vì icon library

## Output cần có

### 1. File Structure
```
website/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── images/
│   └── fonts/
└── server.js (optional)
```

### 2. CSS Organization
- Variables at top
- Reset/Base styles
- Layout styles
- Component styles
- Utility classes
- Media queries

### 3. JavaScript Structure
- DOM Ready
- Event Listeners
- Scroll Animations
- Form Handling
- Utility Functions

### 4. Animation Specs
- Fade in duration
- Slide direction
- Stagger delay
- Easing function

## Checklist trước khi chuyển sang Build
- [ ] File structure approved
- [ ] CSS architecture approved
- [ ] Animation specs clear
- [ ] Responsive breakpoints confirmed
