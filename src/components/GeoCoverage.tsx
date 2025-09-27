"use client";

import { useState } from "react";
import GeoCoverageMap from "@/components/GeoCoverageMap";
import { useLocale } from "@/context/LocaleProvider";

type RegionKey = "kz" | "uz" | "tm" | "kg" | "cn" | "ru";

type RegionInfo = {
  title: string;
  description: string;
  highlights: string[];
  hubs: string[];
  services: string[];
};

const regions: Record<RegionKey, RegionInfo> = {
  kz: {
    title: "Казахстан",
    description:
      "Перевозки по Казахстану и транзит в соседние страны. Хабы: Алматы, Астана, Шымкент.",
    highlights: ["Сборные и FTL", "Таможенное оформление", "Транзит через КЗ"],
    hubs: ["Алматы", "Астана", "Шымкент", "Караганда"],
    services: ["Авто и рефрижераторы", "Консолидация", "Складская обработка", "Страхование"],
  },
  uz: {
    title: "Узбекистан",
    description:
      "Маршруты в Ташкент, Самарканд, Бухару и обратно. Консолидация и доставка до двери.",
    highlights: ["Консолидация", "Растаможка", "Отслеживание"],
    hubs: ["Ташкент", "Самарканд", "Бухара", "Наманган"],
    services: ["FTL/LTL", "Сертификация", "Внутригородская доставка", "Страхование"],
  },
  tm: {
    title: "Туркменистан",
    description:
      "Работа с Ашхабадом и промышленными регионами. Экспорт/импорт и транзит.",
    highlights: ["Экспорт/импорт", "Маршруты под проект", "Документы"],
    hubs: ["Ашхабад", "Туркменабад", "Балканабат"],
    services: ["Мультимодальные схемы", "Транзит через КЗ/РФ", "Проектные грузы"],
  },
  kg: {
    title: "Кыргызстан",
    description:
      "Рейсы в Бишкек, Ош и регионы. Опыт работы с СЭЗ и кросс‑бордер.",
    highlights: ["СЭЗ", "Кросс‑бордер", "Сроки"],
    hubs: ["Бишкек", "Ош", "Кара‑Балта"],
    services: ["Сборные грузы", "Склад‑кроссдок", "Таможенное сопровождение"],
  },
  cn: {
    title: "Китай",
    description:
      "Наземная логистика с ключевых хабов Китая: Урумчи, Иу, Гуанчжоу, Шэньчжэнь. Экспорт и импорт.",
    highlights: ["Опыт с кросс-бордер", "Проверенные партнеры", "Сроки от 7 дней"],
    hubs: ["Урумчи", "Иу", "Гуанчжоу", "Шэньчжэнь"],
    services: ["Авто/жд", "Промтаможня", "Проверка качества", "Консолидация"]
  },
  ru: {
    title: "Россия",
    description:
      "Регулярные рейсы по Центральной и Сибирской части РФ. Доставка до дверей с отслеживанием.",
    highlights: ["Отгрузки 24/7", "Холодная цепь при необходимости", "Складская логистика"],
    hubs: ["Москва", "Санкт‑Петербург", "Екатеринбург", "Новосибирск"],
    services: ["FTL/LTL", "Фулфилмент", "Рефрижераторы", "Страхование"]
  },
};

export default function GeoCoverage() {
  const { t } = useLocale();
  const [active, setActive] = useState<RegionKey>("kz");

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="mx-auto max-w-[1530px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-center mb-4 tracking-tight">{t("geo.heading")}</h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">{t("geo.subtitle")}</p>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {(
            [
              { key: "kz", label: t("geo.tabs.kz") },
              { key: "uz", label: t("geo.tabs.uz") },
              { key: "tm", label: t("geo.tabs.tm") },
              { key: "kg", label: t("geo.tabs.kg") },
              { key: "cn", label: t("geo.tabs.cn") },
              { key: "ru", label: t("geo.tabs.ru") },
            ] as { key: RegionKey; label: string }[]
          ).map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-6 py-3 rounded-lg border transition-all shadow-sm relative text-base ${
                active === t.key
                  ? "bg-[#1E3F5F] text-white border-[#1E3F5F] shadow"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:-translate-y-0.5"
              }`}
            >
              {t.label}
              {active === t.key && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-11 rounded-full bg-[#FC0201]" />
              )}
            </button>
          ))}
        </div>

        {/* Description left, map right */}
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* Left: info card, fixed height to match map */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7 h-[520px] flex flex-col">
            <h3 className="text-3xl font-semibold mb-2">{t(`geo.regions.${active}.title`)}</h3>
            <p className="text-gray-600 mb-5 text-base">{t(`geo.regions.${active}.description`)}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
              <div>
                <div className="text-base font-semibold text-gray-900 mb-2">{t("geo.hubs")}</div>
                <ul className="space-y-2 text-base text-gray-700">
                  {regions[active].hubs.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1E3F5F]" />{h}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-base font-semibold text-gray-900 mb-2">{t("geo.services")}</div>
                <ul className="space-y-2 text-base text-gray-700">
                  {regions[active].services.map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FC0201]" />{s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-base font-semibold text-gray-900 mb-2">{t("geo.advantages")}</div>
              <ul className="grid sm:grid-cols-2 gap-2 text-base text-gray-700">
                {regions[active].highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />{h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-xl bg-[#1E3F5F]/5 text-[#1E3F5F] text-xs px-4 py-3">
              {t("geo.note")}
            </div>
          </div>

          {/* Right: map with frame, same height */}
          <div>
            <div className="p-[1.5px] rounded-3xl bg-gradient-to-tr from-[#1E3F5F]/25 via-[#1E3F5F]/10 to-transparent">
              <div className="rounded-[22px] bg-white h-[520px]">
                <GeoCoverageMap active={active} />
              </div>
            </div>

            {/* Legend */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <span className="inline-block w-5 h-3 rounded border border-[#ff3b18]" style={{ background: "repeating-linear-gradient(45deg, rgba(255,95,31,.25) 0 4px, rgba(255,95,31,.25) 4px 8px)" }} />
                {t("geo.legend.selected")}
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-5 h-3 rounded bg-gray-200 border border-gray-300" />
                {t("geo.legend.other")}
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-5 h-0.5 bg-gray-500" />
                {t("geo.legend.borders")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


