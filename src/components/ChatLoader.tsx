"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Tawk_API?: { maximize?: () => void } & Record<string, unknown>;
  }
}

export default function ChatLoader() {
  useEffect(() => {
    const propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
    const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID;

    if (!propertyId || !widgetId) return;
    if (document.getElementById("tawk-script")) return;

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s1.id = "tawk-script";
    s0?.parentNode?.insertBefore(s1, s0);
  }, []);

  return null;
}


