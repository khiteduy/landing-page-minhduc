import React, { useState } from "react";
import { Link } from "react-router-dom";

const timeline = [
  { phase: "Bối cảnh", icon: "📍", content: "Cardi Pizzeria Võ Văn Kiệt là một chi nhánh của chuỗi Cardi Pizzeria tại Đà Nẵng. Trước khi hợp tác, tài khoản Google Ads chưa được thiết lập bài bản, không có đo lường chuyển đổi, ngân sách bị lãng phí vào các từ khóa không liên quan." },
  { phase: "Mục tiêu", icon: "🎯", content: "Tăng doanh thu thực tế tại cửa hàng thông qua Google Search Ads và Local Map Ads, với ngân sách kiểm soát chặt. Mục tiêu: ROAS ≥ 10x trong 30 ngày đầu." },
  { phase: "Triển khai", icon: "⚙️", content: "Thiết lập lại cấu trúc tài khoản từ đầu. Nghiên cứu từ khóa theo intent mua hàng thực tế. Cài đặt đo lường chuyển đổi (call tracking, direction click). Tối ưu Google Business Profile + Local Map để phủ điểm bán. A/B test copy quảng cáo theo thời điểm trong ngày." },
  { phase: "Kết quả", icon: "📈", content: "Sau chiến dịch: ROAS đạt 26.25x — chi 23,791,158đ — thu về 624,600,000đ doanh thu trực tiếp. Lượng khách đến từ Google Maps tăng đáng kể trong giờ cao điểm." },
];

const proofImages = [
  { src: "/course-assets/cardi-pizzeria.jpg", caption: "Hình ảnh mặt tiền nhà hàng Cardi Pizzeria Võ Văn Kiệt tại Đà Nẵng" },
  { src: "https://i.ibb.co/F41NH6Vy/daonh-thu.jpg", caption: "Doanh thu 624,600,000đ được ghi nhận qua hệ thống POS" },
  { src: "https://i.ibb.co/gMJvsvm9/camp-gg-1.jpg", caption: "Dashboard Google Ads — Ngân sách: 23,791,158đ" },
];

export default function CardiCaseStudyPage() {
  const [lightbox, setLightbox] = useState("");

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#0A0F1C]">
      {/* Header mini */}
      <header className="fixed top-0 w-full bg-[#F8FAF9]/90 backdrop-blur-md z-50 border-b border-[#0A0F1C]/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between text-xs font-black uppercase tracking-widest">
          <Link to="/" className="hover:text-[#2563EB] transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Minh Duc Global
          </Link>
          <span className="text-[10px] text-slate-400 hidden sm:block">Case Study</span>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 border-b border-[#0A0F1C]/5 bg-[#0A0F1C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} aria-hidden="true"/>
        <div className="max-w-4xl mx-auto relative">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-orange-400/20 border border-orange-400/30 text-[10px] font-black uppercase tracking-wider text-orange-300">F&B / Pizza</span>
            <span className="px-3 py-1 rounded-full bg-emerald-400/20 border border-emerald-400/30 text-[10px] font-black uppercase tracking-wider text-emerald-300">Google Ads & Local Map</span>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.08 }}
          >
            Cardi Pizzeria<br />
            <span className="text-[#2563EB]">ROAS 26.25x</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
            Chi <strong className="text-white">23,791,158đ</strong> ngân sách Google Ads — thu về <strong className="text-white">624,600,000đ</strong> doanh thu thực tế tại cửa hàng.
          </p>

          {/* KPI row */}
          <div className="grid grid-cols-3 gap-4 border-t border-slate-800 pt-8">
            {[
              { v: "26.25x", l: "ROAS" },
              { v: "624.6M", l: "Doanh thu (VND)" },
              { v: "23.8M", l: "Ngân sách (VND)" },
            ].map((k, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl sm:text-3xl font-black text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{k.v}</p>
                <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mt-1">{k.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-white border-b border-[#0A0F1C]/5">
        <div className="max-w-4xl mx-auto">
          <p className="section-eyebrow">Câu Chuyện Chiến Dịch</p>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0A0F1C] mb-12" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Từ bối cảnh đến kết quả
          </h2>
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-5 p-6 sm:p-8 rounded-2xl bg-slate-50/60 border border-slate-100 hover:border-[#2563EB]/20 transition-colors duration-300">
                <div className="shrink-0 text-2xl">{item.icon}</div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#2563EB] mb-2">{item.phase}</p>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof images */}
      <section className="py-20 px-6 bg-[#F8FAF9] border-b border-[#0A0F1C]/5">
        <div className="max-w-4xl mx-auto">
          <p className="section-eyebrow">Minh Chứng Thực Tế</p>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0A0F1C] mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Ảnh xác thực từ chiến dịch
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {proofImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(img.src)}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 hover:border-[#2563EB] transition-all duration-300 text-left"
              >
                <img src={img.src} alt={img.caption} className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy"/>
                <div className="absolute inset-0 bg-[#0A0F1C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-[#0A0F1C] text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-full">Xem lớn</span>
                </div>
                <div className="p-4 bg-white border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-600">{img.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Kết luận */}
      <section className="py-20 px-6 bg-[#0A0F1C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} aria-hidden="true"/>
        <div className="max-w-4xl mx-auto relative">
          <p className="section-eyebrow" style={{ color: "#2563EB" }}>Kết Luận</p>
          <div className="border-l-4 border-[#2563EB] pl-6 mb-10">
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed italic">
              "Với ngân sách 23.8 triệu đồng, hệ thống Google Ads + Local Map đã mang về 624.6 triệu đồng doanh thu — tương đương ROAS 26.25x. Đây là minh chứng rõ ràng rằng quảng cáo đúng intent, đo lường đúng chuyển đổi sẽ tạo ra doanh thu thực tế."
            </p>
            <p className="text-sm font-black text-white mt-4">— Đinh Minh Đức, Founder/CEO Minh Duc Global</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/#contact" className="btn-awwwards btn-awwwards-solid">Tôi muốn kết quả tương tự →</a>
            <Link to="/" className="btn-awwwards btn-awwwards-outline border-white/20 text-white hover:border-white">Xem các case khác</Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 cursor-zoom-out"
          onClick={() => setLightbox("")}
        >
          {/* Close button on fixed backdrop */}
          <button
            onClick={() => setLightbox("")}
            className="fixed top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-all duration-300 border border-white/10 z-50 shadow-lg"
            aria-label="Đóng"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative flex flex-col items-center max-w-[90vw] max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white p-2 rounded-2xl shadow-2xl border border-slate-100/50 flex items-center justify-center">
              <img
                src={lightbox}
                alt="Proof detail"
                className="max-h-[70vh] max-w-[85vw] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}

      <footer className="bg-[#0A0F1C] border-t border-slate-800 py-6 px-6 text-center">
        <Link to="/" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-colors">
          ← Quay về Minh Duc Global
        </Link>
      </footer>
    </div>
  );
}
