import React, { useEffect, useMemo, useState } from "react";
import useForm from "./hooks/useForm";

const nav = [
  { id: "story", label: "Câu chuyện" },
  { id: "services", label: "Dịch vụ" },
  { id: "cases", label: "Dự án" },
  { id: "courses", label: "Đào tạo" },
  { id: "feedback", label: "Feedback" },
  { id: "contact", label: "Liên hệ" },
  { id: "toolkit", label: "Quà tặng" },
];

const services = [
  {
    id: "perf",
    title: "Performance Marketing",
    desc: "Triển khai quảng cáo Facebook, TikTok, Google theo mục tiêu lead, đơn hàng, doanh thu và hiệu suất toàn phễu.",
    points: ["Tư duy phễu", "Tối ưu CPA/ROAS", "Báo cáo theo dữ liệu"],
  },
  {
    id: "gg",
    title: "Google Ads & Local Map",
    desc: "Tối ưu tìm kiếm, quảng cáo Google và hiện diện địa phương cho doanh nghiệp có điểm bán hoặc nhu cầu khách hàng rõ ràng.",
    points: ["Search Ads", "Google Maps", "Local Intent"],
  },
  {
    id: "content",
    title: "Content Growth",
    desc: "Định hướng nội dung, đào tạo team content và xây format video/social phục vụ mục tiêu chuyển đổi thực tế.",
    points: ["Content plan", "TikTok format", "Creative testing"],
  },
  {
    id: "ai",
    title: "AI & Automation",
    desc: "Ứng dụng AI để nghiên cứu khách hàng, lên nội dung, xử lý dữ liệu và tự động hóa các tác vụ marketing lặp lại.",
    points: ["AI workflow", "Automation", "Data system"],
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
    points: ["Set camp đúng cấu trúc", "Đọc CPM, CTR, CPC, CPA", "Tối ưu giá mess", "Scale chiến dịch có dữ liệu"],
  },
  {
    title: "Google Ads",
    desc: "Học cách kéo khách hàng có nhu cầu thật qua Search, Local Map và hệ thống đo lường hiệu quả theo doanh thu.",
    points: ["Google Search Ads", "Local Map", "Tối ưu từ khóa", "Đo lường chuyển đổi"],
  },
  {
    title: "TikTok Ads",
    desc: "Triển khai quảng cáo và nội dung ngắn theo hành vi người xem, phù hợp sản phẩm cần tăng nhận diện.",
    points: ["Tư duy video ngắn", "Setup TikTok Ads", "Test hook & angle", "Tối ưu chi phí chuyển đổi"],
  },
  {
    title: "Shopee thực chiến",
    desc: "Xây dựng gian hàng, tối ưu sản phẩm, traffic và chuyển đổi trên sàn thương mại điện tử.",
    points: ["Tối ưu gian hàng", "SEO tiêu đề sản phẩm", "Tối ưu hình ảnh", "Tăng tỷ lệ ra đơn"],
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
  const combined = Array(5).fill(marqueeItems).flat();

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
    <div className="min-h-screen bg-[#F8FAF9] text-[#0A0F1C] font-sansSelection">
      <div className="mesh-bg" aria-hidden="true" />
      
      {/* Top bar - Phẳng tối giản */}
      <div className="bg-[#0A0F1C] text-white text-xs tracking-wider uppercase py-3 border-b border-[#0A0F1C]">
        <div className="section-container flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between font-bold">
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
            SERVICES: <a className="hover:text-[#2563EB] transition-colors" href="tel:0936643146">0936643146</a>
          </p>
          <p className="flex items-center gap-2">
            TRAINING: <a className="hover:text-[#2563EB] transition-colors" href="tel:0936643146">0936643146</a>
          </p>
        </div>
      </div>

      {/* Header - Đường biên border-b tối giản */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-[#F8FAF9]/90 backdrop-blur-md">
        <div className="section-container flex items-center justify-between py-5">
          <div>
            <p className="text-lg font-black tracking-tighter uppercase text-[#0A0F1C]">Minh Duc Global</p>
            <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mt-0.5">EST. 2026</p>
          </div>
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className="text-xs font-bold uppercase tracking-wider text-[#0A0F1C] hover:text-[#2563EB] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={() => { if (window.trackCTA) window.trackCTA("Header - Đặt lịch tư vấn (Desktop)"); }}
              className="hidden btn-awwwards btn-awwwards-solid sm:inline-flex"
            >
              Đặt lịch tư vấn
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-[#0A0F1C] hover:border-[#0A0F1C] transition-colors lg:hidden"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Mở menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="text-lg leading-none font-bold">{mobileMenuOpen ? "×" : "≡"}</span>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="section-container pb-6 lg:hidden animate-slide-down">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded-lg px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0A0F1C] hover:bg-slate-50 hover:text-[#2563EB] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-3 block btn-awwwards btn-awwwards-solid text-center w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (window.trackCTA) window.trackCTA("Header - Đặt lịch tư vấn (Mobile)");
                }}
              >
                Đặt lịch tư vấn
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section - Căn trái, Typography Grotesque khổng lồ */}
      <section className="section-container py-24 lg:py-40">
        <div className="max-w-6xl">
          <p className="mb-6 inline-flex rounded-full border border-[#2563EB]/25 bg-[#2563EB]/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#2563EB]">
            Minh Duc Global • High-end Performance Agency
          </p>
          <h1 className="text-5xl font-black leading-[0.9] text-[#0A0F1C] sm:text-[6.5rem] lg:text-[8rem] tracking-tighter uppercase font-syne">
            WE BUILD<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-indigo-600">TANGIBLE GROWTH</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg font-medium">
            Đinh Minh Đức — Founder/CEO Minh Duc Global. Sinh năm 2005 tại Hải Dương, xây dựng giải pháp tăng trưởng toàn phễu (Performance Marketing) phục vụ mục tiêu Lead, đơn hàng và tự động hóa vận hành cho các thương hiệu hàng đầu.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              onClick={() => { if (window.trackCTA) window.trackCTA("Hero - Doanh nghiệp cần tăng trưởng"); }}
              className="btn-awwwards btn-awwwards-solid"
            >
              Tôi là doanh nghiệp
            </a>
            <a
              href="#courses"
              onClick={() => { if (window.trackCTA) window.trackCTA("Hero - Học marketing thực chiến"); }}
              className="btn-awwwards btn-awwwards-outline"
            >
              Tôi muốn học thực chiến
            </a>
          </div>
        </div>
      </section>

      {/* Infinite Marquee giữa Hero và Story */}
      <Marquee />

      {/* Story Section - Cấu trúc phẳng, phân tách bằng border */}
      <section id="story" className="border-b border-slate-200/80 py-24 lg:py-36">
        <div className="section-container">
          <div className="story-hero p-6 sm:p-8 lg:p-12 border border-slate-200">
            <div className="story-grid gap-8 lg:gap-16">
              <aside className="story-sticky">
                <p className="inline-block rounded-full border border-[#0A0F1C]/10 bg-slate-50 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0A0F1C]">
                  Brand Story
                </p>
                <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-[#0A0F1C] sm:text-4xl tracking-tight uppercase">
                  Từ Hải Dương ra thị trường toàn cầu.
                </h2>
                <p className="story-manifesto mt-5 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
                  Đinh Minh Đức bắt đầu bằng việc mày mò cách Facebook và các nền tảng số vận hành. Từ những hỗ trợ nhỏ về fanpage, livestream, nội dung,
                  hành trình dần chuyển thành tư duy performance: mọi chiến dịch phải quy về lead, đơn hàng, chi phí và dòng tiền.
                </p>
                <blockquote className="story-quote mt-6 rounded-2xl p-5">
                  “Làm marketing không chỉ để đẹp số tương tác, mà để tạo chuyển đổi thật, doanh thu thật và năng lực vận hành thật cho doanh nghiệp.”
                </blockquote>
                <div className="story-focus mt-6 rounded-2xl p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2563EB]">Điểm nhấn hiện tại</p>
                  <h3 className="mt-2 text-lg font-extrabold text-[#0A0F1C]">{storyPhases[activeStory].title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{storyPhases[activeStory].keyline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#2563EB]">{storyPhases[activeStory].impact}</p>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="story-pill reveal-on-scroll rounded-2xl px-4 py-3.5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Nền tảng</p>
                    <p className="mt-1 text-xs sm:text-sm font-bold text-[#0A0F1C]">Đam mê + tự học</p>
                  </div>
                  <div className="story-pill reveal-on-scroll rounded-2xl px-4 py-3.5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Chuyển hóa</p>
                    <p className="mt-1 text-xs sm:text-sm font-bold text-[#0A0F1C]">Tương tác sang hiệu suất</p>
                  </div>
                  <div className="story-pill reveal-on-scroll rounded-2xl px-4 py-3.5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Cam kết</p>
                    <p className="mt-1 text-xs sm:text-sm font-bold text-[#0A0F1C]">Dữ liệu & kết quả thật</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-4 border-t border-slate-100 pt-5">
                  <a className="text-xs font-bold text-[#2563EB] underline decoration-slate-200 underline-offset-4 hover:text-[#0A0F1C] hover:decoration-[#0A0F1C] transition-colors" href="https://nguoinoitieng.tv/nghe-nghiep/ho-tro-facebook/dinh-minh-duc/bgnj" target="_blank" rel="noreferrer">Hồ sơ cá nhân</a>
                  <a className="text-xs font-bold text-[#2563EB] underline decoration-slate-200 underline-offset-4 hover:text-[#0A0F1C] hover:decoration-[#0A0F1C] transition-colors" href="https://www.facebook.com/business/success/bee-english-community" target="_blank" rel="noreferrer">Meta Success Story (Bee)</a>
                </div>
              </aside>
              <div className="story-line story-scroll space-y-6">
                {storyPhases.map((phase, i) => (
                  <article
                    key={phase.title}
                    data-story-index={i}
                    className="story-node story-step reveal-on-scroll rounded-2xl border p-6 backdrop-blur-sm"
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-slate-400">Chặng {i + 1}</p>
                    <h3 className="mt-2 text-lg font-extrabold text-[#0A0F1C]">{phase.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500">{phase.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Bento Grid bất đối xứng tối giản */}
      <section id="services" className="border-b border-slate-200/80 py-24 lg:py-36">
        <div className="section-container">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">Dịch Vụ Tăng Trưởng</p>
            <h2 className="text-3xl font-black tracking-tight text-[#0A0F1C] sm:text-4xl uppercase mt-2">Dịch vụ chính của Minh Duc Global</h2>
            <p className="mt-3 text-slate-500 text-sm">Các giải pháp quảng cáo và tự động hóa chuyên biệt giúp thúc đẩy chuyển đổi thật và doanh số.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article 
                key={s.id} 
                className={`bento-card flex flex-col justify-between h-full group ${
                  s.id === "perf" || s.id === "ai" ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-widest text-[#2563EB] uppercase border border-[#2563EB]/20 bg-[#2563EB]/5 px-2.5 py-1 rounded-md">
                      {s.id.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0A0F1C] tracking-tight mt-6 group-hover:text-[#2563EB] transition-colors">{s.title}</h3>
                  <p className="mt-4 text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <ul className="mt-8 space-y-2 text-xs font-bold text-slate-600 border-t border-slate-100 pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee giữa Dịch vụ và Case Studies */}
      <Marquee />

      {/* Cases Section - Bento Grid bất đối xứng phong cách Awwwards */}
      <section id="cases" className="border-b border-slate-200/80 py-24 lg:py-36">
        <div className="section-container">
          <div className="cases-hero mb-12 rounded-3xl p-6 sm:p-8 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2563EB]">Báo Cáo Hiệu Quả</p>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl tracking-tight uppercase">Case Study thực chiến</h2>
            <p className="mt-3 max-w-3xl text-slate-300 text-sm sm:text-base">
              Mỗi case đều được tối ưu theo mục tiêu kinh doanh thực tế: giảm chi phí, tăng lead chất lượng và đẩy doanh thu.
              Kết quả dưới đây thể hiện năng lực triển khai đa nền tảng của Đinh Minh Đức và Minh Duc Global.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="case-kpi rounded-2xl p-5 text-center">
                <p className="text-[10px] uppercase tracking-wider font-bold text-[#2563EB]">Doanh thu nổi bật</p>
                <p className="mt-2 text-3xl font-extrabold text-white">624.6M</p>
              </div>
              <div className="case-kpi rounded-2xl p-5 text-center">
                <p className="text-[10px] uppercase tracking-wider font-bold text-[#2563EB]">Hiệu suất cao nhất</p>
                <p className="mt-2 text-3xl font-extrabold text-white">27X</p>
              </div>
              <div className="case-kpi rounded-2xl p-5 text-center">
                <p className="text-[10px] uppercase tracking-wider font-bold text-[#2563EB]">Lead/tháng</p>
                <p className="mt-2 text-3xl font-extrabold text-white">350</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-slate-200/80 pb-6 mb-8">
            <div>
              <h3 className="text-xl font-black text-[#0A0F1C] sm:text-2xl tracking-tight uppercase">Dự án chọn lọc</h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">Các chiến dịch tối ưu hóa chuyển đổi thực tế.</p>
            </div>
            <select 
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-[#2563EB]/15 focus:border-[#2563EB] shadow-sm uppercase tracking-wider" 
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
                  <div className="mb-6 flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <p className="rounded-full bg-[#2563EB]/5 border border-[#2563EB]/10 px-3 py-1 text-[10px] font-bold text-[#2563EB] uppercase tracking-wider">{c.category}</p>
                    <p className="rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-[10px] font-extrabold text-amber-700 uppercase tracking-wider">{c.result}</p>
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
                          <div key={m} className={`glass rounded-2xl p-4 transition-all duration-300 ${idx === 2 ? "metric-strong" : ""}`}>
                            <p className="text-[8px] font-extrabold uppercase tracking-widest text-slate-400">{label}</p>
                            <p className={`text-base font-extrabold mt-1 leading-none ${idx === 2 ? "text-[#2563EB]" : "text-[#0A0F1C]"}`}>{value}</p>
                          </div>
                        );
                      }
                      return (
                        <div key={m} className={`glass rounded-2xl p-4 transition-all duration-300 ${idx === 2 ? "metric-strong" : ""}`}>
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
                          className="group/proof relative overflow-hidden rounded-2xl border border-slate-100 text-left transition-all duration-300 hover:border-[#2563EB] hover:shadow-md h-32 w-full mt-4"
                        >
                          <img src={p} alt={`Proof ${c.name}`} className="h-full w-full object-cover transition-transform duration-500 group-hover/proof:scale-105" loading="lazy" />
                          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/proof:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="rounded-full bg-white px-4 py-2 text-[10px] font-bold text-slate-800 flex items-center gap-1.5 shadow-sm transform translate-y-2 group-hover/proof:translate-y-0 transition-transform duration-300 uppercase tracking-wider">
                              Xem minh chứng
                            </span>
                          </div>
                        </button>
                      ) : (
                        <a key={p} href={p} target="_blank" rel="noreferrer" className="flex items-center justify-center rounded-2xl border border-dashed border-slate-200 p-4 text-[10px] font-bold text-[#2563EB] hover:bg-slate-50 hover:border-[#2563EB] transition-colors text-center h-32 mt-4 uppercase tracking-wider">
                          Xem nguồn Meta
                        </a>
                      )
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section - Nền sáng #F8FAF9 */}
      <section id="courses" className="border-b border-slate-200/80 py-24 lg:py-36">
        <div className="section-container">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">Chương Trình Đào Tạo</p>
            <h2 className="text-3xl font-black tracking-tight text-[#0A0F1C] sm:text-4xl uppercase mt-2">Khóa học marketing thực chiến</h2>
            <p className="mt-3 text-slate-500 text-sm">Học đi đôi với hành, chuyển giao quy trình tối ưu thực tế từ con số 0.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {courses.map((c) => (
              <article key={c.title} className="bento-card hover:border-brand-600 transition-colors flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0A0F1C] tracking-tight uppercase">{c.title}</h3>
                  <p className="mt-3 text-slate-500 text-sm leading-relaxed">{c.desc}</p>
                </div>
                <ul className="mt-6 space-y-2 text-xs font-bold text-slate-600 border-t border-slate-100 pt-5">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section - Nền xám cực nhạt #F8FAFC */}
      <section id="feedback" className="w-full bg-[#F8FAFC] py-24 lg:py-36 border-b border-slate-200/80">
        <div className="section-container">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="bento-card bg-white">
              <h2 className="text-2xl font-black tracking-tight uppercase text-[#0A0F1C]">Feedback học viên</h2>
              <p className="mt-4 text-slate-700 text-sm leading-relaxed">
                Học viên <b>Quyên</b> (kinh doanh xe điện) bắt đầu từ con số 0 về quảng cáo. Sau quá trình học,
                Quyên đã tự chạy Facebook Ads ra đơn với chi phí tin nhắn khoảng <b>3.000-5.000đ/mess</b>.
              </p>
              <div className="mt-6 aspect-video overflow-hidden rounded-2xl border border-slate-200">
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
              <h2 className="text-2xl font-black tracking-tight uppercase text-[#0A0F1C]">Năng lực triển khai</h2>
              <p className="mt-3 text-slate-500 text-sm leading-relaxed">Định hướng thực chiến lấy chuyển đổi và doanh thu làm thước đo hiệu quả.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="glass rounded-2xl p-5 border border-slate-100">
                  <p className="text-[9px] uppercase font-bold tracking-wide text-slate-400">Mô hình vận hành</p>
                  <p className="mt-2 text-base font-bold text-[#2563EB]">Ads + Content + Data</p>
                </div>
                <div className="glass rounded-2xl p-5 border border-slate-100">
                  <p className="text-[9px] uppercase font-bold tracking-wide text-slate-400">Triển khai</p>
                  <p className="mt-2 text-base font-bold text-[#2563EB]">Funnel theo mục tiêu</p>
                </div>
                <div className="glass rounded-2xl p-5 border border-slate-100">
                  <p className="text-[9px] uppercase font-bold tracking-wide text-slate-400">Theo dõi</p>
                  <p className="mt-2 text-base font-bold text-[#2563EB]">Báo cáo theo doanh thu</p>
                </div>
                <div className="glass rounded-2xl p-5 border border-slate-100">
                  <p className="text-[9px] uppercase font-bold tracking-wide text-slate-400">Tối ưu</p>
                  <p className="mt-2 text-base font-bold text-[#2563EB]">CPA, ROAS, Lead Quality</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section - Form liên hệ 2 cột tối giản */}
      <section id="contact" className="border-b border-slate-200/80 py-24 lg:py-36">
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
                <h2 className="text-2xl font-black sm:text-3xl tracking-tight text-[#0A0F1C] uppercase">Nhận tư vấn tăng trưởng</h2>
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

      {/* Toolkit Section - Phẳng tối giản sẫm màu */}
      <section id="toolkit" className="border-b border-slate-200/80 py-24 lg:py-36">
        <div className="section-container">
          <div className="toolkit-hero rounded-3xl p-8 sm:p-10 lg:p-12">
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
                <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl tracking-tight uppercase">
                  Nhận miễn phí bộ công cụ Marketing All-in-One
                </h2>
                <p className="mt-4 max-w-4xl text-slate-300 text-sm sm:text-base leading-relaxed">
                  Đăng ký form bên dưới để nhận ngay trọn bộ tài liệu thực chiến bao gồm kịch bản content, plan tuần/tháng, dashboard ads, checklist SEO và quy trình tối ưu dựa trên số liệu.
                </p>
                <div className="mt-8 grid gap-3 text-xs text-white sm:grid-cols-2 lg:grid-cols-4 font-bold uppercase tracking-wider">
                  <div className="toolkit-pill rounded-full px-4 py-3.5 text-center">Kịch bản content chuyển đổi</div>
                  <div className="toolkit-pill rounded-full px-4 py-3.5 text-center">Plan content theo tuần/tháng</div>
                  <div className="toolkit-pill rounded-full px-4 py-3.5 text-center">Bảng phân tích chỉ số Ads</div>
                  <div className="toolkit-pill rounded-full px-4 py-3.5 text-center">Template bài SEO chuẩn</div>
                </div>
                <form onSubmit={toolkitForm.handleSubmit} className="mt-10 grid gap-4 rounded-2xl bg-white/5 p-5 sm:p-8 border border-white/10 md:grid-cols-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-100">Họ và tên
                    <input
                      type="text"
                      name="name"
                      value={toolkitForm.values.name}
                      onChange={toolkitForm.handleChange}
                      placeholder="Nhập họ tên"
                      className={`mt-2 w-full rounded-xl border px-4 py-3 text-slate-900 placeholder:text-slate-400 text-sm outline-none transition-all ${
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
                      className={`mt-2 w-full rounded-xl border px-4 py-3 text-slate-900 placeholder:text-slate-400 text-sm outline-none transition-all ${
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
                      className={`mt-2 w-full rounded-xl border px-4 py-3 text-slate-900 placeholder:text-slate-400 text-sm outline-none transition-all ${
                        toolkitForm.errors.requestedTool 
                          ? "border-red-400 bg-red-50/95" 
                          : "border-white/10 bg-white/95 focus:bg-white focus:border-white focus:ring-brand-200/20"
                      }`}
                    />
                    {toolkitForm.errors.requestedTool && <span className="mt-2 block text-xs text-red-200 font-semibold">{toolkitForm.errors.requestedTool}</span>}
                  </label>
                  {toolkitForm.submitError && (
                    <div className="md:col-span-2 rounded-xl bg-red-900/40 border border-red-500/50 p-4 text-xs text-red-200 font-bold">
                      {toolkitForm.submitError}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={toolkitForm.loading}
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

      <footer className="bg-white border-t border-slate-200/80">
        <div className="section-container flex flex-col gap-3 py-10 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between font-bold uppercase tracking-wider">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-fade-in cursor-zoom-out"
          onClick={() => setLightbox("")}
        >
          <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-100 flex items-center justify-center">
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
