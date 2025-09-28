"use client";

import Header from "@/components/Header";
import About from "@/components/About";
import GeoCoverage from "@/components/GeoCoverage";
import { useLocale } from "@/context/LocaleProvider";

export default function AboutPage() {
  const { t } = useLocale();
  return (
    <div className="min-h-screen bg-seamless-sky text-foreground">
      <Header />
        <main className="bg-seamless-sky">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2B679B] via-[#1e4a6b] to-[#0f2a3d]"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-400/20 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-md"></div>
          
          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                {t("about.hero.title")}
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 font-light">
                {t("about.hero.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* История, достижения, ценности */}
        <About />


        {/* Наша команда (плейсхолдеры как на макете) */}
        <section className="py-12">
          <div className="mx-auto max-w-[1530px] px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">{t("about.team.heading")}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Алексей Иванов", role: t("about.team.ceo.role"), about: t("about.team.ceo.about") },
                { name: "Елена Петрова", role: t("about.team.coo.role"), about: t("about.team.coo.about") },
                { name: "Дмитрий Смирнов", role: t("about.team.cto.role"), about: t("about.team.cto.about") },
                { name: "Анна Козлова", role: t("about.team.sales.role"), about: t("about.team.sales.about") },
              ].map((p) => (
                <div key={p.name} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="h-40 bg-gray-100 rounded-lg mb-4" />
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-orange-600 mb-2">{p.role}</div>
                  <div className="text-sm text-gray-600">{p.about}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* География деятельности */}
        <GeoCoverage />
      </main>
    </div>
  );
}


