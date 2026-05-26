import React, { useState, useMemo } from "react";
import useCountUp from "../hooks/useCountUp";

const cases = [
  {
    name: "Cardi Pizzeria Võ Văn Kiệt",
    category: "Google Ads & Maps địa phương",
    industry: "F&B / Pizza Restaurant",
    role: "Marketing Lead",
    result: "ROAS 26.25x",
    resultColor: "text-emerald-600",
    metrics: ["Ngân sách: 23,791,158đ", "Doanh thu: 624,600,000đ", "ROAS: 26.25x"],
    cover: "https://i.ibb.co/gMJvsvm9/camp-gg-1.jpg",
    proof: [
      {
        src: "https://i.ibb.co/F41NH6Vy/daonh-thu.jpg",
        caption: "Doanh thu ghi nhận: 624.600.000đ trong kỳ 01/04-01/05/2026.",
      },
      {
        src: "https://i.ibb.co/gMJvsvm9/camp-gg-1.jpg",
        caption: "Chi phí Google Ads cùng kỳ: 23.791.158đ, tương đương hiệu suất doanh thu/ngân sách khoảng 26,25X.",
      },
    ],
    short: "Vận hành Google Ads kết hợp tối ưu Local Map để phủ sóng điểm bán và tối đa hóa doanh thu thực tế tại cửa hàng.",
    tag: "F&B",
    tagColor: "bg-orange-50 text-orange-700 border-orange-100",
  },
  {
    name: "Bee English Community",
    category: "Tối ưu Performance & Content",
    industry: "Giáo dục / Cộng đồng Tiếng Anh",
    role: "Trưởng nhóm Performance",
    result: "300-350 Lead/tháng",
    resultColor: "text-blue-600",
    metrics: ["Ngân sách: 1.6Mđ/ngày", "Lead/tháng: 300-350", "Doanh thu: 200-250Mđ/tháng"],
    cover: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    proof: [
      {
        src: "https://www.facebook.com/business/success/bee-english-community",
        caption: "Bee English Community là case xuất hiện trong thư viện Meta/Facebook Business Success, liên quan đến click-to-Messenger và tối ưu lead.",
      },
    ],
    short: "Tối ưu ngân sách Performance, đào tạo nhân sự và điều phối content team để nâng cao hiệu suất quảng cáo cho mô hình giáo dục.",
    tag: "Giáo Dục",
    tagColor: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    name: "Nhà hàng Lúa Việt",
    category: "Tăng trưởng nhà hàng F&B",
    industry: "F&B / Nhà hàng",
    role: "Marketing Lead",
    result: "ROAS 27X",
    resultColor: "text-emerald-600",
    metrics: ["Ngân sách: 20,000,000đ", "Doanh thu: 540,000,000đ", "ROAS: 27X"],
    cover: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    proof: [],
    short: "Triển khai chiến dịch tối ưu chuyển đổi và quản trị phễu khách hàng, tập trung đẩy doanh số trong mùa cao điểm.",
    tag: "F&B",
    tagColor: "bg-orange-50 text-orange-700 border-orange-100",
  },
  {
    name: "Bánh gà Phan Văn Trường",
    category: "TikTok Organic Growth",
    industry: "F&B / Ăn vặt / TikTok Local Brand",
    role: "Marketing Lead",
    result: "4.000+ followers",
    resultColor: "text-blue-600",
    metrics: ["Followers: 4,000+", "Thời gian: 3 tháng", "Lượt thích: 13.3K"],
    cover: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
    proof: [],
    short: "Hoạch định nội dung TikTok, đào tạo nhân sự content và xây format video phù hợp sản phẩm ăn vặt địa phương.",
    tag: "TikTok",
    tagColor: "bg-rose-50 text-rose-700 border-rose-100",
  },
];

const updatingCases = [
  {
    name: "Chạn Đà Nẵng",
    category: "Nhận diện & Local Map GBP",
    industry: "F&B / Nhà hàng",
    role: "Truyền thông & Maps",
    result: "Đang hoạt động",
    resultColor: "text-slate-600",
    metrics: ["Ngành: F&B", "Thị trường: Đà Nẵng", "Trạng thái: Hoạt động"],
    cover: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
    proof: [],
    short: "Tối ưu Google Maps/GBP và xây dựng chiến lược truyền thông thu hút khách hàng nội vùng Đà Nẵng.",
    tag: "Local",
    tagColor: "bg-violet-50 text-violet-700 border-violet-100",
  },
];

/* ── KPI counter card ────────────────────── */
function KpiCounter({ value, label, color = "text-white" }) {
  const isNumeric = /^\d+(\.\d+)?$/.test(String(value));
  const numVal = isNumeric ? parseFloat(String(value)) : 0;
  const { count, ref } = useCountUp(
    Math.round(numVal),
    2000,
    isNumeric
  );
  return (
    <div ref={ref} className="case-kpi p-6 text-center">
      <p className="text-[9px] uppercase tracking-widest font-bold text-blue-50/75">{label}</p>
      <p className={`mt-2 text-3xl font-extrabold ${color} tabular-nums`} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {isNumeric ? count : value}
      </p>
    </div>
  );
}

export default function CaseStudiesSection({ setLightbox }) {
  const [caseFilter, setCaseFilter] = useState("all");

  const visibleCases = useMemo(() => {
    if (caseFilter === "all") return cases;
    return cases.filter((c) => c.category === caseFilter);
  }, [caseFilter]);

  const categories = useMemo(() => {
    return ["all", ...new Set(cases.map((c) => c.category))];
  }, []);

  return (
    <section id="cases" className="py-28 bg-white border-b border-[#0A0F1C]/5 relative overflow-hidden">
      <div className="section-container">

        {/* KPI Hero Panel */}
        <div className="mb-20 p-8 sm:p-12 cases-hero rounded-3xl text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/8 via-transparent to-transparent" aria-hidden="true"/>
          {/* Dot pattern */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} aria-hidden="true"/>

          <div className="relative z-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/75 flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-100 animate-pulse"/>
              Báo Cáo Hiệu Quả Chiến Dịch
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-white"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Dự Án Tiêu Biểu &amp;{" "}
              <span className="text-cyan-100">Thực Chiến</span>
            </h2>
            <p className="mt-4 max-w-3xl text-blue-50/85 text-sm sm:text-base leading-[1.9]">
              Mỗi dự án đều vận hành dựa trên số liệu thực tế, đo lường sát sao chi phí cơ hội và tập trung thúc đẩy doanh thu, lead chất lượng.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-blue-200/10 pt-8">
              <KpiCounter value="624" label="Doanh thu lớn nhất (triệu VND)" color="text-white" />
              <KpiCounter value="27" label="Hiệu suất lớn nhất (ROAS)" color="text-cyan-100" />
              <KpiCounter value="350" label="Lead/tháng tối đa" color="text-white" />
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between border-b border-[#0A0F1C]/5 pb-6 mb-12 gap-6">
          <div>
            <h3 className="text-xl font-black text-[#0A0F1C] tracking-tight uppercase" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Chi tiết dự án
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Lọc kết quả để xem chi tiết các dự án thành công.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCaseFilter(cat)}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${
                  caseFilter === cat
                    ? "bg-[#2563EB] text-white shadow-sm shadow-[#2563EB]/20"
                    : "bg-slate-50 border border-slate-100 text-[#0A0F1C]/60 hover:bg-slate-100"
                }`}
              >
                {cat === "all" ? "Tất cả dự án" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {visibleCases.map((c, i) => (
            <article
              key={c.name}
              className="bento-card flex flex-col justify-between group h-full relative"
            >
              <div className="image-reveal-card mb-6 h-48 border border-blue-100">
                <img src={c.cover} alt={`Minh họa case study ${c.name}`} loading="lazy" />
                <span className="absolute bottom-4 left-4 z-10 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-[#0758B8]">
                  {c.category}
                </span>
              </div>

              {/* Top row */}
              <div className="mb-6 flex items-center justify-between gap-3 border-b border-[#0A0F1C]/5 pb-4">
                <span className={`px-3 py-1 text-[9px] font-bold uppercase tracking-wider rounded-full border ${c.tagColor}`}>
                  {c.tag}
                </span>
                <span className={`text-xs font-extrabold ${c.resultColor} bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100`}>
                  {c.result}
                </span>
              </div>

              <h3
                className="text-2xl font-black text-[#0A0F1C] tracking-tight uppercase group-hover:text-[#2563EB] transition-colors duration-300"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {c.name}
              </h3>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                {c.industry} · {c.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">{c.short}</p>

              {/* Metrics chips */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {c.metrics.map((m, idx) => {
                  const parts = m.split(":");
                  const label = parts[0]?.trim();
                  const value = parts[1]?.trim();
                  return value ? (
                    <div key={m} className={`p-4 rounded-xl border ${idx === 2 ? "bg-blue-50/60 border-blue-100" : "bg-slate-50/60 border-slate-100"}`}>
                      <p className="text-[8px] font-extrabold uppercase tracking-widest text-slate-400">{label}</p>
                      <p className={`text-sm font-extrabold mt-1 ${idx === 2 ? "text-[#2563EB]" : "text-[#0A0F1C]"}`}>{value}</p>
                    </div>
                  ) : (
                    <div key={m} className="p-4 rounded-xl border border-slate-100 bg-slate-50/40">
                      <p className="text-xs font-bold text-slate-700">{m}</p>
                    </div>
                  );
                })}
              </div>

              {/* Proof images */}
              {c.proof.length > 0 && (
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {c.proof.map((proofItem) => {
                    const src = typeof proofItem === "string" ? proofItem : proofItem.src;
                    const caption = typeof proofItem === "string" ? "" : proofItem.caption;

                    return src.startsWith("http") && !src.includes("facebook.com/business") ? (
                      <button
                        key={src}
                        onClick={() => setLightbox({ src, caption })}
                        className="group/proof relative overflow-hidden border border-slate-200 text-left transition-all duration-300 hover:border-[#2563EB] h-32 w-full rounded-xl"
                      >
                        <img src={src} alt={`Proof ${c.name}`} className="h-full w-full object-cover transition-transform duration-500 group-hover/proof:scale-105" loading="lazy" />
                        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/proof:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="bg-white px-4 py-2 text-[9px] font-bold text-slate-800 flex items-center gap-1.5 shadow-sm rounded-full uppercase tracking-wider transform translate-y-2 group-hover/proof:translate-y-0 transition-transform duration-300">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M1 6C1 6 3 2 6 2s5 4 5 4-2 4-5 4S1 6 1 6z" stroke="currentColor" strokeWidth="1.2"/><circle cx="6" cy="6" r="1.5" fill="currentColor"/></svg>
                            Xem minh chứng
                          </span>
                        </div>
                      </button>
                    ) : (
                      <a key={src} href={src} target="_blank" rel="noreferrer" className="flex items-center justify-center border border-dashed border-slate-200 p-4 text-[9px] font-bold text-[#2563EB] hover:bg-slate-50 hover:border-[#2563EB] transition-all text-center h-32 rounded-xl uppercase tracking-wider gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M13 8v5a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h5M10 2h4v4M6 10l6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        Xem nguồn Meta
                      </a>
                    );
                  })}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Updating projects */}
        <div className="mt-10 rounded-[1.5rem] border border-dashed border-slate-200 bg-slate-50/70 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">
                Dự án đang cập nhật số liệu
              </p>
              <h3 className="mt-2 font-display text-xl font-black uppercase leading-[1.25] text-[#0A0F1C]">
                Không đặt ngang hàng với case đã có số liệu đầy đủ.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-[1.8] text-slate-500">
              Các dự án này vẫn nằm trong danh sách năng lực, nhưng sẽ được nâng lên case chính khi có proof và số liệu đủ rõ.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {updatingCases.map((c) => (
              <article key={c.name} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-3 py-1 text-[9px] font-bold uppercase tracking-wider rounded-full border ${c.tagColor}`}>
                    {c.tag}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                    Đang bổ sung proof
                  </span>
                </div>
                <h4 className="mt-4 font-display text-lg font-black uppercase leading-[1.25] text-[#0A0F1C]">
                  {c.name}
                </h4>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {c.industry} · {c.role}
                </p>
                <p className="mt-3 text-sm leading-[1.8] text-slate-500">{c.short}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Cases CTA */}
        <div className="mt-16 pt-8 border-t border-[#0A0F1C]/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm font-medium text-slate-500">
            Bạn muốn đạt được hiệu suất ROAS vượt trội như các chiến dịch trên?
          </p>
          <a href="#contact" className="btn-awwwards btn-awwwards-solid">
            Yêu cầu tư vấn ngay →
          </a>
        </div>
      </div>
    </section>
  );
}
