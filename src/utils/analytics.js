export function initAnalytics() {
  const gaId = import.meta.env.VITE_GA4_ID;
  const metaId = import.meta.env.VITE_META_PIXEL_ID;
  const tiktokId = import.meta.env.VITE_TIKTOK_PIXEL_ID;

  console.log("%c[Analytics] Initializing tracking systems...", "color: #2563eb; font-weight: bold;");

  // 1. Google Analytics 4
  if (gaId) {
    console.log(`%c[GA4] Loading with ID: ${gaId}`, "color: #10b981;");
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", gaId);
  } else {
    console.log("%c[GA4] Measurement ID missing. Using mock tracker.", "color: #f59e0b;");
    window.gtag = function (...args) {
      console.log("%c[GA4 Mock Event]", "color: #10b981; font-weight: bold;", ...args);
    };
  }

  // 2. Meta Pixel (Facebook Pixel)
  if (metaId) {
    console.log(`%c[Meta Pixel] Loading with ID: ${metaId}`, "color: #ec4899;");
    /* eslint-disable */
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    /* eslint-enable */
    window.fbq("init", metaId);
    window.fbq("track", "PageView");
  } else {
    console.log("%c[Meta Pixel] ID missing. Using mock tracker.", "color: #f59e0b;");
    window.fbq = function (...args) {
      console.log("%c[Meta Pixel Mock Event]", "color: #ec4899; font-weight: bold;", ...args);
    };
  }

  // 3. TikTok Pixel
  if (tiktokId) {
    console.log(`%c[TikTok Pixel] Loading with ID: ${tiktokId}`, "color: #06b6d4;");
    /* eslint-disable */
    !(function (w, d, t) {
      w.TiktokAnalyticsObject = t;
      var ttq = (w[t] = w[t] || []);
      (ttq.methods = [
        "page",
        "track",
        "identify",
        "instances",
        "debug",
        "on",
        "off",
        "once",
        "ready",
        "alias",
        "group",
        "enableCookie",
        "disableCookie",
        "holdConsent",
        "revokeConsent",
        "grantConsent",
      ]),
        (ttq.setAndDefer = function (t, e) {
          t[e] = function () {
            t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
          };
        });
      for (var e = 0; e < ttq.methods.length; e++) ttq.setAndDefer(ttq, ttq.methods[e]);
      (ttq.instance = function (t) {
        for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
        return e;
      }),
        (ttq.load = function (e, n) {
          var r = "https://analytics.tiktok.com/i18n/pixel/events.js",
            o = null;
          (ttq._i = ttq._i || {}),
            (ttq._i[e] = []),
            (ttq._i[e]._u = r),
            (ttq._t = ttq._t || {}),
            (ttq._t[e] = +new Date()),
            (ttq._o = ttq._o || {}),
            (ttq._o[e] = n || {});
          n = document.createElement("script");
          (n.type = "text/javascript"), (n.async = !0), (n.src = r);
          r = document.getElementsByTagName("script")[0];
          r.parentNode.insertBefore(n, r);
        });
      ttq.load(tiktokId);
      ttq.page();
    })(window, document, "ttq");
    /* eslint-enable */
  } else {
    console.log("%c[TikTok Pixel] ID missing. Using mock tracker.", "color: #f59e0b;");
    window.ttq = {
      track: function (...args) {
        console.log("%c[TikTok Pixel Mock Event]", "color: #06b6d4; font-weight: bold;", ...args);
      },
    };
  }

  // Hook global window helpers for forms/CTAs to trigger easily
  window.trackCTA = trackCTA;
  window.trackFormSubmit = trackFormSubmit;
}

export function trackCTA(ctaName) {
  try {
    if (window.gtag) {
      window.gtag("event", "cta_click", { cta_name: ctaName });
    }
    if (window.fbq) {
      window.fbq("trackCustom", "CTAClick", { cta_name: ctaName });
    }
    if (window.ttq && typeof window.ttq.track === "function") {
      window.ttq.track("ClickButton", { button_name: ctaName });
    }
    console.log(`%c[Tracking] CTA Clicked: "${ctaName}"`, "color: #8b5cf6; font-weight: bold;");
  } catch (err) {
    console.error("Error tracking CTA click:", err);
  }
}

export function trackFormSubmit(formId, data) {
  try {
    const payload = {
      form_id: formId,
      name: data.name,
      phone: data.phone,
    };
    if (formId === "contact") {
      payload.need_group = data.needGroup;
      payload.main_need = data.mainNeed;
    } else {
      payload.requested_tool = data.requestedTool;
    }

    if (window.gtag) {
      window.gtag("event", "form_submit", payload);
    }
    if (window.fbq) {
      window.fbq("track", "Lead", {
        content_name: formId === "contact" ? "Contact Form" : "Toolkit Form",
        value: 0,
        currency: "VND",
      });
    }
    if (window.ttq && typeof window.ttq.track === "function") {
      window.ttq.track("SubmitForm", { form_id: formId });
    }
    console.log(`%c[Tracking] Form Submitted ("${formId}"):`, "color: #10b981; font-weight: bold;", payload);
  } catch (err) {
    console.error("Error tracking form submission:", err);
  }
}
