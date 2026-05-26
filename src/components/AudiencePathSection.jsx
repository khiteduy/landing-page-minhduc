import React from "react";
import { Link } from "react-router-dom";

const paths = [
  {
    type: "business",
    tag: "Doanh Nghiệp",
    tagColor: "bg-[#2563EB] text-white",
    headline: "Cần dịch vụ Performance Marketing?",
    sub: "Chúng tôi vận hành chiến dịch Ads đa nền tảng, tối ưu doanh thu thực tế đo lường bằng ROAS.",
    cta: "Nhận kiểm toán miễn phí",
    ctaHref: "#contact",
    ctaStyle: "btn-awwwards btn-awwwards-solid",
    pills: ["Google Ads", "Meta Ads", "TikTok Ads", "Local Map"],
    stat: { value: "27x", label: "ROAS cao nhất" },
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="4" y="28" width="8" height="16" rx="2" fill="#2563EB" opacity="0.3"/>
        <rect x="16" y="18" width="8" height="26" rx="2" fill="#2563EB" opacity="0.55"/>
        <rect x="28" y="8" width="8" height="36" rx="2" fill="#2563EB"/>
        <path d="M6 36 L20 22 L28 28 L44 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    type: "student",
    tag: "Học Viên",
    tagColor: "bg-amber-400 text-[#0A0F1C]",
    headline: "Muốn tự chạy Ads ra đơn?",
    sub: "Học trực tiếp từ Đinh Minh Đức — người đã triển khai thực chiến, không học lý thuyết suông.",
    cta: "Xem khóa học thực chiến",
    ctaHref: "#courses",
    ctaStyle: "btn-awwwards btn-awwwards-outline",
    pills: ["Facebook Ads", "Google Ads", "TikTok Ads", "Shopee"],
    stat: { value: "3k-5k", label: "đ/mess sau học" },
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 8 L44 18 L24 28 L4 18 Z" stroke="#0A0F1C" strokeWidth="2" fill="#0A0F1C" fillOpacity="0.08" strokeLinejoin="round"/>
        <path d="M44 18 L44 30" stroke="#0A0F1C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 22 L10 34 C10 38 16 42 24 42 C32 42 38 38 38 34 L38 22" stroke="#0A0F1C" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function AudiencePathSection() {
  return (
    <section className="py-16 bg-[#F8FAF9] border-b border-[#0A0F1C]/5">
      <div className="section-container">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.25em] text-[#0A0F1C]/40 mb-8">
          Bạn là ai? — Chọn lộ trình phù hợp
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {paths.map((p) => (
            <div
              key={p.type}
              className={`relative rounded-2xl p-7 sm:p-9 border flex flex-col gap-6 transition-all duration-300 group ${
                p.type === "business"
                  ? "bg-white border-slate-100 hover:border-[#2563EB]/25 hover:shadow-[0_12px_40px_rgba(37,99,235,0.06)]"
                  : "bg-amber-50/50 border-amber-100 hover:border-amber-200 hover:shadow-[0_12px_40px_rgba(251,191,36,0.08)]"
              }`}
            >
              {/* Tag + Icon row */}
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${p.tagColor}`}>
                  {p.tag}
                </span>
                <div className={`p-3 rounded-xl ${p.type === "business" ? "bg-blue-50" : "bg-amber-100/60"}`}>
                  {p.icon}
                </div>
              </div>

              {/* Text */}
              <div>
                <h3
                  className="text-xl sm:text-2xl font-black text-[#0A0F1C] uppercase tracking-tight leading-tight mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {p.headline}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.sub}</p>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {p.pills.map((pill) => (
                  <span key={pill} className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-white border border-[#0A0F1C]/8 text-[#0A0F1C]/50">
                    {pill}
                  </span>
                ))}
              </div>

              {/* Stat + CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-[#0A0F1C]/5 gap-4 flex-wrap">
                <div>
                  <p className="text-2xl font-black text-[#0A0F1C]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {p.stat.value}
                  </p>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-[#0A0F1C]/40">{p.stat.label}</p>
                </div>
                <a href={p.ctaHref} className={`${p.ctaStyle} shrink-0`}>
                  {p.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
