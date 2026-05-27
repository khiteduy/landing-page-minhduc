import React, { useEffect, useState } from "react";
import useForm from "./hooks/useForm";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SocialProofStrip from "./components/SocialProofStrip";
import AudiencePathSection from "./components/AudiencePathSection";
import LogoMarqueeSection from "./components/LogoMarqueeSection";
import MetricsSection from "./components/MetricsSection";
import BrandTrustSection from "./components/BrandTrustSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import ServicesSection from "./components/ServicesSection";
import CoursesSection from "./components/CoursesSection";
import ProcessSection from "./components/ProcessSection";
import WhyUsSection from "./components/WhyUsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ToolkitSection from "./components/ToolkitSection";
import Footer from "./components/Footer";
import SocialServicesPage from "./pages/SocialServicesPage";
import EcomResourcesPage from "./pages/EcomResourcesPage";

function Marquee() {
  const marqueeItems = [
    "PERFORMANCE MARKETING",
    "HỆ THỐNG PHỄU TĂNG TRƯỞNG",
    "TỐI ƯU GOOGLE MAPS",
    "FACEBOOK ADS",
    "TỐI ƯU ROAS",
    "KHÓA HỌC THỰC CHIẾN",
  ];
  const combined = Array(5).fill(marqueeItems).flat();
  return (
    <div className="marquee-container" aria-hidden="true">
      <div className="marquee-track">
        {combined.map((item, idx) => (
          <div key={idx} className="marquee-item">
            <span>{item}</span>
            <span className="text-[#2563EB]">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [lightbox, setLightbox] = useState("");
  const [showFloat, setShowFloat] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const pagePath = window.location.pathname;

  const closeLightbox = () => {
    setLightbox("");
    setVideoError(false);
  };

  const contactWebhook = import.meta.env.VITE_CONTACT_WEBHOOK_URL || "";
  const toolkitWebhook = import.meta.env.VITE_TOOLKIT_WEBHOOK_URL || "";

  const contactForm = useForm(
    {
      formType: "dang_ky_tu_van_tang_truong",
      leadSource: "website_contact_form",
      leadCategory: "business_growth",
      needGroup: "Tôi là doanh nghiệp",
      name: "",
      phone: "",
      mainNeed: "",
      description: "",
      industry: "",
      monthlyBudget: "",
      primaryGoal: "",
      websiteOrFanpage: "",
      courseInterest: "",
      currentLevel: "",
      learningGoal: "",
      businessField: "",
    },
    contactWebhook,
    (values) => {
      const errors = {};
      const isStudent = values.needGroup === "Tôi là học viên";
      const requiredFields = isStudent
        ? ["courseInterest", "currentLevel", "learningGoal"]
        : ["industry", "monthlyBudget", "primaryGoal"];

      requiredFields.forEach((field) => {
        if (!values[field]?.toString().trim()) {
          errors[field] = "Trường này không được để trống";
        }
      });

      return errors;
    },
    (data) => {
      if (window.trackFormSubmit) {
        window.trackFormSubmit("contact", data);
      }
    }
  );

  const toolkitForm = useForm(
    {
      formType: "nhan_bo_target_da_nganh_hang",
      leadSource: "website_toolkit_form",
      leadCategory: "resource_download",
      requestedTool: "Bộ Target đa ngành hàng sau hơn 5 năm kinh nghiệm",
      name: "",
      phone: "",
    },
    toolkitWebhook,
    null,
    (data) => {
      if (window.trackFormSubmit) {
        window.trackFormSubmit("toolkit", data);
      }
    }
  );

  useEffect(() => {
    // Reveal on scroll
    const elements = document.querySelectorAll(".reveal-on-scroll");
    const isMobile = window.innerWidth < 768;
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("is-visible"); }),
      { threshold: isMobile ? 0.04 : 0.1, rootMargin: isMobile ? "0px 0px -4% 0px" : "0px 0px -8% 0px" }
    );
    elements.forEach((el) => revealObserver.observe(el));

    // Float CTA: chỉ hiện sau khi cuộn qua Hero, ẩn khi đến form liên hệ
    const handleScroll = () => {
      const heroH = document.querySelector("section")?.offsetHeight || 500;
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        const rect = contactEl.getBoundingClientRect();
        const isNearContact = rect.top < window.innerHeight - 80;
        setShowFloat(window.scrollY > heroH && !isNearContact);
      } else {
        setShowFloat(window.scrollY > heroH);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => { revealObserver.disconnect(); window.removeEventListener("scroll", handleScroll); };
  }, []);

  if (pagePath === "/dich-vu-mang-xa-hoi") {
    return <SocialServicesPage contactForm={contactForm} />;
  }

  if (pagePath === "/tai-nguyen-quang-cao-ecom") {
    return <EcomResourcesPage toolkitForm={toolkitForm} />;
  }

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#0A0F1C] selection:bg-[#2563EB] selection:text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.02),transparent_45%)] pointer-events-none" aria-hidden="true" />

      {/* 1. HEADER */}
      <Header />

      {/* 2. HERO */}
      <HeroSection />

      {/* 3. SOCIAL PROOF STRIP */}
      <SocialProofStrip />

      {/* 4. AUDIENCE PATH — tách 2 luồng ngay sau hero */}
      <div className="reveal-on-scroll">
        <AudiencePathSection />
      </div>

      {/* 5. MARQUEE */}
      <Marquee />

      {/* 6. ABOUT FOUNDER */}
      <div className="reveal-on-scroll">
        <AboutSection />
      </div>

      {/* 6.5. METRICS */}
      <div className="reveal-on-scroll">
        <MetricsSection />
      </div>

      {/* 7. BRAND TRUST */}
      <div className="reveal-on-scroll">
        <BrandTrustSection />
      </div>

      {/* 7.5. LOGO MARQUEE */}
      <LogoMarqueeSection />

      {/* 8. CASE STUDIES */}
      <div className="reveal-on-scroll">
        <CaseStudiesSection setLightbox={setLightbox} />
      </div>

      {/* 9. SERVICES */}
      <div className="reveal-on-scroll">
        <ServicesSection />
      </div>

      {/* 10. COURSES / TRAINING */}
      <div className="reveal-on-scroll">
        <CoursesSection />
      </div>

      {/* 11. PROCESS */}
      <div className="reveal-on-scroll">
        <ProcessSection />
      </div>

      {/* 12. WHY US */}
      <div className="reveal-on-scroll">
        <WhyUsSection />
      </div>

      {/* 13. CONTACT FORM */}
      <div className="reveal-on-scroll">
        <ContactSection contactForm={contactForm} />
      </div>

      {/* 14. TOOLKIT */}
      <div className="reveal-on-scroll">
        <ToolkitSection toolkitForm={toolkitForm} />
      </div>

      {/* 15. FOOTER */}
      <Footer />

      {/* Floating CTA — chỉ hiện sau Hero, ẩn khi đến form */}
      {showFloat && (
        <a
          href="#contact"
          onClick={() => { if (window.trackCTA) window.trackCTA("Floating - Tư vấn ngay"); }}
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 btn-awwwards btn-awwwards-solid shadow-lg shadow-[#2563EB]/25 z-40 text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 animate-fade-in"
        >
          Tư vấn ngay →
        </a>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 cursor-zoom-out"
          onClick={closeLightbox}
        >
          {/* Close button on fixed backdrop (never overlaps content) */}
          <button
            onClick={closeLightbox}
            className="fixed top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-all duration-300 border border-white/10 z-50 shadow-lg"
            aria-label="Đóng"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative flex flex-col items-center max-w-[90vw] max-h-[80vh] overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.type === "youtube" ? (
              <div className="bg-[#0A0F1C] p-2 rounded-3xl shadow-2xl border border-white/5">
                <iframe
                  className="w-[85vw] h-[48vw] max-w-[800px] max-h-[450px] rounded-2xl border-0"
                  src={`https://www.youtube.com/embed/${lightbox.videoId}?autoplay=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : lightbox.type === "video" ? (
              <div className="bg-[#0A0F1C] p-2 rounded-3xl shadow-2xl border border-white/5 flex items-center justify-center">
                {!videoError ? (
                  <video
                    src={lightbox.src}
                    controls
                    autoPlay
                    onError={() => setVideoError(true)}
                    className="max-h-[70vh] max-w-[85vw] rounded-2xl"
                  ></video>
                ) : (
                  <div className="text-center p-8 bg-slate-900 rounded-2xl border border-slate-800 max-w-sm">
                    <svg className="w-12 h-12 text-amber-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p className="text-sm font-bold text-white mb-2">Không thể tải trực tiếp video từ máy chủ Meta</p>
                    <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                      Do cơ chế bảo mật của Facebook, link CDN tạm thời bị giới hạn. Bạn có thể xem trực tiếp case study chính thức tại cổng thư viện Meta.
                    </p>
                    <a
                      href="https://www.facebook.com/business/success/bee-english-community"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2563EB] hover:bg-blue-600 active:scale-95 text-[10px] font-black uppercase tracking-wider text-white rounded-full transition-all"
                    >
                      <span>Xem nguồn trên Meta Success</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16">
                        <path d="M13 8v5a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h5M10 2h4v4M6 10l6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white p-2 rounded-2xl shadow-2xl border border-slate-100/50 flex items-center justify-center">
                <img
                  src={typeof lightbox === "string" ? lightbox : lightbox.src}
                  alt="Proof detail"
                  className="max-h-[70vh] max-w-[85vw] object-contain rounded-xl"
                />
              </div>
            )}
            {typeof lightbox === "object" && lightbox.caption && (
              <p className="mt-4 max-w-xl text-center text-[11px] sm:text-xs font-semibold leading-relaxed text-slate-200 bg-slate-900/60 backdrop-blur-md py-2.5 px-5 rounded-full border border-white/5 shadow-lg">
                {lightbox.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
