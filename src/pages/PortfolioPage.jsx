import React, { useEffect, useRef } from "react";

const skills = [
  ["Performance Ads", 95],
  ["Google Ads & Local Map", 92],
  ["Facebook Ads", 90],
  ["TikTok Ads", 82],
  ["Content Growth", 86],
  ["Marketing Funnel", 88],
  ["Data Reading", 90],
  ["Training & Coaching", 84],
];

const projects = [
  {
    label: "Cardi Pizzeria",
    title: "Cardi Pizzeria Võ Văn Kiệt",
    sector: "F&B - Google Ads & Local Map",
    image: "/course-assets/cardi-pizzeria.jpg",
    summary:
      "Vận hành Google Ads kết hợp tối ưu Local Map để phủ sóng điểm bán, kéo khách hàng có nhu cầu thật và đo hiệu quả bằng doanh thu tại cửa hàng.",
    metrics: [
      ["23.8M", "ngân sách ads"],
      ["624.6M", "doanh thu"],
      ["26.25x", "ROAS"],
      ["01", "tháng triển khai"],
    ],
    proof: ["/course-assets/google-ads-dashboard.png", "/course-assets/cardi-pizzeria.jpg"],
    link: "/case-study/cardi-pizzeria",
  },
  {
    label: "Bee English",
    title: "Bee English Community",
    sector: "Giáo dục - Performance & Content",
    image: "/course-assets/bee-logo.jpg",
    summary:
      "Tối ưu ngân sách quảng cáo, cố vấn kịch bản video, đào tạo đội ngũ in-house và phát triển hệ thống lead cho dự án giáo dục được ghi nhận trên Meta Success.",
    metrics: [
      ["300+", "lead/tháng"],
      ["1.6M", "ngân sách/ngày"],
      ["250M", "doanh thu/tháng"],
      ["Meta", "case study"],
    ],
    proof: ["/course-assets/qr-bee-english.png", "/course-assets/bee-logo.jpg"],
  },
  {
    label: "Lua Viet",
    title: "Nhà hàng Lua Viet",
    sector: "F&B - Growth Campaign",
    image: "/course-assets/lua-viet.jpg",
    summary:
      "Triển khai chiến dịch tăng trưởng cho nhà hàng, tập trung vào doanh thu mùa cao điểm, tối ưu chuyển đổi và quản trị phễu khách hàng.",
    metrics: [
      ["20M", "ngân sách ads"],
      ["540M", "doanh thu"],
      ["27x", "ROAS"],
      ["POS", "verified"],
    ],
    proof: ["/course-assets/lua-viet-ads.png", "/course-assets/lua-viet-revenue.png"],
  },
  {
    label: "TikTok Local",
    title: "Bánh gà Phan Văn Trường",
    sector: "F&B - TikTok Organic Growth",
    image: "/course-assets/banh-ga-tiktok.jpg",
    summary:
      "Xây format video, đào tạo nhân sự content và phát triển kênh TikTok địa phương theo hướng dễ sản xuất, dễ nhận diện và có khả năng lặp lại.",
    metrics: [
      ["4,000+", "followers"],
      ["13.4K", "lượt thích"],
      ["03", "tháng"],
      ["Local", "brand"],
    ],
    proof: ["/course-assets/banh-ga-tiktok.jpg", "/course-assets/qr-banh-ga.png"],
  },
];

const categories = [
  {
    title: "Dịch vụ, F&B",
    desc: "Nhà hàng, quán ăn, local brand và điểm bán cần đo được khách hàng, cuộc gọi, chỉ đường và doanh thu.",
    items: ["Google Search Ads", "Google Maps / GBP", "TikTok Organic", "Content theo phễu"],
  },
  {
    title: "Giáo dục",
    desc: "Tối ưu lead, kịch bản video, tin nhắn tư vấn và quy trình xử lý data cho đội tuyển sinh.",
    items: ["Lead generation", "Creative testing", "Messenger Ads", "Đào tạo in-house"],
  },
  {
    title: "Social & automation",
    desc: "Xử lý tài khoản nền tảng, tăng độ phủ có mục tiêu và tự động hóa các bước vận hành marketing lặp lại.",
    items: ["Facebook support", "TikTok support", "AI workflow", "Báo cáo tự động"],
  },
];

function TopBar({ dark = false }) {
  return (
    <div className={`absolute left-0 right-0 top-0 z-10 grid grid-cols-3 border-b px-6 py-5 text-xs sm:px-10 ${dark ? "border-white/45 text-white" : "border-black/12 text-black"}`}>
      <span>2026</span>
      <span className="text-center">Marketing</span>
      <span className="text-right">Portfolio</span>
    </div>
  );
}

const cinematicVideoUrl = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4";

function CinematicHero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const fadeDuration = 0.5;
    let frameId;
    let restartTimer;

    const startPlayback = () => {
      video.play().catch(() => {
        // Autoplay can be deferred by the browser; controls remain intentionally hidden.
      });
    };

    const updateVideoOpacity = () => {
      const { currentTime, duration } = video;
      if (Number.isFinite(duration) && duration > 0) {
        const fadeIn = Math.min(1, currentTime / fadeDuration);
        const fadeOut = Math.min(1, Math.max(0, (duration - currentTime) / fadeDuration));
        video.style.opacity = String(Math.min(fadeIn, fadeOut));
      }
      frameId = window.requestAnimationFrame(updateVideoOpacity);
    };

    const handleReady = () => {
      video.style.opacity = "0";
      startPlayback();
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      restartTimer = window.setTimeout(() => {
        video.currentTime = 0;
        startPlayback();
      }, 100);
    };

    video.addEventListener("loadedmetadata", handleReady);
    video.addEventListener("ended", handleEnded);
    if (video.readyState >= 1) handleReady();
    frameId = window.requestAnimationFrame(updateVideoOpacity);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(restartTimer);
      video.removeEventListener("loadedmetadata", handleReady);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-white text-black">
      <div className="absolute z-0" style={{ inset: "auto 0 0 0", top: "300px" }} aria-hidden="true">
        <video
          ref={videoRef}
          src={cinematicVideoUrl}
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover transition-opacity duration-100"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-white via-white/5 to-white" aria-hidden="true" />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8">
        <a href="#home" className="font-instrument text-3xl leading-none tracking-tight text-black">
          Minh Duc Global<sup className="ml-0.5 align-top text-[0.45em]">®</sup>
        </a>
        <div className="hidden items-center gap-7 text-sm text-[#6F6F6F] md:flex">
          <a href="#home" className="text-black transition-colors hover:text-black">Home</a>
          <a href="#about" className="transition-colors hover:text-black">Studio</a>
          <a href="#about" className="transition-colors hover:text-black">About</a>
          <a href="#project" className="transition-colors hover:text-black">Journal</a>
          <a href="#contact" className="transition-colors hover:text-black">Reach Us</a>
        </div>
        <a href="#contact" className="rounded-full bg-black px-5 py-2.5 text-sm text-white transition-transform duration-300 hover:scale-[1.03] sm:px-6">
          Begin Journey
        </a>
      </nav>

      <div className="relative z-10 flex min-h-[calc(100vh-84px)] flex-col items-center justify-center px-6 pb-40 pt-[calc(8rem-75px)] text-center">
        <p className="animate-fade-rise mb-7 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6F6F6F] sm:text-xs">
          Performance Marketing Studio · Hai Duong, Vietnam
        </p>
        <h1 className="animate-fade-rise max-w-7xl font-instrument text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-black sm:text-7xl md:text-8xl">
          Beyond <em className="font-instrument text-[#6F6F6F]">the noise,</em> we build<br className="hidden sm:block" /> growth that <em className="font-instrument text-[#6F6F6F]">endures.</em>
        </h1>
        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-[#6F6F6F] sm:text-lg">
          Building growth platforms for ambitious businesses, fearless makers, and thoughtful teams. Through the noise, we craft clear campaigns, useful data, and momentum that lasts.
        </p>
        <a
          href="#contact"
          className="animate-fade-rise-delay-2 mt-12 rounded-full bg-black px-12 py-4 text-base text-white transition-transform duration-300 hover:scale-[1.03] sm:px-14 sm:py-5"
        >
          Begin Journey
        </a>
      </div>

      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-center text-[10px] uppercase tracking-[0.2em] text-[#6F6F6F]">
        Scroll to discover
      </div>
    </section>
  );
}

function OutlineLabel({ children, className = "" }) {
  return (
    <span
      className={`portfolio-outline font-portfolio text-[6rem] font-black uppercase leading-none tracking-tight text-transparent sm:text-[9rem] ${className}`}
    >
      {children}
    </span>
  );
}

function DividerSlide({ title, eyebrow = "PROJECT" }) {
  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-black text-white">
      <TopBar dark />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/65" />
      <div className="flex min-h-[60vh] items-center px-6 pt-24 sm:px-10">
        <div>
          <p className="font-portfolio text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-portfolio text-[4.3rem] font-black uppercase leading-[0.9] tracking-tight sm:text-[8rem] lg:text-[10rem]">
            {title}
          </h2>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, value }) {
  return (
    <div className="grid grid-cols-[1fr_1.2fr_3rem] items-center gap-4 text-sm sm:text-lg">
      <span className="tracking-[0.08em]">{name}</span>
      <span className="h-4 overflow-hidden rounded-full bg-black/35">
        <span className="block h-full rounded-full bg-black" style={{ width: `${value}%` }} />
      </span>
      <span className="text-right">{value}%</span>
    </div>
  );
}

function MetricCard({ value, label }) {
  return (
    <div className="rounded-[1.2rem] bg-[#9B9B9B] px-5 py-4 text-center text-black shadow-[4px_5px_0_rgba(0,0,0,0.18)]">
      <p className="font-portfolio text-4xl font-black uppercase leading-none sm:text-5xl">{value}</p>
      <p className="mt-2 text-sm font-semibold leading-tight">{label}</p>
    </div>
  );
}

function ProjectSpread({ project, index }) {
  return (
    <section className="relative overflow-hidden bg-[#F4F4F4] px-6 py-20 text-black sm:px-10">
      <TopBar />
      <div className="mx-auto grid max-w-7xl gap-10 pt-10 lg:grid-cols-[0.28fr_0.72fr]">
        <aside className="hidden items-end lg:flex">
          <div className="flex items-end gap-6">
            <OutlineLabel className="[writing-mode:vertical-rl] rotate-180 text-[5.2rem]">Project</OutlineLabel>
            <span className="font-portfolio text-[8rem] font-black leading-none tracking-tight">{String(index + 1).padStart(2, "0")}</span>
          </div>
        </aside>

        <article className="grid gap-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-black p-6 text-white sm:p-8">
              <span className="inline-flex rounded-sm border border-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
                {project.label}
              </span>
              <h3 className="mt-8 font-portfolio text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl">
                {project.title}
              </h3>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-white/70">{project.sector}</p>
              <p className="mt-8 text-sm leading-relaxed text-white/82">{project.summary}</p>
              {project.link && (
                <a href={project.link} className="mt-10 inline-flex border-b border-white pb-1 text-xs font-black uppercase tracking-widest">
                  Xem chi tiết case study
                </a>
              )}
            </div>

            <div className="grid gap-5">
              <img src={project.image} alt={project.title} className="aspect-[16/9] w-full object-cover" loading="lazy" />
              <div className="grid grid-cols-2 gap-4">
                {project.metrics.map(([value, label]) => (
                  <MetricCard key={`${project.title}-${value}`} value={value} label={label} />
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 border-t border-black/20 pt-8 md:grid-cols-2">
            {project.proof.map((src, proofIndex) => (
              <div key={src} className="rounded-[1rem] bg-[#9B9B9B] p-5">
                <p className="mb-3 text-center text-xs font-black uppercase tracking-widest">
                  Minh chứng 0{proofIndex + 1}
                </p>
                <img src={src} alt={`${project.title} proof ${proofIndex + 1}`} className="h-48 w-full rounded-md bg-white object-contain p-2" loading="lazy" />
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function ContactPortfolio({ contactForm }) {
  const isStudent = contactForm.values.needGroup === "Tôi là học viên";

  const handleInput = (event) => {
    contactForm.handleChange(event);
  };

  const handleNeedGroup = (event) => {
    const needGroup = event.target.value;
    contactForm.setValues((prev) => ({
      ...prev,
      needGroup,
      leadCategory: needGroup === "Tôi là học viên" ? "student_training" : "business_growth",
      mainNeed: needGroup === "Tôi là học viên" ? prev.courseInterest : prev.primaryGoal,
    }));
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#F4F4F4] px-6 py-20 text-black sm:px-10">
      <TopBar />
      <div className="mx-auto grid max-w-7xl gap-10 pt-12 lg:grid-cols-[0.42fr_0.58fr]">
        <div className="grid gap-8">
          <div className="flex items-end gap-6">
            <OutlineLabel className="[writing-mode:vertical-rl] rotate-180 text-[4.6rem]">Contact</OutlineLabel>
            <span className="font-portfolio text-[8rem] font-black leading-none tracking-tight">03</span>
          </div>
          <div className="bg-black p-7 text-white">
            <h2 className="font-portfolio text-5xl font-black uppercase leading-none sm:text-7xl">
              Let's connect
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/78">
              Nếu bạn muốn tối ưu ads, xây hệ thống content, cải thiện Google Maps hoặc cần một lộ trình học thực chiến, hãy gửi thông tin. Minh Duc Global sẽ phản hồi với hướng xử lý rõ ràng.
            </p>
            <div className="mt-8 grid gap-2 text-sm font-bold">
              <a href="tel:0936643146">Phone number: 0936.643.146</a>
              <a href="mailto:minhhduc.forwork@gmail.com">Email: minhhduc.forwork@gmail.com</a>
              <a href="https://www.facebook.com/minhhduc.media" target="_blank" rel="noreferrer">
                Facebook: Đinh Minh Đức
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 shadow-[8px_8px_0_rgba(0,0,0,0.12)] sm:p-8">
          {contactForm.success ? (
            <div className="flex min-h-[26rem] flex-col items-center justify-center text-center">
              <p className="font-portfolio text-5xl font-black uppercase">Đã nhận thông tin</p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-black/65">
                Cảm ơn bạn. Đinh Minh Đức sẽ liên hệ lại qua số điện thoại/Zalo trong thời gian sớm nhất.
              </p>
              <button type="button" onClick={contactForm.resetForm} className="mt-8 border border-black px-6 py-3 text-xs font-black uppercase tracking-widest">
                Gửi form mới
              </button>
            </div>
          ) : (
            <form onSubmit={contactForm.handleSubmit} className="grid gap-5">
              <div>
                <label className="text-xs font-black uppercase tracking-widest">Tên của bạn</label>
                <input name="name" value={contactForm.values.name} onChange={handleInput} className="mt-2 w-full rounded-none border-black bg-white" placeholder="Nhập họ tên" />
              </div>
              <div>
                <label className="text-xs font-black uppercase tracking-widest">Số điện thoại</label>
                <input name="phone" value={contactForm.values.phone} onChange={handleInput} className="mt-2 w-full rounded-none border-black bg-white" placeholder="Nhập SĐT/Zalo" type="tel" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-black uppercase tracking-widest">Bạn là</label>
                  <select name="needGroup" value={contactForm.values.needGroup} onChange={handleNeedGroup} className="mt-2 w-full rounded-none border-black bg-white">
                    <option>Tôi là doanh nghiệp</option>
                    <option>Tôi là học viên</option>
                  </select>
                </div>
                {isStudent ? (
                  <div>
                    <label className="text-xs font-black uppercase tracking-widest">Khóa học</label>
                    <select name="courseInterest" value={contactForm.values.courseInterest} onChange={handleInput} className="mt-2 w-full rounded-none border-black bg-white">
                      <option value="">Chọn khóa học</option>
                      <option>Facebook Ads thực chiến</option>
                      <option>Google Ads & Local Map</option>
                      <option>TikTok Ads</option>
                      <option>Shopee thực chiến</option>
                      <option>Chưa rõ, cần tư vấn lộ trình</option>
                    </select>
                    {contactForm.errors.courseInterest && <p className="mt-1 text-xs font-bold text-red-600">{contactForm.errors.courseInterest}</p>}
                  </div>
                ) : (
                  <div>
                    <label className="text-xs font-black uppercase tracking-widest">Ngành hàng</label>
                    <input name="industry" value={contactForm.values.industry} onChange={handleInput} className="mt-2 w-full rounded-none border-black bg-white" placeholder="F&B, giáo dục, bán lẻ..." />
                    {contactForm.errors.industry && <p className="mt-1 text-xs font-bold text-red-600">{contactForm.errors.industry}</p>}
                  </div>
                )}
              </div>

              {isStudent ? (
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-black uppercase tracking-widest">Trình độ hiện tại</label>
                    <select name="currentLevel" value={contactForm.values.currentLevel} onChange={handleInput} className="mt-2 w-full rounded-none border-black bg-white">
                      <option value="">Chọn trình độ</option>
                      <option>Chưa biết gì về ads</option>
                      <option>Đã từng tự chạy nhưng chưa ra kết quả</option>
                      <option>Đang chạy ads và muốn tối ưu</option>
                      <option>Nhân sự marketing muốn nâng kỹ năng</option>
                    </select>
                    {contactForm.errors.currentLevel && <p className="mt-1 text-xs font-bold text-red-600">{contactForm.errors.currentLevel}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-black uppercase tracking-widest">Mục tiêu học</label>
                    <input name="learningGoal" value={contactForm.values.learningGoal} onChange={handleInput} className="mt-2 w-full rounded-none border-black bg-white" placeholder="Tự chạy ads, tối ưu data..." />
                    {contactForm.errors.learningGoal && <p className="mt-1 text-xs font-bold text-red-600">{contactForm.errors.learningGoal}</p>}
                  </div>
                </div>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-black uppercase tracking-widest">Ngân sách/tháng</label>
                  <select name="monthlyBudget" value={contactForm.values.monthlyBudget} onChange={handleInput} className="mt-2 w-full rounded-none border-black bg-white">
                    <option value="">Chọn ngân sách</option>
                    <option>Dưới 10 triệu/tháng</option>
                    <option>10-30 triệu/tháng</option>
                    <option>30-100 triệu/tháng</option>
                    <option>Trên 100 triệu/tháng</option>
                    <option>Chưa rõ, cần tư vấn</option>
                  </select>
                  {contactForm.errors.monthlyBudget && <p className="mt-1 text-xs font-bold text-red-600">{contactForm.errors.monthlyBudget}</p>}
                </div>
                <div>
                  <label className="text-xs font-black uppercase tracking-widest">Mục tiêu chính</label>
                  <select name="primaryGoal" value={contactForm.values.primaryGoal} onChange={handleInput} className="mt-2 w-full rounded-none border-black bg-white">
                    <option value="">Chọn nhu cầu</option>
                    <option>Tăng lead</option>
                    <option>Tăng doanh thu</option>
                    <option>Tối ưu Google Maps</option>
                    <option>Tối ưu chi phí quảng cáo</option>
                    <option>Đăng ký học Ads thực chiến</option>
                  </select>
                  {contactForm.errors.primaryGoal && <p className="mt-1 text-xs font-bold text-red-600">{contactForm.errors.primaryGoal}</p>}
                </div>
              </div>
              )}
              <div>
                <label className="text-xs font-black uppercase tracking-widest">Mô tả nhanh</label>
                <textarea name="description" value={contactForm.values.description} onChange={handleInput} className="mt-2 min-h-32 w-full rounded-none border-black bg-white" placeholder="Ngành hàng, mục tiêu, ngân sách hoặc vấn đề hiện tại" />
              </div>
              {contactForm.error && <p className="text-sm font-bold text-red-600">{contactForm.error}</p>}
              <button type="submit" disabled={contactForm.loading} className="bg-black px-8 py-4 text-xs font-black uppercase tracking-widest text-white transition-opacity disabled:opacity-60">
                {contactForm.loading ? "Đang gửi..." : "Gửi thông tin"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default function PortfolioPage({ contactForm }) {
  return (
    <div className="min-h-screen bg-[#F4F4F4] text-black selection:bg-black selection:text-white">
      <main>
        <CinematicHero />

        <section className="relative overflow-hidden bg-[#F4F4F4] px-6 py-20 text-black sm:px-10">
          <TopBar />
          <div className="mx-auto grid max-w-7xl gap-12 pt-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
            <h2 className="font-portfolio text-[5rem] font-black uppercase leading-none tracking-tight sm:text-[8rem]">Content</h2>
            <div className="mt-4 grid gap-7 text-sm font-black uppercase tracking-widest sm:text-base">
              {[
                ["01", "About me", "#about"],
                ["02", "Project", "#project"],
                ["03", "Contact", "#contact"],
              ].map(([num, label, href]) => (
                <a key={num} href={href} className="grid grid-cols-[4rem_1fr] border-t border-black pt-3">
                  <span>{num}</span>
                  <span className="text-right">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="relative overflow-hidden bg-[#F4F4F4] px-6 py-20 text-black sm:px-10">
          <TopBar />
          <div className="mx-auto grid max-w-7xl gap-10 pt-12 lg:grid-cols-[0.47fr_0.53fr] lg:items-center">
            <div>
              <p className="text-3xl font-black tracking-tight">About me</p>
              <h2 className="mt-7 font-portfolio text-[4.8rem] font-black uppercase leading-[0.88] tracking-tight sm:text-[7rem]">
                Xin chào,
                <br />
                Mình là Đức!
              </h2>
              <p className="mt-8 text-base leading-relaxed text-black/78">
                Mình là Đinh Minh Đức, Founder & CEO Minh Duc Global. Từ xuất phát điểm tự học bằng một chiếc máy tính cũ ở Hải Dương, mình đi vào marketing bằng thực chiến: xử lý tài khoản, chạy ads, tối ưu phễu và đo kết quả bằng lead, doanh thu, ROAS.
              </p>
              <p className="mt-5 text-base leading-relaxed text-black/78">
                Portfolio này tóm tắt các năng lực nổi bật: Performance Marketing, Google Ads, Facebook Ads, TikTok, Local Map, content growth, AI workflow và đào tạo học viên/đội in-house làm marketing có số liệu.
              </p>
            </div>
            <div>
              <img src="/course-assets/service-local-map.jpg" alt="Marketing growth visual" className="aspect-[16/10] w-full object-cover" />
              <p className="mt-4 text-sm leading-relaxed text-black/65">
                Từ freelancer tự học đến người xây hệ thống tăng trưởng cho doanh nghiệp Việt bằng ads, content và dữ liệu.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#F4F4F4] px-6 py-20 text-black sm:px-10">
          <TopBar />
          <div className="mx-auto max-w-7xl pt-12">
            <h2 className="font-portfolio text-[4rem] font-black uppercase leading-none tracking-tight sm:text-[8rem] lg:text-[10rem]">
              Skills & Abilities
            </h2>
            <div className="mt-14 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="border-b-2 border-black pb-2 text-xl font-black uppercase tracking-widest">Hard skill</h3>
                <div className="mt-5 grid gap-5">
                  {skills.slice(0, 4).map(([name, value]) => (
                    <SkillBar key={name} name={name} value={value} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="border-b-2 border-black pb-2 text-xl font-black uppercase tracking-widest">Growth skill</h3>
                <div className="mt-5 grid gap-5">
                  {skills.slice(4).map(([name, value]) => (
                    <SkillBar key={name} name={name} value={value} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="project">
          <DividerSlide title="Giáo dục" />
        </div>
        <ProjectSpread project={projects[1]} index={1} />

        <DividerSlide title="Dịch vụ, F&B" />
        <ProjectSpread project={projects[0]} index={2} />
        <ProjectSpread project={projects[2]} index={3} />
        <ProjectSpread project={projects[3]} index={4} />

        <section className="relative overflow-hidden bg-[#F4F4F4] px-6 py-20 text-black sm:px-10">
          <TopBar />
          <div className="mx-auto max-w-7xl pt-12">
            <h2 className="font-portfolio text-[3.8rem] font-black uppercase leading-none tracking-tight sm:text-[7rem]">
              Project categories
            </h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {categories.map((category) => (
                <article key={category.title} className="border-t-2 border-black pt-5">
                  <h3 className="font-portfolio text-4xl font-black uppercase leading-none">{category.title}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-black/70">{category.desc}</p>
                  <ul className="mt-7 grid gap-3 text-sm font-bold">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center justify-between border-b border-black/15 pb-2">
                        <span>{item}</span>
                        <span>+</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactPortfolio contactForm={contactForm} />

        <section className="relative min-h-[70vh] overflow-hidden bg-black text-white">
          <TopBar dark />
          <div className="flex min-h-[70vh] items-center justify-center px-6">
            <h2 className="font-portfolio text-[4.8rem] font-black uppercase leading-none tracking-tight sm:text-[9rem]">
              Thank you
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
}
