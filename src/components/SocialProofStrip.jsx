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
    <section className="bg-white border-b border-[#0A0F1C]/5 py-8">
      <div className="section-container">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {proofItems.map((item) => (
            <article
              key={item.project}
              className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/60 p-5 shadow-[0_14px_40px_rgba(14,116,232,0.05)]"
            >
              <p className="font-display text-3xl font-black leading-none text-[#0B74E8]">
                {item.value}
              </p>
              <p className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                {item.label}
              </p>
              <p className="mt-3 text-sm font-extrabold uppercase leading-[1.35] text-[#0A0F1C]">
                {item.project}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
