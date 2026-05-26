import React from "react";

const partnerLogos = [
  {
    name: "LÚA VIỆT",
    sub: "F&B Co.",
    icon: (
      <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M5 12h14M8 7l4-4 4 4M8 17l4 4 4-4" />
      </svg>
    ),
    textColor: "text-emerald-900",
    bg: "bg-emerald-50/50",
    borderColor: "border-emerald-100",
  },
  {
    name: "CARDI PIZZERIA",
    sub: "Kitchen",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 22h20L12 2zM12 18h.01" />
      </svg>
    ),
    textColor: "text-blue-900",
    bg: "bg-blue-50/50",
    borderColor: "border-blue-100",
  },
  {
    name: "BEE ENGLISH",
    sub: "Education",
    icon: (
      <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v12M8 10h8" />
      </svg>
    ),
    textColor: "text-amber-950",
    bg: "bg-amber-50/40",
    borderColor: "border-amber-100/70",
  },
  {
    name: "BÁNH GÀ P.V.T",
    sub: "Food Chain",
    icon: (
      <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8m-9 8h10a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    textColor: "text-orange-900",
    bg: "bg-orange-50/50",
    borderColor: "border-orange-100",
  },
  {
    name: "CHẠN ĐÀ NẴNG",
    sub: "Restaurant",
    icon: (
      <svg className="w-5 h-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    textColor: "text-rose-900",
    bg: "bg-rose-50/50",
    borderColor: "border-rose-100",
  },
];

const doublePartners = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos];

export default function LogoMarqueeSection() {
  return (
    <section className="py-12 bg-white border-b border-[#0A0F1C]/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 mb-6">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          Được tin dùng bởi các doanh nghiệp đột phá
        </p>
      </div>

      <div className="logo-marquee-container relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="logo-marquee-track flex gap-8 py-2">
          {doublePartners.map((p, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 px-6 py-3.5 bg-white rounded-xl border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:shadow-[0_8px_20px_rgba(37,99,235,0.03)] cursor-pointer`}
              style={{ minWidth: "220px" }}
            >
              <div className={`p-2 rounded-lg ${p.bg} border ${p.borderColor}`}>
                {p.icon}
              </div>
              <div className="text-left">
                <span className={`block text-xs font-black tracking-wider uppercase ${p.textColor}`} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {p.name}
                </span>
                <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                  {p.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
