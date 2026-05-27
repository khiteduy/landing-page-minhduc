import React from "react";

const proofItems = [
  {
    value: "540M",
    label: "Doanh thu",
    project: "Lua Viet",
  },
  {
    value: "624.6M",
    label: "Doanh thu",
    project: "Cardi Pizzeria",
  },
  {
    value: "300-350",
    label: "Lead/tháng",
    project: "Bee English",
  },
  {
    value: "4.000+",
    label: "Followers",
    project: "Bánh gà TikTok",
  },
];

export default function SocialProofStrip() {
  return (
    <section className="bg-white border-b border-[#0A0F1C]/5 py-12">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 lg:gap-x-0 divide-slate-100 lg:divide-x">
          {proofItems.map((item) => (
            <div
              key={item.project}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <p
                className="font-display text-3xl sm:text-4xl font-black tracking-tight text-[#2563EB]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {item.value}
              </p>
              <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#0A0F1C]/40 mt-2">
                {item.label}
              </p>
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#0A0F1C] mt-1">
                {item.project}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
