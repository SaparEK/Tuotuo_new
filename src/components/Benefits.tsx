 
"use client";

import { useLocale } from "@/context/LocaleProvider";

export default function Benefits() {
  const { t } = useLocale();
  const benefits = [
    { 
      title: t("benefits.postpay.title"), 
      description: t("benefits.postpay.desc"),
      gif: "/animate_icons/oplata.gif",
      details: t("benefits.postpay.details")
    },
    { 
      title: t("benefits.quality.title"), 
      description: t("benefits.quality.desc"),
      gif: "/animate_icons/kachestvo_proverka.gif",
      details: t("benefits.quality.details")
    },
    { 
      title: t("benefits.speed.title"), 
      description: t("benefits.speed.desc"),
      gif: "/animate_icons/skorost_dostavki.gif",
      details: t("benefits.speed.details")
    },
    { 
      title: t("benefits.cashless.title"), 
      description: t("benefits.cashless.desc"),
      gif: "/animate_icons/online_oplata.gif",
      details: t("benefits.cashless.details")
    },
    { 
      title: t("benefits.tracking.title"), 
      description: t("benefits.tracking.desc"),
      gif: "/animate_icons/otslezhivanie.gif",
      details: t("benefits.tracking.details")
    },
    {
      title: t("benefits.support.title"),
      description: t("benefits.support.desc"),
      gif: "/animate_icons/support_24_7.gif", // Ссылка подготовлена для новой гифки
      details: t("benefits.support.details")
    }
  ];

  return (
    <section id="benefits" className="py-16 text-[#142436]">
      <div className="mx-auto max-w-[1530px] px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 flex justify-start">
          <div className="group inline-flex flex-col items-start text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#142436] transition-colors duration-300 group-hover:text-orange-600">
              {t("benefits.heading")}
            </h2>
            <div className="mt-2 h-1 w-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-300 group-hover:w-full" />
          </div>
        </div>
        
        {/* Benefits List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-xl border border-sky-200 h-64 flex flex-col justify-center items-center">
                {/* Animated GIF */}
                <div className="mb-6 group-hover:scale-125 transition-transform duration-300">
                  <img 
                    src={benefit.gif} 
                    alt={benefit.title}
                    className="w-16 h-16 mx-auto"
                  />
                </div>
                
                {/* Title */}
                <h3 className="font-bold text-lg group-hover:text-orange-600 transition-colors duration-300 text-center leading-tight mb-3">
                  <span className="inline-block rounded-xl px-4 py-2 bg-white/70 text-[#142436] backdrop-blur-sm">
                    {benefit.title}
                  </span>
                </h3>
                
                {/* Description - Hidden by default, shown on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-gray-600 text-sm leading-relaxed mb-3 text-center">
                    {benefit.description}
                  </p>
                  <p className="text-orange-600 text-sm font-semibold text-center">
                    {benefit.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


