"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLocale } from "@/context/LocaleProvider";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navItems = [
    { href: "/", label: t("nav.homepage") }
  ];

  return (
    <div className="container">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#2B679B] py-2 shadow-lg" : "bg-transparent py-4"
        }`}
      >
        <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
          {/* Логотип и заголовок */}
          <Link href="/" className="text-xl font-semibold text-white flex items-center gap-2">
            <img src="/logo/logo.png" alt="TUOTUOKZ" className="h-10 md:h-12" />
            <span className="text-lg font-normal text-white">TUOTUOKZ</span>
          </Link>

          {/* Навигация для десктопов */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/about"
              className="transition-colors border border-transparent hover:border-white px-4 py-1 rounded-lg text-sm md:text-base text-white hover:text-white"
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/support"
              className="transition-colors border border-transparent hover:border-white px-4 py-1 rounded-lg text-sm md:text-base text-white hover:text-white"
            >
              {t("nav.support")}
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors border border-transparent hover:border-white px-4 py-1 rounded-lg text-sm md:text-base text-white hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Кнопка меню для мобильных */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
            <span className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </span>
            </button>
          </div>
        </nav>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 w-full bg-[#2B679B]/95 backdrop-blur-lg border-b border-neutral-800">
            <div className="px-4 lg:px-8 py-4 flex flex-col gap-4">
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-neutral-200 hover:text-white transition-colors border border-white/20 px-4 py-2 rounded-lg text-left text-sm"
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/support"
                onClick={() => setIsMenuOpen(false)}
                className="text-neutral-200 hover:text-white transition-colors border border-white/20 px-4 py-2 rounded-lg text-left text-sm"
              >
                {t("nav.support")}
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-neutral-200 hover:text-white transition-colors border border-white/20 px-4 py-2 rounded-lg text-left text-sm"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2"><LanguageSwitcher /></div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}