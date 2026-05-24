import React, { useEffect, useState } from "react";
import useForm from "./hooks/useForm";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MetricsSection from "./components/MetricsSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import WhyUsSection from "./components/WhyUsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ToolkitSection from "./components/ToolkitSection";
import Footer from "./components/Footer";

function Marquee() {
  const marqueeItems = [
    "PERFORMANCE MARKETING",
    "HỆ THỐNG PHỄU TĂNG TRƯỞNG",
    "TỐI ƯU GOOGLE MAPS",
    "DỊCH VỤ FACEBOOK ADS",
    "TỐI ƯU DOANH THU & ROAS"
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
  const [lightbox, setLightbox] = useState("");

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

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");

    const isMobile = window.innerWidth < 768;
    const revealThreshold = isMobile ? 0.05 : 0.12;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { 
        threshold: revealThreshold, 
        rootMargin: isMobile ? "0px 0px -5% 0px" : "0px 0px -8% 0px" 
      }
    );

    elements.forEach((el) => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#0A0F1C] selection:bg-[#2563EB] selection:text-white relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.02),transparent_45%)] pointer-events-none" aria-hidden="true" />
      
      {/* 1. HEADER */}
      <Header />

      {/* 2. HERO SECTION */}
      <HeroSection />

      {/* 3. MARQUEE RUNNING */}
      <Marquee />

      {/* 4. ABOUT FOUNDER — đưa lên đầu theo yêu cầu */}
      <div className="reveal-on-scroll">
        <AboutSection />
      </div>

      {/* 5. METRICS SECTION */}
      <div className="reveal-on-scroll">
        <MetricsSection />
      </div>

      {/* 6. FEATURED CASE STUDIES */}
      <div className="reveal-on-scroll">
        <CaseStudiesSection setLightbox={setLightbox} />
      </div>

      {/* 7. SERVICES SECTION */}
      <div className="reveal-on-scroll">
        <ServicesSection />
      </div>

      {/* 8. PROCESS SECTION */}
      <div className="reveal-on-scroll">
        <ProcessSection />
      </div>

      {/* 9. WHY US & FEEDBACK */}
      <div className="reveal-on-scroll">
        <WhyUsSection />
      </div>

      {/* 10. CONTACT FORM */}
      <div className="reveal-on-scroll">
        <ContactSection contactForm={contactForm} />
      </div>

      {/* 11. TOOLKIT RESOURCE REGISTRATION */}
      <div className="reveal-on-scroll">
        <ToolkitSection toolkitForm={toolkitForm} />
      </div>

      {/* 12. FOOTER */}
      <Footer />

      {/* Floating CTA viên thuốc chuẩn Awwwards */}
      <a
        href="#contact"
        onClick={() => { if (window.trackCTA) window.trackCTA("Floating - Tư vấn ngay"); }}
        className="fixed bottom-6 right-6 btn-awwwards btn-awwwards-solid shadow-lg shadow-[#2563EB]/25 z-40"
      >
        Tư vấn ngay
      </a>

      {/* Lightbox mờ tối sang trọng Awwwards */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-sm p-4 animate-fade-in cursor-zoom-out"
          onClick={() => setLightbox("")}
        >
          <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-100/50 flex items-center justify-center p-2">
            <img 
              src={lightbox} 
              alt="Proof detail" 
              className="max-h-[85vh] max-w-[90vw] object-contain animate-scale-in rounded-xl" 
            />
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
