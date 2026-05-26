import React from "react";
import { Link } from "react-router-dom";

const curriculum = [
  { session: "Buổi 1", title: "Tư duy & Nền tảng", topics: ["Cách Facebook phân phối quảng cáo", "Cấu trúc chiến dịch (Campaign → Ad set → Ad)", "Hiểu pixel & sự kiện chuyển đổi"] },
  { session: "Buổi 2", title: "Thiết lập chiến dịch đầu tiên", topics: ["Chọn mục tiêu đúng theo phễu", "Xác định tệp đối tượng mục tiêu", "Tạo quảng cáo tin nhắn thực tế"] },
  { session: "Buổi 3", title: "Đọc số & Tối ưu", topics: ["CPM, CTR, CPC, CPA là gì & tối ưu thế nào", "Xác định quảng cáo thắng / thua", "Tắt ad đúng lúc, tránh đốt tiền"] },
  { session: "Buổi 4", title: "Scale & Nhân rộng", topics: ["Duplicate chiến dịch hiệu quả", "Tăng ngân sách không mất momentum", "Retargeting & lookalike audience"] },
  { session: "Thực hành", title: "Case study thực tế", topics: ["Phân tích chiến dịch Bee English", "Xây phễu tin nhắn cho ngành cụ thể", "Nhận phản hồi trực tiếp từ thầy"] },
];

const packages = [
  { name: "Cơ Bản", price: "Liên hệ", desc: "Phù hợp người mới bắt đầu từ 0.", features: ["4 buổi học online/offline", "Tài liệu thực chiến", "Nhóm hỗ trợ 30 ngày"], highlight: false },
  { name: "Thực Chiến", price: "Liên hệ", desc: "Học kèm thực hành trực tiếp trên tài khoản thật.", features: ["4 buổi + 1 buổi thực hành", "Review tài khoản ads của bạn", "Hỗ trợ 1-1 sau học 60 ngày", "Tài liệu & template độc quyền"], highlight: true },
];

export default function FacebookAdsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#0A0F1C]">
      {/* Header mini */}
      <header className="fixed top-0 w-full bg-[#F8FAF9]/90 backdrop-blur-md z-50 border-b border-[#0A0F1C]/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-xs font-black uppercase tracking-widest">
          <Link to="/" className="hover:text-[#2563EB] transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Minh Duc Global
          </Link>
          <a href="#enroll" className="btn-awwwards btn-awwwards-solid py-2 px-5 text-[10px]">Đăng ký học</a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden border-b border-[#0A0F1C]/5">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(10,15,28,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(10,15,28,0.025) 1px,transparent 1px)", backgroundSize: "64px 64px" }} aria-hidden="true"/>
        <div className="max-w-4xl mx-auto relative">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-black uppercase tracking-wider text-[#2563EB] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-ping"/>
            Khóa Học Thực Chiến
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.1 }}
          >
            Facebook Ads<br />
            <span className="text-[#2563EB]">từ 0 đến ra đơn.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#0A0F1C]/65 max-w-2xl leading-relaxed mb-10">
            Học trực tiếp từ Đinh Minh Đức — người đã triển khai chiến dịch Bee English đạt <strong>300–350 lead/tháng</strong> với chi phí tin nhắn chỉ <strong>3,000–5,000đ/mess</strong>. Không có lý thuyết suông.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#enroll" className="btn-awwwards btn-awwwards-solid">Nhận tư vấn lộ trình học →</a>
            <a href="#curriculum" className="btn-awwwards btn-awwwards-outline">Xem lộ trình chi tiết</a>
          </div>
        </div>
      </section>

      {/* Phù hợp với ai */}
      <section className="py-20 px-6 bg-white border-b border-[#0A0F1C]/5">
        <div className="max-w-4xl mx-auto">
          <p className="section-eyebrow">Phù Hợp Với Ai</p>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0A0F1C] mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Khóa học này dành cho bạn nếu...
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Chủ shop muốn tự chạy ads tiết kiệm chi phí agency",
              "Nhân viên marketing muốn nắm kỹ thuật thực chiến",
              "Freelancer muốn thêm dịch vụ chạy Facebook Ads cho khách",
              "Người mới chưa biết gì về quảng cáo nhưng muốn học bài bản",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-xl bg-blue-50/40 border border-blue-100">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#2563EB] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12"><path d="M2.5 6l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <p className="text-sm font-medium text-[#0A0F1C]/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Học xong làm được gì */}
      <section className="py-20 px-6 bg-[#F8FAF9] border-b border-[#0A0F1C]/5">
        <div className="max-w-4xl mx-auto">
          <p className="section-eyebrow">Kết Quả Đầu Ra</p>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0A0F1C] mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Học xong, bạn làm được gì?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: "🎯", title: "Tự set camp", desc: "Tự thiết lập chiến dịch từ A→Z không cần nhờ người khác" },
              { icon: "📊", title: "Đọc số thực tế", desc: "Biết CPM, CTR, CPA — xác định camp thắng/thua chính xác" },
              { icon: "💸", title: "Chi phí tối ưu", desc: "Đạt tin nhắn 3k–5k/mess như học viên Quyên đã làm được" },
            ].map((item, i) => (
              <div key={i} className="bento-card bg-white p-7 flex flex-col gap-3 border border-slate-100">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-black text-[#0A0F1C] uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lộ trình */}
      <section id="curriculum" className="py-20 px-6 bg-white border-b border-[#0A0F1C]/5">
        <div className="max-w-4xl mx-auto">
          <p className="section-eyebrow">Lộ Trình Học</p>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0A0F1C] mb-10" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Từng buổi học cụ thể
          </h2>
          <div className="space-y-4">
            {curriculum.map((item, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-2xl bg-slate-50/60 border border-slate-100 hover:border-[#2563EB]/20 transition-colors duration-300">
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#0A0F1C] flex items-center justify-center text-white text-[10px] font-black">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {i < curriculum.length - 1 && <div className="w-px flex-1 mt-2 bg-slate-200"/>}
                </div>
                <div className="pb-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] mb-1">{item.session}</p>
                  <h3 className="font-black text-[#0A0F1C] uppercase tracking-tight mb-3">{item.title}</h3>
                  <ul className="space-y-1.5">
                    {item.topics.map((t, ti) => (
                      <li key={ti} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-1 h-1 rounded-full bg-[#2563EB] shrink-0"/>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Quyên */}
      <section className="py-20 px-6 bg-[#F8FAF9] border-b border-[#0A0F1C]/5">
        <div className="max-w-4xl mx-auto">
          <p className="section-eyebrow">Học Viên Thực Chiến</p>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0A0F1C] mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Học viên nói gì sau khóa học?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bento-card bg-white p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-black text-[#2563EB] text-sm">Q</div>
                <div>
                  <p className="font-black text-sm text-[#0A0F1C]">Học viên Quyên</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Kinh doanh xe điện</p>
                </div>
              </div>
              <blockquote className="text-sm text-slate-600 leading-relaxed italic border-l-2 border-[#2563EB] pl-4">
                "Bắt đầu từ số 0, sau khóa học em đã tự vận hành Facebook Ads ra đơn với chi phí chỉ 3,000đ – 5,000đ/mess. Thầy dạy rất thực tế, không có lý thuyết dài dòng."
              </blockquote>
              <div className="mt-5 flex items-center gap-2 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg w-fit">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14"><path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Đã ra đơn thực tế sau học
              </div>
            </div>
            <div className="aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-black">
              <iframe
                title="Feedback Quyên"
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F18izSvaN8g%2F&show_text=false"
                className="h-full w-full border-none"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gói học */}
      <section id="enroll" className="py-20 px-6 bg-white border-b border-[#0A0F1C]/5">
        <div className="max-w-4xl mx-auto">
          <p className="section-eyebrow">Gói Học</p>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0A0F1C] mb-10" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Chọn gói phù hợp với bạn
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {packages.map((pkg, i) => (
              <div key={i} className={`rounded-2xl p-8 border flex flex-col gap-5 ${pkg.highlight ? "bg-[#0A0F1C] border-[#0A0F1C] text-white" : "bg-white border-slate-100"}`}>
                <div>
                  <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${pkg.highlight ? "text-[#2563EB]" : "text-slate-400"}`}>{pkg.name}</p>
                  <p className={`text-2xl font-black ${pkg.highlight ? "text-white" : "text-[#0A0F1C]"}`} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{pkg.price}</p>
                  <p className={`text-sm mt-2 ${pkg.highlight ? "text-slate-400" : "text-slate-500"}`}>{pkg.desc}</p>
                </div>
                <ul className="space-y-2 flex-1">
                  {pkg.features.map((f, fi) => (
                    <li key={fi} className={`flex items-center gap-2 text-sm ${pkg.highlight ? "text-slate-300" : "text-slate-600"}`}>
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${pkg.highlight ? "bg-[#2563EB]" : "bg-[#2563EB]"}`}/>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact-enroll"
                  className={`btn-awwwards text-center w-full ${pkg.highlight ? "btn-awwwards-solid" : "btn-awwwards-outline"}`}
                >
                  Nhận tư vấn lộ trình học Facebook Ads →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini contact */}
      <section id="contact-enroll" className="py-20 px-6 bg-[#0A0F1C]">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2563EB] mb-4">Liên Hệ Trực Tiếp</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Đặt lịch tư vấn 1-1 miễn phí
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Đinh Minh Đức sẽ tư vấn trực tiếp lộ trình học phù hợp với mục tiêu và ngành nghề của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:0936643146" className="btn-awwwards btn-awwwards-solid">📞 0936.643.146</a>
            <a href="https://www.facebook.com/minhhduc.media" target="_blank" rel="noreferrer" className="btn-awwwards btn-awwwards-outline border-white/20 text-white hover:border-white">Facebook ↗</a>
          </div>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="bg-[#0A0F1C] border-t border-slate-800 py-6 px-6 text-center">
        <Link to="/" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-colors">
          ← Quay về Minh Duc Global
        </Link>
      </footer>
    </div>
  );
}
