import React, { useEffect, useRef } from "react";
import useCountUp from "../hooks/useCountUp";

const heroStats = [
  { value: 27, suffix: "x", label: "ROAS Đỉnh cao" },
  { value: 624, suffix: "M", label: "Doanh thu VND" },
  { value: 350, suffix: "+", label: "Lead / Tháng" },
];

function StatCard({ stat, idx }) {
  const { count, ref } = useCountUp(stat.value, 1600 + idx * 150);
  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center py-8 px-4 text-center group hover:bg-[#2563EB] transition-colors duration-500 cursor-default"
    >
      <span
        className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A0F1C] group-hover:text-white transition-colors duration-500 tabular-nums"
        style={{ fontFamily: "Syne, sans-serif" }}
      >
        {count}
        <span className="text-[#2563EB] group-hover:text-white transition-colors duration-500">
          {stat.suffix}
        </span>
      </span>
      <span className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#0A0F1C]/40 group-hover:text-white/70 transition-colors duration-500">
        {stat.label}
      </span>
    </div>
  );
}

export default function HeroSection() {
  const lineRef = useRef(null);

  useEffect(() => {
    // Animate headline underline on load
    const t = setTimeout(() => {
      if (lineRef.current) lineRef.current.style.width = "100%";
    }, 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden bg-[#F8FAF9] border-b border-[#0A0F1C]/5">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,15,28,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(10,15,28,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      {/* Decorative blob top-right */}
      <div
        className="absolute top-0 right-0 w-[480px] h-[480px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(37,99,235,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Floating tag – top right */}
      <div className="absolute top-32 right-8 hidden xl:flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0A0F1C]/8 shadow-sm text-[10px] font-bold uppercase tracking-widest text-[#0A0F1C]/50 animate-fade-in">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        Đang nhận dự án mới
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Eyebrow */}
        <p className="section-eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] animate-ping" />
          Studio Tăng Trưởng &amp; Performance Marketing
        </p>

        {/* Main headline */}
        <div className="max-w-5xl mb-12">
          <h1
            className="text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[1.02] uppercase"
            style={{ fontFamily: "Syne, sans-serif", fontWeight: 800 }}
          >
            <span className="block text-[#0A0F1C]">Hệ thống</span>
            <span className="block relative">
              <span className="text-[#0A0F1C]">marketing </span>
              <span
                className="relative inline-block text-[#2563EB]"
              >
                thực chiến
                {/* Animated underline */}
                <span
                  ref={lineRef}
                  className="absolute bottom-1 left-0 h-[3px] bg-[#2563EB] rounded-full transition-all duration-700 ease-out"
                  style={{ width: "0%" }}
                />
              </span>
            </span>
            <span className="block text-[#0A0F1C]/25 text-4xl sm:text-5xl lg:text-[3.8rem] xl:text-[4.5rem] mt-2">
              cho thương hiệu Việt.
            </span>
          </h1>
        </div>

        {/* Sub & CTA row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          {/* Left: description + CTAs */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <p className="text-base sm:text-lg text-[#0A0F1C]/65 leading-relaxed max-w-xl">
              Minh Duc Global giúp doanh nghiệp F&amp;B, giáo dục và thương mại
              điện tử chuyển hóa quảng cáo thành doanh thu thực tế đo lường được.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col gap-1.5">
                <a
                  href="#contact"
                  onClick={() => {
                    if (window.trackCTA)
                      window.trackCTA("Hero CTA - Nhận kiểm toán tăng trưởng");
                  }}
                  className="btn-awwwards btn-awwwards-solid group"
                >
                  <svg className="w-3.5 h-3.5 mr-2 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 16 16">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Nhận kiểm toán miễn phí
                </a>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider text-center">
                  Dành cho Doanh nghiệp B2B
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <a
                  href="#courses"
                  onClick={() => {
                    if (window.trackCTA)
                      window.trackCTA("Hero CTA - Khóa học thực chiến");
                  }}
                  className="btn-awwwards btn-awwwards-outline"
                >
                  Khóa học thực chiến ↗
                </a>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider text-center">
                  Dành cho Học viên
                </span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {["Google Ads", "Meta Ads", "TikTok Ads", "Local SEO"].map((b) => (
                <span
                  key={b}
                  className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#0A0F1C]/8 text-[#0A0F1C]/50 bg-white hover:border-[#2563EB]/30 hover:text-[#2563EB] transition-all duration-300"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right: animated stats */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-3 divide-x divide-[#0A0F1C]/8 border border-[#0A0F1C]/6 rounded-2xl overflow-hidden bg-white shadow-sm">
              {heroStats.map((stat, i) => (
                <StatCard key={i} stat={stat} idx={i} />
              ))}
            </div>

            {/* Verified badge */}
            <div className="mt-4 flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-100">
              <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 20 20">
                <path d="M10 1.5l2.3 4.6 5.1.75-3.7 3.6.87 5.08L10 13l-4.57 2.54.87-5.08L2.6 6.85l5.1-.75L10 1.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(52,211,153,0.15)"/>
              </svg>
              <p className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                Số liệu được xác thực từ chiến dịch thực tế
              </p>
            </div>

            {/* Founder line */}
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-bold uppercase tracking-wider text-[#0A0F1C]/35 border-t border-[#0A0F1C]/5 pt-5">
              <span>Sáng lập: Đinh Minh Đức</span>
              <span>·</span>
              <span>Thành lập: 2025</span>
              <span>·</span>
              <span>Hải Dương, Việt Nam</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
