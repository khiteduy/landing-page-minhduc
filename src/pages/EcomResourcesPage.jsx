import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ToolkitSection from "../components/ToolkitSection";

const resources = [
  {
    name: "TKQC Facebook",
    price: "Trả trước / trả sau",
    desc: "Tài khoản quảng cáo Facebook theo nhu cầu vận hành, được tư vấn theo trạng thái sử dụng, phương án thanh toán và cấu trúc chạy phù hợp từng mô hình.",
  },
  {
    name: "BM / Business Manager",
    price: "Theo nhu cầu",
    desc: "Tài nguyên BM, quyền quản trị, cấu trúc tài sản quảng cáo và phương án phân quyền để đội vận hành ads làm việc rõ ràng, hạn chế rủi ro nhầm quyền.",
  },
  {
    name: "TKQC TikTok",
    price: "Trả trước / trả sau",
    desc: "Tài khoản quảng cáo TikTok phục vụ test creative, scale video ngắn và vận hành chiến dịch theo ngành hàng phù hợp với chính sách nền tảng.",
  },
  {
    name: "TKQC Google Ads",
    price: "Trả trước / trả sau",
    desc: "Tài khoản Google Ads cho Search, Local, YouTube hoặc Display tùy mục tiêu, có tư vấn thiết lập thanh toán, đo lường và cấu trúc chiến dịch ban đầu.",
  },
];

const stacks = ["TKQC Facebook", "BM", "TKQC TikTok", "TKQC Google", "Trả trước", "Trả sau"];

export default function EcomResourcesPage({ toolkitForm }) {
  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#0A0F1C]">
      <Header />

      <main>
        <section className="pt-36 pb-20 bg-[#0A0F1C] text-white">
          <div className="section-container grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#93C5FD]">Ads Resource Store</p>
              <h1 className="mt-5 font-display text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
                Kho tài nguyên chạy quảng cáo cho Facebook, TikTok, Google.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
                Minh Duc Global hỗ trợ tài nguyên vận hành quảng cáo gồm TKQC Facebook, TikTok, Google, BM và các lựa chọn trả trước/trả sau. Phù hợp đội chạy ads cần tài sản ổn định, rõ tình trạng và có người tư vấn cách sử dụng.
              </p>
              <p className="mt-4 max-w-2xl rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold leading-relaxed text-blue-50">
                Tài nguyên được tư vấn theo nhu cầu vận hành hợp lệ. Website không khuyến nghị hành vi vi phạm chính sách nền tảng hoặc lách quy định quảng cáo.
              </p>
            </div>
            <div className="lg:col-span-4">
              <a href="#toolkit" className="btn-awwwards btn-awwwards-solid w-full">
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
                <h2 className="font-display text-3xl font-black uppercase tracking-tight">
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
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display text-2xl font-black uppercase tracking-tight">{item.name}</h3>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#2563EB]">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-slate-500">{item.desc}</p>
                  </div>
                  <a href="#toolkit" className="mt-8 text-[10px] font-black uppercase tracking-[0.2em] text-[#2563EB]">
                    Yêu cầu báo giá / kiểm tra tồn →
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[2rem] border border-blue-100 bg-blue-50 p-6 text-sm font-semibold leading-relaxed text-[#0B4EA2]">
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
