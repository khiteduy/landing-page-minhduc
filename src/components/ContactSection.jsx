import React from "react";

const businessGoals = [
  "Tăng lead",
  "Tăng doanh thu",
  "Tối ưu Local Map",
  "Tối ưu chi phí quảng cáo",
  "Xây hệ thống content/AI",
];

const courseOptions = [
  "Facebook Ads thực chiến",
  "Google Ads & Local Map",
  "TikTok Ads",
  "Shopee thực chiến",
  "Chưa rõ, cần tư vấn lộ trình",
];

export default function ContactSection({ contactForm }) {
  const isStudent = contactForm.values.needGroup === "Tôi là học viên";
  const submitLabel = isStudent ? "Nhận tư vấn lộ trình học →" : "Nhận tư vấn chiến lược tăng trưởng →";

  const handleNeedGroupChange = (e) => {
    const needGroup = e.target.value;
    const nextCategory = needGroup === "Tôi là học viên" ? "student_training" : "business_growth";

    contactForm.setValues((prev) => ({
      ...prev,
      needGroup,
      leadCategory: nextCategory,
      mainNeed: needGroup === "Tôi là học viên" ? prev.courseInterest : prev.primaryGoal,
    }));
  };

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
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.22] font-black tracking-[-0.025em] uppercase text-[#0A0F1C] font-display mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
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

          {/* Cột phải: Form liên hệ phân nhánh */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 border border-[#0A0F1C]/5 rounded-3xl shadow-[0_15px_50px_rgba(10,15,28,0.015)]">
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
                <h3 className="text-xl font-black text-[#0A0F1C] uppercase tracking-tight mb-2">
                  {isStudent ? "Đăng ký tư vấn lộ trình học" : "Đăng ký nhận tư vấn tăng trưởng"}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mb-8">
                  {isStudent
                    ? "Điền thông tin để được tư vấn khóa học phù hợp với trình độ và mục tiêu hiện tại."
                    : "Điền thông tin để chúng tôi nghiên cứu sản phẩm, ngân sách và lập phương án tư vấn cụ thể."}
                </p>
                
                <form onSubmit={contactForm.handleSubmit} className="flex flex-col gap-6">
                  
                  {/* Tabs chọn nhóm */}
                  <div className="flex rounded-xl overflow-hidden border border-[#0A0F1C]/8 mb-7 p-1 bg-slate-50 gap-1">
                    {["Tôi là doanh nghiệp", "Tôi là học viên"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleNeedGroupChange({ target: { name: "needGroup", value: opt } })}
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

                  {isStudent ? (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                            Khóa học quan tâm
                          </label>
                          <select
                            name="courseInterest"
                            value={contactForm.values.courseInterest}
                            onChange={contactForm.handleChange}
                            className={`w-full bg-white text-slate-800 font-semibold ${
                              contactForm.errors.courseInterest ? "border-red-400 bg-red-50/10" : ""
                            }`}
                          >
                            <option value="">Chọn khóa học</option>
                            {courseOptions.map((item) => (
                              <option key={item} value={item}>{item}</option>
                            ))}
                          </select>
                          {contactForm.errors.courseInterest && (
                            <span className="text-[10px] text-red-500 font-bold mt-1">
                              {contactForm.errors.courseInterest}
                            </span>
                          )}
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                            Trình độ hiện tại
                          </label>
                          <select
                            name="currentLevel"
                            value={contactForm.values.currentLevel}
                            onChange={contactForm.handleChange}
                            className={`w-full bg-white text-slate-800 font-semibold ${
                              contactForm.errors.currentLevel ? "border-red-400 bg-red-50/10" : ""
                            }`}
                          >
                            <option value="">Chọn trình độ</option>
                            <option>Chưa biết gì về ads</option>
                            <option>Đã từng tự chạy nhưng chưa ra kết quả</option>
                            <option>Đang chạy ads và muốn tối ưu</option>
                            <option>Nhân sự marketing muốn nâng kỹ năng</option>
                          </select>
                          {contactForm.errors.currentLevel && (
                            <span className="text-[10px] text-red-500 font-bold mt-1">
                              {contactForm.errors.currentLevel}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                            Mục tiêu sau khóa học
                          </label>
                          <input
                            type="text"
                            name="learningGoal"
                            value={contactForm.values.learningGoal}
                            onChange={contactForm.handleChange}
                            placeholder="Ví dụ: tự chạy ads ra đơn, giảm giá mess..."
                            className={`w-full ${
                              contactForm.errors.learningGoal ? "border-red-400 bg-red-50/10" : ""
                            }`}
                          />
                          {contactForm.errors.learningGoal && (
                            <span className="text-[10px] text-red-500 font-bold mt-1">
                              {contactForm.errors.learningGoal}
                            </span>
                          )}
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                            Ngành hàng đang kinh doanh
                          </label>
                          <input
                            type="text"
                            name="businessField"
                            value={contactForm.values.businessField}
                            onChange={contactForm.handleChange}
                            placeholder="Ví dụ: xe điện, mỹ phẩm, F&B..."
                            className="w-full"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                            Ngành hàng
                          </label>
                          <input
                            type="text"
                            name="industry"
                            value={contactForm.values.industry}
                            onChange={contactForm.handleChange}
                            placeholder="Ví dụ: F&B, giáo dục, spa, bán lẻ..."
                            className={`w-full ${
                              contactForm.errors.industry ? "border-red-400 bg-red-50/10" : ""
                            }`}
                          />
                          {contactForm.errors.industry && (
                            <span className="text-[10px] text-red-500 font-bold mt-1">
                              {contactForm.errors.industry}
                            </span>
                          )}
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                            Ngân sách ads dự kiến/tháng
                          </label>
                          <select
                            name="monthlyBudget"
                            value={contactForm.values.monthlyBudget}
                            onChange={contactForm.handleChange}
                            className={`w-full bg-white text-slate-800 font-semibold ${
                              contactForm.errors.monthlyBudget ? "border-red-400 bg-red-50/10" : ""
                            }`}
                          >
                            <option value="">Chọn khoảng ngân sách</option>
                            <option>Dưới 10 triệu/tháng</option>
                            <option>10-30 triệu/tháng</option>
                            <option>30-100 triệu/tháng</option>
                            <option>Trên 100 triệu/tháng</option>
                            <option>Chưa rõ, cần tư vấn</option>
                          </select>
                          {contactForm.errors.monthlyBudget && (
                            <span className="text-[10px] text-red-500 font-bold mt-1">
                              {contactForm.errors.monthlyBudget}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                            Mục tiêu chính
                          </label>
                          <select
                            name="primaryGoal"
                            value={contactForm.values.primaryGoal}
                            onChange={contactForm.handleChange}
                            className={`w-full bg-white text-slate-800 font-semibold ${
                              contactForm.errors.primaryGoal ? "border-red-400 bg-red-50/10" : ""
                            }`}
                          >
                            <option value="">Chọn mục tiêu</option>
                            {businessGoals.map((item) => (
                              <option key={item} value={item}>{item}</option>
                            ))}
                          </select>
                          {contactForm.errors.primaryGoal && (
                            <span className="text-[10px] text-red-500 font-bold mt-1">
                              {contactForm.errors.primaryGoal}
                            </span>
                          )}
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                            Website hoặc Fanpage hiện tại
                          </label>
                          <input
                            type="text"
                            name="websiteOrFanpage"
                            value={contactForm.values.websiteOrFanpage}
                            onChange={contactForm.handleChange}
                            placeholder="Dán link nếu có"
                            className="w-full"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Grid thông tin cá nhân */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                        Họ và tên
                      </label>
                      <input
                        type="text" name="name"
                        value={contactForm.values.name}
                        onChange={contactForm.handleChange}
                        placeholder="Nhập họ tên"
                        className={`w-full ${contactForm.errors.name ? "border-red-400 bg-red-50/10" : ""}`}
                      />
                      {contactForm.errors.name && <span className="text-[10px] text-red-500 font-bold mt-1">{contactForm.errors.name}</span>}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Số điện thoại / Zalo</label>
                      <input
                        type="tel" name="phone"
                        value={contactForm.values.phone}
                        onChange={contactForm.handleChange}
                        placeholder="Nhập số điện thoại"
                        className={`w-full ${contactForm.errors.phone ? "border-red-400 bg-red-50/10" : ""}`}
                      />
                      {contactForm.errors.phone && <span className="text-[10px] text-red-500 font-bold mt-1">{contactForm.errors.phone}</span>}
                    </div>
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
                    {contactForm.loading ? "Đang gửi đăng ký..." : submitLabel}
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
