# Minh Duc Academy

LMS tại `/khoahoc` với đăng nhập học viên, duyệt tài khoản, cấp quyền học trọn đời, quản trị nội dung và upload video bảo mật.

## Thiết lập

1. Tạo Supabase project, mở SQL Editor và chạy `supabase/schema.sql`.
2. Đăng ký tài khoản admin trên website, sau đó chạy câu lệnh cuối schema để nâng quyền.
3. Bật Cloudflare Stream và tạo API token có quyền Stream Write.
4. Điền các biến trong `.env.example` vào Vercel.
5. Deploy lại ứng dụng.

Video dùng Cloudflare Stream Direct Creator Upload với tus, hỗ trợ file lớn và tiếp tục upload. Playback token được cấp trên server sau khi xác minh trạng thái học viên và enrollment.
