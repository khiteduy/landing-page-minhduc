import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ToolkitSection from "../components/ToolkitSection";

const resources = [
  {
    name: "TKQC Facebook",
    price: "Trả trước / trả sau",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    desc: "Tài khoản quảng cáo Facebook theo nhu cầu vận hành, được tư vấn theo trạng thái sử dụng, phương án thanh toán và cấu trúc chạy phù hợp từng mô hình.",
  },
  {
    name: "BM / Business Manager",
    price: "Theo nhu cầu",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
    desc: "Tài nguyên BM, quyền quản trị, cấu trúc tài sản quảng cáo và phương án phân quyền để đội vận hành ads làm việc rõ ràng, hạn chế rủi ro nhầm quyền.",
  },
  {
    name: "TKQC TikTok",
    price: "Trả trước / trả sau",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80",
    desc: "Tài khoản quảng cáo TikTok phục vụ test creative, scale video ngắn và vận hành chiến dịch theo ngành hàng phù hợp với chính sách nền tảng.",
  },
  {
    name: "TKQC Google Ads",
    price: "Trả trước / trả sau",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    desc: "Tài khoản Google Ads cho Search, Local, YouTube hoặc Display tùy mục tiêu, có tư vấn thiết lập thanh toán, đo lường và cấu trúc chiến dịch ban đầu.",
  },
];

const stacks = ["TKQC Facebook", "BM", "TKQC TikTok", "TKQC Google", "Trả trước", "Trả sau"];

export default function EcomResourcesPage({ toolkitForm }) {
  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#0A0F1C]">
      <Header />

      <main>
        <section className="gravity-blue-surface pt-36 pb-20 text-white">
          <div className="section-container relative z-10 grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#93C5FD]">Ads Resource Store</p>
              <h1 className="mt-5 max-w-5xl font-display text-4xl font-black uppercase leading-[1.24] tracking-[-0.025em] sm:text-6xl sm:leading-[1.2]">
                Kho tài nguyên chạy quảng cáo cho Facebook, TikTok, Google.
              </h1>
              <p className="mt-8 max-w-3xl text-base leading-[1.9] text-slate-300">
                Minh Duc Global hỗ trợ tài nguyên vận hành quảng cáo gồm TKQC Facebook, TikTok, Google, BM và các lựa chọn trả trước/trả sau. Phù hợp đội chạy ads cần tài sản ổn định, rõ tình trạng và có người tư vấn cách sử dụng.
              </p>
              <p className="mt-5 max-w-3xl rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-sm font-semibold leading-[1.9] text-blue-50">
                Tài nguyên được tư vấn theo nhu cầu vận hành hợp lệ. Website không khuyến nghị hành vi vi phạm chính sách nền tảng hoặc lách quy định quảng cáo.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="image-reveal-card h-[420px] border border-white/15 shadow-[0_30px_90px_rgba(8,47,73,0.22)]">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1100&q=82"
                  alt="Minh họa hệ thống tài nguyên quảng cáo và dashboard vận hành"
                  loading="eager"
                />
                <div className="absolute inset-x-6 bottom-6 z-10 rounded-2xl border border-white/20 bg-white/15 p-5 backdrop-blur-md">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-50">
                    Resource Control
                  </p>
                  <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                    {["FB Ads", "TikTok", "Google"].map((item) => (
                      <div key={item} className="rounded-xl bg-white/15 px-3 py-3 text-[10px] font-black uppercase tracking-wider text-white">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <a href="#toolkit" className="btn-awwwards btn-awwwards-solid mt-6 w-full">
                Yêu cầu báo giá tài nguyên
              </a>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="section-container">
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-eyebrow">Catalog tài nguyên</p>
                <h2 className="font-display text-3xl font-black uppercase leading-[1.22] tracking-[-0.035em]">
                  TKQC, BM và tài nguyên vận hành ads.
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {stacks.map((item) => (
                  <span key={item} className="rounded-full border border-[#0A0F1C]/8 bg-slate-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {resources.map((item) => (
                <article key={item.name} className="bento-card flex min-h-[260px] flex-col justify-between">
                  <div>
                    <div className="image-reveal-card mb-7 h-44 border border-blue-100">
                      <img src={item.image} alt={`Minh họa ${item.name}`} loading="lazy" />
                      <span className="absolute bottom-4 left-4 z-10 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-[#0758B8]">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display text-2xl font-black uppercase leading-[1.25] tracking-[-0.025em]">{item.name}</h3>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#2563EB]">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-5 text-sm leading-[1.85] text-slate-500">{item.desc}</p>
                  </div>
                  <a href="#toolkit" className="mt-8 text-[10px] font-black uppercase tracking-[0.2em] text-[#2563EB]">
                    Yêu cầu báo giá / kiểm tra tồn →
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[2rem] border border-blue-100 bg-blue-50 p-6 text-sm font-semibold leading-[1.9] text-[#0B4EA2]">
              Khi gửi yêu cầu, hãy ghi rõ nền tảng cần dùng, ngân sách dự kiến, loại trả trước/trả sau và mục tiêu chạy ads. Đội Minh Duc Global sẽ phản hồi theo tình trạng tài nguyên phù hợp nhất.
            </div>
          </div>
        </section>

        <ToolkitSection toolkitForm={toolkitForm} />
      </main>

      <Footer />
    </div>
  );
}
