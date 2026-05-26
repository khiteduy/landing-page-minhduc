import React from "react";

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

const fbRoadmap = [
  {
    step: "01",
    title: "Thuật ngữ quảng cáo nền tảng",
    desc: "Hiểu các khái niệm quan trọng trong quảng cáo như tài khoản quảng cáo, VIA, BM, Page, camp, ad set, ads và luồng vận hành cơ bản.",
    tag: "VIA, BM, Page",
  },
  {
    step: "02",
    title: "Setup Page chuẩn chuyên nghiệp",
    desc: "Xây dựng nền tảng fanpage đủ tin cậy trước khi chạy ads: thông tin, hình ảnh, nội dung ghim, inbox và các điểm chạm giúp khách hàng tin tưởng.",
    tag: "A-Z Setup",
  },
  {
    step: "03",
    title: "Cấu trúc Camp Ads từ A-Z",
    desc: "Nắm cấu trúc chiến dịch, nhóm quảng cáo, mẫu quảng cáo và cách setup một camp cơ bản theo mục tiêu tin nhắn, lead hoặc đơn hàng.",
    tag: "Camp Structure",
  },
  {
    step: "04",
    title: "Đọc chỉ số và tối ưu ngân sách",
    desc: "Biết cách đọc CPM, CTR, CPC, CPA, giá tin nhắn, tỷ lệ chuyển đổi; hiểu khi nào cần tắt, nhân bản, tăng ngân sách hoặc đổi creative.",
    tag: "Analytics & Scaling",
  },
  {
    step: "05",
    title: "AI Content & kịch bản bán hàng",
    desc: "Kết hợp AI để nghiên cứu khách hàng, viết nội dung, tạo hook, angle và kịch bản tư vấn/chốt sale phục vụ quảng cáo.",
    tag: "AI Scripts",
  },
  {
    step: "06",
    title: "Q&A và hỗ trợ sau khóa",
    desc: "Giải đáp lỗi triển khai, tổng kết kiến thức, định hướng cách tự vận hành và hỗ trợ sau khóa để học viên áp dụng vào công việc thật.",
    tag: "Q&A Wrap-up",
  },
];

const fbPackages = [
  {
    name: "Khóa cơ bản",
    price: "6.525K",
    desc: "Dành cho người mới bắt đầu, chưa có kinh nghiệm chạy quảng cáo.",
  },
  {
    name: "Khóa nâng cao",
    price: "8.888K",
    desc: "Dành cho người muốn tối ưu vận hành, đọc chỉ số và tăng hiệu quả quảng cáo.",
  },
  {
    name: "CSKH & Chốt Sale",
    price: "9.990K",
    desc: "Bổ sung tư duy chăm sóc khách hàng, kịch bản tư vấn và chốt đơn sau khi có lead.",
  },
  {
    name: "Gói tối ưu",
    price: "14.999K",
    desc: "Combo Cơ bản + Nâng cao + CSKH & Chốt Sale, phù hợp người muốn đi trọn lộ trình.",
    highlight: true,
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-28 bg-white border-b border-[#0A0F1C]/5 relative overflow-hidden">
      {/* Decorative gradient */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.15), transparent)" }}
        aria-hidden="true"
      />

      <div className="section-container">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-7">
            <p className="section-eyebrow">
              <svg className="w-3.5 h-3.5 mr-1 text-[#2563EB]" fill="none" viewBox="0 0 16 16">
                <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM6.5 5.75A.75.75 0 017.25 5h1.5v5.25h1.5a.75.75 0 010 1.5h-4a.75.75 0 010-1.5H7.75V6.5H7.25a.75.75 0 01-.75-.75z" fill="currentColor" fillOpacity="0.6"/>
              </svg>
              Đào Tạo Thực Chiến
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-[#0A0F1C]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
            >
              Khóa học{" "}
              <span className="text-[#2563EB]">từ thực chiến</span>
              <br />
              không lý thuyết suông.
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
              Đinh Minh Đức trực tiếp giảng dạy — tất cả nội dung đều từ những chiến dịch thực tế đã được triển khai và kiểm chứng bằng doanh thu.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <a
              href="#contact"
              onClick={() => { if (window.trackCTA) window.trackCTA("Courses Section - Đăng ký học"); }}
              className="btn-awwwards btn-awwwards-solid group"
            >
              <svg className="w-3.5 h-3.5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 16 16">
                <path d="M8 1v9M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 13h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              Đăng ký học ngay
            </a>
          </div>
        </div>

        {/* Featured Facebook Ads course */}
        <div className="mb-16 overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-sky-50 to-blue-50 p-6 shadow-[0_24px_80px_rgba(14,116,232,0.10)] sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#0B74E8]">
                Khóa trọng tâm: Facebook Ads thực chiến
              </p>
              <h3 className="mt-4 font-display text-3xl font-black uppercase leading-[1.18] tracking-[-0.035em] text-[#0A0F1C] sm:text-5xl">
                Từ chưa biết gì đến tự set camp, đọc số và tối ưu ra đơn.
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-[1.9] text-slate-600 sm:text-base">
                Lộ trình được thiết kế cho người muốn làm được việc thật: hiểu nền tảng, setup page, dựng camp, đọc chỉ số, tối ưu chi phí và dùng AI để làm nội dung/kịch bản bán hàng.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {["Học thực chiến dễ hiểu", "Áp dụng ngay vào công việc", "Tối ưu chi phí tăng hiệu quả", "Hỗ trợ sau khóa học trọn đời"].map((item) => (
                  <div key={item} className="rounded-2xl border border-blue-100 bg-white/80 p-4 text-xs font-bold uppercase tracking-wider text-[#0758B8]">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="btn-awwwards btn-awwwards-solid">
                  Tư vấn lộ trình học
                </a>
                <a href="#fb-roadmap" className="btn-awwwards btn-awwwards-outline">
                  Xem chi tiết khóa học
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[1.75rem] border border-white bg-white p-3 shadow-[0_20px_70px_rgba(15,23,42,0.12)]">
                <img
                  src="/course-assets/ads-roadmap.png"
                  alt="Lộ trình học Ads toàn diện Minh Duc Global"
                  className="w-full rounded-[1.35rem] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Facebook Ads roadmap */}
        <div id="fb-roadmap" className="mb-16">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-eyebrow">Lộ trình Facebook Ads</p>
              <h3 className="font-display text-3xl font-black uppercase leading-[1.2] tracking-[-0.035em] text-[#0A0F1C]">
                6 bước học để tự vận hành quảng cáo.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-[1.8] text-slate-500">
              Mỗi buổi học đi từ nền tảng đến triển khai, tránh học lan man và tập trung vào thao tác có thể dùng ngay.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {fbRoadmap.map((item) => (
              <article key={item.step} className="rounded-[1.5rem] border border-blue-100 bg-white p-6 shadow-[0_12px_45px_rgba(14,116,232,0.06)]">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0B74E8] text-sm font-black text-white">
                    {item.step}
                  </span>
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-[9px] font-black uppercase tracking-wider text-[#0758B8]">
                    {item.tag}
                  </span>
                </div>
                <h4 className="mt-5 font-display text-lg font-black uppercase leading-[1.25] tracking-[-0.02em] text-[#0A0F1C]">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm leading-[1.85] text-slate-500">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Course pricing packages */}
        <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-[1.75rem] border border-blue-100 bg-white p-3 shadow-[0_20px_70px_rgba(15,23,42,0.10)]">
              <img
                src="/course-assets/ads-pricing.png"
                alt="Bảng giá khóa học chạy quảng cáo Minh Duc Global"
                className="w-full rounded-[1.35rem] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="section-eyebrow">Gói học & quyền lợi</p>
            <h3 className="font-display text-3xl font-black uppercase leading-[1.2] tracking-[-0.035em] text-[#0A0F1C]">
              Chọn lộ trình phù hợp với trình độ hiện tại.
            </h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {fbPackages.map((pkg) => (
                <article
                  key={pkg.name}
                  className={`rounded-[1.5rem] border p-6 ${
                    pkg.highlight
                      ? "border-[#0B74E8] bg-[#0B74E8] text-white shadow-[0_18px_55px_rgba(14,116,232,0.22)]"
                      : "border-blue-100 bg-white"
                  }`}
                >
                  <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${pkg.highlight ? "text-blue-100" : "text-[#0B74E8]"}`}>
                    {pkg.name}
                  </p>
                  <p className={`mt-3 font-display text-4xl font-black tracking-[-0.04em] ${pkg.highlight ? "text-white" : "text-[#0A0F1C]"}`}>
                    {pkg.price}
                  </p>
                  <p className={`mt-4 text-sm leading-[1.85] ${pkg.highlight ? "text-blue-50" : "text-slate-500"}`}>
                    {pkg.desc}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-amber-200 bg-amber-50 p-6 text-sm font-semibold leading-[1.9] text-amber-900">
              Tặng kèm tài nguyên và nguyên liệu TKQC để chạy thị trường trị giá 1-2 triệu VND. Vào khóa không phát sinh thêm chi phí ẩn.
            </div>
          </div>
        </div>

        {/* Student proof near the Facebook Ads offer */}
        <div className="mb-16 rounded-[1.75rem] border border-emerald-100 bg-emerald-50/70 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700">
                Case học viên Facebook Ads
              </p>
              <h3 className="mt-3 font-display text-2xl font-black uppercase leading-[1.25] text-[#0A0F1C]">
                Quyên - kinh doanh xe điện: từ chưa biết gì đến tự chạy quảng cáo ra đơn.
              </h3>
              <p className="mt-4 text-sm leading-[1.9] text-slate-600">
                Sau quá trình học, Quyên có thể tự triển khai Facebook Ads, đọc chỉ số cơ bản và tối ưu chi phí tin nhắn về khoảng 3.000-5.000đ/mess.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="https://www.facebook.com/share/v/18izSvaN8g/"
                target="_blank"
                rel="noreferrer"
                className="btn-awwwards btn-awwwards-solid"
              >
                Xem feedback của Quyên
              </a>
            </div>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className={`bento-card bg-white flex flex-col justify-between min-h-[320px] group border border-slate-100 ${course.accent} transition-all duration-300 relative overflow-hidden`}
            >
              {/* BG number watermark */}
              <span
                className="absolute -bottom-4 -right-3 text-[6rem] font-black text-slate-50 leading-none select-none pointer-events-none group-hover:text-blue-50 transition-colors duration-500"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                aria-hidden="true"
              >
                0{idx + 1}
              </span>

              <div className="relative z-10">
                {/* Icon + Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-2 rounded-xl bg-blue-50/50">
                    {course.icon}
                  </div>
                  <span className={`px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded-full ${course.badgeColor}`}>
                    {course.badge}
                  </span>
                </div>

                <h3
                  className="text-lg font-black text-[#0A0F1C] tracking-tight uppercase mb-3 group-hover:text-[#2563EB] transition-colors duration-300"
                >
                  {course.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {course.desc}
                </p>
              </div>

              {/* Points */}
              <div className="relative z-10 mt-6 pt-5 border-t border-slate-50">
                <ul className="space-y-2">
                  {course.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
                      <span className="w-1 h-1 rounded-full bg-[#2563EB] shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover bottom bar */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2563EB] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="gravity-blue-card mt-16 p-8 sm:p-10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Dot pattern */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} aria-hidden="true"/>

          <div className="relative z-10">
            <p className="text-white font-black text-lg sm:text-xl uppercase tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Học 1-1 cùng Đinh Minh Đức.
            </p>
            <p className="text-blue-50/80 text-sm mt-1">
              Được hướng dẫn trực tiếp từ người đã triển khai chiến dịch ROAS 27x thực tế.
            </p>
          </div>
          <a
            href="#contact"
            onClick={() => { if (window.trackCTA) window.trackCTA("Courses CTA Bottom - Đăng ký học"); }}
            className="btn-awwwards btn-awwwards-accent shrink-0 relative z-10"
          >
            Đăng ký tư vấn khóa học →
          </a>
        </div>
      </div>
    </section>
  );
}
