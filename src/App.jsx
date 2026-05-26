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
  const pagePath = window.location.pathname;

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
      const contactBottom = contactEl ? contactEl.getBoundingClientRect().bottom : Infinity;
      setShowFloat(window.scrollY > heroH && contactBottom > 0);
    };
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-sm p-4 cursor-zoom-out"
          onClick={() => setLightbox("")}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-100/50 flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={typeof lightbox === "string" ? lightbox : lightbox.src}
              alt="Proof detail" 
              className="max-h-[85vh] max-w-[90vw] object-contain animate-scale-in rounded-xl" 
            />
            {typeof lightbox === "object" && lightbox.caption && (
              <p className="absolute bottom-4 left-4 right-16 rounded-xl bg-slate-950/75 px-4 py-3 text-xs font-semibold leading-relaxed text-white shadow-lg">
                {lightbox.caption}
              </p>
            )}
            <button
              onClick={() => setLightbox("")}
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/60 text-white hover:bg-slate-900/80 transition-colors"
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
