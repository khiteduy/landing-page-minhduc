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
  const submitLabel = isStudent ? "Nhận tư vấn lộ trình học" : "Nhận tư vấn chiến lược tăng trưởng";

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

          {/* Cột phải: Form liên hệ phân nhánh */}
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
                  {isStudent ? "Đăng ký tư vấn lộ trình học" : "Đăng ký nhận tư vấn tăng trưởng"}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mb-8">
                  {isStudent
                    ? "Điền thông tin để được tư vấn khóa học phù hợp với trình độ và mục tiêu hiện tại."
                    : "Điền thông tin để chúng tôi nghiên cứu sản phẩm, ngân sách và lập phương án tư vấn cụ thể."}
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
                      onChange={handleNeedGroupChange}
                      className="w-full bg-white text-slate-800 font-semibold"
                    >
                      <option>Tôi là doanh nghiệp</option>
                      <option>Tôi là học viên</option>
                    </select>
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
                      placeholder={isStudent ? "Ví dụ: học Facebook Ads để tự chạy ra đơn..." : "Ví dụ: tối ưu Facebook Ads, Google Ads, SEO Maps..."}
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
                      placeholder={isStudent ? "Ví dụ: hiện đang bán xe điện, muốn học xong tự chạy quảng cáo ra khách..." : "Ví dụ: mục tiêu doanh số hoặc lead cần đạt được trong 30-90 ngày tới..."}
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
                    {contactForm.loading ? "Đang gửi đăng ký..." : submitLabel}
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
