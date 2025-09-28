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
        className={`origin-bottom-right mt-3 mr-0 absolute right-0 bottom-16 w-[450px] sm:w-[550px] h-[650px] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
        style={{ 
          backgroundColor: "#142436",
          resize: "both",
          minWidth: "400px",
          minHeight: "500px",
          maxWidth: "800px",
          maxHeight: "800px"
        }}
      >
        <div className="h-12 px-4 flex items-center justify-between border-b border-white/10 text-white">
          <span className="font-semibold">Поддержка</span>
          <button onClick={() => setOpen(false)} aria-label="Закрыть" className="text-white/80 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="h-[calc(100%-48px-64px)] grid grid-cols-3">
          <div className="border-r border-white/10 p-4 text-white flex flex-col">
            <div className="text-sm font-medium mb-4">Каналы связи</div>
            <div className="flex flex-col gap-3">
              <a href="https://t.me/tuotuokz_bot" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-lg bg-white/10 hover:bg-white/15 transition flex items-center justify-center" title="Telegram">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a href="https://api.whatsapp.com/send?phone=77755549739&text=start" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-lg bg-white/10 hover:bg-white/15 transition flex items-center justify-center" title="WhatsApp">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <a href="mailto:info@tuotuo.kz" className="w-12 h-12 rounded-lg bg-white/10 hover:bg-white/15 transition flex items-center justify-center" title="Email">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div ref={listRef} className="flex-1 overflow-y-auto p-3 space-y-2">
              {messages.map((m) => (
                <div key={m.id} className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${m.role === "user" ? "ml-auto bg-white/15 text-white" : "mr-auto bg-white text-[#142436]"}`}>
                  {m.text}
                </div>
              ))}
            </div>
            <div className="h-16 border-t border-white/10 p-3 flex items-center gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }}
                placeholder="Напишите сообщение..."
                className="flex-1 h-12 rounded-lg px-4 bg-gray-800 text-white border border-gray-600 focus:border-[var(--brand)] focus:outline-none text-sm placeholder-gray-400"
              />
              <button onClick={handleSend} className="h-12 px-6 rounded-lg bg-[var(--brand)] text-white hover:brightness-110 font-medium text-sm">Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


