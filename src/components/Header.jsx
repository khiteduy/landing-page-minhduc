import React, { useState } from "react";

const nav = [
  { href: "/#cases", label: "Dự án" },
  { href: "/#services", label: "Dịch vụ" },
  { href: "/dich-vu-mang-xa-hoi", label: "Mạng xã hội" },
  { href: "/tai-nguyen-quang-cao-ecom", label: "Tài nguyên Ads" },
  { href: "/#contact", label: "Liên hệ" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#F8FAF9]/80 backdrop-blur-md z-50 border-b border-[#0A0F1C]/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between uppercase tracking-widest text-xs font-bold">
        <a href="/" className="hover:text-[#2563EB] transition-colors flex items-center gap-2">
          <span>Minh Duc Global</span>
          <span className="text-[#2563EB]">©2026</span>
        </a>
        <nav className="hidden lg:flex gap-6">
          {nav.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="hover:text-[#2563EB] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#2563EB] hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="/#contact"
            onClick={() => { if (window.trackCTA) window.trackCTA("Header - Hợp tác ngay (Desktop)"); }}
            className="px-6 py-3 bg-[#063A7A] text-white rounded-full hover:bg-[#2563EB] transition-all duration-300 text-[10px] tracking-widest uppercase font-bold shadow-sm hover:shadow-md"
          >
            Hợp tác ngay
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0A0F1C]/5 text-[#0A0F1C] bg-white hover:bg-slate-50 transition-colors lg:hidden"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Mở menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="text-xl leading-none font-bold">{mobileMenuOpen ? "×" : "≡"}</span>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav className="px-6 pb-6 lg:hidden animate-slide-down bg-[#F8FAF9] border-b border-[#0A0F1C]/5 shadow-sm">
          <div className="flex flex-col gap-5 pt-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-xs font-bold uppercase tracking-widest text-[#0A0F1C] hover:text-[#2563EB] transition-colors py-2 border-b border-[#0A0F1C]/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
