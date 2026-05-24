import React from "react";

const steps = [
  {
    num: "01",
    title: "Đánh giá & Khảo sát",
    sub: "Audit & Analysis",
    desc: "Phân tích kỹ tài khoản ads, kịch bản content, pixel tracking và phễu chuyển đổi hiện tại để tìm điểm nghẽn.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
        <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M21 21 L28 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 14h8M14 10v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Chiến lược tăng trưởng",
    sub: "Growth Strategy",
    desc: "Hoạch định ngân sách đa kênh, thiết lập chân dung và hành trình khách hàng rõ ràng phù hợp với dòng tiền.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
        <path d="M4 24 L12 14 L18 18 L28 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="28" cy="8" r="2.5" fill="currentColor"/>
        <path d="M4 28h24" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Triển khai & Vận hành",
    sub: "Execution & Launch",
    desc: "Thiết lập tài khoản quảng cáo, sản xuất kịch bản content video ngắn và thiết kế landing page tối ưu chuyển đổi.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
        <path d="M6 16 L12 22 L26 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 4 L28 4 L28 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Đo lường & Tối ưu",
    sub: "Scale & Optimize",
    desc: "Theo dõi báo cáo doanh thu hàng ngày, mở rộng ngân sách cho ads chuyển đổi tốt và tinh chỉnh hệ thống liên tục.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M16 8 L16 16 L22 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="16" r="2" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-28 bg-white border-b border-[#0A0F1C]/5 relative overflow-hidden">
      {/* Decorative top corner */}
      <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, rgba(37,99,235,0.04) 0%, transparent 70%)" }} aria-hidden="true"/>

      <div className="section-container">
        <div className="max-w-3xl mb-20">
          <p className="section-eyebrow">
            <svg className="w-3.5 h-3.5 mr-1 text-[#2563EB]" fill="none" viewBox="0 0 16 16">
              <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M5 8 L7 10 L11 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Quy Trình Làm Việc
          </p>
          <h2
            className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-[#0A0F1C]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Hệ Thống Tăng Trưởng{" "}
            <span className="text-[#2563EB]">Từng Bước</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
            Quy trình tinh gọn, minh bạch dữ liệu từ khảo sát đến tối ưu mở rộng ngân sách.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          {/* Connector line (desktop) */}
          <div className="absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent hidden lg:block" aria-hidden="true"/>

          {steps.map((step, idx) => (
            <div key={idx} className="relative group p-6 lg:p-8">
              {/* Step circle */}
              <div className="relative z-10 mb-8">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl border-2 border-[#0A0F1C]/8 bg-white text-[#0A0F1C]/50 group-hover:border-[#2563EB] group-hover:text-[#2563EB] group-hover:bg-blue-50 transition-all duration-400 shadow-sm">
                  {step.icon}
                </div>
                {/* Connector dot */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-7 left-14 hidden lg:flex items-center">
                    <div className="w-3 h-px bg-[#2563EB]/20"/>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/30"/>
                  </div>
                )}
              </div>

              {/* Content */}
              <div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span
                    className="text-3xl font-black text-slate-100 group-hover:text-[#2563EB]/15 transition-colors duration-500"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {step.num}
                  </span>
                  <span className="text-[10px] font-bold uppercase text-[#2563EB] tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {step.sub}
                  </span>
                </div>

                <h3 className="text-base font-black text-[#0A0F1C] uppercase tracking-tight mb-3 group-hover:text-[#2563EB] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-[#2563EB] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"/>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-16 pt-10 border-t border-[#0A0F1C]/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-slate-500 max-w-md">
              Bạn muốn bắt đầu ngay hôm nay? Đặt lịch kiểm toán miễn phí — chúng tôi sẽ phân tích và trả lời trong 24h.
            </p>
          </div>
          <a href="#contact" className="btn-awwwards btn-awwwards-solid shrink-0">
            Bắt đầu ngay →
          </a>
        </div>
      </div>
    </section>
  );
}
