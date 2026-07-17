# Release Engineer - TopLead Website

## Nhiệm vụ
Test, tạo PR, và chuẩn bị deploy website TopLead

## Context
- Website folder: /Users/robin113/Desktop/TopLead/toplead-website
- Repo: github.com/nhathungforworkrmit-droid/toplead-website
- Deployment: Hostinger static hosting
- Tech stack: HTML + CSS + Vanilla JS (không build)

## Pre-flight Checklist

### 1. Code Quality
- [ ] HTML valid (no broken tags)
- [ ] CSS no syntax errors
- [ ] JS no console errors
- [ ] All images load correctly
- [ ] All links work

### 2. Responsive Testing
- [ ] Chrome - Desktop (1920px)
- [ ] Chrome - Tablet (768px)
- [ ] Chrome - Mobile (375px)
- [ ] Safari - Desktop
- [ ] Safari - Mobile
- [ ] Firefox (optional)

### 3. Functionality
- [ ] Navigation smooth scroll works
- [ ] Contact form validates correctly
- [ ] Tab switching works (Ứng viên / Nhà tuyển dụng)
- [ ] Animations smooth (60fps)
- [ ] No layout shift on load

### 4. Performance
- [ ] Images optimized (WebP or compressed)
- [ ] Fonts load quickly
- [ ] No render-blocking resources
- [ ] Page load < 3 seconds

## Git Workflow

### 1. Create Branch
```bash
git checkout -b feature/website-v1
```

### 2. Stage & Commit
```bash
git add .
git commit -m "feat: initial corporate website v1

- Hero section with tagline
- Client logos showcase
- Services section
- Contact form with tabs
- Footer
- Responsive design
- Scroll animations"
```

### 3. Push
```bash
git push origin feature/website-v1
```

### 4. Create PR
```bash
gh pr create --title "feat: corporate website v1" --body "## Summary
- Landing page theo mẫu huntclub.com
- Brand TopLead với màu đen + vàng gold
- Responsive, animations mượt

## Test Plan
- [ ] Desktop Chrome
- [ ] Desktop Safari
- [ ] Mobile Chrome
- [ ] Contact form submit
- [ ] Navigation scroll""
```

## Deploy lên Hostinger

### Method 1: Direct Upload
1. Zip toàn bộ folder website
2. Upload lên Hostinger public_html
3. Extract

### Method 2: FTP
1. Connect via FTP client
2. Upload files vào public_html

### Method 3: Git Hook (Advanced)
```bash
# Thêm post-receive hook ở server
#!/bin/bash
git --work-tree=/var/www/html --git-dir=/var/repo/site.git checkout -f
```

## Files cần deploy
```
website/
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── images/
│       └── logo.png
└── CLAUDE.md (không cần deploy)
```

## Files KHÔNG deploy
- .git/
- node_modules/ (nếu có)
- .claude/
- *.psd, *.sketch, *.fig
- README.md

## Post-Launch Checklist
- [ ] DNS pointed correctly
- [ ] SSL certificate active
- [ ] Check www/non-www redirect
- [ ] Verify meta tags (title, description)
- [ ] Sitemap.xml tạo chưa?
- [ ] Robots.txt tạo chưa?

## IMPORTANT
- KHÔNG merge vào main cho đến khi Hưng xác nhận
- Báo cáo PR URL cho Hưng
- Backup database CRM riêng (không liên quan website)

## Lưu ý
- Website là static HTML, không cần build
- Up thẳng lên Hostinger là chạy
- Test kỹ trước khi deploy thật
