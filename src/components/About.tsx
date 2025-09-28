
"use client";

import { useLocale } from "@/context/LocaleProvider";

export default function About() {
  const { t } = useLocale();
  const milestones = [
    {
      year: "2015",
      title: t("about.history.2015.title"),
      text: t("about.history.2015.text"),
    },
    {
      year: "2017",
      title: t("about.history.2017.title"),
      text: t("about.history.2017.text"),
    },
    {
      year: "2019",
      title: t("about.history.2019.title"),
      text: t("about.history.2019.text"),
    },
    {
      year: "2021",
      title: t("about.history.2021.title"),
      text: t("about.history.2021.text"),
    },
    {
      year: "2023",
      title: t("about.history.2023.title"),
      text: t("about.history.2023.text"),
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-[1530px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">{t("about.history.heading")}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("about.history.subtitle")}
          </p>
        </div>

        {/* Вертикальная лента времени */}
        <div className="relative max-w-5xl mx-auto">
          {/* Центральная вертикальная линия */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-200 via-orange-400 to-orange-600" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <div key={m.year} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Левая карточка (для чётных индексов) */}
                <div className={i % 2 === 0 ? "order-1" : "order-2 md:order-1"}>
                  {i % 2 === 0 && (
                    <div className="bg-white rounded-xl p-6 shadow-md border border-orange-100 md:mr-12">
                      <div className="text-orange-600 font-semibold text-sm mb-1">{m.year} {t("about.history.year")}</div>
                      <div className="font-semibold">{m.title}</div>
                      <p className="text-gray-600 mt-1">{m.text}</p>
                    </div>
                  )}
                </div>

                {/* Точка-узел */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-orange-600 ring-4 ring-orange-200" />

                {/* Правая карточка (для нечётных индексов) */}
                <div className={i % 2 === 1 ? "order-1 md:order-2" : "order-2"}>
                  {i % 2 === 1 && (
                    <div className="bg-white rounded-xl p-6 shadow-md border border-orange-100 md:ml-12">
                      <div className="text-orange-600 font-semibold text-sm mb-1">{m.year} {t("about.history.year")}</div>
                      <div className="font-semibold">{m.title}</div>
                      <p className="text-gray-600 mt-1">{m.text}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Только ценности */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">{t("about.values.heading")}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t("about.values.reliability.title"), desc: t("about.values.reliability.desc") },
              { title: t("about.values.transparency.title"), desc: t("about.values.transparency.desc") },
              { title: t("about.values.individuality.title"), desc: t("about.values.individuality.desc") },
              { title: t("about.values.innovation.title"), desc: t("about.values.innovation.desc") },
            ].map((v) => (
              <div key={v.title} className="relative overflow-hidden rounded-2xl bg-white shadow-md border border-gray-100 p-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-50/60 via-transparent to-transparent" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-orange-500" />
                    <h4 className="font-semibold text-gray-900">{v.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

