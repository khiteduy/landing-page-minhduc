import React from "react";

export default function ToolkitSection({ toolkitForm }) {
  return (
    <section id="toolkit" className="py-28 bg-[#F8FAF9] border-b border-[#0A0F1C]/5">
      <div className="section-container">
        
        <div className="toolkit-hero gravity-blue-surface p-8 sm:p-12 lg:p-16 rounded-3xl text-white relative overflow-hidden border border-[#2563EB]/20 shadow-[0_25px_80px_rgba(37,99,235,0.16)]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.22),transparent_42%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.22),transparent_48%)] pointer-events-none" />
          
          {toolkitForm.success ? (
            <div className="relative flex flex-col items-center justify-center py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-md animate-pulse">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-white uppercase tracking-wider animate-fade-in">
                Đăng ký nhận bộ Target đa ngành hàng thành công!
              </h3>
              <p className="mt-3 max-w-md text-slate-300 text-sm leading-relaxed">
                Cảm ơn bạn. Minh Duc Global sẽ gửi bộ Target đa ngành hàng qua số điện thoại/Zalo bạn đã đăng ký.
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
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Bên trái: Lời mời và các pill */}
              <div className="lg:col-span-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#93C5FD]">
                  Cảm ơn bạn đã xem tới đây
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-black leading-[1.22] text-white uppercase tracking-[-0.025em] font-display">
                  Minh Duc Global gửi tặng bạn <br />Bộ Target đa ngành hàng.
                </h2>
                <p className="mt-4 text-blue-50/90 text-sm sm:text-base leading-relaxed">
                  Đây là bộ target đa ngành hàng được Minh Duc Global tổng hợp sau hơn 5 năm kinh nghiệm triển khai quảng cáo thực chiến. Bạn có thể dùng làm điểm bắt đầu để nghiên cứu khách hàng, test nhóm đối tượng và xây chiến dịch nhanh hơn.
                </p>
                
                {/* 4 Pills tài liệu */}
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="p-3 border border-white/15 bg-white/10 rounded-xl text-center text-[10px] font-bold uppercase tracking-wider text-blue-50 transition-colors">
                    Target theo nhóm ngành
                  </div>
                  <div className="p-3 border border-white/15 bg-white/10 rounded-xl text-center text-[10px] font-bold uppercase tracking-wider text-blue-50 transition-colors">
                    Gợi ý chân dung khách hàng
                  </div>
                  <div className="p-3 border border-white/15 bg-white/10 rounded-xl text-center text-[10px] font-bold uppercase tracking-wider text-blue-50 transition-colors">
                    Ý tưởng test ads ban đầu
                  </div>
                  <div className="p-3 border border-white/15 bg-white/10 rounded-xl text-center text-[10px] font-bold uppercase tracking-wider text-blue-50 transition-colors">
                    Ghi chú tối ưu thực chiến
                  </div>
                </div>
              </div>

              {/* Bên phải: Form đăng ký */}
              <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-white/30 shadow-[0_20px_60px_rgba(10,15,28,0.12)]">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#2563EB] mb-2">
                  Nhận bộ Target đa ngành hàng miễn phí
                </h4>
                <p className="mb-6 text-xs leading-relaxed text-slate-500">
                  Điền thông tin để Minh Duc Global gửi tài liệu đúng kênh Zalo/điện thoại của bạn.
                </p>
                
                <form onSubmit={toolkitForm.handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-bold uppercase text-slate-500 tracking-wider">
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
                            : "border-slate-200 bg-slate-50 focus:bg-white focus:border-[#2563EB]"
                        }`}
                      />
                      {toolkitForm.errors.name && (
                        <span className="text-[10px] text-red-300 font-bold mt-1">
                          {toolkitForm.errors.name}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-bold uppercase text-slate-500 tracking-wider">
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
                            : "border-slate-200 bg-slate-50 focus:bg-white focus:border-[#2563EB]"
                        }`}
                      />
                      {toolkitForm.errors.phone && (
                        <span className="text-[10px] text-red-300 font-bold mt-1">
                          {toolkitForm.errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#2563EB]/15 bg-[#EFF6FF] p-4 text-xs leading-relaxed text-[#1D4ED8] font-semibold">
                    Tài liệu đăng ký: Bộ Target đa ngành hàng sau hơn 5 năm kinh nghiệm.
                  </div>

                  {toolkitForm.submitError && (
                    <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-xs text-red-700 font-bold">
                      {toolkitForm.submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={toolkitForm.loading}
                    className="btn-awwwards w-full text-center mt-2 py-4 bg-[#2563EB] text-white hover:bg-[#1D4ED8] font-extrabold"
                  >
                    {toolkitForm.loading ? "Đang xử lý..." : "Nhận bộ Target đa ngành hàng ngay"}
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
