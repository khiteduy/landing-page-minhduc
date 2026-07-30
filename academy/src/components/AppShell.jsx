import { useAuth } from "../context/AuthContext";
import { cx } from "../lib/helpers";
import { Link, useRouter } from "../lib/router";

export default function AppShell({ children }) {
  const { profile, signOut } = useAuth();
  const { path } = useRouter();
  const admin = profile?.role === "admin";
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">M</span>
          <div><strong>Minh Duc</strong><small>ACADEMY</small></div>
        </div>
        <nav>
          <Link to="/" className={cx("nav-link", path === "/" && "active")}>Tổng quan</Link>
          {admin && <Link to="/admin" className={cx("nav-link", path === "/admin" && "active")}>Quản trị</Link>}
        </nav>
        <div className="sidebar-bottom">
          <div className="user-chip">
            <span>{profile?.full_name?.[0] || profile?.email?.[0] || "H"}</span>
            <div><strong>{profile?.full_name || "Học viên"}</strong><small>{admin ? "Quản trị viên" : "Quyền học trọn đời"}</small></div>
          </div>
          <button className="button ghost full" onClick={signOut}>Đăng xuất</button>
        </div>
      </aside>
      <main className="main-panel">
        <header className="mobile-header"><div className="brand"><span className="brand-mark">M</span><strong>Minh Duc Academy</strong></div></header>
        {children}
      </main>
    </div>
  );
}
