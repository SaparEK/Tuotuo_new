"use client";

import Header from "@/components/Header";
import { useLocale } from "@/context/LocaleProvider";

export default function PolicyPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="bg-seamless-sky">
        {/* Hero Section */}
        <section className="relative h-[40vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2B679B] via-[#1e4a6b] to-[#0f2a3d]"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-400/20 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-md"></div>
          
          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Политика конфиденциальности
              </h1>
              <p className="text-lg sm:text-xl text-white/90 font-light">
                Защита ваших персональных данных
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <p className="text-gray-600 text-sm">
                  <strong>Дата последнего обновления:</strong> 1 января 2025 г.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Общие положения</h2>
              <p className="text-gray-700 mb-6">
                Настоящая Политика конфиденциальности определяет порядок обработки персональных данных 
                пользователей сайта tuotuokz.com (далее — «Сайт») компанией TuoTuoKz (далее — «Компания»).
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Сбор персональных данных</h2>
              <p className="text-gray-700 mb-4">
                Мы собираем следующие категории персональных данных:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Контактная информация (имя, фамилия, номер телефона, адрес электронной почты)</li>
                <li>Информация о компании (название, адрес, сфера деятельности)</li>
                <li>Данные о заказах и услугах</li>
                <li>Техническая информация (IP-адрес, данные браузера, файлы cookie)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Цели обработки данных</h2>
              <p className="text-gray-700 mb-4">
                Персональные данные обрабатываются в следующих целях:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Предоставление логистических услуг</li>
                <li>Обработка заявок и заказов</li>
                <li>Коммуникация с клиентами</li>
                <li>Улучшение качества услуг</li>
                <li>Соблюдение требований законодательства</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Правовые основания обработки</h2>
              <p className="text-gray-700 mb-6">
                Обработка персональных данных осуществляется на основании:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Согласия субъекта персональных данных</li>
                <li>Исполнения договора на оказание услуг</li>
                <li>Соблюдения правовых обязательств</li>
                <li>Законных интересов Компании</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Передача данных третьим лицам</h2>
              <p className="text-gray-700 mb-6">
                Мы не передаем персональные данные третьим лицам, за исключением случаев:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Получения явного согласия субъекта данных</li>
                <li>Требований законодательства</li>
                <li>Необходимости для исполнения договора</li>
                <li>Работы с доверенными партнерами (при наличии соглашения о конфиденциальности)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Безопасность данных</h2>
              <p className="text-gray-700 mb-6">
                Мы применяем технические и организационные меры для защиты персональных данных от 
                несанкционированного доступа, изменения, раскрытия или уничтожения.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Права субъектов данных</h2>
              <p className="text-gray-700 mb-4">
                Вы имеете право:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Получать информацию об обработке ваших данных</li>
                <li>Требовать исправления неточных данных</li>
                <li>Требовать удаления данных</li>
                <li>Ограничивать обработку данных</li>
                <li>Отзывать согласие на обработку</li>
                <li>Подавать жалобы в надзорные органы</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Хранение данных</h2>
              <p className="text-gray-700 mb-6">
                Персональные данные хранятся в течение срока, необходимого для достижения целей 
                обработки, или в соответствии с требованиями законодательства.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Файлы cookie</h2>
              <p className="text-gray-700 mb-6">
                Наш сайт использует файлы cookie для улучшения пользовательского опыта. 
                Вы можете управлять настройками cookie в своем браузере.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Контактная информация</h2>
              <p className="text-gray-700 mb-6">
                По вопросам обработки персональных данных обращайтесь:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> privacy@tuotuokz.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Телефон:</strong> +7 775 554 97 39
                </p>
                <p className="text-gray-700">
                  <strong>Адрес:</strong> Алматы, Казахстан
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Изменения в политике</h2>
              <p className="text-gray-700 mb-6">
                Мы оставляем за собой право изменять настоящую Политику конфиденциальности. 
                О существенных изменениях мы уведомим пользователей через сайт или по электронной почте.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
