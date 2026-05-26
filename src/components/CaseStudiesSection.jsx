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
      {
        src: "/course-assets/cardi-pizzeria.jpg",
        caption: "Hình ảnh thực tế cửa hàng Cardi Pizzeria Võ Văn Kiệt tại TP.HCM.",
      },
      {
        src: "https://i.ibb.co/F41NH6Vy/daonh-thu.jpg",
        caption: "Doanh thu ghi nhận: 624.600.000đ trong kỳ 01/04-01/05/2026.",
      },
      {
        src: "https://i.ibb.co/gMJvsvm9/camp-gg-1.jpg",
        caption: "Chi phí Google Ads cùng kỳ: 23.791.158đ, tương đương hiệu suất doanh thu/ngân sách khoảng 26,25X.",
      },
    ],
    cover: "/course-assets/cardi-pizzeria.jpg",
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
    result: "300-350 Lead/tháng",
    resultColor: "text-blue-600 bg-blue-50 border-blue-100",
    metrics: [
      { label: "Ngân sách/ngày", value: "1.6M VND" },
      { label: "Lead/tháng", value: "300–350", accent: true },
      { label: "Doanh thu", value: "200–250M/tháng" },
    ],
    proof: [
      {
        src: "/course-assets/bee-logo.jpg",
        caption: "Logo chính thức của Bee English Community (Bee Language Community).",
      },
      {
        type: "youtube",
        videoId: "zkMI-I86O6w",
        src: "https://img.youtube.com/vi/zkMI-I86O6w/0.jpg",
        caption: "Video giới thiệu và hoạt động học tập, câu lạc bộ thực tế tại Bee English Community.",
      },
      {
        src: "https://www.facebook.com/business/success/bee-english-community",
        caption: "Bài viết Case Study chính thức của Bee English Community trên thư viện Meta/Facebook Business Success.",
      },
      {
        src: "/course-assets/qr-bee-english.png",
        caption: "Quét mã QR để xem chi tiết Kịch bản video Bee English Community do Đinh Minh Đức duyệt và cố vấn.",
      },
    ],
    cover: "/course-assets/bee-logo.jpg",
    short: "Tối ưu ngân sách quảng cáo đa kênh, đào tạo nhân sự và điều phối đội ngũ sáng tạo nâng cao tỷ lệ chuyển đổi.",
    tag: "Giáo Dục",
    tagColor: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    name: "Lua Viet Restaurant",
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
    proof: [
      {
        src: "/course-assets/lua-viet-revenue.png",
        caption: "Báo cáo doanh thu thực tế 540,179,400đ được ghi nhận qua hệ thống POS KiotViet.",
      },
      {
        src: "/course-assets/lua-viet-ads.png",
        caption: "Dashboard Google Ads - Ngân sách chi tiêu 20M VND đạt hiệu quả chiến dịch vượt trội.",
      },
      {
        src: "/course-assets/lua-viet.jpg",
        caption: "Hình ảnh thực tế nhà hàng Lua Viet Restaurant.",
      },
    ],
    cover: "/course-assets/lua-viet.jpg",
    short: "Triển khai chiến dịch tối ưu chuyển đổi và quản trị phễu khách hàng, tập trung đẩy doanh số trong mùa cao điểm.",
    tag: "F&B",
    tagColor: "bg-orange-50 text-orange-700 border-orange-100",
  },
  {
    name: "Chạn Niêu Đà Nẵng",
    category: "Tối ưu Google Maps & TripAdvisor",
    industry: "F&B / Nhà hàng",
    role: "Truyền thông & Maps",
    result: "Đã xác minh",
    resultColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
    metrics: [
      { label: "Đánh giá Maps", value: "4.8★ (677)" },
      { label: "TripAdvisor", value: "5.0★ (25)" },
      { label: "Thứ hạng", value: "163/1652", accent: true },
    ],
    proof: [
      {
        src: "/course-assets/chan-nieu-store.jpg",
        caption: "Mặt tiền thực tế nhà hàng Chạn Niêu Đà Nẵng.",
      },
      {
        src: "/course-assets/chan-nieu.jpg",
        caption: "Báo cáo bàn giao kết quả tối ưu Google Maps & TripAdvisor cho Chạn Niêu Đà Nẵng.",
      },
    ],
    cover: "/course-assets/chan-nieu-store.jpg",
    short: "Tối ưu hóa SEO Google Maps và đồng bộ kênh TripAdvisor giúp nâng tầm thương hiệu, tăng lượng tiếp cận tự nhiên.",
    tag: "Local",
    tagColor: "bg-violet-50 text-violet-700 border-violet-100",
  },
  {
    name: "Bánh gà Phan Văn Trường",
    category: "TikTok Organic Growth",
    industry: "F&B / Ăn vặt / TikTok Local Brand",
    role: "Marketing Lead",
    result: "4.000+ followers",
    resultColor: "text-blue-600 bg-blue-50 border-blue-100",
    metrics: [
      { label: "Followers", value: "4,000+" },
      { label: "Thời gian", value: "3 tháng" },
      { label: "Lượt thích", value: "13.4K", accent: true },
    ],
    proof: [
      {
        src: "/course-assets/banh-ga-tiktok.jpg",
        caption: "Kênh TikTok Bánh Gà Phan Văn Trường đạt hơn 4.000 followers và 13.4K lượt thích.",
      },
      {
        src: "/course-assets/qr-banh-ga.png",
        caption: "Quét mã QR để xem chi tiết Kịch bản video của kênh Bánh gà Phan Văn Trường.",
      },
    ],
    cover: "/course-assets/banh-ga-tiktok.jpg",
    short: "Hoạch định nội dung TikTok, đào tạo nhân sự content và xây format video phù hợp sản phẩm ăn vặt địa phương.",
    tag: "TikTok",
    tagColor: "bg-rose-50 text-rose-700 border-rose-100",
  },
];

const updatingCases = [];

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
      {/* Cover image if available */}
      {c.cover && (
        <div className="relative h-44 sm:h-48 overflow-hidden rounded-xl border border-slate-100">
          <img src={c.cover} alt={`Cover for ${c.name}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          <span className="absolute bottom-3 left-3 z-10 rounded-full bg-white/90 px-3 py-1 text-[9px] font-black uppercase tracking-wider text-[#2563EB]">
            {c.category}
          </span>
        </div>
      )}

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
        {c.proof && c.proof.length > 0 && (
          <div className="grid gap-3 sm:grid-cols-2">
            {c.proof.map((p) => {
              const src = typeof p === "string" ? p : p.src;
              const caption = typeof p === "string" ? "" : p.caption;

              return src.startsWith("http") || src.startsWith("/course-assets/") ? (
                <button
                  key={src}
                  onClick={() => setLightbox(typeof p === "string" ? { src: p, caption: "" } : p)}
                  className="group/proof relative overflow-hidden border border-slate-200 hover:border-[#2563EB] h-28 w-full rounded-xl transition-all duration-300 text-left"
                  type="button"
                >
                  <img src={src} alt={`Proof ${c.name}`} className="h-full w-full object-cover transition-transform duration-500 group-hover/proof:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/proof:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white px-3 py-1.5 text-[9px] font-black text-slate-800 rounded-full uppercase tracking-wider">Xem minh chứng</span>
                  </div>
                </button>
              ) : (
                <a key={src} href={src} target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-2 border border-dashed border-slate-200 hover:border-[#2563EB] hover:bg-slate-50 h-28 rounded-xl transition-all text-[9px] font-black text-[#2563EB] uppercase tracking-wider text-center px-4">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 16 16"><path d="M13 8v5a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h5M10 2h4v4M6 10l6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Xem nguồn Meta
                </a>
              );
            })}
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

        {/* Cards Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {visibleCases.map((c) => (
            <CaseCard key={c.name} c={c} setLightbox={setLightbox} />
          ))}
        </div>

        {/* Updating projects (only render if there are any) */}
        {updatingCases.length > 0 && (
          <div className="mt-10 rounded-[1.5rem] border border-dashed border-slate-200 bg-slate-50/70 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">
                  Dự án đang cập nhật số liệu
                </p>
                <h3 className="mt-2 font-display text-xl font-black uppercase leading-[1.25] text-[#0A0F1C]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Đang chuẩn bị bổ sung số liệu
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
                  <h4 className="mt-4 font-display text-lg font-black uppercase leading-[1.25] text-[#0A0F1C]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {c.name}
                  </h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {c.industry} · {c.role}
                  </p>
                  <p className="mt-3 text-sm leading-[1.8] text-slate-500">{c.short}</p>
                </article>
              ))}
            </div>
          </div>
        )}

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
