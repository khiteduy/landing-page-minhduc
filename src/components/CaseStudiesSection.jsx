import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import useCountUp from "../hooks/useCountUp";

const cases = [
  {
    name: "Cardi Pizzeria Võ Văn Kiệt",
    category: "Google Ads & Maps địa phương",
    industry: "F&B / Pizza Restaurant",
    role: "Marketing Lead",
    result: "ROAS 26.25x",
    resultColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
    metrics: [
      { label: "Ngân sách", value: "23.8M VND" },
      { label: "Doanh thu", value: "624.6M VND" },
      { label: "ROAS", value: "26.25x", accent: true },
    ],
    proof: [
      "https://i.ibb.co/F41NH6Vy/daonh-thu.jpg",
      "https://i.ibb.co/gMJvsvm9/camp-gg-1.jpg",
    ],
    short: "Vận hành Google Ads kết hợp tối ưu Local Map để phủ sóng điểm bán và tối đa hóa doanh thu thực tế tại cửa hàng.",
    tag: "F&B",
    tagColor: "bg-orange-50 text-orange-700 border-orange-100",
    detailLink: "/case-study/cardi-pizzeria",
  },
  {
    name: "Bee English Community",
    category: "Tối ưu Performance & Content",
    industry: "Giáo dục / Cộng đồng Tiếng Anh",
    role: "Trưởng nhóm Performance",
    result: "300–350 Lead/tháng",
    resultColor: "text-blue-600 bg-blue-50 border-blue-100",
    metrics: [
      { label: "Ngân sách/ngày", value: "1.6M VND" },
      { label: "Lead/tháng", value: "300–350", accent: true },
      { label: "Doanh thu", value: "200–250M/tháng" },
    ],
    proof: ["https://www.facebook.com/business/success/bee-english-community"],
    short: "Tối ưu ngân sách quảng cáo đa kênh, đào tạo nhân sự và điều phối đội ngũ sáng tạo nâng cao tỷ lệ chuyển đổi.",
    tag: "Giáo Dục",
    tagColor: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    name: "Nhà hàng Lúa Việt",
    category: "Tăng trưởng nhà hàng F&B",
    industry: "F&B / Nhà hàng",
    role: "Marketing Lead",
    result: "ROAS 27x",
    resultColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
    metrics: [
      { label: "Ngân sách", value: "20M VND" },
      { label: "Doanh thu", value: "540M VND" },
      { label: "ROAS", value: "27x", accent: true },
    ],
    proof: [],
    short: "Triển khai chiến dịch tối ưu chuyển đổi và quản trị phễu khách hàng, tập trung đẩy doanh số trong mùa cao điểm.",
    tag: "F&B",
    tagColor: "bg-orange-50 text-orange-700 border-orange-100",
  },
  {
    name: "Chạn Đà Nẵng",
    category: "Nhận diện & Local Map GBP",
    industry: "F&B / Nhà hàng",
    role: "Truyền thông & Maps",
    result: "Đang cập nhật",
    resultColor: "text-slate-500 bg-slate-50 border-slate-100",
    metrics: [
      { label: "Ngành", value: "F&B" },
      { label: "Thị trường", value: "Đà Nẵng" },
      { label: "Trạng thái", value: "Hoạt động" },
    ],
    proof: [],
    short: "Tối ưu Google Maps/GBP và xây dựng chiến lược truyền thông thu hút khách hàng nội vùng Đà Nẵng.",
    tag: "Local",
    tagColor: "bg-violet-50 text-violet-700 border-violet-100",
  },
];

/* ── KPI counter ─────────────────────── */
function KpiCounter({ value, label, color = "text-white" }) {
  const numStr = String(value).replace(/[^0-9.]/g, "");
  const isNumeric = numStr !== "" && !isNaN(parseFloat(numStr));
  const numVal = isNumeric ? Math.round(parseFloat(numStr)) : 0;
  const { count, ref } = useCountUp(numVal, 2000, isNumeric);
  return (
    <div ref={ref} className="case-kpi p-5 sm:p-6 text-center">
      <p className="text-[9px] uppercase tracking-widest font-bold text-slate-400 mb-1">{label}</p>
      <p className={`text-2xl sm:text-3xl font-extrabold tabular-nums ${color}`} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {isNumeric ? count : value}
      </p>
    </div>
  );
}

/* ── Case Card — mobile collapsible ─── */
function CaseCard({ c, setLightbox }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="bento-card flex flex-col gap-5 group relative">
      {/* Header row — always visible */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <span className={`px-3 py-1 text-[9px] font-bold uppercase tracking-wider rounded-full border ${c.tagColor}`}>
          {c.tag}
        </span>
        <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full border ${c.resultColor}`}>
          {c.result}
        </span>
      </div>

      <div>
        <h3
          className="text-xl sm:text-2xl font-black text-[#0A0F1C] tracking-tight uppercase leading-tight group-hover:text-[#2563EB] transition-colors duration-300"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {c.name}
        </h3>
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
          {c.industry} · {c.role}
        </p>
      </div>

      {/* 3 Metric chips — always visible */}
      <div className="grid grid-cols-3 gap-2">
        {c.metrics.map((m, i) => (
          <div key={i} className={`p-3 rounded-xl text-center ${m.accent ? "bg-blue-50 border border-blue-100" : "bg-slate-50/60 border border-slate-100"}`}>
            <p className="text-[8px] font-extrabold uppercase tracking-widest text-slate-400 truncate">{m.label}</p>
            <p className={`text-sm font-extrabold mt-0.5 ${m.accent ? "text-[#2563EB]" : "text-[#0A0F1C]"}`}>{m.value}</p>
          </div>
        ))}
      </div>

      {/* Collapse toggle mobile */}
      <button
        className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-wider sm:hidden"
        onClick={() => setExpanded(!expanded)}
        type="button"
      >
        <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 16 16">
          <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {expanded ? "Thu gọn" : "Xem chi tiết"}
      </button>

      {/* Expandable content */}
      <div className={`flex flex-col gap-4 ${expanded ? "block" : "hidden"} sm:flex sm:flex-col sm:gap-4`}>
        <p className="text-sm leading-relaxed text-slate-500">{c.short}</p>

        {/* Proof */}
        {c.proof.length > 0 && (
          <div className="grid gap-3 sm:grid-cols-2">
            {c.proof.map((p) =>
              p.startsWith("http") && !p.includes("facebook.com/business") ? (
                <button
                  key={p}
                  onClick={() => setLightbox(p)}
                  className="group/proof relative overflow-hidden border border-slate-200 hover:border-[#2563EB] h-28 w-full rounded-xl transition-all duration-300"
                >
                  <img src={p} alt={`Proof ${c.name}`} className="h-full w-full object-cover transition-transform duration-500 group-hover/proof:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/proof:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white px-3 py-1.5 text-[9px] font-black text-slate-800 rounded-full uppercase tracking-wider">Xem lớn</span>
                  </div>
                </button>
              ) : (
                <a key={p} href={p} target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-2 border border-dashed border-slate-200 hover:border-[#2563EB] hover:bg-slate-50 h-28 rounded-xl transition-all text-[9px] font-black text-[#2563EB] uppercase tracking-wider">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M13 8v5a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h5M10 2h4v4M6 10l6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Xem nguồn Meta
                </a>
              )
            )}
          </div>
        )}

        {c.detailLink && (
          <Link to={c.detailLink} className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#2563EB] hover:underline">
            Xem chi tiết case study →
          </Link>
        )}
      </div>
    </article>
  );
}

export default function CaseStudiesSection({ setLightbox }) {
  const [caseFilter, setCaseFilter] = useState("all");

  const visibleCases = useMemo(() => {
    if (caseFilter === "all") return cases;
    return cases.filter((c) => c.tag === caseFilter);
  }, [caseFilter]);

  const tags = useMemo(() => ["all", ...new Set(cases.map((c) => c.tag))], []);

  return (
    <section id="cases" className="py-24 sm:py-28 bg-white border-b border-[#0A0F1C]/5 relative overflow-hidden">
      <div className="section-container">

        {/* KPI Hero Panel */}
        <div className="mb-16 p-7 sm:p-10 cases-hero rounded-2xl sm:rounded-3xl text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} aria-hidden="true"/>
          <div className="relative z-10">
            <p className="section-eyebrow" style={{ color: "#2563EB" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse"/>
              Báo Cáo Hiệu Quả
            </p>
            <h2
              className="text-2xl sm:text-3xl font-black tracking-tight uppercase text-white mt-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Dự Án Tiêu Biểu &amp; <span className="text-[#2563EB]">Thực Chiến</span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm leading-relaxed max-w-2xl">
              Số liệu được xác thực từ các chiến dịch thực tế — đo lường chặt chẽ theo doanh thu và lead chất lượng.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-800 pt-6">
              <KpiCounter value="624" label="Doanh thu lớn nhất (triệu VND)" color="text-white" />
              <KpiCounter value="27" label="ROAS cao nhất" color="text-[#2563EB]" />
              <KpiCounter value="350" label="Lead/tháng tối đa" color="text-white" />
            </div>
          </div>
        </div>

        {/* Filter + header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 border-b border-[#0A0F1C]/5 pb-6">
          <div>
            <h3 className="text-lg font-black text-[#0A0F1C] uppercase tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Chi tiết dự án
            </h3>
            <p className="text-slate-400 text-xs mt-1">Lọc theo ngành để xem kết quả cụ thể.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setCaseFilter(tag)}
                className={`px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${
                  caseFilter === tag
                    ? "bg-[#2563EB] text-white shadow-sm"
                    : "bg-slate-50 border border-slate-100 text-[#0A0F1C]/60 hover:bg-slate-100"
                }`}
              >
                {tag === "all" ? "Tất cả" : tag}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {visibleCases.map((c) => (
            <CaseCard key={c.name} c={c} setLightbox={setLightbox} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 pt-8 border-t border-[#0A0F1C]/5 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-sm font-medium text-slate-500 max-w-md text-center sm:text-left">
            Bạn muốn đạt ROAS vượt trội như các chiến dịch trên?
          </p>
          <a href="#contact" className="btn-awwwards btn-awwwards-solid shrink-0">
            Yêu cầu tư vấn ngay →
          </a>
        </div>
      </div>
    </section>
  );
}
