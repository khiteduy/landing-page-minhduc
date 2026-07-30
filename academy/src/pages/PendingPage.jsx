import { useAuth } from "../context/AuthContext";

export default function PendingPage() {
  const { profile, refreshProfile, signOut } = useAuth();
  return (
    <div className="screen-center pending">
      <div className="status-icon">✓</div>
      <span className="eyebrow blue">ĐÃ NHẬN ĐĂNG KÝ</span>
      <h1>Đang chờ kích hoạt</h1>
      <p>Tài khoản <strong>{profile?.email}</strong> đã được tạo. Minh Duc Academy sẽ kích hoạt và cấp khóa học sau khi xác nhận thông tin.</p>
      <div className="inline-actions">
        <button className="button primary" onClick={refreshProfile}>Kiểm tra lại</button>
        <button className="button secondary" onClick={signOut}>Đăng xuất</button>
      </div>
    </div>
  );
}
