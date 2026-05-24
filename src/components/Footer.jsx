import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#0A0F1C]/5 py-16">
      <div className="section-container">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 items-start">
          <div className="md:col-span-6">
            <h3 className="text-lg font-black uppercase text-[#0A0F1C] tracking-widest mb-4">
              Minh Duc Global <span className="text-[#2563EB]">©2026</span>
            </h3>
            <p className="text-slate-400 text-xs max-w-sm leading-relaxed font-medium">
              Hệ thống tăng trưởng cho các thương hiệu cần doanh thu thực chất, không cần chỉ số ảo. <br />
              Thiết lập giải pháp tăng trưởng thực chiến dựa trên dữ liệu.
            </p>
          </div>
          
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-2 gap-6 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            <div>
              <p className="text-[#0A0F1C] mb-3 text-[11px] font-black tracking-widest">Dịch vụ</p>
              <ul className="space-y-2">
                <li>Performance Marketing</li>
                <li>Social Media Services</li>
                <li>E-commerce Growth</li>
                <li>Local Business Growth</li>
                <li>Academic Marketing</li>
              </ul>
            </div>
            
            <div>
              <p className="text-[#0A0F1C] mb-3 text-[11px] font-black tracking-widest">Liên hệ</p>
              <ul className="space-y-2">
                <li>Người sáng lập: Đinh Minh Đức</li>
                <li>Hải Dương, Việt Nam</li>
                <li><a href="mailto:contact@minhduc.global" className="hover:text-[#2563EB]">contact@minhduc.global</a></li>
                <li><a href="tel:0966442654" className="hover:text-[#2563EB]">0966.442.654</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#0A0F1C]/5 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Minh Duc Global. Bảo lưu mọi quyền.</p>
          <div className="flex gap-4">
            <a href="https://facebook.com/minhduc.profile" target="_blank" rel="noreferrer" className="hover:text-[#2563EB]">Facebook</a>
            <span>•</span>
            <a href="https://nguoinoitieng.tv/nghe-nghiep/ho-tro-facebook/dinh-minh-duc/bgnj" target="_blank" rel="noreferrer" className="hover:text-[#2563EB]">Tiểu sử</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
