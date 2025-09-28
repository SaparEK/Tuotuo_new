"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const DEFAULT_FAQ: FaqItem[] = [
  {
    question: "Сколько времени занимает расчёт стоимости?",
    answer:
      "Обычно 10–30 минут в рабочее время. Для сложных маршрутов можем запросить доп. данные и уточнить сроки.",
  },
  {
    question: "Какие документы нужны для оформления?",
    answer:
      "Минимум — накладная и договор/заявка. При необходимости оформления таможни сообщим список заранее.",
  },
  {
    question: "Можно ли отслеживать груз?",
    answer:
      "Да, предоставляем статус-обновления и контакты ответственного менеджера. По запросу — интеграция в вашу систему.",
  },
  {
    question: "Как формируется стоимость доставки?",
    answer:
      "Зависит от объёма/веса, направления, сроков и дополнительных услуг (страховка, склад, таможня).",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="section-padding pb-16 md:pb-32 text-[#142436]">
      <div className="mx-auto max-w-[1530px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <div className="group inline-flex flex-col items-center text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#142436] transition-colors duration-300 group-hover:text-orange-600 mb-4">Часто задаваемые вопросы</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-300 group-hover:w-full" />
          </div>
        </div>

        <div className="w-full space-y-4">
          {DEFAULT_FAQ.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-gray-50 rounded-lg px-4 sm:px-6 hover:shadow-sm transition-shadow duration-500 border border-transparent">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-button-${index}`}
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                >
                  <span className="text-lg text-left sm:text-xl md:text-2xl py-3 sm:py-4 text-gray-900">
                    {item.question}
                  </span>
                  <span
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? 'rotate-45 bg-gray-100 dark:bg-white/10' : 'bg-white dark:bg-white/5'
                    }`}
                    aria-hidden
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4"
                    >
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className={`overflow-hidden will-change-[max-height,opacity,transform] transition-[max-height,opacity,transform,padding] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? 'max-h-96 opacity-100 translate-y-0 pb-3 sm:pb-4 pt-1' : 'max-h-0 opacity-0 translate-y-1 py-0'
                  }`}
                >
                  <p className="text-base sm:text-lg text-gray-600 pb-3 sm:pb-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


