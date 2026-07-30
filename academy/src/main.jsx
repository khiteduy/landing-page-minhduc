import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/AuthContext";
import AppShell from "./components/AppShell";
import LoginPage from "./pages/LoginPage";
import PendingPage from "./pages/PendingPage";
import SetupPage from "./pages/SetupPage";
import DashboardPage from "./pages/DashboardPage";
import CoursePage from "./pages/CoursePage";
import LessonPage from "./pages/LessonPage";
import AdminPage from "./pages/AdminPage";
import { RouterProvider, useRouter } from "./lib/router";
import { useAuth } from "./context/AuthContext";
import "./styles.css";

function AppRoutes() {
  const { path, navigate } = useRouter();
  const { configured, loading, session, profile } = useAuth();
  if (!configured) return <SetupPage />;
  if (loading) return <div className="screen-center"><div className="loader" /><p>Đang kiểm tra quyền truy cập…</p></div>;
  if (!session) return <LoginPage />;
  if (!profile || profile.status === "pending") return <PendingPage />;
  if (profile.status === "suspended") return <PendingPage />;
  let page = <DashboardPage />;
  if (path.startsWith("/khoa-hoc/")) page = <CoursePage />;
  else if (path.startsWith("/bai-hoc/")) page = <LessonPage />;
  else if (path === "/admin" && profile.role === "admin") page = <AdminPage />;
  else if (path === "/dang-nhap" || path === "/cho-kich-hoat" || path === "/thiet-lap") {
    setTimeout(() => navigate("/", { replace: true }), 0);
  }
  return <AppShell>{page}</AppShell>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </RouterProvider>
  </React.StrictMode>
);
