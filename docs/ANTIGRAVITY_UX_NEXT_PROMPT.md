# Prompt cho Antigravity - UX vòng tiếp theo

Bạn đang làm tiếp website Minh Duc Global trong repo `landing-page-minhduc`.

CodeX đã xử lý phần lõi:

- Build production đang pass.
- Form đã dùng Google Apps Script bằng `no-cors`, phù hợp webhook hiện tại.
- Floating CTA được chỉnh để ẩn khi người dùng tới gần form liên hệ, tránh che thao tác nhập.
- Wording case Bee đã được làm an toàn hơn, không claim "Meta Partner" nếu chưa có bằng chứng chính thức.
- Cache npm đã được loại khỏi Git.

Nhiệm vụ của bạn: tối ưu trải nghiệm người dùng và cảm giác chuyên nghiệp, không sửa webhook, không tạo project Vercel mới.

Ưu tiên UX:

1. Mobile first:
   - Kiểm tra toàn bộ trang chủ ở width 390px và 430px.
   - Đảm bảo header mobile, floating CTA, case card, form, lightbox không che nhau.
   - Các tiêu đề dài không được dính chữ hoặc tràn khung.

2. Case study:
   - Với case Bee, diễn đạt chính xác: "Bee English Community là case xuất hiện trong thư viện Meta/Facebook Business Success".
   - Không dùng wording "đối tác chính thức của Facebook" nếu không có chứng cứ rõ.
   - Các proof video/link cần có fallback nếu video Facebook/static asset không load.

3. Visual hierarchy:
   - Dải số liệu gần Hero phải dễ scan, không quá giống card trang trí.
   - Case chính cần ưu tiên Cardi, Lua Viet, Bee, Bánh gà.
   - Chạn chỉ giữ ngang hàng nếu proof Maps/TripAdvisor thật sự rõ; nếu không chắc thì chuyển xuống nhóm "đang cập nhật thêm dữ liệu".

4. Performance:
   - Ảnh lớn nên dùng `loading="lazy"` và kích thước hiển thị hợp lý.
   - Không thêm ảnh stock không liên quan.
   - Không thêm thư viện nặng nếu không thật sự cần.

5. Trước khi kết thúc:
   - Chạy `npm run build`.
   - Chạy `git diff --check`.
   - Ghi rõ các file đã sửa và lý do.

Giữ phong cách xanh/trắng sáng, corporate agency, không chuyển về dark theme.
