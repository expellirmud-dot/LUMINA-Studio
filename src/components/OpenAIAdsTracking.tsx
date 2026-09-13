"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    oaiq?: (...args: unknown[]) => void;
  }
}

const pixelId = process.env.NEXT_PUBLIC_OPENAI_ADS_PIXEL_ID;
const debug = process.env.NEXT_PUBLIC_OPENAI_ADS_DEBUG === "true";

export default function OpenAIAdsTracking() {
  useEffect(() => {
    if (!pixelId) return;

    const handleConversionClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const conversionTarget = target.closest(
        '[data-openai-ads-conversion="lead_created"]',
      );
      if (!conversionTarget) return;

      window.oaiq?.("measure", "lead_created", {
        type: "customer_action",
      });
    };

    document.addEventListener("click", handleConversionClick);
    return () => document.removeEventListener("click", handleConversionClick);
  }, []);

  if (!pixelId) return null;

  const config = JSON.stringify({ pixelId, debug });

  return (
    <Script id="openai-ads-measurement" strategy="afterInteractive">
      {`
        (function (w, d, s, u) {
          if (w.oaiq) return;
          var q = function () {
            q.q.push(arguments);
          };
          q.q = [];
          w.oaiq = q;
          var js = d.createElement(s);
          js.async = true;
          js.src = u;
          var f = d.getElementsByTagName(s)[0];
          f.parentNode.insertBefore(js, f);
        })(window, document, "script", "https://bzrcdn.openai.com/sdk/oaiq.min.js");

        oaiq("init", ${config});
        oaiq("measure", "page_viewed", {
          type: "contents",
          contents: [
            {
              id: "home",
              name: "LUMINA Studio home",
              content_type: "page"
            }
          ]
        });
      `}
    </Script>
  );
}
