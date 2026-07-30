import { useEffect, useMemo, useState } from "react";
import * as tus from "tus-js-client";
import { supabase } from "../lib/supabase";
import { slugify } from "../lib/helpers";
import { useAuth } from "../context/AuthContext";

export default function AdminPage() {
  const { session, profile } = useAuth();
  const [tab, setTab] = useState("students");
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [modules, setModules] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [courseTitle, setCourseTitle] = useState("");
  const [moduleForm, setModuleForm] = useState({ courseId: "", title: "" });
  const [lessonForm, setLessonForm] = useState({ moduleId: "", title: "", description: "" });
  const [file, setFile] = useState(null);
  const [upload, setUpload] = useState({ progress: 0, state: "" });

  const refresh = async () => {
    const [profilesRes, coursesRes, modulesRes, enrollmentsRes] = await Promise.all([
      supabase.from("profiles").select("*").order("created_at", { ascending: false }),
      supabase.from("courses").select("*").order("created_at"),
      supabase.from("course_modules").select("*").order("position"),
      supabase.from("enrollments").select("*"),
    ]);
    setStudents(profilesRes.data || []);
    setCourses(coursesRes.data || []);
    setModules(modulesRes.data || []);
    setEnrollments(enrollmentsRes.data || []);
  };
  useEffect(() => { refresh(); }, []);

  const stats = useMemo(() => ({
    active: students.filter((item) => item.status === "active").length,
    pending: students.filter((item) => item.status === "pending").length,
    courses: courses.length,
  }), [students, courses]);

  const setStatus = async (student, status) => {
    await supabase.from("profiles").update({ status, activated_at: status === "active" ? new Date().toISOString() : student.activated_at }).eq("id", student.id);
    refresh();
  };

  const toggleEnrollment = async (studentId, courseId) => {
    const existing = enrollments.find((row) => row.user_id === studentId && row.course_id === courseId);
    if (existing) await supabase.from("enrollments").delete().eq("id", existing.id);
    else await supabase.from("enrollments").insert({ user_id: studentId, course_id: courseId, granted_by: profile.id });
    refresh();
  };

  const addCourse = async (event) => {
    event.preventDefault();
    await supabase.from("courses").insert({ title: courseTitle, slug: slugify(courseTitle), is_published: true });
    setCourseTitle("");
    refresh();
  };

  const addModule = async (event) => {
    event.preventDefault();
    const position = modules.filter((item) => item.course_id === moduleForm.courseId).length;
    await supabase.from("course_modules").insert({ course_id: moduleForm.courseId, title: moduleForm.title, position });
    setModuleForm({ courseId: "", title: "" });
    refresh();
  };

  const uploadVideo = async (event) => {
    event.preventDefault();
    if (!file || !lessonForm.moduleId || !lessonForm.title) return;
    setUpload({ progress: 0, state: "Đang tải video…" });
    const uploader = new tus.Upload(file, {
      endpoint: "/api/direct-upload",
      headers: { Authorization: `Bearer ${session.access_token}` },
      chunkSize: 50 * 1024 * 1024,
      retryDelays: [0, 3000, 5000, 10000],
      metadata: {
        filename: file.name,
        filetype: file.type,
        name: lessonForm.title,
        requiresignedurls: "",
      },
      onError: (error) => setUpload({ progress: 0, state: error.message }),
      onProgress: (uploaded, total) => setUpload({ progress: Math.round((uploaded / total) * 100), state: "Đang tải video…" }),
      onSuccess: async () => {
        const cloudflareUid = uploader.url?.split("/").filter(Boolean).pop();
        const moduleLessons = await supabase.from("lessons").select("id").eq("module_id", lessonForm.moduleId);
        const { error } = await supabase.from("lessons").insert({
          module_id: lessonForm.moduleId,
          title: lessonForm.title,
          description: lessonForm.description,
          cloudflare_video_uid: cloudflareUid,
          position: moduleLessons.data?.length || 0,
          is_published: true,
        });
        setUpload({ progress: 100, state: error ? error.message : "Đã tải video và tạo bài giảng." });
        if (!error) {
          setLessonForm({ moduleId: "", title: "", description: "" });
          setFile(null);
        }
      },
    });
    uploader.start();
  };

  return (
    <div className="page admin-page">
      <header className="page-heading admin-heading">
        <div><span className="eyebrow blue">TRUNG TÂM ĐIỀU HÀNH</span><h1>Quản trị <em>Academy.</em></h1></div>
        <div className="admin-stats"><div><strong>{stats.active}</strong><span>Đang học</span></div><div><strong>{stats.pending}</strong><span>Chờ duyệt</span></div><div><strong>{stats.courses}</strong><span>Khóa học</span></div></div>
      </header>
      <div className="tabs">
        <button className={tab === "students" ? "active" : ""} onClick={() => setTab("students")}>Học viên</button>
        <button className={tab === "content" ? "active" : ""} onClick={() => setTab("content")}>Nội dung</button>
        <button className={tab === "upload" ? "active" : ""} onClick={() => setTab("upload")}>Đăng video</button>
      </div>

      {tab === "students" && <section className="admin-card">
        <div className="section-title"><h2>Danh sách học viên</h2><span>{students.length} tài khoản</span></div>
        <div className="table-wrap"><table><thead><tr><th>Học viên</th><th>Trạng thái</th><th>Khóa học trọn đời</th><th>Thao tác</th></tr></thead><tbody>
          {students.filter((item) => item.role !== "admin").map((student) => (
            <tr key={student.id}>
              <td><strong>{student.full_name || "Chưa cập nhật"}</strong><small>{student.email}</small></td>
              <td><span className={`status ${student.status}`}>{student.status === "active" ? "Đang hoạt động" : student.status === "pending" ? "Chờ kích hoạt" : "Tạm khóa"}</span></td>
              <td><div className="course-toggles">{courses.map((course) => <label key={course.id}><input type="checkbox" checked={enrollments.some((row) => row.user_id === student.id && row.course_id === course.id)} onChange={() => toggleEnrollment(student.id, course.id)} />{course.title}</label>)}</div></td>
              <td><div className="row-actions">{student.status !== "active" && <button onClick={() => setStatus(student, "active")}>Kích hoạt</button>}{student.status === "active" && <button onClick={() => setStatus(student, "suspended")}>Tạm khóa</button>}</div></td>
            </tr>
          ))}
        </tbody></table></div>
      </section>}

      {tab === "content" && <div className="admin-grid">
        <form className="admin-card form-card" onSubmit={addCourse}><span className="eyebrow blue">KHÓA HỌC</span><h2>Tạo khóa học mới</h2><label>Tên khóa học<input value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)} required placeholder="Facebook Ads thực chiến" /></label><button className="button primary">Tạo khóa học</button></form>
        <form className="admin-card form-card" onSubmit={addModule}><span className="eyebrow blue">CHƯƠNG HỌC</span><h2>Thêm chương</h2><label>Khóa học<select value={moduleForm.courseId} onChange={(e) => setModuleForm({ ...moduleForm, courseId: e.target.value })} required><option value="">Chọn khóa học</option>{courses.map((course) => <option key={course.id} value={course.id}>{course.title}</option>)}</select></label><label>Tên chương<input value={moduleForm.title} onChange={(e) => setModuleForm({ ...moduleForm, title: e.target.value })} required /></label><button className="button primary">Thêm chương</button></form>
        <section className="admin-card content-tree"><span className="eyebrow blue">CẤU TRÚC</span><h2>Nội dung hiện có</h2>{courses.map((course) => <div className="tree-course" key={course.id}><strong>{course.title}</strong>{modules.filter((item) => item.course_id === course.id).map((module) => <span key={module.id}>↳ {module.title}</span>)}</div>)}</section>
      </div>}

      {tab === "upload" && <form className="admin-card upload-card" onSubmit={uploadVideo}>
        <div><span className="eyebrow blue">VIDEO BÀI GIẢNG</span><h2>Đăng bài giảng mới</h2><p>Video được tải thẳng lên Cloudflare Stream, có thể tiếp tục khi mạng gián đoạn và chỉ học viên có quyền mới xem được.</p></div>
        <div className="form-grid">
          <label>Chương học<select value={lessonForm.moduleId} onChange={(e) => setLessonForm({ ...lessonForm, moduleId: e.target.value })} required><option value="">Chọn chương</option>{modules.map((module) => <option key={module.id} value={module.id}>{courses.find((course) => course.id === module.course_id)?.title} — {module.title}</option>)}</select></label>
          <label>Tiêu đề bài giảng<input value={lessonForm.title} onChange={(e) => setLessonForm({ ...lessonForm, title: e.target.value })} required /></label>
          <label className="span-2">Mô tả<textarea value={lessonForm.description} onChange={(e) => setLessonForm({ ...lessonForm, description: e.target.value })} rows="4" /></label>
          <label className="file-picker span-2"><input type="file" accept="video/*" onChange={(e) => setFile(e.target.files[0])} required /><span>{file ? file.name : "Chọn hoặc kéo video vào đây"}</span><small>MP4, MOV, WebM · hỗ trợ file lớn và tải tiếp khi gián đoạn</small></label>
        </div>
        {upload.state && <div className="upload-progress"><div style={{ width: `${upload.progress}%` }} /><span>{upload.state} {upload.progress}%</span></div>}
        <button className="button primary">Tải video và tạo bài giảng</button>
      </form>}
    </div>
  );
}
