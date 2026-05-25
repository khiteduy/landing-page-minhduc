import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ToolkitSection from "../components/ToolkitSection";

const resources = [
  {
    name: "Bộ Target đa ngành hàng",
    price: "Miễn phí",
    desc: "Danh sách gợi ý nhóm target, chân dung khách hàng và hướng test ban đầu cho nhiều nhóm ngành phổ biến.",
  },
  {
    name: "Bảng đọc chỉ số Ads",
    price: "Sắp mở bán",
    desc: "Template theo dõi CPM, CTR, CPC, CPA, lead quality và đề xuất hành động tối ưu theo từng ngưỡng chỉ số.",
  },
  {
    name: "Bộ Hook & Angle quảng cáo",
    price: "Sắp mở bán",
    desc: "Thư viện góc bán hàng, hook video ngắn, headline và cấu trúc content dùng cho Facebook/TikTok Ads.",
  },
  {
    name: "Template SEO sản phẩm",
    price: "Sắp mở bán",
    desc: "Khung tối ưu tiêu đề, mô tả, USP, hình ảnh và nội dung sản phẩm cho sàn thương mại điện tử.",
  },
];

const stacks = ["Facebook Ads", "TikTok Ads", "Google Search", "Shopee/Lazada", "Content SEO", "Báo cáo KPI"];

export default function EcomResourcesPage({ toolkitForm }) {
  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#0A0F1C]">
      <Header />

      <main>
        <section className="pt-36 pb-20 bg-[#0A0F1C] text-white">
          <div className="section-container grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#93C5FD]">Ecom Resource Store</p>
              <h1 className="mt-5 font-display text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
                Tài nguyên chạy quảng cáo cho người làm ecom.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
                Các bộ tài liệu được đóng gói từ kinh nghiệm triển khai thực chiến: target, angle, bảng đọc chỉ số, template SEO sản phẩm và checklist tối ưu chuyển đổi.
              </p>
            </div>
            <div className="lg:col-span-4">
              <a href="#toolkit" className="btn-awwwards btn-awwwards-solid w-full">
                Nhận tài nguyên đầu tiên
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
                  Từ target đến tối ưu chỉ số.
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
                    Đăng ký nhận / cập nhật →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ToolkitSection toolkitForm={toolkitForm} />
      </main>

      <Footer />
    </div>
  );
}
