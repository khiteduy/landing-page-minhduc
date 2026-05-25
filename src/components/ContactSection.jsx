import React from "react";

export default function ContactSection({ contactForm }) {
  return (
    <section id="contact" className="py-28 bg-[#F8FAF9] border-b border-[#0A0F1C]/5">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Cột trái: Final CTA & Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="uppercase tracking-[0.2em] text-[10px] font-bold text-[#2563EB] mb-4">
                Đăng Ký Tư Vấn
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.22] font-black tracking-[-0.025em] uppercase text-[#0A0F1C] font-display mb-6">
                Bạn muốn bứt phá doanh số? <br />
                <span className="text-[#2563EB]">Hãy cùng xây dựng hệ thống.</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-10 max-w-md">
                Hãy chia sẻ với tôi về mục tiêu kinh doanh, các kênh bán hàng hiện tại và những khó khăn bạn đang gặp phải. Tôi sẽ phản hồi với lộ trình rõ ràng nhất.
              </p>
            </div>

            {/* Thông tin liên lạc trực tiếp */}
            <div className="border-t border-[#0A0F1C]/5 pt-8 space-y-4 text-xs font-bold uppercase tracking-wider text-[#0A0F1C]/80">
              <p className="text-[10px] text-slate-400 font-extrabold uppercase">Liên hệ trực tiếp</p>
              <div className="flex flex-col gap-2">
                <div>Email: <a href="mailto:contact@minhduc.global" className="text-[#2563EB] hover:underline">contact@minhduc.global</a></div>
                <div>SĐT / Zalo: <a href="tel:0966442654" className="text-[#2563EB] hover:underline">0966.442.654</a></div>
                <div>Facebook: <a href="https://facebook.com/minhduc.profile" target="_blank" rel="noreferrer" className="text-[#2563EB] hover:underline">Đinh Minh Đức ↗</a></div>
              </div>
            </div>
          </div>

          {/* Cột phải: Form liên hệ Doanh nghiệp */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 border border-[#0A0F1C]/5 rounded-3xl shadow-[0_15px_50px_rgba(10,15,28,0.015)]">
            {contactForm.success ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm animate-pulse">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#0A0F1C] uppercase tracking-wider animate-fade-in">
                  Gửi thông tin thành công!
                </h3>
                <p className="mt-3 max-w-md text-slate-500 text-sm leading-relaxed">
                  Cảm ơn bạn. Đinh Minh Đức và đội ngũ Minh Duc Global sẽ liên hệ tư vấn qua số điện thoại/Zalo trong thời gian sớm nhất.
                </p>
                <button
                  type="button"
                  onClick={contactForm.resetForm}
                  className="mt-8 btn-awwwards btn-awwwards-outline"
                >
                  Gửi form mới
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-black text-[#0A0F1C] uppercase tracking-tight mb-2">
                  Đăng Ký Nhận Tư Vấn Tăng Trưởng
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mb-8">
                  Điền thông tin nhu cầu để chúng tôi nghiên cứu sản phẩm và lập phương án tư vấn cụ thể.
                </p>
                
                <form onSubmit={contactForm.handleSubmit} className="flex flex-col gap-6">
                  
                  {/* Nhóm nhu cầu */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                      Nhóm nhu cầu
                    </label>
                    <select
                      name="needGroup"
                      value={contactForm.values.needGroup}
                      onChange={contactForm.handleChange}
                      className="w-full bg-white text-slate-800 font-semibold"
                    >
                      <option>Tôi là doanh nghiệp</option>
                      <option>Tôi là học viên</option>
                    </select>
                  </div>

                  {/* Grid thông tin cá nhân */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                        Họ và tên
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={contactForm.values.name}
                        onChange={contactForm.handleChange}
                        placeholder="Nhập họ tên của bạn"
                        className={`w-full ${
                          contactForm.errors.name ? "border-red-400 bg-red-50/10" : ""
                        }`}
                      />
                      {contactForm.errors.name && (
                        <span className="text-[10px] text-red-500 font-bold mt-1">
                          {contactForm.errors.name}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                        Số điện thoại / Zalo
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={contactForm.values.phone}
                        onChange={contactForm.handleChange}
                        placeholder="Nhập số điện thoại liên hệ"
                        className={`w-full ${
                          contactForm.errors.phone ? "border-red-400 bg-red-50/10" : ""
                        }`}
                      />
                      {contactForm.errors.phone && (
                        <span className="text-[10px] text-red-500 font-bold mt-1">
                          {contactForm.errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Nhu cầu quảng cáo */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                      Nhu cầu dịch vụ chính
                    </label>
                    <input
                      type="text"
                      name="mainNeed"
                      value={contactForm.values.mainNeed}
                      onChange={contactForm.handleChange}
                      placeholder="Ví dụ: Tối ưu Facebook Ads, Google Ads, SEO Maps..."
                      className={`w-full ${
                        contactForm.errors.mainNeed ? "border-red-400 bg-red-50/10" : ""
                      }`}
                    />
                    {contactForm.errors.mainNeed && (
                      <span className="text-[10px] text-red-500 font-bold mt-1">
                        {contactForm.errors.mainNeed}
                      </span>
                    )}
                  </div>

                  {/* Mô tả ngắn */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                      Mô tả ngắn mục tiêu
                    </label>
                    <textarea
                      name="description"
                      value={contactForm.values.description}
                      onChange={contactForm.handleChange}
                      placeholder="Ví dụ: Mục tiêu doanh số hoặc lead cần đạt được trong 30-90 ngày tới..."
                      className={`w-full min-h-[120px] resize-none ${
                        contactForm.errors.description ? "border-red-400 bg-red-50/10" : ""
                      }`}
                    />
                    {contactForm.errors.description && (
                      <span className="text-[10px] text-red-500 font-bold mt-1">
                        {contactForm.errors.description}
                      </span>
                    )}
                  </div>

                  {contactForm.submitError && (
                    <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-xs text-red-700 font-bold">
                      {contactForm.submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={contactForm.loading}
                    className="btn-awwwards btn-awwwards-solid w-full text-center mt-4"
                  >
                    {contactForm.loading ? "Đang gửi đăng ký..." : "Gửi thông tin đăng ký"}
                  </button>

                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
