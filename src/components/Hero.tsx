"use client";
import Earth from "@/components/Earth";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: 'center 30%' }}
          >
            <source src="/video/x-large-vecteezy_3d-isometric-animation-of-global-logistics-network-concept_55894422_x-large.mp4" type="video/mp4" />
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand)]/[.06] via-transparent to-transparent" />
      <div className="mx-auto max-w-[1530px] px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative z-10">
        <div className="w-full flex justify-start">
          {/* Glass Surface Card */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl max-w-4xl text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-[75px] font-extrabold tracking-tight text-white leading-tight">
              Грузовые перевозки по СНГ и Азии
            </h1>
            <p className="mt-6 text-lg sm:text-xl lg:text-[22px] text-white/80 leading-relaxed">
              Авто перевозки, таможенное оформление, склад и фулфилмент. Надёжно, прозрачно, вовремя.
            </p>
            <div className="mt-10 flex flex-wrap gap-6">
              <a href="#contacts" className="inline-flex items-center rounded-xl bg-[var(--brand)] text-white h-20 px-10 text-xl font-semibold hover:opacity-90 relative overflow-hidden group">
                <span className="relative z-10">Оставить заявку на доставку груза</span>
                {/* Continuous shine animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                {/* Moving shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shine_2s_ease-in-out_infinite]"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400/20 via-yellow-300/30 to-orange-400/20 blur-sm animate-pulse"></div>
              </a>
              <a href="#services" className="inline-flex items-center rounded-xl h-20 px-10 text-xl font-semibold border-2 border-white/30 hover:bg-white/10 text-white transition-all duration-300">Наши услуги</a>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-extrabold text-[var(--brand)]">10+</div>
                <div className="text-white/70 text-lg">лет на рынке</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-[var(--brand)]">98%</div>
                <div className="text-white/70 text-lg">доставок вовремя</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-[var(--brand)]">24/7</div>
                <div className="text-white/70 text-lg">поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


