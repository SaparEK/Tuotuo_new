"use client";

import { useState } from "react";

export default function SupportContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);
    // Имитация отправки, подключение к API можно добавить позже
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 400);
  };

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-700 mb-1">Имя</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FC0201]" />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FC0201]" />
        </div>
      </div>
      <div>
        <label className="block text-sm text-gray-700 mb-1">Сообщение</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-3 rounded-lg border border-gray-200 h-32 focus:outline-none focus:ring-2 focus:ring-[#FC0201]" />
      </div>
      <button type="submit" disabled={isLoading} className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#FC0201] text-white hover:brightness-110 transition disabled:opacity-60">
        {isLoading ? "Отправка..." : "Отправить"}
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-emerald-600 text-sm">Сообщение отправлено!</p>}
    </form>
  );
}


