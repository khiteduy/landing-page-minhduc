import React from "react";

const brands = [
  {
    name: "Lúa Việt",
    industry: "F&B / Nhà hàng",
    highlight: "ROAS 27x",
    desc: "Chiến dịch Google Ads + phễu chuyển đổi mùa cao điểm.",
    color: "border-l-emerald-400",
    initial: "LV",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
  },
  {
    name: "Cardi Pizzeria",
    industry: "F&B / Pizza Restaurant",
    highlight: "ROAS 26.25x",
    desc: "Google Ads & Local Map — doanh thu 624.6M VND.",
    color: "border-l-blue-400",
    initial: "CP",
    bg: "bg-blue-50",
    text: "text-blue-700",
    link: "/case-study/cardi-pizzeria",
  },
  {
    name: "Bee English Community",
    industry: "Giáo dục / Cộng đồng Tiếng Anh",
    highlight: "300–350 Lead/tháng",
    desc: "Performance & Content đa kênh — 200–250M/tháng.",
    color: "border-l-violet-400",
    initial: "BE",
    bg: "bg-violet-50",
    text: "text-violet-700",
  },
  {
    name: "Bánh Gà Phan Văn Trường",
    industry: "F&B / Đặc sản",
    highlight: "Đang hoạt động",
    desc: "Định vị thương hiệu địa phương & tăng nhận diện.",
    color: "border-l-orange-400",
    initial: "BG",
    bg: "bg-orange-50",
    text: "text-orange-700",
  },
  {
    name: "Chạn Niêu Đà Nẵng",
    industry: "F&B / Nhà hàng",
    highlight: "Listing chuẩn SEO",
    desc: "Listing và cập nhật hồ sơ Google Maps/GBP theo chuẩn SEO địa phương.",
    color: "border-l-rose-400",
    initial: "CN",
    bg: "bg-rose-50",
    text: "text-rose-700",
  },
];

export default function BrandTrustSection() {
  return (
    <section className="py-24 bg-[#F8FAFC] border-b border-[#0A0F1C]/5 relative overflow-hidden">
      {/* dot bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: "radial-gradient(circle, rgba(10,15,28,0.06) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        aria-hidden="true"
      />

      <div className="section-container relative">
        <div className="text-center mb-14">
          <p className="section-eyebrow justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            Đối Tác & Dự Án Tiêu Biểu
          </p>
          <h2
            className="text-2xl sm:text-3xl font-black tracking-tight uppercase text-[#0A0F1C] mt-2"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Dự án và lĩnh vực đã triển khai
          </h2>
          <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Từ F&amp;B, giáo dục đến thương mại địa phương — các chiến dịch được đo lường bằng doanh thu thực tế.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {brands.map((b, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border border-slate-100 border-l-4 ${b.color} p-6 flex gap-4 items-start group hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(10,15,28,0.06)] transition-all duration-300`}
            >
              {/* Initial avatar */}
              <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm ${b.bg} ${b.text}`} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {b.initial}
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-black text-[#0A0F1C] text-sm uppercase tracking-tight">
                    {b.name}
                  </h3>
                  {b.link && (
                    <a href={b.link} className="text-[9px] font-bold text-[#2563EB] uppercase tracking-wider hover:underline">
                      Xem case →
                    </a>
                  )}
                </div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">{b.industry}</p>
                <p className={`text-[11px] font-black mt-2 ${b.text}`}>{b.highlight}</p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
