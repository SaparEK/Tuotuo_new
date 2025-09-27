"use client";

import Header from "@/components/Header";
import { useLocale } from "@/context/LocaleProvider";

export default function AgreementPage() {
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
                Условия пользования
              </h1>
              <p className="text-lg sm:text-xl text-white/90 font-light">
                Правила использования сайта и услуг
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
                Настоящие Условия пользования (далее — «Условия») регулируют отношения между 
                пользователями сайта tuotuokz.com и компанией TuoTuoKz (далее — «Компания»).
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Принятие условий</h2>
              <p className="text-gray-700 mb-6">
                Использование сайта и услуг Компании означает полное согласие с настоящими Условиями. 
                Если вы не согласны с какими-либо положениями, пожалуйста, не используйте наш сайт.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Описание услуг</h2>
              <p className="text-gray-700 mb-4">
                Компания предоставляет следующие услуги:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Автомобильные перевозки грузов</li>
                <li>Таможенное оформление</li>
                <li>Складские услуги</li>
                <li>Фулфилмент</li>
                <li>Контейнерные перевозки</li>
                <li>Консультационные услуги в области логистики</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Права и обязанности пользователей</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1. Права пользователей</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Получать качественные услуги в соответствии с договором</li>
                <li>Получать полную информацию об услугах и их стоимости</li>
                <li>Требовать соблюдения конфиденциальности персональных данных</li>
                <li>Получать поддержку и консультации</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2. Обязанности пользователей</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Предоставлять достоверную информацию</li>
                <li>Соблюдать условия договоров</li>
                <li>Своевременно оплачивать услуги</li>
                <li>Не использовать сайт в противоправных целях</li>
                <li>Соблюдать авторские права и интеллектуальную собственность</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Интеллектуальная собственность</h2>
              <p className="text-gray-700 mb-6">
                Все материалы сайта, включая тексты, изображения, логотипы, дизайн, являются 
                интеллектуальной собственностью Компании и защищены авторским правом. 
                Использование материалов без письменного разрешения запрещено.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Ограничение ответственности</h2>
              <p className="text-gray-700 mb-6">
                Компания не несет ответственности за:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Временные технические сбои сайта</li>
                <li>Действия третьих лиц</li>
                <li>Ущерб, причиненный неправильным использованием сайта</li>
                <li>Потерю данных вследствие действий пользователя</li>
                <li>Задержки, вызванные форс-мажорными обстоятельствами</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Конфиденциальность</h2>
              <p className="text-gray-700 mb-6">
                Обработка персональных данных пользователей регулируется Политикой конфиденциальности, 
                которая является неотъемлемой частью настоящих Условий.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Порядок разрешения споров</h2>
              <p className="text-gray-700 mb-6">
                Все споры и разногласия решаются путем переговоров. В случае невозможности 
                достижения соглашения споры подлежат рассмотрению в суде по месту нахождения Компании.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Форс-мажор</h2>
              <p className="text-gray-700 mb-6">
                Стороны освобождаются от ответственности за неисполнение обязательств, 
                если это вызвано обстоятельствами непреодолимой силы: стихийными бедствиями, 
                военными действиями, решениями государственных органов и другими обстоятельствами, 
                не зависящими от воли сторон.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Изменение условий</h2>
              <p className="text-gray-700 mb-6">
                Компания оставляет за собой право изменять настоящие Условия в любое время. 
                Изменения вступают в силу с момента их публикации на сайте. Продолжение использования 
                сайта после внесения изменений означает согласие с новыми условиями.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Контактная информация</h2>
              <p className="text-gray-700 mb-6">
                По всем вопросам, связанным с настоящими Условиями, обращайтесь:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> legal@tuotuokz.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Телефон:</strong> +7 775 554 97 39
                </p>
                <p className="text-gray-700">
                  <strong>Адрес:</strong> Алматы, Казахстан
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Заключительные положения</h2>
              <p className="text-gray-700 mb-6">
                Настоящие Условия составлены в соответствии с законодательством Республики Казахстан. 
                Если какое-либо положение настоящих Условий будет признано недействительным, 
                остальные положения сохраняют свою силу.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
