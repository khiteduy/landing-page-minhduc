import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { formatDuration } from "../lib/helpers";
import { Link, useRouter } from "../lib/router";

export default function CoursePage() {
  const { path } = useRouter();
  const slug = decodeURIComponent(path.replace("/khoa-hoc/", ""));
  const [course, setCourse] = useState(null);
  const [modules, setModules] = useState([]);
  useEffect(() => {
    (async () => {
      const { data: courseData } = await supabase.from("courses").select("*").eq("slug", slug).single();
      setCourse(courseData);
      if (!courseData) return;
      const { data } = await supabase.from("course_modules").select("*,lessons(*)").eq("course_id", courseData.id).order("position").order("position", { referencedTable: "lessons" });
      setModules(data || []);
    })();
  }, [slug]);
  if (!course) return <div className="screen-center"><div className="loader" /></div>;
  const lessons = modules.flatMap((module) => module.lessons || []);
  return (
    <div className="page">
      <Link className="back-link" to="/">← Trở về khóa học</Link>
      <header className="course-hero"><span className="eyebrow">KHÓA HỌC TRỌN ĐỜI</span><h1>{course.title}</h1><p>{course.description}</p><div className="course-meta"><span>{modules.length} chương</span><span>{lessons.length} bài giảng</span></div></header>
      <div className="module-list">
        {modules.map((module, moduleIndex) => (
          <section className="module" key={module.id}>
            <div className="module-heading"><span>{String(moduleIndex + 1).padStart(2, "0")}</span><div><small>CHƯƠNG {moduleIndex + 1}</small><h2>{module.title}</h2></div></div>
            <div className="lesson-list">
              {(module.lessons || []).map((lesson, index) => (
                <Link to={`/bai-hoc/${lesson.id}`} className="lesson-row" key={lesson.id}>
                  <span className="play">▶</span><div><small>BÀI {index + 1}</small><strong>{lesson.title}</strong></div><span>{formatDuration(lesson.duration_seconds)}</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
