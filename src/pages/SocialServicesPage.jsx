import React from "react";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

const serviceBlocks = [
  {
    title: "Tối ưu Fanpage & hiện diện thương hiệu",
    desc: "Rà soát fanpage, thông tin doanh nghiệp, nội dung ghim, hình ảnh đại diện và luồng inbox để khách hàng hiểu đúng về thương hiệu trước khi để lại nhu cầu.",
  },
  {
    title: "Nội dung social phục vụ chuyển đổi",
    desc: "Xây trụ cột nội dung, kịch bản bài viết/video ngắn, lịch đăng và format test để nội dung không chỉ có tương tác mà còn dẫn về tư vấn, tin nhắn hoặc đơn hàng.",
  },
  {
    title: "Livestream, cộng đồng & chăm sóc tương tác",
    desc: "Thiết kế kịch bản livestream, nhịp seeding nội dung, quản trị bình luận/inbox và quy trình chăm sóc khách hàng sau tương tác.",
  },
  {
    title: "Hỗ trợ vận hành nền tảng",
    desc: "Tư vấn xử lý các điểm nghẽn thường gặp trên fanpage, tài khoản quảng cáo, quyền quản trị, bảo mật và cấu trúc tài sản số cho doanh nghiệp.",
  },
];

const outcomes = ["Fanpage rõ định vị", "Nội dung đều và có hệ thống", "Inbox có quy trình xử lý", "Dễ mở rộng sang quảng cáo"];

export default function SocialServicesPage({ contactForm }) {
  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#0A0F1C]">
      <Header />

      <main>
        <section className="pt-36 pb-20 border-b border-[#0A0F1C]/5 bg-white">
          <div className="section-container grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="section-eyebrow">Dịch vụ mạng xã hội</p>
              <h1 className="font-display text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
                Xây nền tảng social trước khi đổ tiền vào quảng cáo.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-500">
                Minh Duc Global hỗ trợ doanh nghiệp tối ưu fanpage, nội dung, livestream, inbox và hệ thống tài sản mạng xã hội để khách hàng thấy đáng tin trước khi chuyển đổi.
              </p>
            </div>
            <div className="lg:col-span-4">
              <a href="#contact" className="btn-awwwards btn-awwwards-solid w-full">
                Nhận tư vấn social
              </a>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="section-container">
            <div className="grid gap-6 md:grid-cols-2">
              {serviceBlocks.map((item, index) => (
                <article key={item.title} className="bento-card min-h-[260px]">
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#2563EB]">
                    0{index + 1}
                  </p>
                  <h2 className="mt-5 font-display text-2xl font-black uppercase tracking-tight">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-500">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0A0F1C] py-20 text-white">
          <div className="section-container grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#93C5FD]">Kết quả kỳ vọng</p>
              <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight">
                Social không đứng riêng. Nó phải phục vụ doanh thu.
              </h2>
            </div>
            <div className="lg:col-span-7 grid gap-3 sm:grid-cols-2">
              {outcomes.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm font-bold uppercase tracking-wider text-blue-50">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection contactForm={contactForm} />
      </main>

      <Footer />
    </div>
  );
}
