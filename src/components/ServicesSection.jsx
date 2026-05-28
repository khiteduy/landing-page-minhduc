import React from "react";

/* ── SVG Icons per service ──────────────────────── */
const ServiceIcon = ({ id }) => {
  const paths = {
    "01": (
      // Performance Marketing — bar chart + arrow
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <rect x="3" y="24" width="6" height="13" rx="1.5" fill="#2563EB" opacity="0.25"/>
        <rect x="13" y="17" width="6" height="20" rx="1.5" fill="#2563EB" opacity="0.5"/>
        <rect x="23" y="9" width="6" height="28" rx="1.5" fill="#2563EB"/>
        <path d="M5 28 L16 19 L23 23 L34 11" stroke="#0A0F1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.12"/>
      </svg>
    ),
    "02": (
      // Social Services — shield + check
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <path d="M20 4L6 10v10c0 8.3 6 16.1 14 18 8-1.9 14-9.7 14-18V10L20 4z" stroke="#2563EB" strokeWidth="1.8" fill="#2563EB" fillOpacity="0.08" strokeLinejoin="round"/>
        <path d="M13 20l4.5 4.5 9-9" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    "03": (
      // Google Ads & Local — map pin + magnifier
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <path d="M20 4C14.5 4 10 8.5 10 14c0 8 10 20 10 20s10-12 10-20c0-5.5-4.5-10-10-10z" stroke="#2563EB" strokeWidth="1.8" fill="#2563EB" fillOpacity="0.1"/>
        <circle cx="20" cy="14" r="4" fill="#2563EB"/>
        <path d="M6 36 Q20 31 34 36" stroke="#2563EB" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.3"/>
      </svg>
    ),
    "04": (
      // Content Growth — play button + spark
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <rect x="3" y="7" width="24" height="22" rx="3" stroke="#2563EB" strokeWidth="1.8" fill="#2563EB" fillOpacity="0.07"/>
        <path d="M13 13l10 6-10 6V13z" fill="#2563EB"/>
        <path d="M30 6v6M33 9h-6" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <path d="M30 23v5M33 25.5h-6" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
      </svg>
    ),
    "05": (
      // AI & Automation — circuit / nodes
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <rect x="14" y="14" width="12" height="12" rx="3" stroke="#2563EB" strokeWidth="1.8" fill="#2563EB" fillOpacity="0.1"/>
        <path d="M20 14V8M20 32v-6M14 20H8M32 20h-6" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="20" cy="8" r="2" fill="#2563EB" opacity="0.5"/>
        <circle cx="20" cy="32" r="2" fill="#2563EB" opacity="0.5"/>
        <circle cx="8" cy="20" r="2" fill="#2563EB" opacity="0.5"/>
        <circle cx="32" cy="20" r="2" fill="#2563EB" opacity="0.5"/>
      </svg>
    ),
  };
  return paths[id] ?? null;
};

/* ── Visual block: real asset image ── */
function AssetVisual({ src, alt, tall }) {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-slate-100 bg-slate-50 ${tall ? "h-52" : "h-40"}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
    </div>
  );
}

/* ── Visual block: icon-only placeholder (no fake numbers) ── */
function IconVisual({ children, label, tall }) {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-blue-50 bg-gradient-to-br from-blue-50/60 to-slate-50 flex flex-col items-center justify-center gap-3 ${tall ? "h-52" : "h-40"}`}>
      <div className="p-4 rounded-2xl bg-white border border-blue-100 shadow-sm">
        {children}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{label}</span>
    </div>
  );
}

/* ── Service definitions ── */
const servicesList = [
  {
    num: "01",
    title: "Performance Marketing",
    visual: "asset",
    image: "/course-assets/facebook-bm-dashboard.png",
    imageAlt: "Dashboard Facebook Business Manager — minh họa thiết lập và vận hành tài khoản quảng cáo",
    iconLabel: null,
    desc: "Ads đang chạy nhưng chưa ra lead hay doanh thu ổn định? Vấn đề thường nằm ở phễu, dữ liệu và creative — không phải ngân sách.",
    detail: "Thiết lập và tối ưu Facebook Ads, Google Ads, TikTok Ads theo mục tiêu CPA/ROAS thực tế. Theo dõi từng điểm chạm để quyết định tắt, giữ hay scale đúng thời điểm.",
    points: ["Facebook · Google · TikTok Ads", "Tối ưu CPA & ROAS", "Báo cáo số liệu thực tế"],
    wide: true,
  },
  {
    num: "02",
    title: "Dịch vụ mạng xã hội & xử lý lỗi",
    visual: "asset",
    image: "/course-assets/facebook-checkpoint.png",
    imageAlt: "Minh họa xử lý lỗi checkpoint, khóa tài khoản Facebook — Social Media Support",
    iconLabel: null,
    desc: "Tài khoản bị khóa, hạn chế, checkpoint 2FA hay mất quyền fanpage? Cần tăng tương tác đúng đối tượng trên Facebook, TikTok, Instagram?",
    detail: "Hỗ trợ xử lý lỗi tài khoản (checkpoint, khóa live TikTok, vô hiệu hóa IG/FB, mất 2FA). Đồng thời tư vấn tăng tương tác và độ phủ có mục tiêu trên đa nền tảng.",
    points: ["Xử lý lỗi tài khoản & fanpage", "Khóa live · checkpoint · 2FA", "Tăng tương tác đa nền tảng"],
    wide: false,
  },
  {
    num: "03",
    title: "Google Ads & Local Map",
    visual: "asset",
    image: "/course-assets/google-ads-dashboard.png",
    imageAlt: "Dashboard Google Ads — minh họa chiến dịch Search và Local Map Ads",
    iconLabel: null,
    desc: "Khách hàng đang tìm kiếm sản phẩm/dịch vụ của bạn trên Google nhưng đối thủ đang hiện trước. Đây là bài toán cần giải đúng.",
    detail: "Vận hành Google Search Ads, Local Map Ads và tối ưu Google Business Profile để phủ điểm bán, tăng cuộc gọi, chỉ đường và lượt đặt chỗ tại cửa hàng.",
    points: ["Google Search & Local Ads", "Tối ưu Google Maps / GBP", "Local SEO phủ điểm bán"],
    wide: false,
  },
  {
    num: "04",
    title: "Content Growth",
    visual: "asset",
    image: "/course-assets/banh-ga-tiktok.jpg",
    imageAlt: "Kênh TikTok Bánh gà Phan Văn Trường — minh họa triển khai format nội dung video ngắn thực tế",
    iconLabel: null,
    desc: "Đăng đều nhưng thiếu tương tác, video không lên xu hướng? Nội dung cần được vận hành như một hệ thống, không chỉ là lịch đăng bài.",
    detail: "Lên kế hoạch nội dung theo phễu, định hướng hook/angle/format, test creative video ngắn và xây dựng quy trình sản xuất nội dung tái sử dụng cho nhiều nền tảng.",
    points: ["Kế hoạch nội dung có mục tiêu", "Creative testing & video ngắn", "Quy trình sản xuất chuẩn hóa"],
    wide: false,
  },
  {
    num: "05",
    title: "AI & Automation",
    visual: "asset",
    image: "/course-assets/ads-roadmap.png",
    imageAlt: "Lộ trình Ads toàn diện có bước ứng dụng AI vào content và kịch bản bán hàng",
    iconLabel: null,
    desc: "Đội nhỏ nhưng cần xử lý khối lượng công việc lớn? Các tác vụ lặp lại trong marketing có thể được tự động hóa và tối ưu bằng AI.",
    detail: "Thiết kế workflow AI hỗ trợ xử lý data, tự động hóa báo cáo, phân loại lead và tối ưu hóa quy trình vận hành marketing giúp đội nhỏ làm được việc của đội lớn.",
    points: ["Workflow AI & tự động hóa", "Xử lý data & báo cáo tự động", "Tối ưu quy trình vận hành"],
    wide: false,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-[#F8FAF9] border-b border-[#0A0F1C]/5 relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#0A0F1C]/5 to-transparent" aria-hidden="true"/>
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#0A0F1C]/5 to-transparent" aria-hidden="true"/>

      <div className="section-container">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-7">
            <p className="section-eyebrow">
              <svg className="w-3.5 h-3.5 mr-1 text-[#2563EB]" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Lĩnh Vực Chuyên Môn
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-[#0A0F1C]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Dịch Vụ{" "}
              <span className="text-[#2563EB]">Của Chúng Tôi</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
              Giải pháp marketing toàn phễu: từ quảng cáo tối ưu chuyển đổi, xử lý tài khoản nền tảng, đến nội dung có hệ thống và tự động hóa quy trình.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <a href="#contact" className="btn-awwwards btn-awwwards-outline group">
              <svg className="w-3.5 h-3.5 mr-2 group-hover:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 13 L13 3M13 3H7M13 3v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Kiểm toán tăng trưởng miễn phí
            </a>
          </div>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => (
            <div
              key={service.num}
              className={`bento-card bg-white flex flex-col justify-between group relative overflow-hidden ${
                service.wide ? "lg:col-span-2" : ""
              }`}
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-blue-50 border border-blue-50 group-hover:border-blue-100 transition-colors duration-300">
                    <ServiceIcon id={service.num} />
                  </div>
                  <span
                    className="text-xl font-black text-slate-100 group-hover:text-[#2563EB]/15 transition-colors duration-500 tabular-nums select-none"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    aria-hidden="true"
                  >
                    {service.num}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-[#0A0F1C] tracking-tight uppercase mb-4 group-hover:text-[#2563EB] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Visual block */}
                {service.visual === "asset" ? (
                  <AssetVisual
                    src={service.image}
                    alt={service.imageAlt}
                    tall={service.wide}
                  />
                ) : (
                  <IconVisual label={service.iconLabel} tall={false}>
                    <ServiceIcon id={service.num} />
                  </IconVisual>
                )}

                <p className="text-xs text-slate-400 italic mt-5 mb-3 leading-relaxed">{service.desc}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{service.detail}</p>
              </div>

              {/* Bullet tags */}
              <div className="mt-6 pt-5 border-t border-slate-50">
                <ul className="flex flex-wrap gap-2" role="list">
                  {service.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                      <span className="h-1 w-1 bg-[#2563EB] rounded-full shrink-0" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover accent bar */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2563EB] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl" aria-hidden="true" />
            </div>
          ))}

          {/* CTA Card */}
          <div className="bento-card gravity-blue-card text-white flex flex-col justify-between border-none shadow-[0_20px_60px_rgba(7,82,184,0.18)] relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "20px 20px" }} aria-hidden="true"/>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border border-white/10" aria-hidden="true"/>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border border-white/10" aria-hidden="true"/>

            <div className="relative z-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 border border-white/20">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100">
                Hợp Tác Tăng Trưởng
              </span>
              <h3
                className="text-xl font-black tracking-tight uppercase mt-4 text-white"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Sẵn sàng tối ưu hệ thống tăng trưởng?
              </h3>
              <p className="mt-4 text-sm text-blue-50/80 leading-[1.85]">
                Đội ngũ Minh Duc Global phân tích và đề xuất phương án cải thiện tài khoản ads hiện tại của bạn hoàn toàn miễn phí.
              </p>
            </div>
            <div className="mt-8 relative z-10">
              <a href="#contact" className="btn-awwwards btn-awwwards-solid w-full text-center">
                Đặt lịch tư vấn ngay →
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20 pt-16 border-t border-[#0A0F1C]/5">
          <div className="text-center mb-10">
            <p className="section-eyebrow justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" aria-hidden="true" />
              Hiệu Quả Thực Tế Từ Doanh Nghiệp
            </p>
            <h3
              className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0A0F1C] mt-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Đánh giá từ các thương hiệu đồng hành
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Lua Viet */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 flex flex-col justify-between hover:border-[#2563EB]/20 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded-full bg-emerald-100 text-emerald-700">
                    Performance Marketing
                  </span>
                  <span className="text-sm font-black text-emerald-600" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    ROAS 27.0x
                  </span>
                </div>
                <blockquote className="text-sm text-slate-600 leading-relaxed italic mb-6">
                  "Đội ngũ của Đức triển khai chiến dịch quảng cáo vô cùng chuyên nghiệp. Tối ưu hóa chuyển đổi từ phễu trang đích giúp tỷ lệ chốt đơn của chúng tôi tăng vượt bậc trong mùa cao điểm."
                </blockquote>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-black text-sm shrink-0">LV</div>
                <div>
                  <p className="font-black text-sm text-[#0A0F1C]">Đại diện Lua Viet</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Chuỗi Nhà hàng F&B</p>
                </div>
              </div>
            </div>

            {/* Bee English */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 flex flex-col justify-between hover:border-[#2563EB]/20 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded-full bg-violet-100 text-violet-700">
                    Social & Lead Generation
                  </span>
                  <span className="text-sm font-black text-violet-600" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    300-350 Lead/Tháng
                  </span>
                </div>
                <blockquote className="text-sm text-slate-600 leading-relaxed italic mb-6">
                  "Không chỉ chạy Ads đơn thuần, Minh Đức đồng hành tư vấn xây dựng lại kịch bản tuyển sinh và phễu nội dung. Lượng học viên đăng ký mới tăng trưởng ổn định qua từng tháng."
                </blockquote>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                <div className="w-10 h-10 rounded-full bg-violet-50 text-violet-700 flex items-center justify-center font-black text-sm shrink-0">BE</div>
                <div>
                  <p className="font-black text-sm text-[#0A0F1C]">Đại diện Bee English</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Hệ thống giáo dục & cộng đồng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
