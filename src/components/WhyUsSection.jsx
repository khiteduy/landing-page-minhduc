import React from "react";

const reasons = [
  {
    title: "Vận hành theo số liệu thực tế, không võ đoán.",
    vietnameseTitle: "Data-driven Execution",
    desc: "Mọi điều chỉnh ngân sách hay tối ưu nội dung đều dựa trên báo cáo chuyển đổi thực tế hàng ngày, không dựa trên cảm tính.",
  },
  {
    title: "Kinh nghiệm thực chiến phong phú.",
    vietnameseTitle: "Practical Experience",
    desc: "Đã triển khai và tối ưu thành công các case study F&B, giáo dục thực tế tại thị trường Việt Nam với tỷ suất ROAS ấn tượng.",
  },
  {
    title: "Đồng bộ chặt chẽ giữa Ads, Content và Vận hành.",
    vietnameseTitle: "Core Integration",
    desc: "Không chỉ cài đặt quảng cáo đơn thuần, chúng tôi phối hợp kịch bản nội dung chuyển đổi và tối ưu hóa phễu trang đích.",
  },
  {
    title: "Tập trung tối đa vào doanh số thực và hiệu suất.",
    vietnameseTitle: "Revenue Focus",
    desc: "Nói không với các chỉ số ảo (like, share vô nghĩa). Tất cả mọi nguồn lực đều tập trung vào data lead chất lượng và doanh thu.",
  },
  {
    title: "Đào tạo và điều phối nhân sự in-house trơn tru.",
    vietnameseTitle: "Team Coordination",
    desc: "Hỗ trợ doanh nghiệp đào tạo và phối hợp hiệu quả giữa nhân viên chạy quảng cáo quảng cáo và nhân viên sáng tạo nội dung.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-28 bg-white border-b border-[#0A0F1C]/5">
      <div className="section-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Cột trái: Headline & Video Feedback */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full lg:sticky lg:top-28">
            <div>
              <p className="uppercase tracking-[0.2em] text-[10px] font-bold text-[#2563EB] mb-4">
                Ưu Thế Vượt Trội
              </p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-[#0A0F1C] font-display mb-6">
                Tại sao đối tác chọn <br />Minh Duc Global.
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                Chúng tôi không chỉ cung cấp dịch vụ setup quảng cáo đơn thuần. Chúng tôi đồng hành cùng đối tác xây dựng hệ thống marketing tạo ra chuyển đổi thực tế và tối ưu dòng tiền lâu dài.
              </p>
            </div>

            {/* Feedback Đối Tác Doanh Nghiệp */}
            <div className="p-6 border border-slate-100 bg-slate-50/40 rounded-2xl shadow-[0_10px_30px_rgba(10,15,28,0.01)] relative overflow-hidden">
              <span className="absolute top-2 right-4 text-[5rem] font-black text-[#2563EB]/5 leading-none select-none pointer-events-none" aria-hidden="true">"</span>
              <h4 className="text-xs font-extrabold text-[#2563EB] uppercase tracking-wider mb-2">
                Ý kiến từ đối tác doanh nghiệp
              </h4>
              <p className="text-sm font-black text-[#0A0F1C] uppercase tracking-tight mb-2">
                Cardi Pizzeria (ROAS 26.25x)
              </p>
              <blockquote className="text-xs text-slate-600 leading-relaxed mb-4 italic border-l-2 border-[#2563EB] pl-3">
                "Hệ thống Google Ads & Maps của Minh Duc Global đã giúp chúng tôi tiếp cận đúng tệp khách hàng có nhu cầu thật tại khu vực. Chiến dịch đạt hiệu quả chuyển đổi vượt mong đợi, doanh thu tăng trưởng ổn định mà không bị phụ thuộc vào giảm giá."
              </blockquote>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs">
                  CP
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#0A0F1C]">Anh Khánh</p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Founder / Chủ chuỗi nhà hàng</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cột phải: Bento Cards giải thích lý do */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {reasons.map((reason, idx) => (
              <div 
                key={idx}
                className="bento-card bg-white p-8 border border-slate-100 hover:border-[#2563EB]/20 transition-all duration-300 rounded-2xl flex gap-6 items-start"
              >
                {/* Số thứ tự */}
                <div className="h-8 w-8 rounded-full bg-blue-50/50 flex items-center justify-center text-xs font-bold text-[#2563EB] shrink-0">
                  {idx + 1}
                </div>
                
                <div>
                  <h3 className="text-base font-black text-[#0A0F1C] uppercase tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="text-[10px] font-bold uppercase text-[#2563EB]/80 mt-1 mb-3">
                    {reason.vietnameseTitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
