'use client';
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useLocale } from "@/context/LocaleProvider";

const ContactCards = () => {
  const { t } = useLocale();

  return (
    <section id="contacts" className="py-16 sm:py-24 bg-[#2B679B]">
      <div className="mx-auto max-w-[1530px] px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between gap-8">
          {/* Телефон */}
          <a
            href="tel:+77755549739"
            className="group bg-gray-900 rounded-2xl p-8 text-center hover:bg-gray-800 transition-all duration-300 flex-1"
          >
            <div className="mb-4">
              <Phone className="w-12 h-12 mx-auto text-red-500" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-white">
              {t("contact.phone")}
            </h3>
            <p className="text-gray-400 text-sm">
              +7 775 554 97 39
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:info@tuotuo.kz"
            className="group bg-gray-900 rounded-2xl p-8 text-center hover:bg-gray-800 transition-all duration-300 flex-1"
          >
            <div className="mb-4">
              <Mail className="w-12 h-12 mx-auto text-red-500" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-white">
              Email
            </h3>
            <p className="text-gray-400 text-sm">
              info@tuotuo.kz
            </p>
          </a>

          {/* Социальные сети */}
          <div className="group bg-gray-900 rounded-2xl p-8 text-center hover:bg-gray-800 transition-all duration-300 flex-1">
            <div className="mb-4">
              <MessageCircle className="w-12 h-12 mx-auto text-red-500" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-white">
              Социальные сети
            </h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://t.me/tuotuokz_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Telegram
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=77755549739&text=start"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
