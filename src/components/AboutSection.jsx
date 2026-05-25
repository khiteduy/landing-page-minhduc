import React, { useState } from "react";

const storyPhases = [
  {
    title: "1. Khởi đầu (Đam mê công nghệ)",
    desc: "Đinh Minh Đức (sinh năm 2005 tại Hải Dương) bắt đầu bằng việc tự mày mò và nghiên cứu cách thức hoạt động của mạng xã hội Facebook cùng cơ chế phân phối thuật toán từ rất sớm.",
    keyline: "Đam mê công nghệ và khả năng tự học liên tục làm nền móng.",
  },
  {
    title: "2. Thực chiến & Tối ưu phễu",
    desc: "Bắt đầu hỗ trợ kỹ thuật fanpage, vận hành ads tin nhắn, đo lường các chỉ số CPA/ROAS cho các cửa hàng bán lẻ và điểm bán F&B nội địa.",
    keyline: "Mọi hoạt động marketing đều quy về kết quả doanh thu thực tế.",
  },
  {
    title: "3. Sáng lập Minh Duc Global",
    desc: "Xây dựng quy trình vận hành in-house chuẩn hóa, kết hợp đồng bộ giữa tối ưu Ads, định hướng Content chuyển đổi, tối ưu Google Maps và đào tạo học viên thực chiến.",
    keyline: "Mang giải pháp tăng trưởng chuyển đổi thực chất đến đối tác.",
  },
];

export default function AboutSection() {
  const [activeStory, setActiveStory] = useState(0);

  return (
    <section id="about" className="gravity-blue-surface py-28 text-white border-b border-blue-200/10 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.06),transparent_50%)] -z-10" />

      <div className="section-container relative z-10">
        
        {/* Title */}
        <div className="max-w-3xl mb-20">
          <p className="uppercase tracking-[0.2em] text-[10px] font-bold text-[#2563EB] mb-4">
            Người Sáng Lập
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.025em] uppercase text-white font-display leading-[1.22]">
            Người Vận Hành Hệ Thống
          </h2>
        </div>

        {/* Bố cục 2 cột */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Cột trái: Văn bản giới thiệu */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="space-y-6">
              <p className="text-xs text-[#2563EB] font-bold uppercase tracking-widest">
                Tầm Nhìn & Cam Kết Hiệu Quả
              </p>
              
              {/* Main Description */}
              <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed italic border-l-2 border-[#2563EB] pl-6">
                "Minh Đức Global được sáng lập và điều hành bởi Đinh Minh Đức — chuyên gia marketing tập trung vào hiệu suất (performance), hoạt động chuyên sâu trong mảng F&B, giáo dục, thương mại điện tử và tối ưu điểm bán địa phương."
              </p>
              
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed pt-4">
                Công việc của chúng tôi kết hợp chặt chẽ giữa thực thi quảng cáo kỹ thuật số, lập chiến lược nội dung video ngắn/hình ảnh và tối ưu hóa dựa trên dữ liệu thật. Mục tiêu tối thượng là giúp doanh nghiệp chuyển đổi các kênh digital thành kết quả kinh doanh đo lường được bằng doanh thu, dòng tiền và tệp khách hàng.
              </p>
            </div>

            {/* Profile Info Cards */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="p-5 border border-blue-200/10 bg-white/[0.08] rounded-xl">
                <span className="text-[9px] font-bold uppercase text-slate-500 tracking-wider">Người sáng lập</span>
                <p className="text-sm font-bold text-white mt-1">Đinh Minh Đức</p>
                <span className="text-[10px] text-[#2563EB] font-bold uppercase block mt-1">Founder / CEO</span>
              </div>
              <div className="p-5 border border-blue-200/10 bg-white/[0.08] rounded-xl">
                <span className="text-[9px] font-bold uppercase text-slate-500 tracking-wider">Khu vực làm việc</span>
                <p className="text-sm font-bold text-white mt-1">Hải Dương / Toàn quốc</p>
                <span className="text-[10px] text-slate-400 block mt-1">Trực tiếp & Online</span>
              </div>
            </div>
          </div>

          {/* Cột phải: Story Timeline */}
          <div className="lg:col-span-6 p-8 border border-blue-200/10 bg-white/[0.08] rounded-3xl backdrop-blur-sm">
            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">
              Hành trình phát triển
            </h3>
            <p className="text-xs text-slate-400 mb-8">
              Bấm vào các cột mốc bên dưới để xem tóm tắt chặng phát triển năng lực của Đinh Minh Đức.
            </p>

            <div className="flex flex-col gap-4">
              {storyPhases.map((phase, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStory(idx)}
                  className={`text-left p-6 rounded-2xl transition-all duration-300 border ${
                    activeStory === idx
                      ? "bg-[#2563EB]/10 border-[#2563EB] shadow-md shadow-blue-500/5"
                      : "bg-white/[0.06] border-blue-200/10 hover:border-blue-200/25"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className={`text-sm font-black uppercase tracking-wider ${
                      activeStory === idx ? "text-[#2563EB]" : "text-white"
                    }`}>
                      {phase.title}
                    </h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      activeStory === idx ? "bg-[#2563EB] text-white" : "bg-[#0B74E8] text-blue-50"
                    }`}>
                      Giai đoạn 0{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mt-3">
                    {phase.desc}
                  </p>
                  {activeStory === idx && (
                    <div className="mt-4 pt-3 border-t border-blue-200/10 text-xs font-bold text-slate-300 flex items-center gap-1.5 animate-fade-in">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                      {phase.keyline}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
