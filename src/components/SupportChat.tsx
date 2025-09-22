"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function SupportChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ id: number; role: "user" | "bot"; text: string }>>([
    { id: 1, role: "bot", text: "Здравствуйте! Я виртуальный помощник. Чем могу помочь?" }
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement | null>(null);

  const openFullChat = () => {
    if (typeof window !== "undefined" && window.Tawk_API && typeof window.Tawk_API.maximize === "function") {
      window.Tawk_API.maximize();
      return true;
    }
    return false;
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg = { id: Date.now(), role: "user" as const, text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const replyText = "Спасибо! Наш специалист свяжется с вами. Можете также выбрать Telegram/WhatsApp слева.";
      setMessages((prev) => [...prev, { id: Date.now() + 1, role: "bot", text: replyText }]);
    }, 400);
  };

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button
        aria-label={open ? "Закрыть чат" : "Открыть чат"}
        onClick={() => {
          const opened = openFullChat();
          if (!opened) setOpen((v) => !v);
        }}
        className="h-14 w-14 rounded-full bg-[var(--brand)] text-white shadow-lg hover:brightness-110 transition flex items-center justify-center"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
      </button>

      {/* Panel */}
      <div
        className={`origin-bottom-right mt-3 mr-0 absolute right-0 bottom-16 w-[360px] sm:w-[420px] h-[480px] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
        style={{ backgroundColor: "#142436" }}
      >
        <div className="h-12 px-4 flex items-center justify-between border-b border-white/10 text-white">
          <span className="font-semibold">Поддержка</span>
          <button onClick={() => setOpen(false)} aria-label="Закрыть" className="text-white/80 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="h-[calc(100%-48px-56px)] grid grid-cols-2">
          <div className="border-r border-white/10 p-3 text-white flex flex-col">
            <div className="text-sm font-medium mb-2">Каналы связи</div>
            <a href="https://t.me/tuotuokz_bot" target="_blank" rel="noreferrer" className="rounded-lg px-3 py-2 bg-white/10 hover:bg-white/15 transition mb-2">Telegram</a>
            <a href="https://api.whatsapp.com/send?phone=77755549739&text=start" target="_blank" rel="noreferrer" className="rounded-lg px-3 py-2 bg-white/10 hover:bg-white/15 transition mb-2">WhatsApp</a>
            <a href="mailto:info@tuotuo.kz" className="rounded-lg px-3 py-2 bg-white/10 hover:bg-white/15 transition">Email</a>
            <div className="mt-auto text-xs text-white/60">Рабочие часы: 09:00–20:00</div>
          </div>
          <div className="flex flex-col">
            <div ref={listRef} className="flex-1 overflow-y-auto p-3 space-y-2">
              {messages.map((m) => (
                <div key={m.id} className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${m.role === "user" ? "ml-auto bg-white/15 text-white" : "mr-auto bg-white text-[#142436]"}`}>
                  {m.text}
                </div>
              ))}
            </div>
            <div className="h-14 border-t border-white/10 p-2 flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }}
                placeholder="Напишите сообщение..."
                className="flex-1 h-10 rounded-lg px-3 bg-white text-[#142436] outline-none"
              />
              <button onClick={handleSend} className="h-10 px-4 rounded-lg bg-[var(--brand)] text-white hover:brightness-110">Отпр.</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


