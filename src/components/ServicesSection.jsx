import React from "react";

/* ── SVG Icons per service ──────────────────────── */
const icons = {
  "01": ( // Performance Marketing
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect x="4" y="28" width="8" height="16" rx="2" fill="#2563EB" opacity="0.3"/>
      <rect x="16" y="20" width="8" height="24" rx="2" fill="#2563EB" opacity="0.5"/>
      <rect x="28" y="10" width="8" height="34" rx="2" fill="#2563EB"/>
      <rect x="40" y="4" width="4" height="4" rx="1" fill="#2563EB"/>
      <path d="M6 36 L20 22 L28 28 L42 10" stroke="#0A0F1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.15"/>
    </svg>
  ),
  "02": ( // Social Media
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="10" cy="24" r="6" stroke="#2563EB" strokeWidth="2"/>
      <circle cx="38" cy="10" r="6" stroke="#2563EB" strokeWidth="2" fill="#2563EB" fillOpacity="0.1"/>
      <circle cx="38" cy="38" r="6" stroke="#2563EB" strokeWidth="2" fill="#2563EB" fillOpacity="0.1"/>
      <path d="M16 21 L32 13M16 27 L32 35" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  "03": ( // E-commerce
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M6 8h4l5 20h18l4-14H14" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="20" cy="36" r="3" fill="#2563EB"/>
      <circle cx="33" cy="36" r="3" fill="#2563EB" opacity="0.4"/>
      <path d="M28 16 L32 20 L40 10" stroke="#0A0F1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2"/>
    </svg>
  ),
  "04": ( // Local Business
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M24 4C17.373 4 12 9.373 12 16c0 10 12 24 12 24s12-14 12-24c0-6.627-5.373-12-12-12z" stroke="#2563EB" strokeWidth="2" fill="#2563EB" fillOpacity="0.1"/>
      <circle cx="24" cy="16" r="4" fill="#2563EB"/>
      <path d="M8 42 Q24 36 40 42" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4"/>
    </svg>
  ),
  "05": ( // Education
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M24 8 L44 18 L24 28 L4 18 Z" stroke="#2563EB" strokeWidth="2" fill="#2563EB" fillOpacity="0.08" strokeLinejoin="round"/>
      <path d="M44 18 L44 30" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
      <path d="M10 22 L10 34 C10 38 16 42 24 42 C32 42 38 38 38 34 L38 22" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
};

const servicesList = [
  {
    num: "01",
    title: "Performance Marketing",
    desc: "Vận hành và tối ưu hóa chiến dịch quảng cáo trả phí (Paid Ads) đa nền tảng.",
    detail: "Thiết lập phễu quảng cáo chuyển đổi trên Facebook, Google, TikTok theo chỉ số CPA/ROAS thực tế.",
    points: ["Tư duy phễu chuyển đổi", "Tối ưu CPA & ROAS", "Báo cáo dữ liệu trực quan"],
  },
  {
    num: "02",
    title: "Social Media Growth",
    desc: "Xây dựng định hướng nội dung và phân phối đa kênh để tối ưu traffic tự nhiên.",
    detail: "Lên chiến lược sáng tạo, kịch bản video ngắn và quản trị hình ảnh thương hiệu.",
    points: ["Định hướng nội dung", "Chiến dịch sáng tạo", "Video ngắn viral"],
  },
  {
    num: "03",
    title: "E-commerce Growth",
    desc: "Tối ưu điểm chạm và tỷ lệ chuyển đổi trên các sàn thương mại điện tử.",
    detail: "SEO sản phẩm, trang trí gian hàng, kéo traffic ngoại sàn và tối ưu phễu trên Shopee/Lazada.",
    points: ["SEO sản phẩm sàn TMĐT", "Thiết lập phễu mua hàng", "Vận hành Mega Sale"],
  },
  {
    num: "04",
    title: "Local Business Growth",
    desc: "Tăng độ phủ tìm kiếm khu vực địa lý để thúc đẩy khách hàng đến điểm bán.",
    detail: "Tối ưu hóa Google Maps, SEO GBP địa phương và thu hút khách vãng lai ghé cửa hàng.",
    points: ["Tối ưu Google Maps/GBP", "Local SEO phủ điểm bán", "Kéo khách hàng địa phương"],
  },
  {
    num: "05",
    title: "Education Marketing",
    desc: "Xây dựng phễu tuyển sinh và hệ thống nội dung chuyển đổi cho mảng giáo dục.",
    detail: "Thiết kế phễu nội dung tuyển sinh, phát triển cộng đồng học viên và đào tạo đội ngũ in-house.",
    points: ["Phễu tuyển sinh trung tâm", "Phát triển cộng đồng học thuật", "Chuyển giao quy trình Ads"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-[#F8FAF9] border-b border-[#0A0F1C]/5 relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#0A0F1C]/5 to-transparent" aria-hidden="true"/>
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#0A0F1C]/5 to-transparent" aria-hidden="true"/>

      <div className="section-container">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-7">
            <p className="section-eyebrow">
              <svg className="w-3.5 h-3.5 mr-1 text-[#2563EB]" fill="none" viewBox="0 0 16 16">
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
              Giải pháp marketing toàn phễu từ quảng cáo tối ưu chuyển đổi đến SEO định vị địa phương và số hóa vận hành.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <a href="#contact" className="btn-awwwards btn-awwwards-outline group">
              <svg className="w-3.5 h-3.5 mr-2 group-hover:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 16 16">
                <path d="M3 13 L13 3M13 3H7M13 3v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Kiểm toán tăng trưởng miễn phí
            </a>
          </div>
        </div>

        {/* Bento Grid Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className={`bento-card bg-white flex flex-col justify-between group min-h-[340px] ${
                idx === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between mb-7">
                  <div className="p-3 rounded-2xl bg-blue-50 border border-blue-50 group-hover:border-blue-100 transition-colors duration-300">
                    {icons[service.num]}
                  </div>
                  <span className="text-xl font-black text-slate-100 group-hover:text-[#2563EB]/20 transition-colors duration-500 tabular-nums" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {service.num}
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#0A0F1C] tracking-tight uppercase mb-3 group-hover:text-[#2563EB] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-400 italic mb-3 leading-relaxed">{service.desc}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{service.detail}</p>
              </div>

              <div className="mt-7 pt-5 border-t border-slate-50">
                <ul className="flex flex-wrap gap-2">
                  {service.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                      <span className="h-1 w-1 bg-[#2563EB] rounded-full" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover accent bar */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2563EB] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl" />
            </div>
          ))}

          {/* Action CTA Card */}
          <div className="bento-card bg-[#0A0F1C] text-white flex flex-col justify-between min-h-[340px] border-none shadow-[0_20px_60px_rgba(10,15,28,0.15)] relative overflow-hidden">
            {/* BG pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "20px 20px" }} aria-hidden="true"/>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border border-white/10" aria-hidden="true"/>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border border-white/10" aria-hidden="true"/>

            <div className="relative z-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563EB]">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">
                Hợp Tác Tăng Trưởng
              </span>
              <h3
                className="text-xl font-black tracking-tight uppercase mt-4"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Sẵn sàng tối ưu hệ thống tăng trưởng?
              </h3>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                Đội ngũ Minh Duc Global phân tích và đề xuất phương án cải thiện tài khoản ads hiện tại của bạn hoàn toàn miễn phí.
              </p>
            </div>
            <div className="mt-8 relative z-10">
              <a
                href="#contact"
                className="btn-awwwards btn-awwwards-solid w-full text-center"
              >
                Đặt lịch tư vấn ngay →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
