import React from "react";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

const serviceBlocks = [
  {
    title: "Tăng tương tác đa nền tảng",
    desc: "Hỗ trợ tăng like, bình luận, follow, view, share và tín hiệu tương tác cho Facebook, TikTok, Instagram theo mục tiêu xây uy tín, tạo đà nội dung và tăng độ phủ ban đầu.",
  },
  {
    title: "Xử lý khóa & hạn chế Facebook",
    desc: "Rà soát và hỗ trợ xử lý các tình trạng thường gặp như khóa 956, 2FA, checkpoint, hạn chế tài khoản, fanpage, quyền quản trị, bảo mật và các lỗi phát sinh khi sử dụng Facebook.",
  },
  {
    title: "Hỗ trợ lỗi TikTok & livestream",
    desc: "Hỗ trợ kiểm tra tình trạng khóa live TikTok, hạn chế tính năng, cảnh báo nội dung, lỗi tài khoản/kênh và các vấn đề ảnh hưởng đến khả năng phân phối hoặc vận hành nội dung.",
  },
  {
    title: "Kháng vô hiệu hóa IG/FB",
    desc: "Hỗ trợ chuẩn bị thông tin, kiểm tra nguyên nhân và định hướng xử lý các trường hợp vô hiệu hóa 180 ngày Instagram/Facebook, lỗi đăng nhập, xác minh, bảo mật và quyền truy cập.",
  },
];

const outcomes = ["Tăng tương tác đúng mục tiêu", "Hỗ trợ Facebook, TikTok, Instagram", "Rà soát lỗi và tình trạng khóa", "Quy trình xử lý rõ ràng"];

export default function SocialServicesPage({ contactForm }) {
  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#0A0F1C]">
      <Header />

      <main>
        <section className="pt-36 pb-20 border-b border-[#0A0F1C]/5 bg-white">
          <div className="section-container grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="section-eyebrow">Dịch vụ mạng xã hội đa nền tảng</p>
              <h1 className="max-w-5xl font-display text-4xl font-black uppercase leading-[1.24] tracking-[-0.025em] sm:text-6xl sm:leading-[1.2]">
                Tăng tương tác và xử lý lỗi mạng xã hội cho Facebook, TikTok, Instagram.
              </h1>
              <p className="mt-8 max-w-3xl text-base leading-[1.9] text-slate-500">
                Minh Duc Global hỗ trợ người dùng và doanh nghiệp xử lý các nhu cầu thực tế khi vận hành mạng xã hội: tăng tương tác, mở rộng độ phủ, rà soát lỗi tài khoản, khóa tính năng, khóa live và các tình trạng hạn chế trên nền tảng.
              </p>
              <p className="mt-5 max-w-3xl rounded-2xl border border-blue-100 bg-blue-50 px-6 py-5 text-sm font-semibold leading-[1.9] text-[#0B4EA2]">
                Lưu ý: kết quả xử lý phụ thuộc tình trạng tài khoản, bằng chứng cung cấp và chính sách nền tảng tại thời điểm kiểm tra. Minh Duc Global tư vấn theo hướng minh bạch, an toàn và có quy trình.
              </p>
            </div>
            <div className="lg:col-span-4">
              <a href="#contact" className="btn-awwwards btn-awwwards-solid w-full">
                Gửi tình trạng cần xử lý
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
                  <h2 className="mt-5 font-display text-2xl font-black uppercase leading-[1.25] tracking-[-0.025em]">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-[1.85] text-slate-500">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gravity-blue-surface py-20 text-white">
          <div className="section-container relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#93C5FD]">Kết quả kỳ vọng</p>
              <h2 className="mt-4 font-display text-3xl font-black uppercase leading-[1.22] tracking-[-0.035em]">
                Không chỉ tăng số. Phải xử lý đúng tình trạng nền tảng.
              </h2>
              <p className="mt-5 text-sm leading-[1.9] text-slate-300">
                Mỗi lỗi tài khoản có nguyên nhân khác nhau. Cách làm tốt là kiểm tra hiện trạng, phân loại lỗi, chuẩn bị thông tin đúng và chọn phương án xử lý phù hợp thay vì làm mò.
              </p>
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
