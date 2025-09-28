"use client";
import { useLocale } from "@/context/LocaleProvider";

export default function ProcessTree() {
  const { t } = useLocale();
  return (
    <section
      id="process"
      className="relative border-t border-[#142436]/10 text-[#142436] py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-[1530px] px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-center text-5xl font-extrabold mb-16">
          {t("process.heading")}
              </h2>

        {/* Mobile layout */}
        <div className="md:hidden relative flex flex-col items-center">
          {/* Контейнер для вертикальной линии */}
          <div className="relative w-full flex flex-col items-center">
            {/* Вертикальная линия тянется от первой карточки до кнопки */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-sky-300" />

            <StepCardWithTopDot
              title={t("process.step1.title")}
              text={t("process.step1.text")}
            />
            <StepCardWithTopDot
              title={t("process.calc.title")}
              text={t("process.calc.text")}
            />
            <StepCardWithTopDot
              title={t("process.docs.title")}
              text={t("process.docs.text")}
            />
            <StepCardWithTopDot
              title={t("process.delivery.title")}
              text={t("process.delivery.text")}
            />
            <StepCardWithTopDot
              title={t("process.support.title")}
              text={t("process.support.text")}
            />

            {/* Кнопка с точкой сверху */}
            <div className="flex flex-col items-center relative mt-8">
              <Dot className="left-1/2" />
              <a
                href="#contacts"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg bg-[var(--brand)] text-white font-semibold shadow-lg hover:brightness-110"
              >
                {t("process.cta")}
              </a>
            </div>
          </div>
        </div>

        {/* Desktop / Tablet layout */}
        <div className="hidden md:flex flex-col items-center relative">
          {/* Контейнер для вертикальной линии */}
          <div className="relative w-full flex flex-col items-center">
            {/* Вертикальная линия теперь динамическая */}
            <div className="absolute top-3 bottom-0 left-1/2 -translate-x-1/2 w-px bg-sky-400" />

            {/* Уровень 1 */}
            <StepCardWithTopDot
              title={t("process.step1.title")}
              text={t("process.step1.text")}
            />

            {/* Уровень 2 */}
            <HorizontalStepLevel>
              <StepCardWithTopDot
                title={t("process.calc.title")}
                text={t("process.calc.text")}
              />
              <StepCardWithTopDot
                title={t("process.docs.title")}
                text={t("process.docs.text")}
              />
            </HorizontalStepLevel>

            {/* Уровень 3 */}
            <HorizontalStepLevel compact>
              <StepCardWithTopDot
                title={t("process.delivery.title")}
                text={t("process.delivery.text")}
              />
              <StepCardWithTopDot
                title={t("process.support.title")}
                text={t("process.support.text")}
              />
            </HorizontalStepLevel>

            {/* Кнопка с точкой сверху */}
            <div className="flex flex-col items-center relative mt-12 w-full max-w-[1530px]">
            <div className="relative flex flex-col items-center">
    <Dot className="top-5 left-1/2" />
    <a
      href="#contacts"
      className="inline-flex items-center justify-center px-10 py-4 rounded-xl text-lg bg-[var(--brand)] text-white font-semibold shadow-lg hover:brightness-110"
    >
      {t("process.cta")}
    </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Карточка с точкой сверху */
function StepCardWithTopDot({
  label,
  title,
  text,
}: {
  label?: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center relative mb-14">
      <Dot className="absolute top-3 left-1/2 -translate-x-1/2" />
      <StepCard label={label} title={title} text={text} />
    </div>
  );
}
/* Горизонтальный уровень */
function HorizontalStepLevel({
  children,
  compact = false, // добавляем проп
}: {
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative flex w-full max-w-[1530px] mb-24 items-start ${
        compact ? "justify-center gap-16" : "justify-between"
      }`}
    >
      {/* Горизонтальная линия */}
      <div
        className={`absolute h-px rounded-full ${
          compact ? "left-1/3 right-1/3" : "left-1/8 right-1/8"
        }`}
        style={{
          background:
            "linear-gradient(to right, transparent, #38bdf8, transparent)",
        }}
      />
      {children}
    </div>
  );
}

/* Карточка */
function StepCard({
  label,
  title,
  text,
}: {
  label?: string;
  title: string;
  text: string;
}) {
  return (
    <div className="p-[1.5px]  relative">
      <div className="rounded-2xl top-4 bg-white px-8 py-7 w-[320px] text-center relative">
        {label && (
          <div className="text-base text-gray-500 mb-3">{label}</div>
        )}
        <div className="text-3xl font-bold mb-3">{title}</div>
        <div className="text-gray-600 text-base leading-relaxed">{text}</div>
      </div>
    </div>
  );
}

/* Точка */
function Dot({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-4 h-4 top-3 rounded-full bg-sky-400 ring-2 ring-white shadow-md z-20 ${className}`}
    />
  );
}
