export default function SetupPage() {
  return (
    <div className="screen-center setup">
      <span className="eyebrow blue">MINH DUC ACADEMY</span>
      <h1>Ứng dụng đã sẵn sàng kết nối</h1>
      <p>Hệ thống cần Supabase và Cloudflare Stream để bật đăng nhập, kích hoạt học viên và video bảo mật.</p>
      <div className="setup-grid">
        <article><span>01</span><h3>Supabase</h3><p>Tạo project, chạy file schema và thêm URL cùng API keys.</p></article>
        <article><span>02</span><h3>Cloudflare Stream</h3><p>Bật Stream và tạo API token có quyền Stream Write.</p></article>
        <article><span>03</span><h3>Vercel</h3><p>Thêm biến môi trường và redeploy để mở cổng học viên.</p></article>
      </div>
    </div>
  );
}
