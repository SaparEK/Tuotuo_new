"use client";

import { useLocale } from "@/context/LocaleProvider";
import { useState, useEffect } from "react";

export default function Hero() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  return (
    <>
    <section className="relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: 'center 30%', filter: 'brightness(1.8)' }}
          >
            <source src="/video/x-large-vecteezy_3d-isometric-animation-of-global-logistics-network-concept_55894422_x-large.mp4" type="video/mp4" />
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/5" />
        </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand)]/[.06] via-transparent to-transparent" />
      <div className="mx-auto max-w-[1530px] px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative z-10">
        <div className="w-full flex justify-start">
          {/* Glass Surface Card */}
          <div className="backdrop-blur-md bg-black/20 border border-white/20 rounded-2xl p-8 shadow-2xl max-w-4xl text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-[75px] font-extrabold tracking-tight text-white leading-tight">
              {t("hero.title")}
            </h1>
            <p className="mt-6 text-lg sm:text-xl lg:text-[22px] text-white/80 leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="mt-10 flex flex-wrap gap-6">
              <button onClick={() => setOpen(true)} type="button" className="inline-flex items-center rounded-xl bg-[var(--brand)] text-white h-20 px-10 text-xl font-semibold hover:opacity-90 relative overflow-hidden group">
                <span className="relative z-10">{t("hero.cta")}</span>
                {/* Continuous shine animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                {/* Moving shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shine_2s_ease-in-out_infinite]"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400/20 via-yellow-300/30 to-orange-400/20 blur-sm animate-pulse"></div>
              </button>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-extrabold text-white/70">10+</div>
                <div className="text-white/70 text-lg">{t("hero.stats.years")}</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-white/70">98%</div>
                <div className="text-white/70 text-lg">{t("hero.stats.ontime")}</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-white/70">24/7</div>
                <div className="text-white/70 text-lg">{t("hero.stats.support")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {open && (
      <div className="fixed inset-0 z-[100]">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
        {/* Modal */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
            <button
              type="button"
              aria-label="Закрыть"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
            </button>
            <div className="px-6 sm:px-8 pt-10 pb-8">
              <h3 className="text-3xl font-extrabold text-center mb-2">{t("modal.title")}</h3>
              <p className="text-center text-gray-600 mb-6">{t("modal.subtitle")}</p>
              <form className="space-y-4">
                {/* В какое время позвонить */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("modal.calltime")}</label>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-xl border border-gray-200 px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]">
                      <option>{t("modal.calltime.now")}</option>
                      <option>{t("modal.calltime.hour")}</option>
                      <option>{t("modal.calltime.today")}</option>
                      <option>{t("modal.calltime.tomorrow")}</option>
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </div>
                <input className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" placeholder={t("modal.name")} />
                <input className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" placeholder={t("modal.phone")} />
                <input className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" placeholder={t("modal.email")} />
                <button type="button" className="w-full rounded-xl bg-[#3047E6] text-white h-12 font-semibold hover:brightness-110">{t("modal.submit")}</button>
                <label className="flex items-start gap-3 text-sm text-gray-600">
                  <input type="checkbox" defaultChecked className="mt-1 h-4 w-4 rounded border-gray-300 text-[var(--brand)] focus:ring-[var(--brand)]"/>
                  <span>{t("modal.consent.prefix")} <a href="/agreement" className="text-[#3047E6] hover:underline">{t("modal.consent.terms")}</a> {t("modal.consent.and")} <a href="/policy" className="text-[#3047E6] hover:underline">{t("modal.consent.policy")}</a></span>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}


