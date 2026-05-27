import React, { useState } from "react";

const storyPhases = [
  {
    title: "1. Cậu Bé Vùng Quê & Chiếc Máy Tính Cũ (2018 - 2020)",
    desc: "Xuất thân từ vùng quê Hải Dương, không có người dẫn đường hay bệ đỡ tài chính, Đinh Minh Đức bắt đầu hành trình bằng một chiếc máy tính cũ và niềm đam mê mãnh liệt với Internet. Những đêm trắng thức khuya mày mò nghiên cứu cách thức hoạt động của Facebook, giải mã từng thuật toán phân phối nội dung đã đặt những viên gạch nền móng đầu tiên cho sự nghiệp.",
    keyline: "Khát khao vượt khó và tư duy tự học không giới hạn.",
  },
  {
    title: "2. Thực Chiến Đột Phá & Dự Án Trăm Triệu (2021 - 2023)",
    desc: "Từ việc hỗ trợ xử lý kỹ thuật fanpage, mở khóa checkpoint đến trực tiếp tối ưu hóa ads tin nhắn cho các điểm bán F&B và chuỗi bán lẻ. Với tư duy thực chiến 'nói chuyện bằng số liệu', Đức đã tối ưu ngân sách quảng cáo từ những đồng vốn nhỏ nhất, dần dần vươn lên đảm nhận các chiến dịch ngân sách lớn và mang về dòng doanh thu hàng trăm triệu đồng cho đối tác.",
    keyline: "Mọi đồng ngân sách quảng cáo đều phải sinh lời thực tế.",
  },
  {
    title: "3. CEO Minh Duc Global & Khát Vọng Nâng Tầm (2024 - Nay)",
    desc: "Sáng lập Minh Duc Global khi tuổi đời còn rất trẻ, Minh Đức đã xây dựng quy trình agency vận hành in-house chuẩn hóa, thực hiện các dự án quy mô hàng tỷ đồng (tiêu biểu như case study Bee English Community được Meta toàn cầu ghi nhận). Song song đó, anh trực tiếp đào tạo và cố vấn thực chiến cho hàng trăm học viên ưu tú, giúp họ tự tin làm chủ tư duy marketing phễu hiện đại.",
    keyline: "Đồng hành tăng trưởng bền vững cùng doanh nghiệp Việt.",
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
          <p className="uppercase tracking-[0.2em] text-[10px] font-bold text-white/75 mb-4">
            Người Sáng Lập
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.025em] uppercase text-white font-display leading-[1.22]">
            Founder &amp; CEO Đinh Minh Đức
          </h2>
        </div>

        {/* Bố cục 2 cột */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Cột trái: Văn bản giới thiệu */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="space-y-6">
              <p className="text-xs text-cyan-100 font-bold uppercase tracking-widest">
                Tầm Nhìn & Câu Chuyện Truyền Cảm Hứng
              </p>
              
              {/* Main Description */}
              <p className="text-lg sm:text-xl text-white/90 font-medium leading-[1.9] italic border-l-2 border-cyan-200 pl-6">
                "Tôi xuất phát điểm không có gì ngoài chiếc máy tính cũ và sự tò mò vô hạn với thế giới số. Từ một cậu bé vùng quê Hải Dương tự mày mò thuật toán, tôi hiểu rằng Marketing thực chất không nằm ở những lý thuyết hào nhoáng, mà là hiệu quả doanh số thực tế mang về cho đối tác và năng lực tự làm chủ của mỗi học viên."
              </p>
              
              <p className="text-sm sm:text-base text-blue-50/85 leading-[1.9] pt-4">
                Hành trình từ một freelancer tự học trở thành CEO điều hành Minh Duc Global là câu chuyện của sự nỗ lực bền bỉ và thực chiến không ngừng nghỉ. Chúng tôi không vẽ ra các lý thuyết suông; Minh Duc Global tập trung tối ưu hóa chi phí quảng cáo, thiết lập phễu kinh doanh và đào tạo ra những học viên thực sự có khả năng vận hành chiến dịch thực tế, tạo ra kết quả rõ rệt cho doanh nghiệp của riêng họ.
              </p>
            </div>

            {/* Profile Info Cards */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              <a
                href="https://nguoinoitieng.tv/nghe-nghiep/ho-tro-facebook/dinh-minh-duc/bgnj"
                target="_blank"
                rel="noreferrer"
                className="p-5 border border-white/20 bg-white/[0.14] rounded-xl hover:bg-white/[0.22] hover:border-white/50 transition-all duration-300 group block"
              >
                <span className="text-[9px] font-bold uppercase text-blue-50/70 tracking-wider">Người sáng lập</span>
                <p className="text-sm font-bold text-white mt-1 group-hover:text-cyan-200 transition-colors flex items-center gap-1.5">
                  Đinh Minh Đức
                  <svg className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 16 16">
                    <path d="M13 8v5a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h5M10 2h4v4M6 10l6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </p>
                <span className="text-[10px] text-cyan-100 font-bold uppercase block mt-1">Founder / CEO (Tiểu sử)</span>
              </a>
              <div className="p-5 border border-white/20 bg-white/[0.14] rounded-xl">
                <span className="text-[9px] font-bold uppercase text-blue-50/70 tracking-wider">Khu vực làm việc</span>
                <p className="text-sm font-bold text-white mt-1">Hải Dương / Toàn quốc</p>
                <span className="text-[10px] text-blue-50/80 block mt-1">Trực tiếp & Online</span>
              </div>
            </div>
          </div>

          {/* Cột phải: Story Timeline */}
          <div className="lg:col-span-6 p-8 border border-white/20 bg-white/[0.14] rounded-3xl backdrop-blur-sm">
            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">
              Hành trình phát triển
            </h3>
            <p className="text-xs text-blue-50/75 mb-8 leading-[1.8]">
              Bấm vào các cột mốc bên dưới để xem chi tiết chặng phát triển từ xuất phát điểm khiêm tốn đến các chiến dịch quy mô lớn của Đinh Minh Đức.
            </p>

            <div className="flex flex-col gap-4">
              {storyPhases.map((phase, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStory(idx)}
                  className={`text-left p-6 rounded-2xl transition-all duration-300 border ${
                    activeStory === idx
                      ? "bg-white/[0.22] border-white/50 shadow-md shadow-blue-500/5"
                      : "bg-white/[0.08] border-white/15 hover:border-white/35"
                  }`}
                  type="button"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-black uppercase tracking-wider text-white">
                      {phase.title}
                    </h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      activeStory === idx ? "bg-[#2563EB] text-white" : "bg-[#0B74E8] text-blue-50"
                    }`}>
                      Giai đoạn 0{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs text-blue-50/85 leading-[1.85] mt-3">
                    {phase.desc}
                  </p>
                  {activeStory === idx && (
                    <div className="mt-4 pt-3 border-t border-white/20 text-xs font-bold text-white flex items-center gap-1.5 animate-fade-in">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-200" />
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
