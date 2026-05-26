import React from "react";

export default function ContactSection({ contactForm }) {
  const isStudent = contactForm.values.needGroup === "Tôi là học viên";

  return (
    <section id="contact" className="py-24 sm:py-28 bg-[#F8FAF9] border-b border-[#0A0F1C]/5">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Cột trái */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-28">
            <div>
              <p className="section-eyebrow">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                Đăng Ký Tư Vấn
              </p>
              <h2
                className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-[#0A0F1C] leading-tight mt-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.12 }}
              >
                {isStudent ? (
                  <>Muốn tự chạy Ads?<br /><span className="text-[#2563EB]">Đăng ký tư vấn khóa học.</span></>
                ) : (
                  <>Bứt phá doanh số?<br /><span className="text-[#2563EB]">Hãy cùng xây hệ thống.</span></>
                )}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mt-4 max-w-md">
                {isStudent
                  ? "Đinh Minh Đức sẽ tư vấn lộ trình học phù hợp với ngành nghề và mục tiêu của bạn — hoàn toàn miễn phí."
                  : "Chia sẻ mục tiêu và khó khăn hiện tại. Chúng tôi sẽ phản hồi với lộ trình rõ ràng trong 24h."}
              </p>
            </div>

            {/* Liên hệ trực tiếp */}
            <div className="border-t border-[#0A0F1C]/5 pt-6 space-y-3 text-xs font-bold">
              <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">Liên hệ trực tiếp</p>
              <div className="flex flex-col gap-2">
                <a href="tel:0966442654" className="flex items-center gap-2 text-[#2563EB] hover:underline">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16"><path d="M3 3a1 1 0 011-1h2.5a1 1 0 01.97.757l.5 2a1 1 0 01-.297 1.017l-.8.7c.53.97 1.153 1.594 2.123 2.123l.7-.8A1 1 0 0110.743 8l2 .5A1 1 0 0113.757 9.5V12a1 1 0 01-1 1C6.373 13 3 9.627 3 5V3z" stroke="currentColor" strokeWidth="1.2"/></svg>
                  0966.442.654
                </a>
                <a href="mailto:contact@minhduc.global" className="flex items-center gap-2 text-[#2563EB] hover:underline">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16"><path d="M2 4l6 5 6-5M2 4h12v9H2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
                  contact@minhduc.global
                </a>
                <a href="https://facebook.com/minhduc.profile" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#2563EB] hover:underline">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16"><path d="M14 8A6 6 0 112 8a6 6 0 0112 0zm-5.5 0h1.5v4h-2V8H7V6h1V5a2 2 0 012-2h1.5v2H11a.5.5 0 00-.5.5V6H12l-.5 2H10.5z" stroke="currentColor" strokeWidth="1" fill="none"/></svg>
                  Đinh Minh Đức ↗
                </a>
              </div>
            </div>
          </div>

          {/* Cột phải: Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 border border-[#0A0F1C]/5 rounded-3xl shadow-[0_15px_50px_rgba(10,15,28,0.015)]">
            {contactForm.success ? (
              <div className="flex flex-col items-center justify-center py-14 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-black text-[#0A0F1C] uppercase tracking-tight">Gửi thành công!</h3>
                <p className="mt-3 max-w-sm text-slate-500 text-sm leading-relaxed">
                  Cảm ơn bạn. Đinh Minh Đức sẽ liên hệ qua SĐT/Zalo trong thời gian sớm nhất.
                </p>
                <button type="button" onClick={contactForm.resetForm} className="mt-8 btn-awwwards btn-awwwards-outline">
                  Gửi form mới
                </button>
              </div>
            ) : (
              <>
                {/* Tabs chọn nhóm */}
                <div className="flex rounded-xl overflow-hidden border border-[#0A0F1C]/8 mb-7 p-1 bg-slate-50 gap-1">
                  {["Tôi là doanh nghiệp", "Tôi là học viên"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => contactForm.handleChange({ target: { name: "needGroup", value: opt } })}
                      className={`flex-1 py-2.5 text-[11px] font-black uppercase tracking-wider rounded-lg transition-all duration-300 ${
                        contactForm.values.needGroup === opt
                          ? "bg-[#2563EB] text-white shadow-sm"
                          : "text-slate-500 hover:text-[#0A0F1C]"
                      }`}
                    >
                      {opt === "Tôi là doanh nghiệp" ? "🏢 Doanh nghiệp" : "🎓 Học viên"}
                    </button>
                  ))}
                </div>

                <form onSubmit={contactForm.handleSubmit} className="flex flex-col gap-5">
                  {/* Tên + SĐT */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Họ và tên</label>
                      <input
                        type="text" name="name"
                        value={contactForm.values.name}
                        onChange={contactForm.handleChange}
                        placeholder="Nhập họ tên"
                        className={`w-full ${contactForm.errors.name ? "border-red-400 bg-red-50/10" : ""}`}
                      />
                      {contactForm.errors.name && <span className="text-[10px] text-red-500 font-bold">{contactForm.errors.name}</span>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">SĐT / Zalo</label>
                      <input
                        type="tel" name="phone"
                        value={contactForm.values.phone}
                        onChange={contactForm.handleChange}
                        placeholder="Nhập số điện thoại"
                        className={`w-full ${contactForm.errors.phone ? "border-red-400 bg-red-50/10" : ""}`}
                      />
                      {contactForm.errors.phone && <span className="text-[10px] text-red-500 font-bold">{contactForm.errors.phone}</span>}
                    </div>
                  </div>

                  {/* Field theo nhóm */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                      {isStudent ? "Bạn muốn học khóa nào?" : "Nhu cầu dịch vụ chính"}
                    </label>
                    <input
                      type="text" name="mainNeed"
                      value={contactForm.values.mainNeed}
                      onChange={contactForm.handleChange}
                      placeholder={isStudent
                        ? "Ví dụ: Facebook Ads, Google Ads & Map, TikTok Ads..."
                        : "Ví dụ: Tối ưu Facebook Ads, Google Ads, SEO Maps..."}
                      className={`w-full ${contactForm.errors.mainNeed ? "border-red-400 bg-red-50/10" : ""}`}
                    />
                  </div>

                  {/* Mô tả */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                      {isStudent ? "Mục tiêu sau khóa học" : "Mô tả ngắn mục tiêu"}
                    </label>
                    <textarea
                      name="description"
                      value={contactForm.values.description}
                      onChange={contactForm.handleChange}
                      placeholder={isStudent
                        ? "Ví dụ: Muốn tự chạy ads cho shop của mình, hiện chưa biết gì..."
                        : "Ví dụ: Mục tiêu doanh số/lead cần đạt trong 30-90 ngày tới..."}
                      className={`w-full min-h-[100px] resize-none ${contactForm.errors.description ? "border-red-400 bg-red-50/10" : ""}`}
                    />
                  </div>

                  {contactForm.submitError && (
                    <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-xs text-red-700 font-bold">
                      {contactForm.submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={contactForm.loading}
                    className="btn-awwwards btn-awwwards-solid w-full text-center mt-2"
                    onClick={() => { if (window.trackCTA) window.trackCTA(`Contact Form Submit - ${contactForm.values.needGroup}`); }}
                  >
                    {contactForm.loading ? "Đang gửi..." : (isStudent ? "Đăng ký tư vấn khóa học →" : "Gửi thông tin đăng ký →")}
                  </button>

                  <p className="text-[10px] text-slate-400 text-center">
                    Phản hồi trong vòng 24h · Không spam · Miễn phí tư vấn
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
