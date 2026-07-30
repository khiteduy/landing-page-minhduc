import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import { Link } from "../lib/router";

export default function DashboardPage() {
  const { profile } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from("enrollments").select("course:courses(*)").order("granted_at", { ascending: false })
      .then(({ data }) => setCourses((data || []).map((row) => row.course).filter(Boolean)))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="page">
      <header className="page-heading">
        <div><span className="eyebrow blue">KHÔNG GIAN HỌC TẬP</span><h1>Chào {profile?.full_name || "bạn"},<br /><em>tiếp tục tiến bộ hôm nay.</em></h1></div>
        <div className="lifetime-badge"><span>∞</span><div><strong>Quyền học trọn đời</strong><small>Không giới hạn thời gian</small></div></div>
      </header>
      <section>
        <div className="section-title"><h2>Khóa học của bạn</h2><span>{courses.length} khóa học</span></div>
        {loading ? <div className="empty-card">Đang tải khóa học…</div> : courses.length ? (
          <div className="course-grid">
            {courses.map((course, index) => (
              <Link className="course-card" to={`/khoa-hoc/${course.slug}`} key={course.id}>
                <div className="course-cover" style={course.cover_url ? { backgroundImage: `url(${course.cover_url})` } : {}}>
                  <span>KHÓA {String(index + 1).padStart(2, "0")}</span><b>{course.title}</b>
                </div>
                <div className="course-info"><div><h3>{course.title}</h3><p>{course.description || "Bài giảng thực chiến, cập nhật liên tục."}</p></div><span className="circle-arrow">→</span></div>
              </Link>
            ))}
          </div>
        ) : <div className="empty-card"><h3>Chưa được cấp khóa học</h3><p>Quản trị viên đã kích hoạt tài khoản nhưng chưa gán khóa học. Vui lòng liên hệ Minh Duc Academy.</p></div>}
      </section>
    </div>
  );
}
