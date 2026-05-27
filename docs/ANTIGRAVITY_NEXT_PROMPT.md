# Prompt cho Antigravity - Vòng tối ưu tiếp theo

Bạn đang làm tiếp website Minh Duc Global tại repo `landing-page-minhduc`.

Mục tiêu: nâng landing page từ mức portfolio/agency thành phễu bán hàng kép rõ ràng cho 2 nhóm:

1. Doanh nghiệp cần dịch vụ Performance Marketing, Google Ads, TikTok Ads, Local Map, Content Growth, AI Automation.
2. Học viên muốn học Facebook Ads, Google Ads, TikTok Ads, Shopee thực chiến.

Các thay đổi đã có:

- Đã thêm section `AudiencePathSection` ngay sau Hero để tách 2 luồng doanh nghiệp/học viên.
- Contact form đã phân nhánh theo `needGroup`.
- Case study đã có filter thật, lightbox proof và Chạn Niêu Đà Nẵng được đưa xuống nhóm đang cập nhật.
- Phần khóa học Facebook Ads đã có lộ trình, gói học và case học viên Quyên.

Hãy làm tiếp các việc sau, giữ nguyên brand màu xanh/trắng hiện tại và không tạo project Vercel mới:

1. Tối ưu mobile UX:
   - Case card trên mobile cần gọn hơn, ưu tiên tên case, 3 số liệu, proof chính và nút xem chi tiết.
   - Nội dung dài trên mobile có thể collapse/mở rộng.
   - Kiểm tra CTA nổi không che form.

2. Tạo trang chi tiết khóa Facebook Ads:
   - URL đề xuất: `/khoa-hoc-facebook-ads`
   - Nội dung gồm: phù hợp với ai, học xong làm được gì, lộ trình từng buổi, bài thực hành, hỗ trợ sau học, gói học, feedback Quyên.
   - CTA chính: `Nhận tư vấn lộ trình học Facebook Ads`.

3. Tạo trang chi tiết case Cardi:
   - URL đề xuất: `/case-study/cardi-pizzeria`
   - Trình bày theo: bối cảnh, mục tiêu, việc đã triển khai, số liệu, ảnh proof, kết luận ROAS 26.25X.
   - Caption proof cần rõ: doanh thu 624.600.000đ, Google Ads 23.791.158đ.

4. Thêm brand trust section:
   - Tiêu đề: `Dự án và lĩnh vực đã triển khai`
   - Hiển thị Lúa Việt, Cardi Pizzeria, Bee English Community, Bánh gà Phan Văn Trường, Chạn Niêu Đà Nẵng.
   - Nếu chưa có logo thật, dùng typography card sạch, không dùng logo giả.

5. Tối ưu visual:
   - Không dùng nền quá sáng làm mất chữ.
   - Tăng line-height ở các tiêu đề dài.
   - Không làm giao diện rối, ưu tiên chuyển đổi.
   - Giữ layout responsive và chạy `npm run build` trước khi kết thúc.

Sau khi làm xong, hãy commit lên một branch riêng hoặc push vào main nếu được yêu cầu. Không sửa webhook URL và không xóa các section hiện có.
