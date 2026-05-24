import React from "react";
import useCountUp from "../hooks/useCountUp";

/* ── SVG Icons ─────────────────────────────────── */
const IconRoas = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
    <circle cx="20" cy="20" r="18" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 2" />
    <path d="M12 26 L18 18 L22 22 L28 14" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="28" cy="14" r="2.5" fill="#2563EB" />
  </svg>
);
const IconRevenue = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
    <rect x="6" y="22" width="6" height="12" rx="1" fill="#2563EB" opacity="0.3"/>
    <rect x="17" y="14" width="6" height="20" rx="1" fill="#2563EB" opacity="0.5"/>
    <rect x="28" y="8" width="6" height="26" rx="1" fill="#2563EB"/>
    <path d="M8 6 L32 6" stroke="#0A0F1C" strokeWidth="1" strokeOpacity="0.1"/>
  </svg>
);
const IconLead = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
    <circle cx="20" cy="14" r="6" stroke="#2563EB" strokeWidth="1.8"/>
    <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="32" cy="12" r="3" fill="#2563EB" />
    <path d="M30 12 L32 10 L34 12" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconMonthly = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
    <rect x="7" y="10" width="26" height="22" rx="3" stroke="#2563EB" strokeWidth="1.5"/>
    <path d="M7 17h26" stroke="#2563EB" strokeWidth="1.2" strokeOpacity="0.4"/>
    <path d="M14 8v5M26 8v5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="15" cy="24" r="2" fill="#2563EB" opacity="0.6"/>
    <circle cx="22" cy="24" r="2" fill="#2563EB"/>
    <circle cx="29" cy="24" r="2" fill="#2563EB" opacity="0.3"/>
  </svg>
);

/* ── Metric data ──────────────────────────────── */
const metrics = [
  {
    numericValue: 2625,       // 26.25 * 100 → hiển thị là 26.25x
    displaySuffix: "x",
    displayDivisor: 100,      // chia 100 để ra 26.25
    label: "ROAS Cao nhất",
    desc: "Hiệu suất quảng cáo thực tế lớn nhất đạt được từ dự án F&B (Cardi Pizzeria).",
    icon: <IconRoas />,
    accent: "bg-blue-50",
  },
  {
    numericValue: 6246,       // 624.6M → hiển thị là 624.6M
    displaySuffix: "M",
    displayDivisor: 10,
    label: "Doanh Thu (VND)",
    desc: "Doanh thu trực tiếp được ghi nhận qua hệ thống đo lường chuyển đổi.",
    icon: <IconRevenue />,
    accent: "bg-emerald-50",
  },
  {
    numericValue: 350,
    displaySuffix: "+",
    displayDivisor: 1,
    label: "Lead / Tháng",
    desc: "Khách hàng tiềm năng chất lượng cao đăng ký hàng tháng (Bee English).",
    icon: <IconLead />,
    accent: "bg-violet-50",
  },
  {
    numericValue: 250,
    displaySuffix: "M+",
    displayDivisor: 1,
    label: "Doanh Thu Tháng (VND)",
    desc: "Doanh thu hàng tháng duy trì ổn định cho các đối tác giáo dục.",
    icon: <IconMonthly />,
    accent: "bg-amber-50",
  },
];

/* ── Single animated metric card ──────────────── */
function MetricCard({ item, idx }) {
  const { count, ref } = useCountUp(item.numericValue, 1800 + idx * 200);

  const displayValue =
    item.displayDivisor > 1
      ? (count / item.displayDivisor).toFixed(1)
      : count;

  return (
    <div
      ref={ref}
      className={`bento-card ${item.accent} border-none relative flex flex-col justify-between min-h-[220px] group overflow-hidden`}
    >
      {/* Decorative circle */}
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#2563EB]/5 group-hover:scale-150 transition-transform duration-700" />

      <div className="relative z-10">
        <div className="mb-5">{item.icon}</div>
        <p
          className="text-4xl sm:text-5xl font-black tracking-tight text-[#0A0F1C] group-hover:text-[#2563EB] transition-colors duration-500 tabular-nums"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {displayValue}
          <span className="text-[#2563EB]">{item.displaySuffix}</span>
        </p>
        <p className="text-[11px] font-bold uppercase tracking-widest text-[#0A0F1C]/60 mt-2">
          {item.label}
        </p>
      </div>
      <p className="text-xs text-slate-500 leading-relaxed mt-4 relative z-10">
        {item.desc}
      </p>
    </div>
  );
}

/* ── Section ───────────────────────────────────── */
export default function MetricsSection() {
  return (
    <section className="py-24 bg-[#F8FAFC] border-b border-[#0A0F1C]/5 relative overflow-hidden">
      {/* Background grid dots */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(10,15,28,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative">
        <div className="max-w-3xl mb-16">
          <p className="section-eyebrow">
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#2563EB]/10 mr-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            </span>
            Hiệu Suất Được Kiểm Chứng
          </p>
          <h2
            className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-[#0A0F1C]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Kết quả bằng số liệu,{" "}
            <span className="text-[#2563EB]">không bằng lời hứa.</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl leading-relaxed">
            Chúng tôi tập trung vào doanh thu và lead thực tế. Các chỉ số được xác thực
            qua các chiến dịch thực chiến của đối tác.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => (
            <MetricCard key={idx} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
