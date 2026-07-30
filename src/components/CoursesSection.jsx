import React from "react";
import { Link } from "react-router-dom";

/* ── Icons ─────────────────────────────────────── */
const IconFacebook = () => (
  <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
    <rect x="4" y="4" width="36" height="36" rx="10" stroke="#2563EB" strokeWidth="1.5" fill="#2563EB" fillOpacity="0.06"/>
    <path d="M26 13h-3a5 5 0 00-5 5v3h-3v4h3v8h4v-8h3l1-4h-4v-3a1 1 0 011-1h3v-4z" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconGoogle = () => (
  <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
    <rect x="4" y="4" width="36" height="36" rx="10" stroke="#2563EB" strokeWidth="1.5" fill="#2563EB" fillOpacity="0.06"/>
    <path d="M31 22.3c0-.7-.06-1.4-.18-2H22v3.77h5.05a4.32 4.32 0 01-1.87 2.83v2.35h3.02C30.2 27.6 31 25.1 31 22.3z" fill="#2563EB" fillOpacity="0.8"/>
    <path d="M22 32c2.52 0 4.64-.83 6.19-2.26l-3.02-2.34c-.84.56-1.9.9-3.17.9-2.44 0-4.5-1.64-5.24-3.86H13.6v2.42A9.37 9.37 0 0022 32z" fill="#2563EB" fillOpacity="0.5"/>
    <path d="M16.76 24.44A5.62 5.62 0 0116.47 22c0-.84.15-1.66.29-2.44V17.1H13.6A9.37 9.37 0 0012.63 22c0 1.52.36 2.96 1 4.24l3.13-1.8z" fill="#2563EB" fillOpacity="0.4"/>
    <path d="M22 15.7c1.37 0 2.6.47 3.57 1.4l2.67-2.67A9.35 9.35 0 0022 12.62a9.37 9.37 0 00-8.4 5.24l3.16 2.46c.74-2.22 2.8-3.62 5.24-3.62z" fill="#2563EB" fillOpacity="0.3"/>
  </svg>
);
const IconTikTok = () => (
  <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
    <rect x="4" y="4" width="36" height="36" rx="10" stroke="#2563EB" strokeWidth="1.5" fill="#2563EB" fillOpacity="0.06"/>
    <path d="M28.5 14a4.5 4.5 0 004.5 4.5v3a7.5 7.5 0 01-4.5-1.5v6.5a6.5 6.5 0 11-6.5-6.5h.5v3h-.5a3.5 3.5 0 103.5 3.5V14h3z" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconShopee = () => (
  <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
    <rect x="4" y="4" width="36" height="36" rx="10" stroke="#2563EB" strokeWidth="1.5" fill="#2563EB" fillOpacity="0.06"/>
    <path d="M14 18h16l-2 12H16L14 18z" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 18v-2a4 4 0 018 0v2" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="19.5" cy="24" r="1.2" fill="#2563EB"/>
    <circle cx="24.5" cy="24" r="1.2" fill="#2563EB"/>
  </svg>
);

const IconCheckShield = () => (
  <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
    <rect x="4" y="4" width="36" height="36" rx="10" stroke="#ffffff" strokeWidth="1.2" fill="rgba(255,255,255,0.12)" />
    <path d="M22 11l8 3v6c0 5.2-3.6 10.1-8 11.3C17.6 30.1 14 25.2 14 20v-6l8-3z" stroke="#ffffff" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M18.4 20.6l2.3 2.3 4.9-5" stroke="#7DD3FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconLifetimeSupport = () => (
  <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
    <rect x="4" y="4" width="36" height="36" rx="10" stroke="#ffffff" strokeWidth="1.2" fill="rgba(255,255,255,0.12)" />
    <path d="M22 31a9 9 0 100-18 9 9 0 000 18z" stroke="#ffffff" strokeWidth="1.8" />
    <path d="M18.5 22a3.5 3.5 0 017 0c0 1.5-.8 2.4-1.9 3.2-.9.7-1.3 1.1-1.3 1.8" stroke="#7DD3FC" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="22" cy="28" r="1.1" fill="#7DD3FC" />
  </svg>
);

const IconGiftStack = () => (
  <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
    <rect x="4" y="4" width="36" height="36" rx="10" stroke="#ffffff" strokeWidth="1.2" fill="rgba(255,255,255,0.12)" />
    <path d="M14 19h16v12H14V19z" stroke="#ffffff" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M22 19v12M14 23h16" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M19.2 19c-1.6 0-2.7-.9-2.7-2.2 0-1.2.8-2 2-2 1.8 0 3.1 2.1 3.5 4.2h-2.8zM24.8 19c1.6 0 2.7-.9 2.7-2.2 0-1.2-.8-2-2-2-1.8 0-3.1 2.1-3.5 4.2h2.8z" stroke="#7DD3FC" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const courses = [
  {
    icon: <IconFacebook />,
    title: "Facebook Ads",
    badge: "Phổ biến nhất",
    badgeColor: "bg-blue-100 text-blue-700",
    desc: "Từ người mới đến người có thể tự set camp, đọc chỉ số, tối ưu chi phí tin nhắn và tạo đơn hàng.",
    points: ["Set camp đúng cấu trúc", "Đọc CPM, CTR, CPC, CPA", "Scale chiến dịch thực chiến"],
    accent: "hover:border-blue-200",
    detailLink: "/khoa-hoc-facebook-ads",
  },
  {
    icon: <IconGoogle />,
    title: "Google Ads & Map",
    badge: "ROAS cao nhất",
    badgeColor: "bg-emerald-100 text-emerald-700",
    desc: "Học cách kéo khách hàng có nhu cầu thật qua Search, Local Map và hệ thống đo lường theo doanh thu.",
    points: ["Google Search Ads", "Local Map & Google Maps", "Đo lường chuyển đổi"],
    accent: "hover:border-emerald-200",
  },
  {
    icon: <IconTikTok />,
    title: "TikTok Ads & Organic",
    badge: "Trending",
    badgeColor: "bg-rose-100 text-rose-700",
    desc: "Triển khai quảng cáo và nội dung ngắn theo hành vi người xem, phù hợp sản phẩm tăng nhận diện.",
    points: ["Tư duy video ngắn", "Setup TikTok Ads", "Tối ưu chi phí chuyển đổi"],
    accent: "hover:border-rose-200",
  },
  {
    icon: <IconShopee />,
    title: "Shopee thực chiến",
    badge: "TMĐT",
    badgeColor: "bg-orange-100 text-orange-700",
    desc: "Xây dựng gian hàng, tối ưu sản phẩm, traffic và chuyển đổi trên sàn thương mại điện tử.",
    points: ["Tối ưu gian hàng", "SEO tiêu đề sản phẩm", "Tăng tỷ lệ ra đơn"],
    accent: "hover:border-orange-200",
  },
];

const fbRoadmap = [
  {
    step: "01",
    title: "Thuật ngữ quảng cáo nền tảng",
    desc: "Hiểu các khái niệm quan trọng trong quảng cáo như tài khoản quảng cáo, VIA, BM, Page, camp, ad set, ads và luồng vận hành cơ bản.",
    tag: "VIA, BM, Page",
  },
  {
    step: "02",
    title: "Setup Page chuẩn chuyên nghiệp",
    desc: "Xây dựng nền tảng fanpage đủ tin cậy trước khi chạy ads: thông tin, hình ảnh, nội dung ghim, inbox và các điểm chạm giúp khách hàng tin tưởng.",
    tag: "A-Z Setup",
  },
  {
    step: "03",
    title: "Cấu trúc Camp Ads từ A-Z",
    desc: "Nắm cấu trúc chiến dịch, nhóm quảng cáo, mẫu quảng cáo và cách setup một camp cơ bản theo mục tiêu tin nhắn, lead hoặc đơn hàng.",
    tag: "Camp Structure",
  },
  {
    step: "04",
    title: "Đọc chỉ số và tối ưu ngân sách",
    desc: "Biết cách đọc CPM, CTR, CPC, CPA, giá tin nhắn, tỷ lệ chuyển đổi; hiểu khi nào cần tắt, nhân bản, tăng ngân sách hoặc đổi creative.",
    tag: "Analytics & Scaling",
  },
  {
    step: "05",
    title: "AI Content & kịch bản bán hàng",
    desc: "Kết hợp AI để nghiên cứu khách hàng, viết nội dung, tạo hook, angle và kịch bản tư vấn/chốt sale phục vụ quảng cáo.",
    tag: "AI Scripts",
  },
  {
    step: "06",
    title: "Q&A và hỗ trợ sau khóa",
    desc: "Giải đáp lỗi triển khai, tổng kết kiến thức, định hướng cách tự vận hành và hỗ trợ sau khóa để học viên áp dụng vào công việc thật.",
    tag: "Q&A Wrap-up",
  },
];

const fbPackages = [
  {
    name: "Khóa cơ bản",
    price: "6.525K",
    desc: "Dành cho người mới bắt đầu, chưa có kinh nghiệm chạy quảng cáo.",
    learner: "Người mới bắt đầu",
    support: "Học 1-1, bám sát nền tảng",
    bonus: "Tặng setup mẫu cơ bản",
    fit: "Muốn hiểu nền tảng và tự setup camp đầu tiên",
    features: ["Thuật ngữ quảng cáo", "Setup Page chuẩn", "Cấu trúc camp cơ bản", "Checklist setup ban đầu"],
  },
  {
    name: "Khóa nâng cao",
    price: "8.888K",
    desc: "Dành cho người muốn tối ưu vận hành, đọc chỉ số và tăng hiệu quả quảng cáo.",
    learner: "Người đã chạy thử",
    support: "Gỡ lỗi theo dữ liệu thực tế",
    bonus: "Tặng template đọc số",
    fit: "Muốn đọc chỉ số, scale camp và tối ưu chi phí",
    features: ["Đọc CPM, CTR, CPC, CPA", "Phân tích lỗi chiến dịch", "Scale ngân sách", "Tối ưu creative theo số liệu"],
  },
  {
    name: "CSKH & Chốt Sale",
    price: "9.990K",
    desc: "Bao gồm toàn bộ Khóa cơ bản và tặng kèm thêm phần CSKH & Chốt Sale để học viên biết xử lý lead và chốt đơn hiệu quả.",
    learner: "Người mới nhưng muốn học thêm phần chốt sale",
    support: "Học nền tảng + tối ưu khâu inbox và follow-up",
    bonus: "Tặng script CSKH & kịch bản chốt sale",
    fit: "Muốn vừa biết chạy camp cơ bản vừa biết chuyển lead thành đơn",
    features: ["Toàn bộ Khóa cơ bản", "Script inbox & follow-up", "Kịch bản chốt sale", "Tối ưu tỷ lệ chuyển đổi sau lead"],
  },
  {
    name: "Gói tối ưu",
    price: "14.999K",
    desc: "Combo Cơ bản + Nâng cao + CSKH & Chốt Sale, phù hợp người muốn đi trọn lộ trình.",
    learner: "Người muốn đi trọn lộ trình",
    support: "Tư vấn 1-1 toàn bộ phễu",
    bonus: "Tặng full tài nguyên + template + prompt",
    fit: "Muốn học từ nền tảng đến ra đơn và có bộ công cụ đầy đủ",
    highlight: true,
    features: ["Trọn bộ 3 khóa", "Kèm reading dashboard", "Kịch bản AI content & sale", "Hỗ trợ tối ưu đến khi tự chạy được"],
  },
];

const studentBenefits = [
  {
    icon: <IconCheckShield />,
    label: "Cầm tay chỉ việc 1-1",
    title: "Học trực tiếp đến khi tự chạy được ra đơn",
    desc: "Không học theo kiểu xem video rồi tự bơi. Học viên được hướng dẫn từng bước từ setup nền tảng, dựng camp, đọc chỉ số đến tối ưu chiến dịch thật cho sản phẩm hoặc ngành hàng của mình.",
  },
  {
    icon: <IconLifetimeSupport />,
    label: "Hỗ trợ trọn đời",
    title: "Sau khóa vẫn được hỏi và được gỡ lỗi",
    desc: "Khi gặp lỗi tài khoản, camp không ra lead, chi phí tăng, nội dung kém hiệu quả hoặc chưa biết nên scale thế nào, học viên vẫn có thể gửi tình huống để được định hướng xử lý.",
  },
  {
    icon: <IconGiftStack />,
    label: "Không phát sinh chi phí ẩn",
    title: "Tặng toàn bộ tài nguyên và nguyên liệu chạy ads",
    desc: "Tài nguyên, template, nguyên liệu triển khai, cấu trúc camp mẫu, prompt AI, checklist đọc số và bộ công cụ hỗ trợ chạy quảng cáo đều được tặng miễn phí trong khóa học.",
  },
];

const fbProofShots = [
  {
    title: "Cấu trúc camp thực tế",
    desc: "Ảnh minh họa cách bố trí chiến dịch, nhóm quảng cáo và mẫu quảng cáo để học viên dễ hiểu mạch setup từ đầu.",
    image: "/course-assets/facebook-bm-dashboard.png",
    alt: "Ảnh chụp màn hình Facebook Business Manager dùng để minh họa cấu trúc camp thực tế",
    label: "Camp Structure",
  },
  {
    title: "Đọc chỉ số và ra quyết định",
    desc: "Ảnh chụp chiến dịch thật đã che bớt phần nhạy cảm, dùng để hướng dẫn cách đọc CPM, CTR, CPC và đánh giá hiệu suất.",
    image: "/course-assets/google-ads-dashboard.png",
    alt: "Ảnh chụp dashboard quảng cáo thật dùng để minh họa cách đọc chỉ số và tối ưu ngân sách",
    label: "Analytics",
  },
];

/* ── Feedback học viên ────────────────────────── */
const studentStories = [
  {
    name: "Học viên Quyên",
    job: "Kinh doanh xe điện",
    avatar: "Q",
    avatarColor: "bg-blue-100 text-blue-700",
    badge: "Video feedback",
    title: "Từ số 0 đến tự chạy chiến dịch ra tin nhắn thật",
    quote: "Bắt đầu từ số 0, sau khóa học em đã tự vận hành Facebook Ads ra đơn với chi phí chỉ 3,000đ – 5,000đ/mess. Thầy dạy thực tế, không có lý thuyết dài dòng.",
    summary: "Khung video này nhấn vào hành trình học thực chiến: học viên bắt đầu từ nền tảng rất mới, sau đó tự setup, đọc số và tối ưu để ra tin nhắn với chi phí thấp.",
    result: "3k–5k đ/mess",
    resultLabel: "Chi phí tin nhắn",
    mediaType: "video",
    mediaTitle: "Feedback học viên Quyên - Facebook Ads",
    mediaSrc: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F596909413412164&show_text=false",
    videoLink: "https://www.facebook.com/reel/596909413412164",
    course: "Facebook Ads",
  },
  {
    name: "Học viên khóa Facebook Ads",
    job: "Học 1-1 thực chiến",
    avatar: "N",
    avatarColor: "bg-emerald-100 text-emerald-700",
    badge: "Feedback mới",
    title: "Hiểu cách chạy, biết đọc số và chủ động tối ưu",
    quote: "Không còn học theo kiểu nhớ từng nút bấm. Sau khi được hướng dẫn trực tiếp, em đã hiểu tư duy triển khai, biết đọc chỉ số và chủ động điều chỉnh chiến dịch theo tình hình thực tế.",
    summary: "Chia sẻ của học viên sau quá trình học 1-1 và trực tiếp thực hành cách triển khai, đọc số, tối ưu Facebook Ads.",
    result: "1-1",
    resultLabel: "Kèm trực tiếp",
    mediaType: "video",
    mediaTitle: "Feedback học viên mới - Facebook Ads",
    mediaSrc: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1022703816902704&show_text=false",
    videoLink: "https://www.facebook.com/reel/1022703816902704",
    course: "Facebook Ads",
  },
  {
    name: "Học viên Minh",
    job: "Chủ shop thời trang online",
    avatar: "M",
    avatarColor: "bg-violet-100 text-violet-700",
    badge: "Ảnh minh họa",
    title: "Tự kiểm soát quảng cáo thay vì phụ thuộc thuê ngoài",
    quote: "Trước đây tôi phải thuê người chạy ads 3-4 triệu/tháng nhưng không kiểm soát được. Sau khóa học tôi tự chạy, ROAS tăng hơn gấp đôi.",
    summary: "Ảnh minh họa mô phỏng bối cảnh chủ shop theo dõi đơn hàng, chi phí quảng cáo và ROAS sau khi tự vận hành chiến dịch.",
    result: "2x ROAS",
    resultLabel: "Tăng so với trước",
    mediaType: "image",
    mediaSrc: "/course-assets/student-minh-ads.svg",
    mediaAlt: "Minh họa học viên Minh tự theo dõi quảng cáo cho shop thời trang",
    course: "Facebook Ads",
  },
  {
    name: "Học viên Thảo",
    job: "Spa & Làm đẹp",
    avatar: "T",
    avatarColor: "bg-rose-100 text-rose-700",
    badge: "Ảnh minh họa",
    title: "Tăng khách đặt lịch nhờ Google Ads và Local Map",
    quote: "Google Ads khó hơn Facebook nhiều nhưng thầy hướng dẫn rất chi tiết. Tháng đầu đã có khách đặt lịch qua Google Maps tăng rõ rệt.",
    summary: "Ảnh minh họa tập trung vào ngữ cảnh spa/làm đẹp, nơi học viên theo dõi lịch hẹn và nguồn khách từ Google Maps.",
    result: "+40%",
    resultLabel: "Khách qua Google Maps",
    mediaType: "image",
    mediaSrc: "/course-assets/student-thao-spa.svg",
    mediaAlt: "Minh họa học viên Thảo tăng khách đặt lịch qua Google Maps",
    course: "Google Ads & Map",
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-28 bg-white border-b border-[#0A0F1C]/5 relative overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.15), transparent)" }} aria-hidden="true" />

      <div className="section-container">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7">
            <p className="section-eyebrow">
              <svg className="w-3.5 h-3.5 mr-1 text-[#2563EB]" fill="none" viewBox="0 0 16 16">
                <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM6.5 5.75A.75.75 0 017.25 5h1.5v5.25h1.5a.75.75 0 010 1.5h-4a.75.75 0 010-1.5H7.75V6.5H7.25a.75.75 0 01-.75-.75z" fill="currentColor" fillOpacity="0.6"/>
              </svg>
              Đào Tạo Thực Chiến
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-[#0A0F1C] mt-2 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.1 }}>
              Khóa học <span className="text-[#2563EB]">từ thực chiến</span><br />không lý thuyết suông.
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
              Đinh Minh Đức trực tiếp giảng dạy — tất cả nội dung đều từ những chiến dịch thực tế đã được triển khai và kiểm chứng bằng doanh thu.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <a href="#contact" onClick={() => { if (window.trackCTA) window.trackCTA("Courses Section - Đăng ký học"); }} className="btn-awwwards btn-awwwards-solid">
              Đăng ký học ngay →
            </a>
          </div>
        </div>

        {/* Featured Facebook Ads course */}
        <div className="mb-16 overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-sky-50 to-blue-50 p-6 shadow-[0_24px_80px_rgba(14,116,232,0.10)] sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#0B74E8]">
                Khóa trọng tâm: Facebook Ads thực chiến
              </p>
              <h3 className="mt-4 font-display text-3xl font-black uppercase leading-[1.18] tracking-[-0.035em] text-[#0A0F1C] sm:text-5xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Từ chưa biết gì đến tự set camp, đọc số và tối ưu ra đơn.
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-[1.9] text-slate-600 sm:text-base">
                Lộ trình được thiết kế cho người muốn làm được việc thật: hiểu nền tảng, setup page, dựng camp, đọc chỉ số, tối ưu chi phí và dùng AI để làm nội dung/kịch bản bán hàng.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {["Học thực chiến dễ hiểu", "Áp dụng ngay vào công việc", "Tối ưu chi phí tăng hiệu quả", "Hỗ trợ sau khóa học trọn đời"].map((item) => (
                  <div key={item} className="rounded-2xl border border-blue-100 bg-white/80 p-4 text-xs font-bold uppercase tracking-wider text-[#0758B8]">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="btn-awwwards btn-awwwards-solid">
                  Tư vấn lộ trình học
                </a>
                <a href="#fb-roadmap" className="btn-awwwards btn-awwwards-outline">
                  Xem chi tiết khóa học
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[1.75rem] border border-white bg-white p-3 shadow-[0_20px_70px_rgba(15,23,42,0.12)]">
                <img
                  src="/course-assets/ads-roadmap.png"
                  alt="Lộ trình học Ads toàn diện Minh Duc Global"
                  className="w-full rounded-[1.35rem] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Facebook Ads roadmap */}
        <div id="fb-roadmap" className="mb-16">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-eyebrow">Lộ trình Facebook Ads</p>
              <h3 className="font-display text-3xl font-black uppercase leading-[1.2] tracking-[-0.035em] text-[#0A0F1C]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                6 bước học để tự vận hành quảng cáo.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-[1.8] text-slate-500">
              Mỗi buổi học đi từ nền tảng đến triển khai, tránh học lan man và tập trung vào thao tác có thể dùng ngay.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {fbRoadmap.map((item) => (
              <article key={item.step} className="rounded-[1.5rem] border border-blue-100 bg-white p-6 shadow-[0_12px_45px_rgba(14,116,232,0.06)]">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0B74E8] text-sm font-black text-white">
                    {item.step}
                  </span>
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-[9px] font-black uppercase tracking-wider text-[#0758B8]">
                    {item.tag}
                  </span>
                </div>
                <h4 className="mt-5 font-display text-lg font-black uppercase leading-[1.25] tracking-[-0.02em] text-[#0A0F1C]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {item.title}
                </h4>
                <p className="mt-3 text-sm leading-[1.85] text-slate-500">{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {fbProofShots.map((shot) => (
              <article key={shot.title} className="overflow-hidden rounded-[1.5rem] border border-blue-100 bg-white shadow-[0_16px_48px_rgba(14,116,232,0.08)]">
                <div className="relative h-56 overflow-hidden border-b border-slate-100 bg-slate-50">
                  <img src={shot.image} alt={shot.alt} className="h-full w-full object-cover object-top" loading="lazy" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#0B74E8] shadow-sm">
                    {shot.label}
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="font-display text-xl font-black uppercase leading-[1.22] tracking-[-0.02em] text-[#0A0F1C]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {shot.title}
                  </h4>
                  <p className="mt-3 text-sm leading-[1.85] text-slate-500">{shot.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#pricing-table" className="btn-awwwards btn-awwwards-solid">
              Xem bảng giá khóa học
            </a>
            <a href="#contact" className="btn-awwwards btn-awwwards-outline">
              Tư vấn 1-1 miễn phí
            </a>
          </div>
        </div>

        {/* Student benefits */}
        <div className="mb-16 overflow-hidden rounded-[2rem] border border-[#0B74E8]/15 bg-[#0A2F6B] p-6 text-white shadow-[0_28px_90px_rgba(14,116,232,0.18)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-sky-200">
                Quyền lợi học viên
              </p>
              <h3 className="mt-4 font-display text-3xl font-black uppercase leading-[1.16] tracking-[-0.035em] sm:text-4xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Học để chạy được, không học để biết cho vui.
              </h3>
              <p className="mt-4 text-sm leading-[1.9] text-blue-50/85">
                Trọng tâm khóa học là đưa học viên từ chưa biết hoặc chạy chưa hiệu quả đến mức có thể tự triển khai, tự đọc số và tự tối ưu chiến dịch thật.
              </p>
            </div>

            <div className="grid gap-4 lg:col-span-8">
              {studentBenefits.map((item) => (
                <article key={item.title} className="rounded-[1.35rem] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.25rem] bg-white/14">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-sky-200">{item.label}</p>
                      <h4 className="mt-2 text-lg font-black uppercase leading-[1.25] tracking-[-0.02em] text-white">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-[1.85] text-blue-50/80">{item.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Course pricing packages */}
        <div id="pricing-table" className="mb-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-eyebrow">Bảng giá & so sánh gói học</p>
              <h3 className="font-display text-3xl font-black uppercase leading-[1.2] tracking-[-0.035em] text-[#0A0F1C]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Chọn gói phù hợp và so sánh rõ từng quyền lợi.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-[1.8] text-slate-500">
              Desktop hiển thị theo bảng so sánh để dễ quyết định. Mobile vẫn ưu tiên đọc nhanh bằng từng cột gói tách biệt.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-[1.75rem] border border-blue-100 bg-white shadow-[0_22px_70px_rgba(14,116,232,0.10)]">
            <div className="grid min-w-[980px] grid-cols-[220px_repeat(4,minmax(180px,1fr))]">
              <div className="border-b border-r border-slate-100 bg-slate-50/80 p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">Tiêu chí</p>
                <h4 className="mt-3 font-display text-xl font-black uppercase leading-[1.2] text-[#0A0F1C]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  So sánh nhanh
                </h4>
              </div>
              {fbPackages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`border-b border-r p-5 ${
                    pkg.highlight
                      ? "bg-gradient-to-b from-[#0B74E8] to-[#0758B8] text-white border-white/10"
                      : "bg-white border-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className={`text-[10px] font-black uppercase tracking-[0.22em] ${pkg.highlight ? "text-white" : "text-[#0B74E8]"}`}>
                      {pkg.name}
                    </p>
                    {pkg.highlight && (
                      <span className="rounded-full bg-white px-3 py-1 text-[9px] font-black uppercase tracking-wider text-[#0B74E8] shadow-sm">
                        Gói tối ưu
                      </span>
                    )}
                  </div>
                  <p className={`mt-4 font-display text-4xl font-black tracking-[-0.04em] ${pkg.highlight ? "text-white" : "text-[#0A0F1C]"}`} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {pkg.price}
                  </p>
                  <p className={`mt-3 text-sm leading-[1.8] ${pkg.highlight ? "text-white/95" : "text-slate-500"}`}>
                    {pkg.desc}
                  </p>
                  <a href="#contact" className={`mt-5 inline-flex rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-wider ${pkg.highlight ? "bg-white text-[#0B74E8]" : "bg-[#0B74E8] text-white"}`}>
                    {pkg.highlight ? "Đăng ký combo" : "Chọn gói này"}
                  </a>
                </div>
              ))}

              {[
                {
                  label: "Phù hợp với",
                  key: "learner",
                },
                {
                  label: "Hình thức hỗ trợ",
                  key: "support",
                },
                {
                  label: "Tài nguyên tặng kèm",
                  key: "bonus",
                },
                {
                  label: "Mục tiêu phù hợp",
                  key: "fit",
                },
              ].map((row) => (
                <React.Fragment key={row.key}>
                  <div className="border-b border-r border-slate-100 bg-slate-50/80 p-5">
                    <p className="text-sm font-black uppercase leading-[1.4] tracking-[0.12em] text-[#0A0F1C]">{row.label}</p>
                  </div>
                  {fbPackages.map((pkg) => (
                    <div
                      key={`${pkg.name}-${row.key}`}
                      className={`border-b border-r p-5 text-sm leading-[1.8] ${
                        pkg.highlight
                          ? "border-white/20 bg-[#0A63CC] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                          : "border-slate-100 text-slate-600"
                      }`}
                    >
                      {pkg[row.key]}
                    </div>
                  ))}
                </React.Fragment>
              ))}

              <div className="border-r border-slate-100 bg-slate-50/80 p-5">
                <p className="text-sm font-black uppercase leading-[1.4] tracking-[0.12em] text-[#0A0F1C]">Nội dung nổi bật</p>
              </div>
              {fbPackages.map((pkg) => (
                <div
                  key={`${pkg.name}-features`}
                  className={`border-r p-5 ${
                    pkg.highlight
                      ? "border-white/20 bg-[#0A58B5] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                      : "border-slate-100 bg-white"
                  }`}
                >
                  <ul className="space-y-2">
                    {pkg.features.map((feature) => (
                      <li key={feature} className={`flex items-start gap-2 text-sm leading-[1.75] ${pkg.highlight ? "text-white" : "text-slate-600"}`}>
                        <span className={`mt-1.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${pkg.highlight ? "bg-white text-[#0B74E8]" : "bg-blue-50 text-[#0B74E8]"}`}>
                          <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 12 12">
                            <path d="M2 6.2l2.2 2.2L10 2.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Học 1-1 đến khi tự chạy được ra đơn",
              "Hỗ trợ trọn đời sau khóa học",
              "Tặng miễn phí toàn bộ tài nguyên, không phí ẩn",
            ].map((item) => (
              <div key={item} className="rounded-[1.35rem] border border-emerald-100 bg-emerald-50/70 px-5 py-4 text-sm font-black leading-[1.7] text-emerald-900">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 align-middle text-white">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 12 12">
                    <path d="M2 6.2l2.2 2.2L10 2.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-awwwards btn-awwwards-solid">
              Đăng ký ngay
            </a>
            <a href="#contact" className="btn-awwwards btn-awwwards-outline">
              Tư vấn 1-1
            </a>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="mb-20">
          <p className="section-eyebrow">Danh sách khóa học</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className={`bento-card bg-white flex flex-col justify-between min-h-[300px] group border border-slate-100 ${course.accent} transition-all duration-300 relative overflow-hidden`}
              >
                <span className="absolute -bottom-4 -right-3 text-[6rem] font-black text-slate-50 leading-none select-none pointer-events-none group-hover:text-blue-50 transition-colors duration-500" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} aria-hidden="true">
                  0{idx + 1}
                </span>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-2 rounded-xl bg-blue-50/50">{course.icon}</div>
                    <span className={`px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded-full ${course.badgeColor}`}>{course.badge}</span>
                  </div>
                  <h3 className="text-lg font-black text-[#0A0F1C] tracking-tight uppercase mb-2 group-hover:text-[#2563EB] transition-colors duration-300">{course.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{course.desc}</p>
                </div>
                <div className="relative z-10 mt-5 pt-4 border-t border-slate-50">
                  <ul className="space-y-1.5">
                    {course.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
                        <span className="w-1 h-1 rounded-full bg-[#2563EB] shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  {course.detailLink && (
                    <Link to={course.detailLink} className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#2563EB] hover:underline">
                      Xem lộ trình chi tiết →
                    </Link>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2563EB] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>

        {/* ── HỌC VIÊN TIÊU BIỂU ─────────────────────── */}
        <div className="relative mt-20 overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-[#EAF4FF] via-[#F7FBFF] to-[#DDEEFF] px-5 py-10 shadow-[0_24px_80px_rgba(37,99,235,0.10)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#60A5FA]/30 blur-[90px]" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-cyan-300/25 blur-[100px]" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.13]" style={{ backgroundImage: "radial-gradient(circle, #2563EB 1px, transparent 1px)", backgroundSize: "22px 22px" }} aria-hidden="true" />

          <div className="relative mb-10 grid items-end gap-7 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#2563EB]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2563EB] opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2563EB]" />
                </span>
                Học viên nói về trải nghiệm thật
              </p>
              <h3 className="mt-4 text-3xl font-black leading-[1.08] tracking-[-0.04em] text-[#0A0F1C] sm:text-4xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Học để tự chạy.<br />
                <span className="text-[#2563EB]">Kết quả để tự nói.</span>
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                Những chia sẻ sau quá trình học và thực hành trực tiếp trên chiến dịch thật — từ lúc chưa biết bắt đầu đến khi tự đọc số, tối ưu và ra kết quả.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:flex">
              <div className="rounded-2xl border border-blue-100 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm">
                <p className="text-xl font-black text-[#2563EB]">1-1</p>
                <p className="mt-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-500">Kèm trực tiếp</p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm">
                <p className="text-xl font-black text-[#2563EB]">Trọn đời</p>
                <p className="mt-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-500">Hỗ trợ sau học</p>
              </div>
            </div>
          </div>

          <div className="relative grid grid-cols-1 gap-5 lg:grid-cols-12">
            {studentStories.map((story, index) => (
              <article
                key={story.name}
                className={`group overflow-hidden rounded-[1.5rem] border border-blue-100 bg-white shadow-[0_18px_55px_rgba(37,99,235,0.10)] transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_22px_65px_rgba(37,99,235,0.16)] ${index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : "lg:col-span-6"}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#050A12]">
                  {story.mediaType === "video" ? (
                    <iframe
                      title={story.mediaTitle}
                      src={story.mediaSrc}
                      className="h-full w-full border-none"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : (
                    <img
                      src={story.mediaSrc}
                      alt={story.mediaAlt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  )}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050A12]/90 to-transparent" aria-hidden="true" />
                  <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2.5">
                    <div className="rounded-xl border border-white/15 bg-[#081120]/80 px-3.5 py-2 shadow-xl backdrop-blur-md">
                      <p className="text-lg font-black leading-none text-white">{story.result}</p>
                      <p className="mt-1 text-[8px] font-black uppercase tracking-[0.14em] text-blue-300">{story.resultLabel}</p>
                    </div>
                  </div>
                  <span className="pointer-events-none absolute right-4 top-4 rounded-full border border-white/15 bg-[#081120]/75 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    {story.badge}
                  </span>
                </div>

                <div className="flex flex-col p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-black ring-4 ring-slate-50 ${story.avatarColor}`}>{story.avatar}</div>
                    <div className="min-w-0">
                      <p className="text-sm font-black text-[#0A0F1C]">{story.name}</p>
                      <p className="mt-0.5 truncate text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">{story.job}</p>
                    </div>
                    <span className="ml-auto rounded-full bg-blue-50 px-2.5 py-1 text-[8px] font-black uppercase tracking-wider text-blue-700">{story.course}</span>
                  </div>

                  <h4 className="mt-5 text-lg font-black leading-[1.25] tracking-[-0.02em] text-[#0A0F1C] sm:text-xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {story.title}
                  </h4>
                  <blockquote className="relative mt-4 flex-1 rounded-2xl bg-slate-50 px-4 pb-4 pt-7 text-[13px] italic leading-6 text-slate-600">
                    <svg className="absolute left-4 top-3 h-3.5 w-3.5 text-[#2563EB]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M7.2 17H3.5l2.4-10h5.5L7.2 17Zm9.1 0h-3.7L15 7h5.5l-4.2 10Z" />
                    </svg>
                    {story.quote}
                  </blockquote>

                  {story.videoLink && (
                    <a href={story.videoLink} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 self-start text-[9px] font-black uppercase tracking-[0.16em] text-[#2563EB] transition hover:gap-3">
                      Xem video gốc <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="relative mt-7 flex items-start justify-center gap-2 text-center text-[10px] leading-5 text-slate-500">
            <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2563EB]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16Zm3.7-9.7a1 1 0 00-1.4-1.4L9 10.2 7.7 8.9a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4Z" clipRule="evenodd" /></svg>
            Kết quả phụ thuộc vào ngành hàng, ngân sách và mức độ thực hành của từng học viên. Video được dẫn về nguồn Facebook gốc để bạn có thể kiểm chứng.
          </p>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 p-7 sm:p-10 rounded-2xl bg-[#0A0F1C] flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} aria-hidden="true"/>
          <div className="relative z-10 text-center sm:text-left">
            <p className="text-white font-black text-lg sm:text-xl uppercase tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Học 1-1 cầm tay chỉ việc đến khi chạy được ra đơn.
            </p>
            <p className="text-slate-400 text-sm mt-1">Hỗ trợ trọn đời sau khóa và tặng toàn bộ tài nguyên triển khai, không phát sinh chi phí ẩn.</p>
          </div>
          <a href="#contact" onClick={() => { if (window.trackCTA) window.trackCTA("Courses CTA Bottom"); }} className="btn-awwwards btn-awwwards-accent shrink-0 relative z-10">
            Đăng ký tư vấn khóa học →
          </a>
        </div>
      </div>
    </section>
  );
}
