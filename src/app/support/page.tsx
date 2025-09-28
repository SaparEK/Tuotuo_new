'use client';
import { useLocale } from "@/context/LocaleProvider";
import FAQ from "@/components/FAQ";
import SupportContactForm from "@/components/SupportContactForm";
import Header from "@/components/Header";

export default function ContactsPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen bg-seamless-sky text-foreground">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B679B] via-[#1e4a6b] to-[#0f2a3d]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-400/20 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-md"></div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              {t("contacts.hero.title")}
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 font-light">
              {t("contacts.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-seamless-sky">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          {/* First Row - Head Office and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            
            {/* Head Office */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#2B679B] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{t("contacts.office.title")}</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#2B679B] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{t("contacts.office.address")}</p>
                    <p className="text-gray-600">{t("contacts.office.addressValue")}</p>
                  </div>
                </div>
                
                
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#2B679B] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"></path>
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{t("contacts.office.support")}</p>
                    <p className="text-gray-600">+7 (727) 345-67-81</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#2B679B] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@tuotuokz.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#2B679B] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{t("contacts.office.hours")}</p>
                    <p className="text-gray-600">{t("contacts.office.hoursValue")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl h-80 relative overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d715.2392392285559!2d80.00955036966353!3d44.1873535981926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x387fa6aab048505b%3A0xa29d0ef20abdaf50!2z0YPQuy4g0J_QvtCz0YDQsNC90LjRh9C90LDRjyA2Mywg0JbQsNGA0LrQtdC90YIsINCa0LDQt9Cw0YXRgdGC0LDQvQ!5e0!3m2!1sru!2suk!4v1738599815526!5m2!1sru!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
                title="TuoTuoKz Office Location"
              />
              
              {/* Map Overlay with Address */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                <p className="text-sm font-semibold text-gray-900">Офис TuoTuoKz</p>
                <p className="text-xs text-gray-600">ул. Абая 63, Жаркент</p>
              </div>
            </div>
          </div>

          {/* Second Row - Contact Form */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 relative">
              {t("contacts.form.title")}
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-[#2B679B] rounded-full"></div>
            </h2>
            
            <SupportContactForm />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <FAQ />
        </div>
      </div>
    </div>
  );
}
