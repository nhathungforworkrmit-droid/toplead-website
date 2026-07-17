# TopLead Website - Corporate Website cho TopLead Recruitment

## Dự án
Website giới thiệu công ty tuyển dụng TopLead, tham chiếu thiết kế từ huntclub.com

## Tham khảo thiết kế
- Website mẫu: https://www.huntclub.com/
- Style: Clean B2B SaaS, professional, stats-heavy social proof

## Brand Colors
- Primary Gold: #C8A84B
- Background Dark: #1A1A1A
- Text Light: #FFFFFF / #B0B0B0
- Success: #4A7C59
- Warning: #C97B2E

## Tech Stack (ĐƠN GIẢN - KHÔNG BUILD)
- HTML5 thuần
- CSS3 (không Tailwind)
- Vanilla JavaScript
- Node.js simple server (chỉ để test local)

## Không dùng
- React / Vue / Angular
- Vite / Webpack
- Tailwind / Sass
- Không cần build step

## File Structure
```
toplead-website/
├── index.html      # Tất cả HTML
├── styles.css      # Tất cả CSS
├── script.js        # Animations, form handling
├── server.js        # Simple Node server (optional)
├── assets/          # Images, fonts
└── CLAUDE.md        # File này
```

## Website Sections (theo huntclub.com style)
1. **Navbar** - Navigation cố định
2. **Hero** - Tagline mạnh + CTA (dark background)
3. **Client Logos** - Trust signals
4. **Value Proposition** - 2 columns (Expert Network + Search Platform)
5. **Services** - Executive Search + Team Buildout
6. **Pain Points** - Carousel 3 nhóm vấn đề
7. **Stats** - Metrics từng client
8. **Testimonials** - 3 quotes với avatar
9. **Contact** - Form liên hệ (2 tabs: Ứng viên / Nhà tuyển dụng)
10. **Footer** - 4 columns

## Workflow bắt buộc
1. **CEO Agent** - Phản biện và chốt scope
2. **Tech Lead** - Thiết kế kiến trúc
3. **Build** - Code theo plan
4. **Designer** - Review UI/UX
5. **Security Lead** - Review bảo mật
6. **Release Engineer** - Test, tạo PR

## Quy tắc
- Không nhảy cóc bước
- Báo cáo bằng tiếng Việt đơn giản
- Không dùng thuật ngữ kỹ thuật phức tạp
- Hỏi Hưng trước khi merge/deploy
- Design phải distinctive, không phải "AI slop"

## Chạy local
```bash
# Cách 1: Open index.html trực tiếp (no server needed)
open index.html

# Cách 2: Dùng simple server
node server.js
# Mở http://localhost:3000
```

## Deploy lên Hostinger
- Upload toàn bộ folder lên public_html
- Không cần build gì hết
