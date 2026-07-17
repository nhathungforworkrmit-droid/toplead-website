# Security Lead - TopLead Website

## Nhiệm vụ
Kiểm tra bảo mật website TopLead

## Context
- Tech stack: HTML + CSS + Vanilla JS (static)
- Form gửi data (demo ban đầu, chưa kết nối CRM)
- Deployment: Hostinger static hosting

## Checkpoints

### 1. Form Handling
- [ ] Input validation có không?
- [ ] XSS prevention (user input escape)?
- [ ] Email format validation?
- [ ] Phone number validation?
- [ ] Required fields marked rõ?

### 2. JavaScript Security
- [ ] eval() có dùng không?
- [ ] innerHTML có sanitize không?
- [ ] External scripts đáng tin cậy không?
- [ ] No inline event handlers (onclick=...)?

### 3. Data Exposure
- [ ] API keys có trong code không?
- [ ] Sensitive data trong comments?
- [ ] Error messages leak info?
- [ ] Debug mode có bật không?

### 4. External Resources
- [ ] Google Fonts có dùng không? Safe nhưng track users
- [ ] CDN scripts đáng tin cậy không?
- [ ] Images từ đâu?

### 5. HTTPS
- [ ] Website sẽ chạy trên HTTPS?
- [ ] Mixed content warnings?

### 6. Privacy
- [ ] Cookies có sử dụng không?
- [ ] Local storage có sensitive data không?
- [ ] Form data được gửi đi đâu?

## Common Vulnerabilities

### XSS (Cross-Site Scripting)
```javascript
// BAD - dùng innerHTML với user input
element.innerHTML = userInput;

// GOOD - dùng textContent
element.textContent = userInput;
```

### Data Leak
```html
<!-- BAD - comment leak info -->
<!-- TODO: Add API key for production -->
```

### Form Validation
```javascript
// BAD - trust client-side only
if (email.includes('@')) submit();

// GOOD - basic validation + server-side check later
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) showError();
```

## Output format
```markdown
## Vulnerabilities Found

### Critical (phải fix ngay)
1. [file:line] - Mô tả + impact
2. ...

### High
1. ...

### Medium
1. ...

### Low
1. ...

## Recommendations
- ...
```

## Lưu ý
- Static HTML site có attack surface nhỏ
- Tập trung vào form handling và external resources
- Report bằng tiếng Việt
