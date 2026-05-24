import React from "react";

export default function ToolkitSection({ toolkitForm }) {
  return (
    <section id="toolkit" className="py-28 bg-white border-b border-[#0A0F1C]/5">
      <div className="section-container">
        
        <div className="toolkit-hero p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#0A0F1C] text-white relative overflow-hidden border border-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_50%)] -z-10" />
          
          {toolkitForm.success ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white shadow-md animate-pulse">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-white uppercase tracking-wider animate-fade-in">
                Đăng ký nhận tài liệu thành công!
              </h3>
              <p className="mt-3 max-w-md text-slate-300 text-sm leading-relaxed">
                Cảm ơn bạn. Bộ tài nguyên Marketing All-in-One đã được chuẩn bị và sẽ được gửi qua số điện thoại/Zalo đăng ký trong vài phút.
              </p>
              <button
                type="button"
                onClick={toolkitForm.resetForm}
                className="mt-8 px-6 py-2.5 rounded-full border border-white/20 bg-white/10 text-xs font-bold text-white hover:bg-white/20 transition-all uppercase tracking-wider"
              >
                Gửi form mới
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Bên trái: Lời mời và các pill */}
              <div className="lg:col-span-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">
                  Tài Nguyên Đặc Quyền
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-black leading-tight text-white uppercase tracking-tight font-display">
                  Tải Miễn Phí Bộ Công Cụ <br />& Template Marketing.
                </h2>
                <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
                  Đăng ký nhận miễn phí trọn bộ tài liệu vận hành Marketing thực chiến do Minh Duc Global trực tiếp tổng hợp và cập nhật liên tục (kịch bản video ngắn, kế hoạch tuần/tháng, bảng phân tích số liệu ads, template SEO).
                </p>
                
                {/* 4 Pills tài liệu */}
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="p-3 border border-slate-800 bg-white/5 rounded-xl text-center text-[10px] font-bold uppercase tracking-wider text-slate-300 hover:border-slate-700 transition-colors">
                    Kịch bản video ngắn chuyển đổi
                  </div>
                  <div className="p-3 border border-slate-800 bg-white/5 rounded-xl text-center text-[10px] font-bold uppercase tracking-wider text-slate-300 hover:border-slate-700 transition-colors">
                    Kế hoạch content tuần/tháng
                  </div>
                  <div className="p-3 border border-slate-800 bg-white/5 rounded-xl text-center text-[10px] font-bold uppercase tracking-wider text-slate-300 hover:border-slate-700 transition-colors">
                    Bảng phân tích chỉ số Ads
                  </div>
                  <div className="p-3 border border-slate-800 bg-white/5 rounded-xl text-center text-[10px] font-bold uppercase tracking-wider text-slate-300 hover:border-slate-700 transition-colors">
                    Template viết bài SEO chuẩn
                  </div>
                </div>
              </div>

              {/* Bên phải: Form đăng ký */}
              <div className="lg:col-span-6 bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#2563EB] mb-6">
                  Nhập thông tin nhận tài liệu
                </h4>
                
                <form onSubmit={toolkitForm.handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-bold uppercase text-slate-400 tracking-wider">
                        Họ và tên
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={toolkitForm.values.name}
                        onChange={toolkitForm.handleChange}
                        placeholder="Nhập họ tên"
                        className={`w-full text-slate-900 placeholder:text-slate-400 text-sm outline-none transition-all ${
                          toolkitForm.errors.name 
                            ? "border-red-400 bg-red-50/90" 
                            : "border-white/10 bg-white/95 focus:bg-white focus:border-white"
                        }`}
                      />
                      {toolkitForm.errors.name && (
                        <span className="text-[10px] text-red-300 font-bold mt-1">
                          {toolkitForm.errors.name}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-bold uppercase text-slate-400 tracking-wider">
                        Số điện thoại / Zalo
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={toolkitForm.values.phone}
                        onChange={toolkitForm.handleChange}
                        placeholder="Nhập số điện thoại"
                        className={`w-full text-slate-900 placeholder:text-slate-400 text-sm outline-none transition-all ${
                          toolkitForm.errors.phone 
                            ? "border-red-400 bg-red-50/90" 
                            : "border-white/10 bg-white/95 focus:bg-white focus:border-white"
                        }`}
                      />
                      {toolkitForm.errors.phone && (
                        <span className="text-[10px] text-red-300 font-bold mt-1">
                          {toolkitForm.errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] font-bold uppercase text-slate-400 tracking-wider">
                      Tài liệu bạn cần nhất
                    </label>
                    <input
                      type="text"
                      name="requestedTool"
                      value={toolkitForm.values.requestedTool}
                      onChange={toolkitForm.handleChange}
                      placeholder="Ví dụ: Bảng chỉ số Ads, plan content, kịch bản video..."
                      className={`w-full text-slate-900 placeholder:text-slate-400 text-sm outline-none transition-all ${
                        toolkitForm.errors.requestedTool 
                          ? "border-red-400 bg-red-50/90" 
                          : "border-white/10 bg-white/95 focus:bg-white focus:border-white"
                      }`}
                    />
                    {toolkitForm.errors.requestedTool && (
                      <span className="text-[10px] text-red-300 font-bold mt-1">
                        {toolkitForm.errors.requestedTool}
                      </span>
                    )}
                  </div>

                  {toolkitForm.submitError && (
                    <div className="rounded-xl bg-red-900/30 border border-red-500/50 p-4 text-xs text-red-200 font-bold">
                      {toolkitForm.submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={toolkitForm.loading}
                    className="btn-awwwards btn-awwwards-accent w-full text-center mt-2 py-4 text-slate-950 font-extrabold"
                  >
                    {toolkitForm.loading ? "Đang xử lý..." : "Nhận bộ công cụ ngay"}
                  </button>

                </form>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
