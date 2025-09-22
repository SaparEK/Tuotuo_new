"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

interface ContactFormData {
  to_name: string;
  from_name: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({ to_name: "", from_name: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);
    // EmailJS удалён: имитируем успешную отправку локально
    setTimeout(() => {
      setSuccess(true);
      setFormData({ to_name: "", from_name: "", message: "" });
      setIsLoading(false);
    }, 300);
  };

  return (
    <section id="contacts" className="py-16 sm:py-24 border-t border-[#142436]/5 dark:border-white/10 bg-[#142436] text-white">
      <div className="mx-auto max-w-[1530px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Свяжитесь с нами</h2>
        <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">Оставьте контакты и параметры груза — вернёмся с предложением в течение дня.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Форма */}
          <div className="p-2 sm:p-4 w-full">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Имя</label>
                  <input
                    type="text"
                    name="to_name"
                    value={formData.to_name}
                    onChange={handleChange}
                  className="w-full p-3 bg-[#f7f7f7] dark:bg-[#222222] text-[#142436] dark:text-white rounded-lg focus:ring-2 focus:ring-[var(--brand)] focus:outline-none border border-[#142436]/10 dark:border-white/10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Email</label>
                  <input
                    type="email"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                  className="w-full p-3 bg-[#f7f7f7] dark:bg-[#222222] text-[#142436] dark:text-white rounded-lg focus:ring-2 focus:ring-[var(--brand)] focus:outline-none border border-[#142436]/10 dark:border-white/10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Сообщение</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                className="w-full p-3 bg-[#f7f7f7] dark:bg-[#222222] text-[#142436] dark:text-white rounded-lg h-32 focus:ring-2 focus:ring-[var(--brand)] focus:outline-none resize-y border border-[#142436]/10 dark:border-white/10"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--brand)] text-white p-3 rounded-lg hover:brightness-110 transition disabled:opacity-60"
                disabled={isLoading}
              >
                {isLoading ? "Отправка..." : "Отправить"}
              </button>

              {error && (
                <p className="text-red-500 text-center mt-2">{error}</p>
              )}

              {success && (
                <p className="text-green-500 text-center mt-2">Сообщение отправлено!</p>
              )}
            </form>
          </div>

          {/* Контакты */}
          <div className="flex flex-col space-y-6">
            <a href="tel:+77010701907" className="p-8 rounded-xl text-center bg-white/10 hover:bg-white/15 transition-all hover:scale-[1.02] border border-white/15">
              <Phone className="w-8 h-8 text-[var(--brand)] mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Телефон</h3>
              <p className="text-white/80">+7 701 070 19 07</p>
            </a>
            <a href="mailto:info@tuotuo.kz" className="p-8 rounded-xl text-center bg-white/10 hover:bg-white/15 transition-all hover:scale-[1.02] border border-white/15">
              <Mail className="w-8 h-8 text-[var(--brand)] mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Email</h3>
              <p className="text-white/80">info@tuotuo.kz</p>
            </a>
            <div className="p-8 rounded-xl text-center bg-white/10 hover:bg-white/15 transition-all hover:scale-[1.02] border border-white/15">
              <MessageCircle className="w-8 h-8 text-[var(--brand)] mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Соцсети</h3>
              <div className="flex justify-center gap-4">
                <a href="https://t.me/tuotuokz_bot" className="text-white/80 hover:text-[var(--brand)] transition-colors">Telegram</a>
                <a href="https://api.whatsapp.com/send?phone=77755549739&text=start" className="text-white/80 hover:text-[var(--brand)] transition-colors">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


