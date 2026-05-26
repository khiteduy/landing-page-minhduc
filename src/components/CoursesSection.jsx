import React from "react";
import { Link } from "react-router-dom";

/* ── Icons ─────────────────────────────────────── */
const IconFacebook = () => (
  <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
    <rect x="4" y="4" width="36" height="36" rx="10" stroke="#2563EB" strokeWidth="1.5" fill="#2563EB" fillOpacity="0.06"/>
    <path d="M26 13h-3a5 5 0 00-5 5v3h-3v4h3v8h4v-8h3l1-4h-4v-3a1 1 0 011-1h3v-4z" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconGoogle = () => (
  <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
    <rect x="4" y="4" width="36" height="36" rx="10" stroke="#2563EB" strokeWidth="1.5" fill="#2563EB" fillOpacity="0.06"/>
    <path d="M31 22.3c0-.7-.06-1.4-.18-2H22v3.77h5.05a4.32 4.32 0 01-1.87 2.83v2.35h3.02C30.2 27.6 31 25.1 31 22.3z" fill="#2563EB" fillOpacity="0.8"/>
    <path d="M22 32c2.52 0 4.64-.83 6.19-2.26l-3.02-2.34c-.84.56-1.9.9-3.17.9-2.44 0-4.5-1.64-5.24-3.86H13.6v2.42A9.37 9.37 0 0022 32z" fill="#2563EB" fillOpacity="0.5"/>
    <path d="M16.76 24.44A5.62 5.62 0 0116.47 22c0-.84.15-1.66.29-2.44V17.1H13.6A9.37 9.37 0 0012.63 22c0 1.52.36 2.96 1 4.24l3.13-1.8z" fill="#2563EB" fillOpacity="0.4"/>
    <path d="M22 15.7c1.37 0 2.6.47 3.57 1.4l2.67-2.67A9.35 9.35 0 0022 12.62a9.37 9.37 0 00-8.4 5.24l3.16 2.46c.74-2.22 2.8-3.62 5.24-3.62z" fill="#2563EB" fillOpacity="0.3"/>
  </svg>
);
const IconTikTok = () => (
  <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
    <rect x="4" y="4" width="36" height="36" rx="10" stroke="#2563EB" strokeWidth="1.5" fill="#2563EB" fillOpacity="0.06"/>
    <path d="M28.5 14a4.5 4.5 0 004.5 4.5v3a7.5 7.5 0 01-4.5-1.5v6.5a6.5 6.5 0 11-6.5-6.5h.5v3h-.5a3.5 3.5 0 103.5 3.5V14h3z" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconShopee = () => (
  <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
    <rect x="4" y="4" width="36" height="36" rx="10" stroke="#2563EB" strokeWidth="1.5" fill="#2563EB" fillOpacity="0.06"/>
    <path d="M14 18h16l-2 12H16L14 18z" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 18v-2a4 4 0 018 0v2" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="19.5" cy="24" r="1.2" fill="#2563EB"/>
    <circle cx="24.5" cy="24" r="1.2" fill="#2563EB"/>
  </svg>
);

const courses = [
  {
    icon: <IconFacebook />,
    title: "Facebook Ads",
    badge: "Phổ biến nhất",
    badgeColor: "bg-blue-100 text-blue-700",
    desc: "Từ người mới đến người có thể tự set camp, đọc chỉ số, tối ưu chi phí tin nhắn và tạo đơn hàng.",
    points: ["Set camp đúng cấu trúc", "Đọc CPM, CTR, CPC, CPA", "Scale chiến dịch thực chiến"],
    accent: "hover:border-blue-200",
    detailLink: "/khoa-hoc-facebook-ads",
  },
  {
    icon: <IconGoogle />,
    title: "Google Ads & Map",
    badge: "ROAS cao nhất",
    badgeColor: "bg-emerald-100 text-emerald-700",
    desc: "Học cách kéo khách hàng có nhu cầu thật qua Search, Local Map và hệ thống đo lường theo doanh thu.",
    points: ["Google Search Ads", "Local Map & Google Maps", "Đo lường chuyển đổi"],
    accent: "hover:border-emerald-200",
  },
  {
    icon: <IconTikTok />,
    title: "TikTok Ads & Organic",
    badge: "Trending",
    badgeColor: "bg-rose-100 text-rose-700",
    desc: "Triển khai quảng cáo và nội dung ngắn theo hành vi người xem, phù hợp sản phẩm tăng nhận diện.",
    points: ["Tư duy video ngắn", "Setup TikTok Ads", "Tối ưu chi phí chuyển đổi"],
    accent: "hover:border-rose-200",
  },
  {
    icon: <IconShopee />,
    title: "Shopee thực chiến",
    badge: "TMĐT",
    badgeColor: "bg-orange-100 text-orange-700",
    desc: "Xây dựng gian hàng, tối ưu sản phẩm, traffic và chuyển đổi trên sàn thương mại điện tử.",
    points: ["Tối ưu gian hàng", "SEO tiêu đề sản phẩm", "Tăng tỷ lệ ra đơn"],
    accent: "hover:border-orange-200",
  },
];

/* ── Feedback học viên ────────────────────────── */
const studentFeedbacks = [
  {
    name: "Học viên Quyên",
    job: "Kinh doanh xe điện",
    avatar: "Q",
    avatarColor: "bg-blue-100 text-blue-700",
    quote: "Bắt đầu từ số 0, sau khóa học em đã tự vận hành Facebook Ads ra đơn với chi phí chỉ 3,000đ – 5,000đ/mess. Thầy dạy thực tế, không có lý thuyết dài dòng.",
    result: "3k–5k đ/mess",
    resultLabel: "Chi phí tin nhắn",
    videoSrc: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F18izSvaN8g%2F&show_text=false",
    videoLink: "https://www.facebook.com/share/v/18izSvaN8g/",
    course: "Facebook Ads",
  },
  {
    name: "Học viên Minh",
    job: "Chủ shop thời trang online",
    avatar: "M",
    avatarColor: "bg-violet-100 text-violet-700",
    quote: "Trước đây tôi phải thuê người chạy ads 3-4 triệu/tháng nhưng không kiểm soát được. Sau khóa học tôi tự chạy, ROAS tăng hơn gấp đôi.",
    result: "2x ROAS",
    resultLabel: "Tăng so với trước",
    course: "Facebook Ads",
  },
  {
    name: "Học viên Thảo",
    job: "Spa & Làm đẹp",
    avatar: "T",
    avatarColor: "bg-rose-100 text-rose-700",
    quote: "Google Ads khó hơn Facebook nhiều nhưng thầy hướng dẫn rất chi tiết. Tháng đầu đã có khách đặt lịch qua Google Maps tăng rõ rệt.",
    result: "+40%",
    resultLabel: "Khách qua Google Maps",
    course: "Google Ads & Map",
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-28 bg-white border-b border-[#0A0F1C]/5 relative overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.15), transparent)" }} aria-hidden="true" />

      <div className="section-container">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7">
            <p className="section-eyebrow">
              <svg className="w-3.5 h-3.5 mr-1 text-[#2563EB]" fill="none" viewBox="0 0 16 16">
                <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM6.5 5.75A.75.75 0 017.25 5h1.5v5.25h1.5a.75.75 0 010 1.5h-4a.75.75 0 010-1.5H7.75V6.5H7.25a.75.75 0 01-.75-.75z" fill="currentColor" fillOpacity="0.6"/>
              </svg>
              Đào Tạo Thực Chiến
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-[#0A0F1C] mt-2 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.1 }}>
              Khóa học <span className="text-[#2563EB]">từ thực chiến</span><br />không lý thuyết suông.
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
              Đinh Minh Đức trực tiếp giảng dạy — tất cả nội dung đều từ những chiến dịch thực tế đã được triển khai và kiểm chứng bằng doanh thu.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <a href="#contact" onClick={() => { if (window.trackCTA) window.trackCTA("Courses Section - Đăng ký học"); }} className="btn-awwwards btn-awwwards-solid">
              Đăng ký học ngay →
            </a>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className={`bento-card bg-white flex flex-col justify-between min-h-[300px] group border border-slate-100 ${course.accent} transition-all duration-300 relative overflow-hidden`}
            >
              <span className="absolute -bottom-4 -right-3 text-[6rem] font-black text-slate-50 leading-none select-none pointer-events-none group-hover:text-blue-50 transition-colors duration-500" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} aria-hidden="true">
                0{idx + 1}
              </span>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className="p-2 rounded-xl bg-blue-50/50">{course.icon}</div>
                  <span className={`px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded-full ${course.badgeColor}`}>{course.badge}</span>
                </div>
                <h3 className="text-lg font-black text-[#0A0F1C] tracking-tight uppercase mb-2 group-hover:text-[#2563EB] transition-colors duration-300">{course.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{course.desc}</p>
              </div>
              <div className="relative z-10 mt-5 pt-4 border-t border-slate-50">
                <ul className="space-y-1.5">
                  {course.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
                      <span className="w-1 h-1 rounded-full bg-[#2563EB] shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
                {course.detailLink && (
                  <Link to={course.detailLink} className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#2563EB] hover:underline">
                    Xem lộ trình chi tiết →
                  </Link>
                )}
              </div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2563EB] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* ── HỌC VIÊN TIÊU BIỂU ─────────────────────── */}
        <div className="mt-20 pt-16 border-t border-[#0A0F1C]/5">
          <div className="text-center mb-10">
            <p className="section-eyebrow justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Học Viên Tiêu Biểu</span>
            </p>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0A0F1C] mt-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Kết quả thực tế<br className="sm:hidden" /> từ học viên của chúng tôi
            </h3>
          </div>

          {/* Featured: Quyên with video */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 items-center">
            {/* Quote card */}
            <div className="bg-[#F8FAF9] rounded-2xl border border-slate-100 p-7 sm:p-9 flex flex-col gap-5 relative overflow-hidden">
              {/* Watermark " */}
              <span className="absolute top-4 right-5 text-[7rem] font-black text-[#2563EB]/5 leading-none select-none pointer-events-none" aria-hidden="true">"</span>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-black text-blue-700 text-base shrink-0">Q</div>
                <div>
                  <p className="font-black text-sm text-[#0A0F1C]">Học viên Quyên</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Kinh doanh xe điện · Facebook Ads</p>
                </div>
                <div className="ml-auto">
                  <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-[9px] font-black text-amber-700 uppercase tracking-wider">
                    ⭐ Học viên nổi bật
                  </span>
                </div>
              </div>

              <blockquote className="text-sm sm:text-base text-[#0A0F1C]/75 leading-relaxed italic border-l-2 border-[#2563EB] pl-4">
                "Bắt đầu từ số 0, sau khóa học em đã tự vận hành Facebook Ads ra đơn với chi phí chỉ <strong className="text-[#0A0F1C] not-italic">3,000đ – 5,000đ/mess</strong>. Thầy dạy rất thực tế, không có lý thuyết dài dòng."
              </blockquote>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-100 text-center">
                  <p className="text-2xl font-black text-[#2563EB]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>3k–5k đ</p>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-1">Chi phí/mess</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-100 text-center">
                  <p className="text-2xl font-black text-emerald-600" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Từ số 0</p>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-1">Xuất phát điểm</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M2 6l2.5 2.5 5.5-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Đã ra đơn thực tế sau học
                </span>
                <a href="https://www.facebook.com/share/v/18izSvaN8g/" target="_blank" rel="noreferrer" className="text-[10px] font-black text-[#2563EB] hover:underline uppercase tracking-wider ml-auto">
                  Xem trên Facebook ↗
                </a>
              </div>
            </div>

            {/* Video embed */}
            <div className="aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-[#0A0F1C] shadow-[0_20px_60px_rgba(10,15,28,0.1)]">
              <iframe
                title="Feedback học viên Quyên — Facebook Ads"
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F18izSvaN8g%2F&show_text=false"
                className="h-full w-full border-none"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>

          {/* Other student feedbacks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {studentFeedbacks.slice(1).map((fb, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col gap-4 hover:border-[#2563EB]/20 hover:shadow-[0_8px_30px_rgba(37,99,235,0.06)] transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shrink-0 ${fb.avatarColor}`}>{fb.avatar}</div>
                  <div>
                    <p className="font-black text-sm text-[#0A0F1C]">{fb.name}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{fb.job}</p>
                  </div>
                  <span className="ml-auto text-[9px] font-bold px-2 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100">{fb.course}</span>
                </div>
                <blockquote className="text-sm text-slate-600 leading-relaxed italic border-l-2 border-slate-200 pl-3">
                  "{fb.quote}"
                </blockquote>
                <div className="pt-3 border-t border-slate-50 flex items-center gap-3">
                  <div>
                    <p className="text-lg font-black text-[#2563EB]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{fb.result}</p>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">{fb.resultLabel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 p-7 sm:p-10 rounded-2xl bg-[#0A0F1C] flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} aria-hidden="true"/>
          <div className="relative z-10 text-center sm:text-left">
            <p className="text-white font-black text-lg sm:text-xl uppercase tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Học 1-1 cùng Đinh Minh Đức.
            </p>
            <p className="text-slate-400 text-sm mt-1">Được hướng dẫn trực tiếp từ người đã triển khai ROAS 27x thực tế.</p>
          </div>
          <a href="#contact" onClick={() => { if (window.trackCTA) window.trackCTA("Courses CTA Bottom"); }} className="btn-awwwards btn-awwwards-accent shrink-0 relative z-10">
            Đăng ký tư vấn khóa học →
          </a>
        </div>
      </div>
    </section>
  );
}
