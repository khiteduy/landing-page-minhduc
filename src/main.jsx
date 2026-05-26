import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import FacebookAdsPage from "./pages/FacebookAdsPage";
import CardiCaseStudyPage from "./pages/CardiCaseStudyPage";
import "./styles.css";
import { initAnalytics } from "./utils/analytics";

initAnalytics();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/khoa-hoc-facebook-ads" element={<FacebookAdsPage />} />
        <Route path="/case-study/cardi-pizzeria" element={<CardiCaseStudyPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
