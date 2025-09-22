"use client";

import { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Process() {
  const steps = [
    { 
      id: 1,
      title: "Заявка", 
      description: "Вы оставляете запрос с параметрами груза через сайт, телефон или мобильное приложение.",
      backgroundImage: "https://alex-dein.ru/portfolio/trans/wp-content/uploads/2024/10/telefon.png",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    { 
      id: 2,
      title: "Расчёт", 
      description: "Подбираем оптимальный маршрут, рассчитываем стоимость и согласуем сроки доставки.",
      backgroundImage: "https://alex-dein.ru/portfolio/trans/wp-content/uploads/2024/10/group-3.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      id: 3,
      title: "Оформление", 
      description: "Готовим все необходимые документы, оформляем страховку и бронируем место в автопарке.",
      backgroundImage: "https://alex-dein.ru/portfolio/trans/wp-content/uploads/2024/10/group-4.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      id: 4,
      title: "Доставка", 
      description: "Осуществляем доставку с полным контролем на каждом этапе до двери получателя.",
      backgroundImage: "https://alex-dein.ru/portfolio/trans/wp-content/uploads/2024/10/group-5.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    { 
      id: 5,
      title: "Поддержка 24/7", 
      description: "После доставки остаёмся на связи: отчёты, консультации и оперативная помощь по любым вопросам.",
      backgroundImage: "https://alex-dein.ru/portfolio/trans/wp-content/uploads/2024/10/group-6.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 13a3 3 0 01-3 3H9l-4 4V6a3 3 0 013-3h7a3 3 0 013 3v7z" />
        </svg>
      )
    }
  ];

  // Responsive slider: 1 card on small screens, 4 on desktop
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const computeItems = () => {
      if (typeof window === "undefined") return;
      const width = window.innerWidth;
      // < md (768): 1 card; otherwise: 4 cards
      setItemsPerPage(width < 768 ? 1 : 4);
    };
    computeItems();
    window.addEventListener("resize", computeItems);
    return () => window.removeEventListener("resize", computeItems);
  }, []);

  const maxIndex = Math.max(0, steps.length - itemsPerPage);

  useEffect(() => {
    // Clamp current index when layout changes
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const nextCard = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));
  const prevCard = () => setCurrentIndex((i) => Math.max(0, i - 1));

  return (
    <section id="process" className="border-t border-[#142436]/5 dark:border-white/10 bg-black/[.02] dark:bg-transparent min-h-[calc(100vh-80px)] text-[#142436] dark:text-white">
      <div className="mx-auto max-w-[1530px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 h-full">
        <div className="text-center mb-16 text-[#142436] dark:text-white">
          <div className="flex justify-center">
            <div className="group inline-flex flex-col items-center text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#142436] dark:text-[#142436] transition-colors duration-300 group-hover:text-orange-600">
                Как мы работаем
              </h2>
              <div className="mt-2 h-1 w-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-300 group-hover:w-full" />
            </div>
          </div>
        </div>
        {/* Slider */}
        <div className="w-full">
          <div className="relative">
            {/* Track */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
              >
                {steps.map((step) => (
                  <div key={step.id} className="shrink-0 px-4" style={{ width: `${100 / itemsPerPage}%` }}>
                    <div className="group relative h-[460px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.03]">
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 saturate-125 contrast-105 brightness-110"
                        style={{ backgroundImage: `url(${step.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                      />
                      {/* Overlay adjusts for dark theme: slightly stronger to unify look */}
                      <div className="absolute inset-0 bg-black/10 dark:bg-black/40" />
                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col p-8">
                        {/* Title and Description at Top */}
                        <div>
                          <div className="inline-flex items-center gap-2 mb-3">
                            <span className="px-4 py-2 text-sm sm:text-base font-semibold rounded-md bg-gray-200/90 text-[#142436] ring-1 ring-[#142436]/10 dark:bg-white/10 dark:text-white dark:ring-white/10">
                              Шаг {step.id}
                            </span>
                          </div>
                          <h3 className="text-3xl font-bold transition-colors duration-300">
                            <span className="inline-block rounded-xl px-4 py-2 bg-white/70 text-[#142436] dark:bg-black/50 dark:text-white backdrop-blur-sm transition-colors duration-300 group-hover:text-orange-600">
                              {step.title}
                            </span>
                          </h3>
                          <p className="mt-2 text-[#142436]/80 dark:text-white/90 text-lg leading-relaxed max-w-3xl">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Side Nav Arrows */}
            <button
              aria-label="Предыдущие шаги"
              onClick={prevCard}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-md backdrop-blur-sm border border-[#142436]/10 transition"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              aria-label="Следующие шаги"
              onClick={nextCard}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-md backdrop-blur-sm border border-[#142436]/10 transition"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


