import React from "react";

const portfolioPages = Array.from(
  { length: 21 },
  (_, index) => `/portfolio-scroll/${String(index + 1).padStart(2, "0")}.webp`
);

const pdfUrl = "/portfolio-scroll/Dinh-Minh-Duc-Behance-Scroll-Portfolio-2026.pdf";

export function PortfolioScrollProject() {
  return (
    <main className="min-h-screen bg-[#0b0b0b]">
      <h1 className="sr-only">Đinh Minh Đức - Marketing Portfolio 2026</h1>
      <div className="mx-auto w-full max-w-[1440px] bg-white shadow-[0_0_80px_rgba(0,0,0,0.34)]">
        {portfolioPages.map((src, index) => (
          <section key={src} aria-label={`Portfolio trang ${index + 1}`} className="m-0 w-full p-0 leading-none">
            <img
              src={src}
              alt={`Đinh Minh Đức Marketing Portfolio - trang ${index + 1}`}
              width="2400"
              height="1350"
              loading={index < 2 ? "eager" : "lazy"}
              decoding="async"
              className="block h-auto w-full"
            />
          </section>
        ))}
      </div>
    </main>
  );
}
export function PortfolioEmbedShell() {
  return (
    <main className="flex h-screen min-h-[560px] flex-col overflow-hidden bg-[#111111] text-white">
      <header className="flex h-[68px] shrink-0 items-center justify-between border-b border-white/15 px-4 sm:px-7">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">Đinh Minh Đức</p>
          <p className="truncate text-xs text-white/55">Marketing Portfolio 2026</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href="/portfolio-embed"
            target="_blank"
            rel="noreferrer"
            className="border border-white/25 px-3 py-2 text-xs text-white transition-colors hover:bg-white hover:text-black sm:px-4"
          >
            Mở toàn màn hình
          </a>
          <a
            href={pdfUrl}
            download
            className="bg-white px-3 py-2 text-xs text-black transition-colors hover:bg-[#dedede] sm:px-4"
          >
            Tải PDF
          </a>
        </div>
      </header>

      <iframe
        src="/portfolio-embed"
        title="Đinh Minh Đức - Marketing Portfolio 2026"
        allowFullScreen
        loading="eager"
        className="min-h-0 w-full flex-1 border-0 bg-[#0b0b0b]"
      />
    </main>
  );
}
