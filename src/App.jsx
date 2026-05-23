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
    title: "Performance Marketing",
    desc: "Triển khai quảng cáo Facebook, TikTok, Google theo mục tiêu lead, đơn hàng, doanh thu và hiệu suất toàn phễu.",
    points: ["Tư duy phễu", "Tối ưu CPA/ROAS", "Báo cáo theo dữ liệu"],
  },
  {
    title: "Google Ads & Local Map",
    desc: "Tối ưu tìm kiếm, quảng cáo Google và hiện diện địa phương cho doanh nghiệp có điểm bán hoặc nhu cầu khách hàng rõ ràng.",
    points: ["Search Ads", "Google Maps", "Local Intent"],
  },
  {
    title: "Content Growth",
    desc: "Định hướng nội dung, đào tạo team content và xây format video/social phục vụ mục tiêu chuyển đổi thực tế.",
    points: ["Content plan", "TikTok format", "Creative testing"],
  },
  {
    title: "AI & Automation",
    desc: "Ứng dụng AI để nghiên cứu khách hàng, lên nội dung, xử lý dữ liệu và tự động hóa các tác vụ marketing lặp lại.",
    points: ["AI workflow", "Automation", "Data system"],
  },
];

const cases = [
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
    <div className="min-h-screen text-slate-900">
      <div className="mesh-bg" aria-hidden="true" />
      <div className="bg-brand-900 text-white text-sm">
        <div className="section-container flex flex-col gap-2 py-2 sm:flex-row sm:items-center sm:justify-between">
          <p>Dịch vụ: <a className="font-semibold hover:underline" href="tel:0936643146">0936643146</a></p>
          <p>Đào tạo: <a className="font-semibold hover:underline" href="tel:0936643146">0936643146</a></p>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="section-container flex items-center justify-between py-4">
          <div>
            <p className="text-lg font-bold text-brand-800">Đinh Minh Đức</p>
            <p className="text-xs text-slate-500">Founder/CEO Minh Duc Global</p>
          </div>
          <nav className="hidden items-center gap-6 lg:flex">
            {nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm font-medium text-slate-700 hover:text-brand-700">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={() => { if (window.trackCTA) window.trackCTA("Header - Đặt lịch tư vấn (Desktop)"); }}
              className="hidden rounded-xl bg-brand-700 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-800 sm:inline-block"
            >
              Đặt lịch tư vấn
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-brand-800 lg:hidden"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Mở menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="text-xl leading-none">{mobileMenuOpen ? "×" : "≡"}</span>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="section-container pb-4 lg:hidden animate-slide-down">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-lg">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 block rounded-lg bg-brand-700 px-3 py-2 text-center text-sm font-semibold text-white"
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

      <section className="section-container py-20 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 inline-block rounded-full border border-white/80 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-800 shadow-sm backdrop-blur">Performance Marketing • AI Automation • Đào tạo thực chiến</p>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">Từ đam mê công nghệ đến hệ thống tăng trưởng bằng quảng cáo, dữ liệu và AI</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Tôi là Đinh Minh Đức, bắt đầu từ niềm đam mê công nghệ và mạng xã hội, phát triển thành người làm dịch vụ Facebook,
              Performance Marketing và Founder/CEO Minh Duc Global. Đây là nơi tổng hợp hành trình, năng lực triển khai thực chiến
              và chương trình đào tạo làm được việc thật.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#services"
                onClick={() => { if (window.trackCTA) window.trackCTA("Hero - Doanh nghiệp cần tăng trưởng"); }}
                className="btn-3d rounded-xl bg-brand-700 px-6 py-3 text-center font-semibold text-white hover:bg-brand-800"
              >
                Tôi là doanh nghiệp cần tăng trưởng
              </a>
              <a
                href="#courses"
                onClick={() => { if (window.trackCTA) window.trackCTA("Hero - Học marketing thực chiến"); }}
                className="btn-3d rounded-xl border border-brand-700 bg-white px-6 py-3 text-center font-semibold text-brand-700 hover:bg-brand-50"
              >
                Tôi muốn học marketing thực chiến
              </a>
            </div>
          </div>
          <div className="card card-3d p-6">
            <h3 className="text-xl font-bold text-slate-900">Minh Duc Global Snapshot</h3>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4"><p className="text-2xl font-bold text-brand-700">5+</p><p className="text-sm text-slate-600">Năm thực chiến bán hàng</p></div>
              <div className="glass rounded-xl p-4"><p className="text-2xl font-bold text-brand-700">27X</p><p className="text-sm text-slate-600">Case hiệu suất cao nhất</p></div>
              <div className="glass rounded-xl p-4"><p className="text-2xl font-bold text-brand-700">350</p><p className="text-sm text-slate-600">Lead/tháng (Bee)</p></div>
              <div className="glass rounded-xl p-4"><p className="text-2xl font-bold text-brand-700">4K+</p><p className="text-sm text-slate-600">Follower TikTok local</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="section-container pb-20 lg:pb-32">
        <div className="story-hero card-3d reveal-on-scroll p-6 sm:p-8 lg:p-10">
          <div className="story-grid gap-8 lg:gap-12">
            <aside className="story-sticky">
              <p className="inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
                Brand Story
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Từ một GenZ tự học công nghệ ở Hải Dương đến người xây hệ thống tăng trưởng tạo doanh thu thật cho doanh nghiệp.
              </h2>
              <p className="story-manifesto mt-5 max-w-2xl text-base leading-relaxed text-blue-50/95 sm:text-lg">
                Đinh Minh Đức bắt đầu bằng việc mày mò cách Facebook và các nền tảng số vận hành. Từ những hỗ trợ nhỏ về fanpage, livestream, nội dung,
                hành trình dần chuyển thành tư duy performance: mọi chiến dịch phải quy về lead, đơn hàng, chi phí và dòng tiền.
              </p>
              <blockquote className="story-quote mt-6 rounded-2xl p-5">
                “Làm marketing không chỉ để đẹp số tương tác, mà để tạo chuyển đổi thật, doanh thu thật và năng lực vận hành thật cho doanh nghiệp.”
              </blockquote>
              <div className="story-focus mt-6 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">Điểm nhấn hiện tại</p>
                <h3 className="mt-2 text-xl font-bold text-white">{storyPhases[activeStory].title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-50/95">{storyPhases[activeStory].keyline}</p>
                <p className="mt-3 text-sm leading-relaxed text-blue-100">{storyPhases[activeStory].impact}</p>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="story-pill reveal-on-scroll rounded-xl px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">Nền tảng</p>
                  <p className="mt-1 text-sm font-bold text-white">Đam mê công nghệ + tự học</p>
                </div>
                <div className="story-pill reveal-on-scroll rounded-xl px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">Chuyển hóa</p>
                  <p className="mt-1 text-sm font-bold text-white">Từ tương tác sang hiệu suất</p>
                </div>
                <div className="story-pill reveal-on-scroll rounded-xl px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">Cam kết</p>
                  <p className="mt-1 text-sm font-bold text-white">Dữ liệu thật, kết quả thật</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="text-sm font-semibold text-white underline decoration-blue-200/60 underline-offset-4 hover:decoration-white" href="https://nguoinoitieng.tv/nghe-nghiep/ho-tro-facebook/dinh-minh-duc/bgnj" target="_blank" rel="noreferrer">Nguồn tham khảo hồ sơ cá nhân</a>
                <a className="text-sm font-semibold text-white underline decoration-blue-200/60 underline-offset-4 hover:decoration-white" href="https://www.facebook.com/business/success/bee-english-community" target="_blank" rel="noreferrer">Nguồn tham khảo case Bee (Meta)</a>
              </div>
            </aside>
            <div className="story-line story-scroll space-y-5">
              {storyPhases.map((phase, i) => (
                <article
                  key={phase.title}
                  data-story-index={i}
                  className="story-node story-step reveal-on-scroll rounded-2xl border border-white/25 bg-white/10 p-6 backdrop-blur"
                  style={{ transitionDelay: `${i * 180}ms` }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.13em] text-blue-100">Chặng {i + 1}</p>
                  <h3 className="mt-2 text-2xl font-extrabold text-white">{phase.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-blue-50/95">{phase.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-container pb-20 lg:pb-32">
        <h2 className="text-2xl font-bold sm:text-3xl">Dịch vụ chính của Minh Duc Global</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="card card-3d p-6">
              <h3 className="text-xl font-bold text-brand-800">{s.title}</h3>
              <p className="mt-3 text-slate-600">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {s.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="cases" className="section-container pb-20 lg:pb-32">
        <div className="cases-hero card-3d reveal-on-scroll mb-8 rounded-3xl p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-200">Achievement Highlights</p>
          <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Case Study thực chiến</h2>
          <p className="mt-3 max-w-3xl text-blue-50/95">
            Mỗi case đều được tối ưu theo mục tiêu kinh doanh thực tế: giảm chi phí, tăng lead chất lượng và đẩy doanh thu.
            Kết quả dưới đây thể hiện năng lực triển khai đa nền tảng của Đinh Minh Đức và Minh Duc Global.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="case-kpi rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider text-blue-100">Doanh thu nổi bật</p>
              <p className="mt-1 text-3xl font-extrabold text-white">624.6M</p>
            </div>
            <div className="case-kpi rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider text-blue-100">Hiệu suất cao nhất</p>
              <p className="mt-1 text-3xl font-extrabold text-white">27X</p>
            </div>
            <div className="case-kpi rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider text-blue-100">Lead/tháng</p>
              <p className="mt-1 text-3xl font-extrabold text-white">350</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h3 className="text-xl font-bold text-slate-800 sm:text-2xl">Danh sách dự án theo nhóm mục tiêu</h3>
          <select className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm" value={caseFilter} onChange={(e) => setCaseFilter(e.target.value)}>
            <option value="all">Tất cả case</option>
            {[...new Set(cases.map((c) => c.category))].map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {visibleCases.map((c) => (
            <article key={c.name} className="case-card card card-3d reveal-on-scroll p-6 relative">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="rounded-full bg-brand-50 border border-brand-100 px-3 py-1 text-xs font-semibold text-brand-800">{c.category}</p>
                <p className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold text-amber-700">{c.result}</p>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{c.name}</h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-400">{c.industry} • {c.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{c.short}</p>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {c.metrics.map((m, i) => {
                  const parts = m.split(':');
                  const label = parts[0]?.trim();
                  const value = parts[1]?.trim();
                  
                  if (value) {
                    return (
                      <div key={m} className={`glass rounded-xl p-3.5 transition-all duration-300 hover:shadow-sm ${i === 2 ? "metric-strong" : ""}`}>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</p>
                        <p className={`text-base font-extrabold mt-1 leading-none ${i === 2 ? "text-brand-800" : "text-slate-800"}`}>{value}</p>
                      </div>
                    );
                  }
                  return (
                    <div key={m} className={`glass rounded-xl p-3.5 transition-all duration-300 hover:shadow-sm ${i === 2 ? "metric-strong" : ""}`}>
                      <p className="text-xs font-semibold text-slate-700">{m}</p>
                    </div>
                  );
                })}
              </div>

              {c.proof.length > 0 && (
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {c.proof.map((p) => (
                    p.startsWith("http") && !p.includes("facebook.com/business") ? (
                      <button 
                        key={p} 
                        onClick={() => setLightbox(p)} 
                        className="group relative overflow-hidden rounded-xl border border-slate-100 text-left transition-all duration-300 hover:border-brand-400 hover:shadow-md h-32 w-full"
                      >
                        <img src={p} alt={`Proof ${c.name}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="rounded-lg bg-white/90 px-3 py-1.5 text-[11px] font-bold text-slate-800 flex items-center gap-1.5 shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <svg className="h-3.5 w-3.5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Xem ảnh minh chứng
                          </span>
                        </div>
                      </button>
                    ) : (
                      <a key={p} href={p} target="_blank" rel="noreferrer" className="flex items-center justify-center rounded-xl border border-dashed border-brand-200 p-4 text-xs font-bold text-brand-700 hover:bg-brand-50 hover:border-brand-300 transition-colors text-center h-32">
                        Xem nguồn Meta Business
                      </a>
                    )
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="courses" className="section-container pb-20 lg:pb-32">
        <h2 className="text-2xl font-bold sm:text-3xl">Khóa học marketing thực chiến</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {courses.map((c) => (
            <article key={c.title} className="card card-3d p-6">
              <h3 className="text-xl font-bold text-brand-800">{c.title}</h3>
              <p className="mt-3 text-slate-600">{c.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {c.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="feedback" className="section-container pb-20 lg:pb-32">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="card card-3d p-6">
            <h2 className="text-2xl font-bold">Feedback học viên</h2>
            <p className="mt-4 text-slate-700">
              Học viên <b>Quyên</b> (kinh doanh xe điện) bắt đầu từ con số 0 về quảng cáo. Sau quá trình học,
              Quyên đã tự chạy Facebook Ads ra đơn với chi phí tin nhắn khoảng <b>3.000-5.000đ/mess</b>.
            </p>
            <div className="mt-6 aspect-video overflow-hidden rounded-xl border border-slate-200">
              <iframe
                title="Feedback Quyên"
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F18izSvaN8g%2F&show_text=false"
                className="h-full w-full"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
            <a className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:underline" href="https://www.facebook.com/share/v/18izSvaN8g/" target="_blank" rel="noreferrer">Xem trên Facebook</a>
          </article>

          <article className="card card-3d p-6">
            <h2 className="text-2xl font-bold">Năng lực triển khai thực chiến</h2>
            <p className="mt-3 text-slate-600">Định hướng làm việc tập trung vào kết quả cuối cùng, không dừng ở chỉ số bề mặt.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="glass rounded-xl p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Mô hình vận hành</p>
                <p className="mt-2 text-lg font-bold text-brand-800">Ads + Content + Data</p>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Triển khai</p>
                <p className="mt-2 text-lg font-bold text-brand-800">Funnel theo mục tiêu</p>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Theo dõi</p>
                <p className="mt-2 text-lg font-bold text-brand-800">Báo cáo theo doanh thu</p>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Tối ưu</p>
                <p className="mt-2 text-lg font-bold text-brand-800">CPA, ROAS, Lead Quality</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="section-container pb-32">
        <div className="card card-3d p-8">
          {contactForm.success ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-md animate-pulse">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900 animate-fade-in">Gửi thông tin thành công!</h3>
              <p className="mt-3 max-w-md text-slate-600">
                Cảm ơn bạn đã quan tâm. Đội ngũ Minh Duc Global sẽ liên hệ tư vấn cho bạn sớm nhất có thể qua số điện thoại hoặc Zalo.
              </p>
              <button
                type="button"
                onClick={contactForm.resetForm}
                className="mt-8 rounded-xl border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
              >
                Gửi form mới
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold sm:text-3xl">Nhận tư vấn phù hợp mục tiêu của bạn</h2>
              <p className="mt-3 max-w-3xl text-slate-600">Điền form để đội ngũ Minh Duc Global liên hệ nhanh, phân luồng đúng theo nhu cầu doanh nghiệp hoặc học viên.</p>
              <form onSubmit={contactForm.handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
                <label className="text-sm font-medium">Nhóm nhu cầu
                  <select
                    name="needGroup"
                    value={contactForm.values.needGroup}
                    onChange={contactForm.handleChange}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all bg-white"
                  >
                    <option>Tôi là doanh nghiệp</option>
                    <option>Tôi là học viên</option>
                  </select>
                </label>
                <label className="text-sm font-medium">Họ và tên
                  <input
                    type="text"
                    name="name"
                    value={contactForm.values.name}
                    onChange={contactForm.handleChange}
                    placeholder="Nhập họ tên"
                    className={`mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-brand-100 transition-all ${
                      contactForm.errors.name ? "border-red-500 bg-red-50/10 focus:ring-red-100" : "border-slate-200 focus:border-brand-500"
                    }`}
                  />
                  {contactForm.errors.name && <span className="mt-1 block text-xs text-red-500 font-medium">{contactForm.errors.name}</span>}
                </label>
                <label className="text-sm font-medium">Số điện thoại / Zalo
                  <input
                    type="tel"
                    name="phone"
                    value={contactForm.values.phone}
                    onChange={contactForm.handleChange}
                    placeholder="Nhập số điện thoại"
                    className={`mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-brand-100 transition-all ${
                      contactForm.errors.phone ? "border-red-500 bg-red-50/10 focus:ring-red-100" : "border-slate-200 focus:border-brand-500"
                    }`}
                  />
                  {contactForm.errors.phone && <span className="mt-1 block text-xs text-red-500 font-medium">{contactForm.errors.phone}</span>}
                </label>
                <label className="text-sm font-medium">Nhu cầu chính
                  <input
                    type="text"
                    name="mainNeed"
                    value={contactForm.values.mainNeed}
                    onChange={contactForm.handleChange}
                    placeholder="Ví dụ: Facebook Ads, Google Ads, Khóa học..."
                    className={`mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-brand-100 transition-all ${
                      contactForm.errors.mainNeed ? "border-red-500 bg-red-50/10 focus:ring-red-100" : "border-slate-200 focus:border-brand-500"
                    }`}
                  />
                  {contactForm.errors.mainNeed && <span className="mt-1 block text-xs text-red-500 font-medium">{contactForm.errors.mainNeed}</span>}
                </label>
                <label className="text-sm font-medium md:col-span-2">Mô tả ngắn mục tiêu
                  <textarea
                    name="description"
                    value={contactForm.values.description}
                    onChange={contactForm.handleChange}
                    rows="4"
                    placeholder="Mục tiêu 30-90 ngày của bạn"
                    className={`mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-brand-100 transition-all ${
                      contactForm.errors.description ? "border-red-500 bg-red-50/10 focus:ring-red-100" : "border-slate-200 focus:border-brand-500"
                    }`}
                  />
                  {contactForm.errors.description && <span className="mt-1 block text-xs text-red-500 font-medium">{contactForm.errors.description}</span>}
                </label>
                {contactForm.submitError && (
                  <div className="md:col-span-2 rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
                    {contactForm.submitError}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={contactForm.loading}
                  className="btn-3d md:col-span-2 rounded-xl bg-brand-700 px-6 py-3 font-semibold text-white hover:bg-brand-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {contactForm.loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Đang gửi thông tin...
                    </>
                  ) : (
                    "Gửi thông tin tư vấn"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      <section id="toolkit" className="section-container pb-32">
        <div className="toolkit-hero card-3d reveal-on-scroll rounded-3xl p-8 sm:p-10">
          {toolkitForm.success ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 text-slate-900 shadow-md animate-pulse">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white animate-fade-in">Đăng ký thành công!</h3>
              <p className="mt-3 max-w-md text-blue-50/95">
                Cảm ơn bạn. Bộ tài nguyên Marketing All-in-One đã được chuẩn bị và sẽ được gửi trực tiếp tới bạn qua số điện thoại/Zalo trong ít phút.
              </p>
              <button
                type="button"
                onClick={toolkitForm.resetForm}
                className="mt-8 rounded-xl border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 transition-colors"
              >
                Gửi form mới
              </button>
            </div>
          ) : (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">Lead Magnet</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Nhận miễn phí bộ công cụ Marketing All-in-One
              </h2>
              <p className="mt-4 max-w-4xl text-blue-50/95">
                Sau khi gửi form, bạn sẽ được tặng bộ tài nguyên thực chiến gồm: khung làm kịch bản, mẫu plan content, checklist phân tích chỉ số quảng cáo,
                template viết bài SEO chuẩn và quy trình tối ưu chiến dịch theo dữ liệu.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-white sm:grid-cols-2 lg:grid-cols-4">
                <div className="toolkit-pill rounded-xl px-4 py-3">Kịch bản content chuyển đổi</div>
                <div className="toolkit-pill rounded-xl px-4 py-3">Plan content theo tuần/tháng</div>
                <div className="toolkit-pill rounded-xl px-4 py-3">Bảng phân tích chỉ số Ads</div>
                <div className="toolkit-pill rounded-xl px-4 py-3">Template bài SEO chuẩn</div>
              </div>
              <form onSubmit={toolkitForm.handleSubmit} className="mt-8 grid gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur md:grid-cols-2">
                <label className="text-sm font-semibold text-white">Họ và tên
                  <input
                    type="text"
                    name="name"
                    value={toolkitForm.values.name}
                    onChange={toolkitForm.handleChange}
                    placeholder="Nhập họ tên"
                    className={`mt-2 w-full rounded-xl border bg-white/90 px-4 py-3 text-slate-900 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-white/50 transition-all ${
                      toolkitForm.errors.name ? "border-red-500 bg-red-900/10 focus:ring-red-100" : "border-white/30 focus:border-white"
                    }`}
                  />
                  {toolkitForm.errors.name && <span className="mt-1 block text-xs text-red-200 font-medium">{toolkitForm.errors.name}</span>}
                </label>
                <label className="text-sm font-semibold text-white">Số điện thoại / Zalo
                  <input
                    type="tel"
                    name="phone"
                    value={toolkitForm.values.phone}
                    onChange={toolkitForm.handleChange}
                    placeholder="Nhập số điện thoại"
                    className={`mt-2 w-full rounded-xl border bg-white/90 px-4 py-3 text-slate-900 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-white/50 transition-all ${
                      toolkitForm.errors.phone ? "border-red-500 bg-red-900/10 focus:ring-red-100" : "border-white/30 focus:border-white"
                    }`}
                  />
                  {toolkitForm.errors.phone && <span className="mt-1 block text-xs text-red-200 font-medium">{toolkitForm.errors.phone}</span>}
                </label>
                <label className="text-sm font-semibold text-white md:col-span-2">Bạn đang cần nhất công cụ nào?
                  <input
                    type="text"
                    name="requestedTool"
                    value={toolkitForm.values.requestedTool}
                    onChange={toolkitForm.handleChange}
                    placeholder="Ví dụ: Phân tích chỉ số ads, làm kịch bản video, plan content..."
                    className={`mt-2 w-full rounded-xl border bg-white/90 px-4 py-3 text-slate-900 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-white/50 transition-all ${
                      toolkitForm.errors.requestedTool ? "border-red-500 bg-red-900/10 focus:ring-red-100" : "border-white/30 focus:border-white"
                    }`}
                  />
                  {toolkitForm.errors.requestedTool && <span className="mt-1 block text-xs text-red-200 font-medium">{toolkitForm.errors.requestedTool}</span>}
                </label>
                {toolkitForm.submitError && (
                  <div className="md:col-span-2 rounded-xl bg-red-900/40 border border-red-500/50 p-4 text-sm text-red-200">
                    {toolkitForm.submitError}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={toolkitForm.loading}
                  className="btn-3d md:col-span-2 rounded-xl bg-amber-400 px-6 py-3 font-bold text-slate-900 hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {toolkitForm.loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-900" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Đang xử lý...
                    </>
                  ) : (
                    "Gửi thông tin để nhận bộ công cụ"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="section-container flex flex-col gap-2 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Minh Duc Global. All rights reserved.</p>
          <p>Đinh Minh Đức • Founder/CEO • Hải Dương</p>
        </div>
      </footer>

      <a
        href="#contact"
        onClick={() => { if (window.trackCTA) window.trackCTA("Floating - Tư vấn ngay"); }}
        className="fixed bottom-5 right-5 rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-brand-800"
      >
        Tư vấn ngay
      </a>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-fade-in cursor-zoom-out"
          onClick={() => setLightbox("")}
        >
          <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl bg-white shadow-2xl border border-white/10 flex items-center justify-center">
            <img src={lightbox} alt="Proof large" className="max-h-[85vh] max-w-[95vw] object-contain animate-scale-in" />
            <button
              onClick={() => setLightbox("")}
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/65 text-white hover:bg-slate-900/80 transition-colors"
              aria-label="Đóng"
            >
              <span className="text-xl leading-none">×</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
