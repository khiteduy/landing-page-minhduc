import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "../lib/router";

export default function LoginPage() {
  const { session, profile } = useAuth();
  const { navigate } = useRouter();
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  if (session) {
    setTimeout(() => navigate(profile?.status === "pending" ? "/cho-kich-hoat" : "/", { replace: true }), 0);
    return null;
  }

  const submit = async (event) => {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    try {
      if (mode === "register") {
        const { error } = await supabase.auth.signUp({
          email: form.email,
          password: form.password,
          options: { data: { full_name: form.fullName } },
        });
        if (error) throw error;
        setMessage("Đăng ký thành công. Vui lòng kiểm tra email, sau đó chờ quản trị viên kích hoạt.");
      } else if (mode === "reset") {
        const { error } = await supabase.auth.resetPasswordForEmail(form.email, {
          redirectTo: `${window.location.origin}/khoahoc/dang-nhap`,
        });
        if (error) throw error;
        setMessage("Đã gửi liên kết đặt lại mật khẩu vào email của bạn.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email: form.email, password: form.password });
        if (error) throw error;
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="auth-page">
      <section className="auth-story">
        <div className="brand light"><span className="brand-mark">M</span><div><strong>Minh Duc</strong><small>ACADEMY</small></div></div>
        <div>
          <span className="eyebrow">HỌC ĐỂ LÀM ĐƯỢC</span>
          <h1>Nắm tư duy.<br />Làm chủ quảng cáo.<br /><em>Tự tạo kết quả.</em></h1>
          <p>Kho bài giảng thực chiến dành riêng cho học viên đã được kích hoạt.</p>
        </div>
        <div className="auth-proof"><span>01</span><p>Quyền truy cập trọn đời theo khóa học</p></div>
      </section>
      <section className="auth-card-wrap">
        <form className="auth-card" onSubmit={submit}>
          <span className="eyebrow blue">{mode === "register" ? "ĐĂNG KÝ HỌC VIÊN" : "CỔNG HỌC VIÊN"}</span>
          <h2>{mode === "login" ? "Chào mừng trở lại" : mode === "register" ? "Tạo tài khoản" : "Lấy lại mật khẩu"}</h2>
          <p>{mode === "login" ? "Đăng nhập để tiếp tục bài học của bạn." : "Tài khoản mới cần được quản trị viên kích hoạt."}</p>
          {mode === "register" && <label>Họ và tên<input value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} required /></label>}
          <label>Email<input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required autoComplete="email" /></label>
          {mode !== "reset" && <label>Mật khẩu<input type="password" minLength="8" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required autoComplete={mode === "login" ? "current-password" : "new-password"} /></label>}
          {message && <div className="notice">{message}</div>}
          <button className="button primary full" disabled={busy}>{busy ? "Đang xử lý…" : mode === "login" ? "Đăng nhập" : mode === "register" ? "Đăng ký tài khoản" : "Gửi liên kết"}</button>
          <div className="auth-actions">
            <button type="button" onClick={() => setMode(mode === "register" ? "login" : "register")}>{mode === "register" ? "Đã có tài khoản" : "Đăng ký mới"}</button>
            <button type="button" onClick={() => setMode(mode === "reset" ? "login" : "reset")}>{mode === "reset" ? "Quay lại" : "Quên mật khẩu?"}</button>
          </div>
        </form>
      </section>
    </div>
  );
}
