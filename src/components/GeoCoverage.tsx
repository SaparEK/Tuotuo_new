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

export default function GeoCoverage() {
  const { t } = useLocale();
  const [active, setActive] = useState<RegionKey>("kz");

  const regions: Record<RegionKey, RegionInfo> = {
    kz: {
      title: t("geo.regions.kz.title"),
      description: t("geo.regions.kz.description"),
      highlights: [
        t("geo.regions.kz.highlights.0"),
        t("geo.regions.kz.highlights.1"),
        t("geo.regions.kz.highlights.2")
      ],
      hubs: [
        t("geo.regions.kz.hubs.0"),
        t("geo.regions.kz.hubs.1"),
        t("geo.regions.kz.hubs.2"),
        t("geo.regions.kz.hubs.3")
      ],
      services: [
        t("geo.regions.kz.services.0"),
        t("geo.regions.kz.services.1"),
        t("geo.regions.kz.services.2"),
        t("geo.regions.kz.services.3")
      ],
    },
    uz: {
      title: t("geo.regions.uz.title"),
      description: t("geo.regions.uz.description"),
      highlights: [
        t("geo.regions.uz.highlights.0"),
        t("geo.regions.uz.highlights.1"),
        t("geo.regions.uz.highlights.2")
      ],
      hubs: [
        t("geo.regions.uz.hubs.0"),
        t("geo.regions.uz.hubs.1"),
        t("geo.regions.uz.hubs.2"),
        t("geo.regions.uz.hubs.3")
      ],
      services: [
        t("geo.regions.uz.services.0"),
        t("geo.regions.uz.services.1"),
        t("geo.regions.uz.services.2"),
        t("geo.regions.uz.services.3")
      ],
    },
    tm: {
      title: t("geo.regions.tm.title"),
      description: t("geo.regions.tm.description"),
      highlights: [
        t("geo.regions.tm.highlights.0"),
        t("geo.regions.tm.highlights.1"),
        t("geo.regions.tm.highlights.2")
      ],
      hubs: [
        t("geo.regions.tm.hubs.0"),
        t("geo.regions.tm.hubs.1"),
        t("geo.regions.tm.hubs.2")
      ],
      services: [
        t("geo.regions.tm.services.0"),
        t("geo.regions.tm.services.1"),
        t("geo.regions.tm.services.2")
      ],
    },
    kg: {
      title: t("geo.regions.kg.title"),
      description: t("geo.regions.kg.description"),
      highlights: [
        t("geo.regions.kg.highlights.0"),
        t("geo.regions.kg.highlights.1"),
        t("geo.regions.kg.highlights.2")
      ],
      hubs: [
        t("geo.regions.kg.hubs.0"),
        t("geo.regions.kg.hubs.1"),
        t("geo.regions.kg.hubs.2")
      ],
      services: [
        t("geo.regions.kg.services.0"),
        t("geo.regions.kg.services.1"),
        t("geo.regions.kg.services.2")
      ],
    },
    cn: {
      title: t("geo.regions.cn.title"),
      description: t("geo.regions.cn.description"),
      highlights: [
        t("geo.regions.cn.highlights.0"),
        t("geo.regions.cn.highlights.1"),
        t("geo.regions.cn.highlights.2")
      ],
      hubs: [
        t("geo.regions.cn.hubs.0"),
        t("geo.regions.cn.hubs.1"),
        t("geo.regions.cn.hubs.2"),
        t("geo.regions.cn.hubs.3")
      ],
      services: [
        t("geo.regions.cn.services.0"),
        t("geo.regions.cn.services.1"),
        t("geo.regions.cn.services.2"),
        t("geo.regions.cn.services.3")
      ]
    },
    ru: {
      title: t("geo.regions.ru.title"),
      description: t("geo.regions.ru.description"),
      highlights: [
        t("geo.regions.ru.highlights.0"),
        t("geo.regions.ru.highlights.1"),
        t("geo.regions.ru.highlights.2")
      ],
      hubs: [
        t("geo.regions.ru.hubs.0"),
        t("geo.regions.ru.hubs.1"),
        t("geo.regions.ru.hubs.2"),
        t("geo.regions.ru.hubs.3")
      ],
      services: [
        t("geo.regions.ru.services.0"),
        t("geo.regions.ru.services.1"),
        t("geo.regions.ru.services.2"),
        t("geo.regions.ru.services.3")
      ]
    },
  };

  return (
    <section className="py-20">
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
                  {regions[active].hubs.map((original, index) => {
                    const key = `geo.regions.${active}.hubs.${index}`;
                    const translated = t(key);
                    const label = translated === key ? original : translated;
                    return (
                      <li key={`${original}-${index}`} className="flex items-center gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1E3F5F]" />{label}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <div className="text-base font-semibold text-gray-900 mb-2">{t("geo.services")}</div>
                <ul className="space-y-2 text-base text-gray-700">
                  {regions[active].services.map((original, index) => {
                    const key = `geo.regions.${active}.services.${index}`;
                    const translated = t(key);
                    const label = translated === key ? original : translated;
                    return (
                      <li key={`${original}-${index}`} className="flex items-center gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FC0201]" />{label}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-base font-semibold text-gray-900 mb-2">{t("geo.advantages")}</div>
              <ul className="grid sm:grid-cols-2 gap-2 text-base text-gray-700">
                {regions[active].highlights.map((original, index) => {
                  const key = `geo.regions.${active}.highlights.${index}`;
                  const translated = t(key);
                  const label = translated === key ? original : translated;
                  return (
                    <li key={`${original}-${index}`} className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />{label}
                    </li>
                  );
                })}
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
          </div>
        </div>
      </div>
    </section>
  );
}


