# Prompt cho Antigravity: tối ưu hình ảnh dịch vụ và màu Case Study

Bạn đang làm tiếp repo React/Vite/Tailwind của Minh Duc Global tại:
`/Users/macbook/Documents/LANDING PAGE`

Live chính: `https://minhducglobal.vercel.app`

## Mục tiêu
Tối ưu 2 phần giao diện sau mà KHÔNG thay đổi logic form/webhook/tracking:

1. Section `DỊCH VỤ CỦA CHÚNG TÔI`
2. Section `DỰ ÁN TIÊU BIỂU & THỰC CHIẾN`

## Việc cần làm

### 1. DỊCH VỤ CỦA CHÚNG TÔI: bổ sung hình ảnh sát thực tế
File chính cần xem: `src/components/ServicesSection.jsx`

Yêu cầu:
- Mỗi nhóm dịch vụ nên có hình/visual minh họa thực tế hơn, không chỉ icon trừu tượng.
- Có thể dùng các asset hiện có trong `public/course-assets/` nếu phù hợp:
  - `facebook-bm-dashboard.png`: minh họa Facebook/BM/tài khoản quảng cáo.
  - `google-ads-dashboard.png`: minh họa Google Ads/dashboard.
  - `tiktok-live-violation.png`: minh họa TikTok/social support.
  - `facebook-checkpoint.png`: minh họa xử lý khóa/lỗi tài khoản.
  - `pinterest-1.png`, `pinterest-2.png`, `pinterest-3.png`: chỉ dùng nếu thật sự hợp ngữ cảnh visual ads/content.
- Nếu asset chưa đủ, tạo layout dạng mock dashboard bằng HTML/CSS thay vì dùng ảnh stock chung chung.
- Giữ phong cách sáng, xanh nước biển, corporate agency, nhiều khoảng trắng.
- Hình ảnh không được làm rối chữ, ưu tiên card rõ, dễ đọc trên mobile.
- Thêm `alt` đầy đủ cho ảnh.

### 2. DỰ ÁN TIÊU BIỂU & THỰC CHIẾN: sửa màu khó đọc
File chính cần xem:
- `src/components/CaseStudiesSection.jsx`
- `src/styles.css` phần `.cases-hero`, `.case-kpi`

Yêu cầu:
- Fix triệt để lỗi chữ xanh trên nền xanh gây khó đọc.
- Heading, eyebrow, mô tả, KPI phải đạt contrast tốt.
- Có thể đổi hero panel sang nền xanh đậm/tươi hơn nhưng chữ phải trắng hoặc xanh rất nhạt.
- Không dùng text `#2563EB` trực tiếp trên nền xanh nếu contrast thấp.
- KPI card cần rõ label và số liệu, không bị mờ.
- Test desktop và mobile.

## Ràng buộc quan trọng
- Không đổi webhook Google Sheet.
- Không đổi logic form submit.
- Không đổi URL route hiện có.
- Không đưa lại Chạn Niêu vào nhóm case có số liệu. Chạn Niêu là case listing/SEO địa phương, không cần ROAS/doanh thu.
- Không thêm thư viện mới nếu không cần.
- Sau khi sửa phải chạy `npm run build`.

## Kết quả mong muốn
- UI dịch vụ có hình minh họa thật hơn, nhìn đáng tin hơn.
- Case hero đọc rõ ngay trên cả màn hình lớn và mobile.
- Không có lỗi build.
