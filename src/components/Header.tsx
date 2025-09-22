"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "services", label: "Услуги" },
    { id: "benefits", label: "Преимущества" },
    { id: "process", label: "Как работаем" },
    { id: "contacts", label: "Контакты" }
  ];

  return (
    <div className="container">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#142436] py-2 shadow-lg" : "bg-[#142436] py-4"
        }`}
      >
        <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
          {/** Compute theme-aware text color */}
          {/** textColor: white if scrolled or dark theme; black on light + not scrolled */}
          {/** Using a hidden span to compute class isn't necessary; assign to vars */}
          {/* Логотип и заголовок */}
          <Link href="/" className="text-xl font-semibold text-white flex items-center gap-2">
            <img src="/logo/logo.png" alt="TUOTUOKZ" className="h-10 md:h-12" />
            <span className="text-lg font-normal text-white">TUOTUOKZ</span>
          </Link>

          {/* Навигация для десктопов */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="transition-colors border border-transparent hover:border-white px-4 py-1 rounded-lg text-sm md:text-base text-white hover:text-white"
              >
                {item.label}
              </button>
            ))}
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
          <div className="md:hidden absolute top-16 w-full bg-[#142436]/95 backdrop-blur-lg border-b border-neutral-800">
            <div className="px-4 lg:px-8 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-neutral-200 hover:text-white transition-colors border border-white/20 px-4 py-2 rounded-lg text-left text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}


