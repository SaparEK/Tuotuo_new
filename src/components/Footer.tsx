"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[#142436]/5 bg-[#142436] text-white">
      <div className="mx-auto max-w-[1530px] px-4 sm:px-6 lg:px-8 py-8 text-sm">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <span className="text-white/80">© 2025 RedHook Logistics</span>
          <div className="flex items-center gap-4">
            <a href="/policy" className="hover:opacity-80">Политика конфиденциальности</a>
            <span className="text-white/40">|</span>
            <a href="/agreement" className="hover:opacity-80">Условия пользования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


