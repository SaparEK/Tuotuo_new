"use client";

import React from "react";
import { useLocale } from "@/context/LocaleProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  return (
    <div className="inline-flex items-center gap-1 rounded-xl bg-white/20 backdrop-blur-sm px-3 py-2 text-white border border-white/30">
      {([
        { id: "ru", label: "RU" },
        { id: "en", label: "EN" },
        { id: "zh", label: "中文" },
      ] as const).map((l) => (
        <button
          key={l.id}
          onClick={() => setLocale(l.id)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
            locale === l.id 
              ? "bg-[#2B679B] text-white shadow-md" 
              : "text-white/80 hover:text-white hover:bg-white/10"
          }`}
          aria-pressed={locale === l.id}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}


