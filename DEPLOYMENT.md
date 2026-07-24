# TopLead Recruitment — Deployment & DNS (topleadrecruit.com)

## Nền tảng phát hiện được
Repo là **website tĩnh HTML/CSS/JS thuần** — không có `vercel.json`, `netlify.toml`,
`package.json` build script, hay framework (Next/Vite). Vì vậy cách deploy **đơn giản
và khuyến nghị nhất là hosting tĩnh của Hostinger** (upload thẳng vào `public_html`).
Bạn vẫn có thể deploy lên Vercel/Netlify/Cloudflare Pages nếu muốn CDN — phần DNS cho
các nền tảng đó có bên dưới.

> Domain `topleadrecruit.com` mua tại Hostinger, nên nameserver đang trỏ về Hostinger.
> DNS **có thể mất 5 phút đến 24 giờ** để lan truyền.

---

## PHƯƠNG ÁN A — Hostinger hosting tĩnh (khuyến nghị, không cần đổi DNS)

1. Đăng nhập **hPanel** → **Websites** → chọn gói hosting → **Dashboard**.
2. Vào **File Manager** → thư mục `public_html`.
3. Upload **toàn bộ nội dung repo** vào `public_html` (giữ nguyên cấu trúc thư mục:
   các file `.html`, `styles.css`, `script.js`, `jobs.js`, `jobs.json`, thư mục
   `assets/`, `public/`, và các file favicon/`og-image.png`/`sitemap.xml`/`robots.txt`/
   `site.webmanifest` ở gốc). Xoá file `default`/`index` mẫu nếu Hostinger tạo sẵn.
4. Gắn domain: hPanel → **Domains** → **topleadrecruit.com** → đảm bảo domain được
   trỏ (Point) tới website/hosting này. Nếu domain và hosting cùng tài khoản Hostinger,
   nameserver mặc định đã đúng — không cần thêm record.
5. Bật **SSL**: hPanel → **Security → SSL** → cài (Let's Encrypt miễn phí) cho
   apex và www → bật **Force HTTPS**.
6. Chọn 1 canonical (khuyến nghị **apex** `topleadrecruit.com`): hPanel → domain →
   **Redirects** → thêm `www.topleadrecruit.com` → `https://topleadrecruit.com` (301).

**DNS records (chỉ khi domain KHÔNG dùng nameserver Hostinger mặc định):**
| Type | Name | Value |
|---|---|---|
| A | @ | (IP hosting Hostinger — xem hPanel → Hosting → Details) |
| CNAME | www | topleadrecruit.com |

---

## PHƯƠNG ÁN B — Deploy lên CDN (Vercel / Netlify / Cloudflare Pages)

Deploy repo dạng static (không build command, output = thư mục gốc). Sau đó vào
**Hostinger → Domains → topleadrecruit.com → DNS / Nameservers** và thêm records
tương ứng nền tảng:

**Vercel**
| Type | Name | Value |
|---|---|---|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

**Netlify**
| Type | Name | Value |
|---|---|---|
| A | @ | 75.2.60.5 |
| CNAME | www | `<your-site>.netlify.app` |

**Cloudflare Pages**
| Type | Name | Value |
|---|---|---|
| CNAME | @ | `<project>.pages.dev` |
| CNAME | www | `<project>.pages.dev` |

Sau khi thêm record:
1. **Xoá A/CNAME cũ nếu trùng** (@ hoặc www) để tránh conflict.
2. Vào dashboard nền tảng (Vercel/Netlify/CF) → **Add domain `topleadrecruit.com`**
   (và `www`) → nền tảng sẽ tự cấp **SSL**.
3. Chọn **canonical** (apex hoặc www) và bật redirect + **Force HTTPS** trong dashboard.

---

## Kiểm tra sau khi trỏ DNS
1. Kiểm tra lan truyền DNS: **https://dnschecker.org** → nhập `topleadrecruit.com`
   (record A/CNAME) → chờ đa số location xanh.
2. Mở thử:
   - https://topleadrecruit.com
   - https://www.topleadrecruit.com  → phải **redirect** về bản canonical đã chọn.
3. Xác nhận **ổ khoá HTTPS** hiển thị (SSL hoạt động).
4. Kiểm tra `https://topleadrecruit.com/sitemap.xml` và `/robots.txt` tải được.
5. Chia sẻ link lên Facebook/Zalo để xem **og-image** hiện đúng (dùng
   https://developers.facebook.com/tools/debug/ để refresh cache OG).

> Nếu chưa vào được sau khi cấu hình: đợi thêm (tối đa 24h), hoặc xoá cache DNS máy
> (`sudo dscacheutil -flushcache` trên macOS) rồi thử lại.
