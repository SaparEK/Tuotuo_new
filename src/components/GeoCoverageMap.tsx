"use client";

import { useEffect, useState } from "react";
import * as d3 from "d3-geo";
import { feature } from "topojson-client";

type RegionKey = "kz" | "uz" | "tm" | "kg" | "cn" | "ru";

// Public world-110m TopoJSON
const WORLD_URL_PRIMARY = "https://unpkg.com/world-atlas@2/countries-110m.json";
const WORLD_URL_FALLBACK = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// ISO codes for regions
const RU_ISO = new Set(["RUS"]);
const CN_ISO = new Set(["CHN"]);
const RU_NAMES = new Set(["Russia", "Russian Federation"]);
const CN_NAMES = new Set(["China", "People's Republic of China"]);
const KZ_NAMES = new Set(["Kazakhstan"]);
const UZ_NAMES = new Set(["Uzbekistan"]);
const TM_NAMES = new Set(["Turkmenistan"]);
const KG_NAMES = new Set(["Kyrgyzstan", "Kyrgyz Republic"]);
const KZ_ISO = new Set(["KAZ"]);
const UZ_ISO = new Set(["UZB"]);
const TM_ISO = new Set(["TKM"]);
const KG_ISO = new Set(["KGZ"]);

function matchRegionAny(iso3: string, name: string | undefined, region: RegionKey): boolean {
  switch (region) {
    case "ru": return (!!iso3 && RU_ISO.has(iso3)) || (!!name && RU_NAMES.has(name));
    case "cn": return (!!iso3 && CN_ISO.has(iso3)) || (!!name && CN_NAMES.has(name));
    case "kz": return (!!iso3 && KZ_ISO.has(iso3)) || (!!name && KZ_NAMES.has(name));
    case "uz": return (!!iso3 && UZ_ISO.has(iso3)) || (!!name && UZ_NAMES.has(name));
    case "tm": return (!!iso3 && TM_ISO.has(iso3)) || (!!name && TM_NAMES.has(name));
    case "kg": return (!!iso3 && KG_ISO.has(iso3)) || (!!name && KG_NAMES.has(name));
  }
}

export default function GeoCoverageMap({ active }: { active: RegionKey }) {
  const [paths, setPaths] = useState<Array<{ d: string; iso3: string; name?: string }>>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const loadFrom = async (url: string) => {
      const res = await fetch(url, { cache: "force-cache" });
      if (!res.ok) throw new Error("fetch failed");
      return res.json();
    };

    const load = async () => {
      let topo: unknown;
      try {
        topo = await loadFrom(WORLD_URL_PRIMARY);
      } catch {
        try {
          topo = await loadFrom(WORLD_URL_FALLBACK);
        } catch {
          if (isMounted) setError("Не удалось загрузить данные карты.");
          return;
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const objectKey = Object.keys((topo as any).objects)[0];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const geojson: unknown = feature(topo as any, (topo as any).objects[objectKey]);
      const projection = d3
        .geoNaturalEarth1()
        .center([66, 47])
        .translate([400, 180])
        .scale(360);
      const pathGen = d3.geoPath().projection(projection);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const computed = (geojson as any).features.map((f: any) => ({
        d: pathGen(f) || "",
        iso3: (f.properties && (f.properties.iso_a3 || f.id)) || "",
        name: f.properties?.name as string | undefined,
      }));
      if (isMounted) setPaths(computed);
    };
    load();
    return () => { isMounted = false; };
  }, []);

  const fillFor = (iso3: string, name?: string) => (matchRegionAny(iso3, name, active) ? "url(#regionDots)" : colorByIso(iso3));
  const strokeFor = (iso3: string, name?: string) => (matchRegionAny(iso3, name, active) ? "#ff3b18" : "#9aa3ad");

  // Deterministic pastel color per country for base (non-highlighted) view
  const basePalette = ["#e7eef8", "#f8e7e7", "#e7f6ee", "#fff1cf", "#ece6fb", "#e3f3f9", "#f1e6fb", "#e6fbf0"];
  const colorByIso = (iso3: string) => {
    if (!iso3) return "#e5e7eb";
    let hash = 0;
    for (let i = 0; i < iso3.length; i++) hash = (hash * 31 + iso3.charCodeAt(i)) >>> 0;
    return basePalette[hash % basePalette.length];
  };

  // Simple viewBox SVG; projection already centers roughly on Eurasia
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-4 h-[520px]">
      <svg viewBox="0 0 800 480" className="w-full h-full">
        <defs>
          <linearGradient id="sea2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#e7ebf1" />
            <stop offset="100%" stopColor="#dfe3ea" />
          </linearGradient>
          <pattern id="regionDots" width="8" height="8" patternUnits="userSpaceOnUse">
            <rect width="8" height="8" fill="rgba(255,95,31,0.14)" />
            <circle cx="2" cy="2" r="1.6" fill="#ff5f1f" />
            <circle cx="6" cy="4" r="1.6" fill="#ff5f1f" />
            <circle cx="3" cy="7" r="1.6" fill="#ff5f1f" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="800" height="480" fill="url(#sea2)" />
        {error && (
          <text x="20" y="24" fontSize="12" fill="#ef4444">{error}</text>
        )}
        {paths.map((p, idx) => (
          <path key={idx} d={p.d} fill={fillFor(p.iso3, p.name)} stroke={strokeFor(p.iso3, p.name)} strokeWidth={matchRegionAny(p.iso3, p.name, active) ? 1 : 0.8} />
        ))}
      </svg>
    </div>
  );
}


