"use client";

import { Phone, Mail, MessageCircle } from "lucide-react";
import { useLocale } from "@/context/LocaleProvider";


export default function Contact() {
  const { t } = useLocale();

  return (
    <section id="contacts" className="py-16 sm:py-24 border-t border-[#142436]/5 dark:border-white/10 bg-[#1E3F5F] text-white">
      <div className="mx-auto max-w-[1530px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Свяжитесь с нами</h2>
        <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">Оставьте контакты и параметры груза — вернёмся с предложением в течение дня.</p>

        {/* Как мы работаем — компактное дерево шагов */}
        <div className="mt-16">
          <h3 className="text-center text-3xl font-bold mb-10">Как мы работаем</h3>
          <div className="relative max-w-3xl mx-auto">
            {/* Центральная вертикальная линия */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/20" />

            {/* Шаг 1 */}
            <div className="flex justify-center mb-12">
              <div className="rounded-2xl bg-white/10 border border-white/15 px-6 py-5 w-[300px] text-center shadow">
                <div className="text-white/70 text-sm mb-1">{t("process.step1.label")}</div>
                <div className="text-xl font-semibold mb-1">{t("process.step1.title")}</div>
                <div className="text-white/80 text-sm">{t("process.step1.text")}</div>
              </div>
            </div>

            {/* Развилка 1 */}
            <div className="relative mb-12">
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 h-px w-[80%] bg-white/20" />
              <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--brand)]" />
              <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--brand)]" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:pr-8">
                  <div className="rounded-2xl bg-white/10 border border-white/15 px-5 py-4 text-center">
                    <div className="text-lg font-semibold mb-1">{t("process.calc.title")}</div>
                    <div className="text-white/80 text-sm">{t("process.calc.text")}</div>
                  </div>
                </div>
                <div className="md:pl-8">
                  <div className="rounded-2xl bg-white/10 border border-white/15 px-5 py-4 text-center">
                    <div className="text-lg font-semibold mb-1">{t("process.docs.title")}</div>
                    <div className="text-white/80 text-sm">{t("process.docs.text")}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Развилка 2 */}
            <div className="relative mb-6">
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 h-px w-[70%] bg-white/20" />
              <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--brand)]" />
              <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--brand)]" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:pr-8">
                  <div className="rounded-2xl bg-white/10 border border-white/15 px-5 py-4 text-center">
                    <div className="text-lg font-semibold mb-1">{t("process.delivery.title")}</div>
                    <div className="text-white/80 text-sm">{t("process.delivery.text")}</div>
                  </div>
                </div>
                <div className="md:pl-8">
                  <div className="rounded-2xl bg-white/10 border border-white/15 px-5 py-4 text-center">
                    <div className="text-lg font-semibold mb-1">{t("process.support.title")}</div>
                    <div className="text-white/80 text-sm">{t("process.support.text")}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center">
              <a href="#contacts" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[var(--brand)] text-white font-semibold shadow hover:brightness-110">
                {t("process.cta")}
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Контакты: только 3 метода */}
          <div className="flex flex-col space-y-6 md:col-span-3 md:grid md:grid-cols-3 md:space-y-0 md:gap-6">
            <a href="tel:+77010701907" className="p-8 rounded-xl text-center bg-white/10 hover:bg-white/15 transition-all hover:scale-[1.02] border border-white/15">
              <Phone className="w-8 h-8 text-[var(--brand)] mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Телефон</h3>
              <p className="text-white/80">+7 701 070 19 07</p>
            </a>
            <div className="p-8 rounded-xl text-center bg-white/10 hover:bg-white/15 transition-all hover:scale-[1.02] border border-white/15">
              <MessageCircle className="w-8 h-8 text-[var(--brand)] mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Соцсети</h3>
              <div className="flex justify-center gap-4">
                <a href="https://t.me/tuotuokz_bot" className="text-white/80 hover:text-[var(--brand)] transition-colors">Telegram</a>
                <a href="https://api.whatsapp.com/send?phone=77755549739&text=start" className="text-white/80 hover:text-[var(--brand)] transition-colors">WhatsApp</a>
              </div>
            </div>
            <a href="mailto:info@tuotuo.kz" className="p-8 rounded-xl text-center bg-white/10 hover:bg-white/15 transition-all hover:scale-[1.02] border border-white/15">
              <Mail className="w-8 h-8 text-[var(--brand)] mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Email</h3>
              <p className="text-white/80">info@tuotuo.kz</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


