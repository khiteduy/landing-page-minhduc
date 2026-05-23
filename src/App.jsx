import React, { useEffect, useMemo, useState } from "react";
import useForm from "./hooks/useForm";

const nav = [
  { id: "story", label: "Story" },
  { id: "services", label: "Expertise" },
  { id: "cases", label: "Cases" },
  { id: "courses", label: "Training" },
  { id: "feedback", label: "Feedback" },
  { id: "contact", label: "Contact" },
  { id: "toolkit", label: "Toolkit" },
];

const services = [
  {
    id: "perf",
    title: "Performance Marketing",
    desc: "Triển khai quảng cáo Facebook, TikTok, Google theo mục tiêu lead, đơn hàng, doanh thu và hiệu suất toàn phễu.",
    points: ["Tư duy phễu", "Tối ưu CPA/ROAS", "Báo cáo dữ liệu"],
  },
  {
    id: "gg",
    title: "Google Ads & Map",
    desc: "Tối ưu Local Search, phủ sóng điểm bán và đo lường chuyển đổi thực tế qua tìm kiếm và Google Maps.",
    points: ["Search Ads", "Google Maps", "Local Intent"],
  },
  {
    id: "ai-content",
    title: "AI & Content",
    desc: "Ứng dụng AI Automation vào hệ thống dữ liệu, tối ưu hóa nội dung đa kênh và tự động hóa quy trình marketing.",
    points: ["AI workflow", "Content scale", "Automation data"],
  },
];

const cases = [
  {
    name: "Cardi Pizzeria Võ Văn Kiệt",
    category: "Google Ads + Local Map",
    industry: "F&B / Pizza Restaurant",
    role: "Marketing Lead",
    result: "23.79M ads -> 624.6M doanh thu",
    metrics: ["Ngân sách: 23.79M", "Doanh thu: 624.6M", "Hiệu suất: 26.25X"],
    proof: [
      "https://i.ibb.co/F41NH6Vy/daonh-thu.jpg",
      "https://i.ibb.co/gMJvsvm9/camp-gg-1.jpg",
    ],
    short: "Vận hành Google Ads và tối ưu Local Map/Google Maps để tăng hiện diện và doanh thu tại điểm bán địa phương.",
  },
  {
    name: "Lua Viet",
    category: "Restaurant Growth",
    industry: "F&B / Nhà hàng",
    role: "Marketing Lead",
    result: "20M ngân sách -> 540M doanh thu",
    metrics: ["Ngân sách: 20M", "Doanh thu: 540M", "Hiệu suất: 27X"],
    proof: [],
    short: "Triển khai quảng cáo và tối ưu chuyển đổi cho mô hình nhà hàng F&B, tập trung vào mục tiêu doanh thu.",
  },
  {
    name: "Bee English Community",
    category: "Performance + Content Team",
    industry: "Giáo dục / Tiếng Anh",
    role: "Trưởng nhóm Performance",
    result: "48M/tháng -> 300-350 lead, 200-250M doanh thu/tháng",
    metrics: ["Ngân sách/tháng: 48M", "Lead/tháng: 300-350", "Doanh thu/tháng: 200-250M"],
    proof: ["https://www.facebook.com/business/success/bee-english-community"],
    short: "Tối ưu ngân sách Performance, đào tạo nhân sự và điều phối team content để nâng cao hiệu suất quảng cáo.",
  },
  {
    name: "Bánh gà Phan Văn Trường",
    category: "TikTok Organic Growth",
    industry: "F&B / Ăn vặt",
    role: "Marketing Lead",
    result: "4,000+ followers trong 3 tháng",
    metrics: ["Followers: 4,000+", "Thời gian: 3 tháng", "Lượt thích: 13.3K"],
    proof: [],
    short: "Đào tạo nhân sự content, hoạch định nội dung và xây ý tưởng chiến dịch TikTok cho tăng trưởng organic.",
  },
  {
    name: "Chạn Đà Nẵng",
    category: "F&B Local Branding",
    industry: "F&B / Nhà hàng",
    role: "Marketing / Truyền thông",
    result: "Đang cập nhật số liệu",
    metrics: ["Ngành: F&B", "Thị trường: Đà Nẵng", "Trạng thái: Update"],
    proof: [],
    short: "Dự án nằm trong danh sách năng lực F&B, sẽ bổ sung số liệu để chuyển thành case đầy đủ.",
  },
];

const courses = [
  {
    title: "Facebook Ads",
    desc: "Từ người mới đến người có thể tự set camp, đọc chỉ số, tối ưu chi phí tin nhắn và tạo đơn hàng.",
    points: ["Set camp đúng cấu trúc", "Đọc CPM, CTR, CPC, CPA", "Scale chiến dịch thực chiến"],
  },
  {
    title: "Google Ads & Map",
    desc: "Học cách kéo khách hàng có nhu cầu thật qua Search, Local Map và hệ thống đo lường hiệu quả theo doanh thu.",
    points: ["Google Search Ads", "Local Map & Google Maps", "Đo lường chuyển đổi"],
  },
  {
    title: "TikTok Ads & Organic",
    desc: "Triển khai quảng cáo và nội dung ngắn theo hành vi người xem, phù hợp sản phẩm cần tăng nhận diện.",
    points: ["Tư duy video ngắn", "Setup TikTok Ads", "Tối ưu chi phí chuyển đổi"],
  },
  {
    title: "Shopee thực chiến",
    desc: "Xây dựng gian hàng, tối ưu sản phẩm, traffic và chuyển đổi trên sàn thương mại điện tử.",
    points: ["Tối ưu gian hàng", "SEO tiêu đề sản phẩm", "Tăng tỷ lệ ra đơn"],
  },
];

const storyPhases = [
  {
    title: "1. Khởi đầu",
    desc: "GenZ Hải Dương đam mê công nghệ, chủ động quan sát cách Facebook và nền tảng số vận hành.",
    keyline: "Đam mê và tò mò công nghệ là điểm xuất phát.",
    impact: "Không chọn dùng mạng xã hội kiểu giải trí. Chọn nghiên cứu cách nó tạo ra hành vi và kết quả.",
  },
  {
    title: "2. Tự học",
    desc: "Phát triển năng lực hỗ trợ fanpage, livestream, nội dung và hiện diện số cho cá nhân/doanh nghiệp.",
    keyline: "Tự học liên tục để giải quyết vấn đề thực tế.",
    impact: "Đi từ kỹ năng nhỏ đến hệ thống: nội dung, tương tác, vận hành kênh và tư duy đo lường.",
  },
  {
    title: "3. Thực chiến",
    desc: "Chuyển từ tăng tương tác sang tối ưu lead, doanh thu, CPA, ROAS, local search và automation.",
    keyline: "Mọi thứ quy về hiệu quả kinh doanh đo được.",
    impact: "Mỗi chiến dịch phải trả lời được: chi bao nhiêu, thu về bao nhiêu, tối ưu tiếp ở đâu.",
  },
  {
    title: "4. Founder/CEO",
    desc: "Xây dựng Minh Duc Global thành đơn vị tăng trưởng và đào tạo marketing thực chiến.",
    keyline: "Xây đội ngũ và quy trình để nhân rộng kết quả.",
    impact: "Biến năng lực cá nhân thành năng lực tổ chức: có quy trình, có tiêu chuẩn và có tốc độ triển khai.",
  },
  {
    title: "5. Dấu mốc Bee",
    desc: "Case liên quan Meta Business Success, thể hiện năng lực phối hợp Ads + Content để tăng hiệu suất.",
    keyline: "Năng lực triển khai được xác thực bằng case thật.",
    impact: "Khi chiến lược đúng và đội ngũ chạy đồng bộ, kết quả tăng trưởng được xác thực bằng dữ liệu thật.",
  },
];

function Marquee() {
  const marqueeItems = [
    "PERFORMANCE MARKETING",
    "AI AUTOMATION",
    "GOOGLE MAPS",
    "FACEBOOK ADS"
  ];
  const combined = Array(6).fill(marqueeItems).flat();

  return (
    <div className="marquee-container" aria-hidden="true">
      <div className="marquee-track">
        {combined.map((item, idx) => (
          <div key={idx} className="marquee-item">
            <span>{item}</span>
            <span className="text-[#2563EB] font-sans">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [caseFilter, setCaseFilter] = useState("all");
  const [lightbox, setLightbox] = useState("");
  const [activeStory, setActiveStory] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const contactWebhook = import.meta.env.VITE_CONTACT_WEBHOOK_URL || "";
  const toolkitWebhook = import.meta.env.VITE_TOOLKIT_WEBHOOK_URL || "";

  const contactForm = useForm(
    {
      needGroup: "Tôi là doanh nghiệp",
      name: "",
      phone: "",
      mainNeed: "",
      description: "",
    },
    contactWebhook,
    null,
    (data) => {
      if (window.trackFormSubmit) {
        window.trackFormSubmit("contact", data);
      }
    }
  );

  const toolkitForm = useForm(
    {
      name: "",
      phone: "",
      requestedTool: "",
    },
    toolkitWebhook,
    null,
    (data) => {
      if (window.trackFormSubmit) {
        window.trackFormSubmit("toolkit", data);
      }
    }
  );

  const visibleCases = useMemo(() => {
    if (caseFilter === "all") return cases;
    return cases.filter((c) => c.category === caseFilter);
  }, [caseFilter]);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");
    const storySteps = document.querySelectorAll(".story-step");

    const isMobile = window.innerWidth < 768;
    const revealThreshold = isMobile ? 0.05 : 0.15;
    const stepThreshold = isMobile ? 0.25 : 0.55;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: revealThreshold, rootMargin: isMobile ? "0px 0px -5% 0px" : "0px 0px -8% 0px" }
    );

    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            storySteps.forEach((node) => node.classList.remove("is-active"));
            entry.target.classList.add("is-active");
            const idx = Number(entry.target.getAttribute("data-story-index") || 0);
            setActiveStory(idx);
          }
        });
      },
      { threshold: stepThreshold, rootMargin: isMobile ? "0px 0px -10% 0px" : "0px 0px -12% 0px" }
    );

    elements.forEach((el) => revealObserver.observe(el));
    storySteps.forEach((step) => stepObserver.observe(step));

    return () => {
      revealObserver.disconnect();
      stepObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#0A0F1C] font-sans selection:bg-[#2563EB] selection:text-white">
      <div className="mesh-bg" aria-hidden="true" />
      
      {/* 1. HEADER - Viền kẻ ngang dưới, phẳng tối giản */}
      <header className="fixed top-0 w-full bg-[#F8FAF9]/90 backdrop-blur-md z-50 border-b border-[#0A0F1C]/10">
        <div className="px-6 h-20 flex items-center justify-between uppercase tracking-widest text-xs font-bold">
          <div>
            Minh Duc Global <span className="text-[#2563EB] ml-2">©2026</span>
          </div>
          <nav className="hidden md:flex gap-12">
            {nav.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className="hover:text-[#2563EB] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={() => { if (window.trackCTA) window.trackCTA("Header - Đặt lịch tư vấn (Desktop)"); }}
              className="px-5 py-2.5 bg-[#0A0F1C] text-white rounded-full hover:bg-[#2563EB] transition-colors text-[10px] tracking-widest uppercase font-bold"
            >
              Contact
            </a>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#0A0F1C]/10 text-[#0A0F1C] md:hidden"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Mở menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="text-base leading-none font-bold">{mobileMenuOpen ? "×" : "≡"}</span>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="px-6 pb-6 md:hidden animate-slide-down bg-[#F8FAF9] border-b border-[#0A0F1C]/10">
            <div className="flex flex-col gap-4 pt-4">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-xs font-bold uppercase tracking-wider text-[#0A0F1C] hover:text-[#2563EB] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* 2. HERO SECTION - Typo khổng lồ, tràn viền, căn trái */}
      <section className="pt-40 pb-16 px-6 border-b border-[#0A0F1C]/10">
        <div className="max-w-[95vw] mx-auto">
          <p className="uppercase tracking-widest text-xs font-bold text-[#2563EB] mb-8">
            Performance Marketing Agency
          </p>
          <h1 className="text-[13vw] leading-[0.85] font-black tracking-tighter uppercase text-[#0A0F1C] font-syne">
            Tangible<br />
            Growth.
          </h1>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            <div className="md:col-span-2 text-2xl md:text-4xl font-medium leading-none text-[#0A0F1C]/80 tracking-tight">
              Đinh Minh Đức — Founder/CEO Minh Duc Global.<br />
              Sinh năm 2005 tại Hải Dương, làm dịch vụ Facebook nổi tiếng tại Việt Nam, xây dựng giải pháp tăng trưởng toàn phễu (Performance Marketing).
            </div>
            <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest border-t border-[#0A0F1C]/10 pt-6">
              <a 
                href="#services" 
                onClick={() => { if (window.trackCTA) window.trackCTA("Hero - Dành cho Doanh nghiệp B2B"); }}
                className="flex justify-between items-center pb-3 border-b border-[#0A0F1C]/10 hover:text-[#2563EB] transition-colors"
              >
                Dành cho Doanh nghiệp B2B <span>→</span>
              </a>
              <a 
                href="#courses" 
                onClick={() => { if (window.trackCTA) window.trackCTA("Hero - Học viên thực chiến"); }}
                className="flex justify-between items-center pb-3 border-b border-[#0A0F1C]/10 hover:text-[#2563EB] transition-colors"
              >
                Học viên thực chiến <span>→</span>
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#contact"
              onClick={() => { if (window.trackCTA) window.trackCTA("Hero CTA - Doanh nghiệp cần tăng trưởng"); }}
              className="btn-awwwards btn-awwwards-solid"
            >
              Tôi là doanh nghiệp
            </a>
            <a
              href="#courses"
              onClick={() => { if (window.trackCTA) window.trackCTA("Hero CTA - Học marketing thực chiến"); }}
              className="btn-awwwards btn-awwwards-outline"
            >
              Học marketing thực chiến
            </a>
          </div>
        </div>
      </section>

      {/* 3. DẢI MARQUEE CHẠY NGANG */}
      <Marquee />

      {/* 4. STORY SECTION - Lưới Brutalist phẳng */}
      <section id="story" className="border-b border-[#0A0F1C]/10 py-24 px-6">
        <div className="section-container">
          <div className="story-hero p-6 sm:p-8 lg:p-12 bento-card">
            <div className="story-grid gap-8 lg:gap-16">
              <aside className="story-sticky">
                <p className="inline-block border border-[#0A0F1C]/10 bg-slate-50 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#0A0F1C]">
                  Brand Story
                </p>
                <h2 className="mt-6 max-w-3xl text-3xl font-black leading-tight text-[#0A0F1C] sm:text-4xl tracking-tight uppercase font-syne">
                  Từ Hải Dương ra thị trường toàn cầu.
                </h2>
                <p className="story-manifesto mt-5 max-w-2xl text-base leading-relaxed text-slate-500">
                  Đinh Minh Đức bắt đầu bằng việc mày mò cách Facebook và các nền tảng số vận hành. Từ những hỗ trợ nhỏ về fanpage, livestream, nội dung,
                  hành trình dần chuyển thành tư duy performance: mọi chiến dịch phải quy về lead, đơn hàng, chi phí và dòng tiền.
                </p>
                <blockquote className="story-quote mt-6 p-5">
                  “Làm marketing không chỉ để đẹp số tương tác, mà để tạo chuyển đổi thật, doanh thu thật và năng lực vận hành thật cho doanh nghiệp.”
                </blockquote>
                <div className="story-focus mt-6 p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#2563EB]">Điểm nhấn hiện tại</p>
                  <h3 className="mt-2 text-lg font-bold text-[#0A0F1C] uppercase">{storyPhases[activeStory].title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{storyPhases[activeStory].keyline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#2563EB]">{storyPhases[activeStory].impact}</p>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="story-pill reveal-on-scroll px-4 py-3.5 border border-[#0A0F1C]/10">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Nền tảng</p>
                    <p className="mt-1 text-xs font-bold text-[#0A0F1C] uppercase">Đam mê + tự học</p>
                  </div>
                  <div className="story-pill reveal-on-scroll px-4 py-3.5 border border-[#0A0F1C]/10">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Chuyển hóa</p>
                    <p className="mt-1 text-xs font-bold text-[#0A0F1C] uppercase">Tương tác sang hiệu suất</p>
                  </div>
                  <div className="story-pill reveal-on-scroll px-4 py-3.5 border border-[#0A0F1C]/10">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Cam kết</p>
                    <p className="mt-1 text-xs font-bold text-[#0A0F1C] uppercase">Dữ liệu & kết quả</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-4 border-t border-slate-100 pt-5 text-xs font-bold uppercase tracking-wider">
                  <a className="text-[#2563EB] underline decoration-slate-200 underline-offset-4 hover:text-[#0A0F1C]" href="https://nguoinoitieng.tv/nghe-nghiep/ho-tro-facebook/dinh-minh-duc/bgnj" target="_blank" rel="noreferrer">Hồ sơ cá nhân</a>
                  <a className="text-[#2563EB] underline decoration-slate-200 underline-offset-4 hover:text-[#0A0F1C]" href="https://www.facebook.com/business/success/bee-english-community" target="_blank" rel="noreferrer">Meta Success story</a>
                </div>
              </aside>
              <div className="story-line story-scroll space-y-6">
                {storyPhases.map((phase, i) => (
                  <article
                    key={phase.title}
                    data-story-index={i}
                    className="story-node story-step reveal-on-scroll p-6"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">Chặng {i + 1}</p>
                    <h3 className="mt-2 text-lg font-bold text-[#0A0F1C] uppercase">{phase.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500">{phase.desc}</p>
                  </article>
                ))}
              </div>
            </div>
            {/* CTA ở cuối Story Section */}
            <div className="mt-12 pt-8 border-t border-[#0A0F1C]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-sm font-medium text-slate-500">Bạn muốn tìm hiểu thêm về năng lực và hành trình triển khai của tôi?</p>
              <a
                href="#contact"
                onClick={() => { if (window.trackCTA) window.trackCTA("Story Section - Tìm hiểu thêm"); }}
                className="btn-awwwards btn-awwwards-solid"
              >
                Nhận tư vấn ngay
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES BENTO GRID - Brutalist style (Chỉ dùng viền, không bo góc) */}
      <section id="services" className="border-b border-[#0A0F1C]/10 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4">
          
          {/* Header Box (Chiếm 1 cột) */}
          <div className="border-b md:border-b-0 md:border-r border-[#0A0F1C]/10 p-10 flex flex-col justify-between bg-[#F8FAF9]">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Our Expertise</p>
              <h2 className="text-3xl font-black tracking-tight text-[#0A0F1C] uppercase mt-4 font-syne">Dịch vụ chính</h2>
              <p className="mt-4 text-slate-500 text-sm">Giải pháp Performance Marketing toàn diện giúp chuyển hóa lưu lượng thành doanh thu thật.</p>
            </div>
            <div className="mt-8">
              <a
                href="#contact"
                onClick={() => { if (window.trackCTA) window.trackCTA("Services - Book Service Left Header"); }}
                className="btn-awwwards btn-awwwards-outline w-full"
              >
                Book Service
              </a>
            </div>
          </div>

          {/* Box 1 - Performance Marketing (Chiếm 2 cột) */}
          <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-[#0A0F1C]/10 p-10 hover:bg-[#F8FAF9]/50 transition-colors group flex flex-col justify-between">
            <div>
              <div className="text-3xl font-bold text-slate-300 mb-8">01</div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4 group-hover:text-[#2563EB] transition-colors">{services[0].title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{services[0].desc}</p>
            </div>
            <ul className="mt-8 space-y-2 text-xs font-bold text-slate-600 border-t border-slate-100 pt-5">
              {services[0].points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-[#2563EB]" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Box 2 - Google Ads & Map (Chiếm 1 cột) */}
          <div className="border-b md:border-b-0 border-[#0A0F1C]/10 p-10 hover:bg-[#F8FAF9]/50 transition-colors group flex flex-col justify-between">
            <div>
              <div className="text-3xl font-bold text-slate-300 mb-8">02</div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-[#2563EB] transition-colors">{services[1].title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{services[1].desc}</p>
            </div>
            <ul className="mt-8 space-y-2 text-xs font-bold text-slate-600 border-t border-slate-100 pt-5">
              {services[1].points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-[#2563EB]" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Thêm hàng thứ 2 của Services bento grid cho AI & Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 border-t border-[#0A0F1C]/10">
          {/* Box 3 - AI & Content (Chiếm 3 cột) */}
          <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-[#0A0F1C]/10 p-10 hover:bg-[#F8FAF9]/50 transition-colors group flex flex-col justify-between">
            <div>
              <div className="text-3xl font-bold text-slate-300 mb-8">03</div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4 group-hover:text-[#2563EB] transition-colors">{services[2].title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{services[2].desc}</p>
            </div>
            <ul className="mt-8 space-y-2 text-xs font-bold text-slate-600 border-t border-slate-100 pt-5">
              {services[2].points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-[#2563EB]" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Box ở góc dưới (Chiếm 1 cột) */}
          <div className="p-10 flex flex-col justify-between bg-[#F8FAF9]">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#0A0F1C]">Bắt đầu chuyển đổi ngay?</h4>
              <p className="mt-3 text-xs text-slate-500">Đội ngũ Minh Duc Global sẵn sàng lên phương án kiểm toán phễu marketing miễn phí cho bạn.</p>
            </div>
            <div className="mt-8">
              <a 
                href="#contact"
                onClick={() => { if (window.trackCTA) window.trackCTA("Services - Book Service Bottom Action"); }}
                className="btn-awwwards btn-awwwards-solid w-full text-center"
              >
                Book Service →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CASES SECTION - Bento Grid Brutalist (Không rounded, chỉ viền kẻ) */}
      <section id="cases" className="border-b border-[#0A0F1C]/10 py-24 px-6">
        <div className="section-container">
          <div className="cases-hero mb-12 p-6 sm:p-8 lg:p-12 border border-[#0A0F1C]/10 bg-[#0A0F1C]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2563EB]">Báo Cáo Hiệu Quả</p>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl tracking-tight uppercase font-syne">Case Study thực chiến</h2>
            <p className="mt-4 max-w-3xl text-slate-300 text-sm sm:text-base">
              Mỗi case đều được tối ưu theo mục tiêu kinh doanh thực tế: giảm chi phí, tăng lead chất lượng và đẩy doanh thu.
              Kết quả dưới đây thể hiện năng lực triển khai đa nền tảng của Đinh Minh Đức và Minh Duc Global.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="case-kpi p-5 text-center">
                <p className="text-[10px] uppercase tracking-wider font-bold text-[#2563EB]">Doanh thu nổi bật</p>
                <p className="mt-2 text-3xl font-bold text-white">624.6M</p>
              </div>
              <div className="case-kpi p-5 text-center">
                <p className="text-[10px] uppercase tracking-wider font-bold text-[#2563EB]">Hiệu suất cao nhất</p>
                <p className="mt-2 text-3xl font-bold text-white">27X</p>
              </div>
              <div className="case-kpi p-5 text-center">
                <p className="text-[10px] uppercase tracking-wider font-bold text-[#2563EB]">Lead/tháng</p>
                <p className="mt-2 text-3xl font-bold text-white">350</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-[#0A0F1C]/10 pb-6 mb-8">
            <div>
              <h3 className="text-xl font-black text-[#0A0F1C] sm:text-2xl tracking-tight uppercase">Dự án tiêu biểu</h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">Lọc dự án để xem các case study theo danh mục.</p>
            </div>
            <select 
              className="border border-[#0A0F1C]/10 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-[#2563EB]/15 focus:border-[#2563EB] shadow-sm uppercase tracking-wider rounded-none" 
              value={caseFilter} 
              onChange={(e) => setCaseFilter(e.target.value)}
            >
              <option value="all">Tất cả case</option>
              {[...new Set(cases.map((c) => c.category))].map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {visibleCases.map((c, i) => (
              <article 
                key={c.name} 
                className={`bento-card flex flex-col justify-between group ${
                  i === 0 ? "lg:col-span-2 lg:row-span-2" : "lg:col-span-1"
                }`}
              >
                <div>
                  <div className="mb-6 flex items-center justify-between gap-3 border-b border-[#0A0F1C]/10 pb-4">
                    <p className="bg-[#2563EB]/5 border border-[#2563EB]/10 px-3 py-1 text-[9px] font-bold text-[#2563EB] uppercase tracking-wider">{c.category}</p>
                    <p className="bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-[9px] font-extrabold text-amber-700 uppercase tracking-wider">{c.result}</p>
                  </div>
                  <h3 className="text-2xl font-black text-[#0A0F1C] tracking-tight group-hover:text-[#2563EB] transition-colors">{c.name}</h3>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">{c.industry} • {c.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-500">{c.short}</p>
                  
                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {c.metrics.map((m, idx) => {
                      const parts = m.split(':');
                      const label = parts[0]?.trim();
                      const value = parts[1]?.trim();
                      
                      if (value) {
                        return (
                          <div key={m} className={`glass rounded-none p-4 transition-all duration-300 ${idx === 2 ? "metric-strong" : ""}`}>
                            <p className="text-[8px] font-extrabold uppercase tracking-widest text-slate-400">{label}</p>
                            <p className={`text-base font-extrabold mt-1 leading-none ${idx === 2 ? "text-[#2563EB]" : "text-[#0A0F1C]"}`}>{value}</p>
                          </div>
                        );
                      }
                      return (
                        <div key={m} className={`glass rounded-none p-4 transition-all duration-300 ${idx === 2 ? "metric-strong" : ""}`}>
                          <p className="text-xs font-bold text-slate-700">{m}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {c.proof.length > 0 && (
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {c.proof.map((p) => (
                      p.startsWith("http") && !p.includes("facebook.com/business") ? (
                        <button 
                          key={p} 
                          onClick={() => setLightbox(p)} 
                          className="group/proof relative overflow-hidden border border-slate-200 text-left transition-all duration-300 hover:border-[#2563EB] h-32 w-full mt-4 rounded-none"
                        >
                          <img src={p} alt={`Proof ${c.name}`} className="h-full w-full object-cover transition-transform duration-500 group-hover/proof:scale-105" loading="lazy" />
                          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/proof:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="bg-white px-4 py-2 text-[9px] font-bold text-slate-800 flex items-center gap-1.5 shadow-sm transform translate-y-2 group-hover/proof:translate-y-0 transition-transform duration-300 uppercase tracking-wider rounded-none">
                              Xem minh chứng
                            </span>
                          </div>
                        </button>
                      ) : (
                        <a key={p} href={p} target="_blank" rel="noreferrer" className="flex items-center justify-center border border-dashed border-slate-200 p-4 text-[9px] font-bold text-[#2563EB] hover:bg-slate-50 hover:border-[#2563EB] transition-colors text-center h-32 mt-4 uppercase tracking-wider rounded-none">
                          Xem nguồn Meta
                        </a>
                      )
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
          
          {/* CTA ở cuối Cases Section */}
          <div className="mt-12 pt-8 border-t border-[#0A0F1C]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm font-medium text-slate-500">Bạn muốn đạt được hiệu suất ROAS vượt trội như các case study trên?</p>
            <a
              href="#contact"
              onClick={() => { if (window.trackCTA) window.trackCTA("Cases Section - Yêu cầu tư vấn"); }}
              className="btn-awwwards btn-awwwards-solid"
            >
              Yêu cầu tư vấn ngay
            </a>
          </div>
        </div>
      </section>

      {/* 7. COURSES SECTION - Nền sáng #F8FAF9, viền kẻ */}
      <section id="courses" className="border-b border-[#0A0F1C]/10 py-24 px-6">
        <div className="section-container">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">Chương Trình Đào Tạo</p>
            <h2 className="text-3xl font-black tracking-tight text-[#0A0F1C] sm:text-4xl uppercase mt-2 font-syne">Khóa học thực chiến</h2>
            <p className="mt-3 text-slate-500 text-sm">Chuyển giao quy trình quảng cáo và vận hành kinh doanh thực chiến cho học viên.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {courses.map((c) => (
              <article key={c.title} className="bento-card hover:border-[#0A0F1C] flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0A0F1C] tracking-tight uppercase">{c.title}</h3>
                  <p className="mt-3 text-slate-500 text-sm leading-relaxed">{c.desc}</p>
                </div>
                <ul className="mt-6 space-y-2 text-xs font-bold text-slate-600 border-t border-slate-100 pt-5">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1 w-1 bg-[#2563EB]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          {/* CTA ở cuối Courses Section */}
          <div className="mt-12 pt-8 border-t border-[#0A0F1C]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm font-medium text-slate-500">Tìm kiếm khóa học phù hợp nhất với năng lực và mục tiêu của bạn?</p>
            <a
              href="#contact"
              onClick={() => { if (window.trackCTA) window.trackCTA("Courses Section - Đăng ký học"); }}
              className="btn-awwwards btn-awwwards-solid"
            >
              Đăng ký tư vấn khóa học
            </a>
          </div>
        </div>
      </section>

      {/* 8. FEEDBACK SECTION - Nền xám cực nhạt #F8FAFC, viền kẻ */}
      <section id="feedback" className="w-full bg-[#F8FAFC] py-24 px-6 border-b border-[#0A0F1C]/10">
        <div className="section-container">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="bento-card bg-white">
              <h2 className="text-2xl font-black tracking-tight uppercase text-[#0A0F1C] font-syne">Feedback học viên</h2>
              <p className="mt-4 text-slate-700 text-sm leading-relaxed">
                Học viên <b>Quyên</b> (kinh doanh xe điện) bắt đầu từ con số 0 về quảng cáo. Sau quá trình học,
                Quyên đã tự chạy Facebook Ads ra đơn với chi phí tin nhắn khoảng <b>3.000-5.000đ/mess</b>.
              </p>
              <div className="mt-6 aspect-video overflow-hidden border border-slate-200">
                <iframe
                  title="Feedback Quyên"
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F18izSvaN8g%2F&show_text=false"
                  className="h-full w-full"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
              <a className="mt-4 inline-block text-xs font-bold text-[#2563EB] hover:underline uppercase tracking-wider" href="https://www.facebook.com/share/v/18izSvaN8g/" target="_blank" rel="noreferrer">Xem trên Facebook</a>
            </article>

            <article className="bento-card bg-white">
              <h2 className="text-2xl font-black tracking-tight uppercase text-[#0A0F1C] font-syne">Năng lực triển khai</h2>
              <p className="mt-3 text-slate-500 text-sm leading-relaxed">Giải pháp tập trung vào hiệu quả vận hành phễu marketing thực tế.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="glass p-5">
                  <p className="text-[8px] uppercase font-bold tracking-wide text-slate-400">Mô hình vận hành</p>
                  <p className="mt-2 text-base font-bold text-[#2563EB] uppercase">Ads + Content + Data</p>
                </div>
                <div className="glass p-5">
                  <p className="text-[8px] uppercase font-bold tracking-wide text-slate-400">Triển khai</p>
                  <p className="mt-2 text-base font-bold text-[#2563EB] uppercase">Funnel theo mục tiêu</p>
                </div>
                <div className="glass p-5">
                  <p className="text-[8px] uppercase font-bold tracking-wide text-slate-400">Theo dõi</p>
                  <p className="mt-2 text-base font-bold text-[#2563EB] uppercase">Báo cáo theo doanh thu</p>
                </div>
                <div className="glass p-5">
                  <p className="text-[8px] uppercase font-bold tracking-wide text-slate-400">Tối ưu</p>
                  <p className="mt-2 text-base font-bold text-[#2563EB] uppercase">CPA, ROAS, Lead Quality</p>
                </div>
              </div>
            </article>
          </div>
          {/* CTA ở cuối Feedback Section */}
          <div className="mt-12 pt-8 border-t border-[#0A0F1C]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm font-medium text-slate-500">Sẵn sàng hợp tác cùng Founder Đinh Minh Đức và đội ngũ Minh Duc Global?</p>
            <a
              href="#contact"
              onClick={() => { if (window.trackCTA) window.trackCTA("Feedback Section - Đặt lịch làm việc"); }}
              className="btn-awwwards btn-awwwards-solid"
            >
              Đặt lịch làm việc ngay
            </a>
          </div>
        </div>
      </section>

      {/* 9. CONTACT SECTION - Form liên hệ 2 cột tối giản, viền kẻ */}
      <section id="contact" className="border-b border-[#0A0F1C]/10 py-24 px-6">
        <div className="section-container">
          <div className="bento-card">
            {contactForm.success ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm animate-pulse">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#0A0F1C] animate-fade-in uppercase tracking-wider">Gửi thông tin thành công!</h3>
                <p className="mt-3 max-w-md text-slate-500 text-sm">
                  Cảm ơn bạn. Đội ngũ Minh Duc Global sẽ liên hệ tư vấn qua số điện thoại/Zalo trong thời gian sớm nhất.
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
                <h2 className="text-2xl font-black sm:text-3xl tracking-tight text-[#0A0F1C] uppercase font-syne">Nhận tư vấn tăng trưởng</h2>
                <p className="mt-2 text-slate-500 text-sm">Điền thông tin và nhu cầu của bạn để được kết nối và lên phương án nhanh chóng.</p>
                
                <form onSubmit={contactForm.handleSubmit} className="mt-10 flex flex-col gap-8">
                  <div className="grid gap-8 lg:grid-cols-2">
                    {/* Cột 1: Thông tin liên hệ */}
                    <div className="flex flex-col gap-6">
                      <label className="text-xs font-bold text-slate-600 tracking-wider uppercase">Nhóm nhu cầu
                        <select
                          name="needGroup"
                          value={contactForm.values.needGroup}
                          onChange={contactForm.handleChange}
                          className="mt-2.5 w-full bg-white text-slate-800 shadow-sm font-semibold"
                        >
                          <option>Tôi là doanh nghiệp</option>
                          <option>Tôi là học viên</option>
                        </select>
                      </label>
                      <label className="text-xs font-bold text-slate-600 tracking-wider uppercase">Họ và tên
                        <input
                          type="text"
                          name="name"
                          value={contactForm.values.name}
                          onChange={contactForm.handleChange}
                          placeholder="Nhập họ tên"
                          className={`mt-2.5 w-full bg-slate-50/50 ${
                            contactForm.errors.name 
                              ? "border-red-400 bg-red-50/20" 
                              : ""
                          }`}
                        />
                        {contactForm.errors.name && <span className="mt-2 block text-xs text-red-500 font-semibold">{contactForm.errors.name}</span>}
                      </label>
                      <label className="text-xs font-bold text-slate-600 tracking-wider uppercase">Số điện thoại / Zalo
                        <input
                          type="tel"
                          name="phone"
                          value={contactForm.values.phone}
                          onChange={contactForm.handleChange}
                          placeholder="Nhập số điện thoại"
                          className={`mt-2.5 w-full bg-slate-50/50 ${
                            contactForm.errors.phone 
                              ? "border-red-400 bg-red-50/20" 
                              : ""
                          }`}
                        />
                        {contactForm.errors.phone && <span className="mt-2 block text-xs text-red-500 font-semibold">{contactForm.errors.phone}</span>}
                      </label>
                    </div>

                    {/* Cột 2: Mục tiêu dự án */}
                    <div className="flex flex-col gap-6">
                      <label className="text-xs font-bold text-slate-600 tracking-wider uppercase">Nhu cầu chính
                        <input
                          type="text"
                          name="mainNeed"
                          value={contactForm.values.mainNeed}
                          onChange={contactForm.handleChange}
                          placeholder="Ví dụ: Facebook Ads, Google Ads, Khóa học..."
                          className={`mt-2.5 w-full bg-slate-50/50 ${
                            contactForm.errors.mainNeed 
                              ? "border-red-400 bg-red-50/20" 
                              : ""
                          }`}
                        />
                        {contactForm.errors.mainNeed && <span className="mt-2 block text-xs text-red-500 font-semibold">{contactForm.errors.mainNeed}</span>}
                      </label>
                      <label className="text-xs font-bold text-slate-600 tracking-wider uppercase flex-grow flex flex-col">Mô tả ngắn mục tiêu
                        <textarea
                          name="description"
                          value={contactForm.values.description}
                          onChange={contactForm.handleChange}
                          placeholder="Mục tiêu kinh doanh 30-90 ngày của bạn"
                          className={`mt-2.5 w-full flex-grow resize-none min-h-[136px] bg-slate-50/50 ${
                            contactForm.errors.description 
                              ? "border-red-400 bg-red-50/20" 
                              : ""
                          }`}
                        />
                        {contactForm.errors.description && <span className="mt-2 block text-xs text-red-500 font-semibold">{contactForm.errors.description}</span>}
                      </label>
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
                    className="btn-awwwards btn-awwwards-solid w-full"
                  >
                    {contactForm.loading ? "Đang gửi thông tin..." : "Gửi thông tin tư vấn"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 10. TOOLKIT SECTION - Quà tặng, viền kẻ */}
      <section id="toolkit" className="border-b border-[#0A0F1C]/10 py-24 px-6 bg-white">
        <div className="section-container">
          <div className="toolkit-hero rounded-none p-8 sm:p-10 lg:p-12 border border-[#0A0F1C]/10">
            {toolkitForm.success ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 text-slate-900 shadow-md animate-pulse">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-bold text-white animate-fade-in uppercase tracking-wider">Đăng ký thành công!</h3>
                <p className="mt-3 max-w-md text-brand-100 text-sm">
                  Cảm ơn bạn. Bộ tài nguyên Marketing All-in-One đã được chuẩn bị và sẽ được gửi qua Zalo/SĐT trong vài phút.
                </p>
                <button
                  type="button"
                  onClick={toolkitForm.resetForm}
                  className="mt-8 rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-white/20 transition-colors uppercase tracking-wider"
                >
                  Gửi form mới
                </button>
              </div>
            ) : (
              <>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-200">Quà Tặng Đặc Biệt</p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl tracking-tight uppercase font-syne">
                  Nhận miễn phí bộ công cụ Marketing All-in-One
                </h2>
                <p className="mt-4 max-w-4xl text-slate-300 text-sm sm:text-base leading-relaxed">
                  Đăng ký form bên dưới để nhận ngay trọn bộ tài liệu thực chiến bao gồm kịch bản content, plan tuần/tháng, dashboard ads, checklist SEO và quy trình tối ưu dựa trên số liệu.
                </p>
                <div className="mt-8 grid gap-3 text-xs text-white sm:grid-cols-2 lg:grid-cols-4 font-bold uppercase tracking-wider">
                  <div className="toolkit-pill rounded-none px-4 py-3.5 text-center">Kịch bản content chuyển đổi</div>
                  <div className="toolkit-pill rounded-none px-4 py-3.5 text-center">Plan content theo tuần/tháng</div>
                  <div className="toolkit-pill rounded-none px-4 py-3.5 text-center">Bảng phân tích chỉ số Ads</div>
                  <div className="toolkit-pill rounded-none px-4 py-3.5 text-center">Template bài SEO chuẩn</div>
                </div>
                <form onSubmit={toolkitForm.handleSubmit} className="mt-10 grid gap-4 rounded-none bg-white/5 p-5 sm:p-8 border border-white/10 md:grid-cols-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-100">Họ và tên
                    <input
                      type="text"
                      name="name"
                      value={toolkitForm.values.name}
                      onChange={toolkitForm.handleChange}
                      placeholder="Nhập họ tên"
                      className={`mt-2 w-full rounded-none border px-4 py-3 text-slate-900 placeholder:text-slate-400 text-sm outline-none transition-all ${
                        toolkitForm.errors.name 
                          ? "border-red-400 bg-red-50/95" 
                          : "border-white/10 bg-white/95 focus:bg-white focus:border-white focus:ring-brand-200/20"
                      }`}
                    />
                    {toolkitForm.errors.name && <span className="mt-2 block text-xs text-red-200 font-semibold">{toolkitForm.errors.name}</span>}
                  </label>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-100">Số điện thoại / Zalo
                    <input
                      type="tel"
                      name="phone"
                      value={toolkitForm.values.phone}
                      onChange={toolkitForm.handleChange}
                      placeholder="Nhập số điện thoại"
                      className={`mt-2 w-full rounded-none border px-4 py-3 text-slate-900 placeholder:text-slate-400 text-sm outline-none transition-all ${
                        toolkitForm.errors.phone 
                          ? "border-red-400 bg-red-50/95" 
                          : "border-white/10 bg-white/95 focus:bg-white focus:border-white focus:ring-brand-200/20"
                      }`}
                    />
                    {toolkitForm.errors.phone && <span className="mt-2 block text-xs text-red-200 font-semibold">{toolkitForm.errors.phone}</span>}
                  </label>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-100 md:col-span-2">Bạn đang cần nhất công cụ nào?
                    <input
                      type="text"
                      name="requestedTool"
                      value={toolkitForm.values.requestedTool}
                      onChange={toolkitForm.handleChange}
                      placeholder="Ví dụ: Bảng chỉ số Ads, plan content, kịch bản video..."
                      className={`mt-2 w-full rounded-none border px-4 py-3 text-slate-900 placeholder:text-slate-400 text-sm outline-none transition-all ${
                        toolkitForm.errors.requestedTool 
                          ? "border-red-400 bg-red-50/95" 
                          : "border-white/10 bg-white/95 focus:bg-white focus:border-white focus:ring-brand-200/20"
                      }`}
                    />
                    {toolkitForm.errors.requestedTool && <span className="mt-2 block text-xs text-red-200 font-semibold">{toolkitForm.errors.requestedTool}</span>}
                  </label>
                  {toolkitForm.submitError && (
                    <div className="md:col-span-2 rounded-none bg-red-900/40 border border-red-500/50 p-4 text-xs text-red-200 font-bold">
                      {toolkitForm.submitError}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={toolkitForm.loading}
                    onClick={() => { if (window.trackCTA) window.trackCTA("Toolkit Section - Submit Form"); }}
                    className="btn-awwwards btn-awwwards-accent md:col-span-2 w-full py-4 text-slate-950 font-extrabold"
                  >
                    {toolkitForm.loading ? "Đang xử lý..." : "Nhận bộ công cụ ngay"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 11. FOOTER - Tối giản */}
      <footer className="bg-white border-t border-[#0A0F1C]/10">
        <div className="section-container flex flex-col gap-4 py-12 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Minh Duc Global. All rights reserved.</p>
          <p>Đinh Minh Đức • Founder/CEO • Hải Dương</p>
        </div>
      </footer>

      {/* Floating CTA viên thuốc chuẩn Awwwards */}
      <a
        href="#contact"
        onClick={() => { if (window.trackCTA) window.trackCTA("Floating - Tư vấn ngay"); }}
        className="fixed bottom-6 right-6 btn-awwwards btn-awwwards-solid shadow-lg shadow-[#2563EB]/25"
      >
        Tư vấn ngay
      </a>

      {/* Lightbox mờ tối sang trọng Awwwards */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-sm p-4 animate-fade-in cursor-zoom-out"
          onClick={() => setLightbox("")}
        >
          <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-none bg-white shadow-2xl border border-slate-100 flex items-center justify-center">
            <img src={lightbox} alt="Proof large" className="max-h-[85vh] max-w-[95vw] object-contain animate-scale-in" />
            <button
              onClick={() => setLightbox("")}
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/60 text-white hover:bg-slate-900/80 transition-colors shadow-md"
              aria-label="Đóng"
            >
              <span className="text-xl leading-none font-bold">×</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
