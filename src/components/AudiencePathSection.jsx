import React from "react";

const paths = [
  {
    label: "Dành cho doanh nghiệp",
    title: "Tăng lead, doanh thu và hiệu suất quảng cáo",
    desc: "Phù hợp với chủ doanh nghiệp, cửa hàng, trung tâm giáo dục hoặc thương hiệu cần tối ưu Facebook Ads, Google Ads, TikTok Ads, Local Map và content chuyển đổi.",
    href: "#services",
    cta: "Xem giải pháp doanh nghiệp",
    tone: "bg-[#0B74E8] text-white border-[#0B74E8]",
    note: "Performance Marketing · Google Map · AI Automation",
  },
  {
    label: "Dành cho học viên",
    title: "Học Ads để tự triển khai ra kết quả thật",
    desc: "Phù hợp với người mới, chủ shop, nhân sự marketing junior hoặc người muốn học Facebook Ads, Google Ads, TikTok Ads và Shopee theo lộ trình thực chiến.",
    href: "#courses",
    cta: "Xem khóa học thực chiến",
    tone: "bg-white text-[#0A0F1C] border-blue-100",
    note: "Facebook Ads · Google Ads · TikTok Ads · Shopee",
  },
];

export default function AudiencePathSection() {
  return (
    <section className="bg-white py-16 border-b border-[#0A0F1C]/5">
      <div className="section-container">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-eyebrow">Chọn đúng lộ trình</p>
            <h2 className="font-display text-3xl font-black uppercase leading-[1.2] text-[#0A0F1C] sm:text-4xl">
              Bạn đang cần gì?
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-[1.8] text-slate-500">
            Website được tách thành 2 luồng rõ ràng để bạn không phải đọc mọi thứ cùng lúc.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {paths.map((path) => (
            <article
              key={path.label}
              className={`rounded-[1.5rem] border p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] ${path.tone}`}
            >
              <p className={`text-[10px] font-black uppercase tracking-[0.22em] ${path.tone.includes("bg-white") ? "text-[#0B74E8]" : "text-blue-100"}`}>
                {path.label}
              </p>
              <h3 className="mt-4 font-display text-2xl font-black uppercase leading-[1.22] sm:text-3xl">
                {path.title}
              </h3>
              <p className={`mt-4 text-sm leading-[1.9] ${path.tone.includes("bg-white") ? "text-slate-500" : "text-blue-50/90"}`}>
                {path.desc}
              </p>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <span className={`text-[10px] font-bold uppercase tracking-wider ${path.tone.includes("bg-white") ? "text-slate-400" : "text-blue-100"}`}>
                  {path.note}
                </span>
                <a
                  href={path.href}
                  onClick={() => {
                    if (window.trackCTA) window.trackCTA(`Audience Path - ${path.label}`);
                  }}
                  className={path.tone.includes("bg-white") ? "btn-awwwards btn-awwwards-solid" : "btn-awwwards btn-awwwards-accent"}
                >
                  {path.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
