import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import VideoPlayer from "../components/VideoPlayer";
import { Link, useRouter } from "../lib/router";

export default function LessonPage() {
  const { path } = useRouter();
  const id = path.replace("/bai-hoc/", "");
  const { profile } = useAuth();
  const [lesson, setLesson] = useState(null);
  useEffect(() => {
    supabase.from("lessons").select("*,module:course_modules(*,course:courses(*))").eq("id", id).single().then(({ data }) => setLesson(data));
  }, [id]);
  if (!lesson) return <div className="screen-center"><div className="loader" /></div>;
  const markComplete = () => supabase.from("lesson_progress").upsert({ user_id: profile.id, lesson_id: lesson.id, completed: true, updated_at: new Date().toISOString() });
  return (
    <div className="lesson-page">
      <Link className="back-link light-link" to={`/khoa-hoc/${lesson.module.course.slug}`}>← {lesson.module.course.title}</Link>
      <VideoPlayer lessonId={lesson.id} watermark={profile.email} />
      <div className="lesson-content">
        <div><span className="eyebrow blue">BÀI GIẢNG</span><h1>{lesson.title}</h1><p>{lesson.description}</p></div>
        <button className="button primary" onClick={markComplete}>Đánh dấu hoàn thành ✓</button>
      </div>
    </div>
  );
}
