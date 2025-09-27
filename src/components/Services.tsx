"use client";
import { useState } from "react";
import { useLocale } from "@/context/LocaleProvider";

interface ServiceDetails {
  features: string[];
  description: string;
  benefits: string[];
}

interface Service {
  title: string;
  backgroundImage: string;
  details: ServiceDetails;
}

export default function Services() {
  const { t } = useLocale();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services = [
    {
      title: t("services.truck.title"),
      backgroundImage: "/images/truck-transport.png",
      details: {
        features: [
          t("services.truck.features.0"),
          t("services.truck.features.1"),
          t("services.truck.features.2"),
          t("services.truck.features.3"),
        ],
        description: t("services.truck.description"),
        benefits: [
          t("services.truck.benefits.0"),
          t("services.truck.benefits.1"),
          t("services.truck.benefits.2"),
          t("services.truck.benefits.3"),
        ]
      }
    },
    {
      title: t("services.warehouse.title"),
      backgroundImage: "/images/warehouse-services.jpg",
      details: {
        features: [
          t("services.warehouse.features.0"),
          t("services.warehouse.features.1"),
          t("services.warehouse.features.2"),
          t("services.warehouse.features.3"),
        ],
        description: t("services.warehouse.description"),
        benefits: [
          t("services.warehouse.benefits.0"),
          t("services.warehouse.benefits.1"),
          t("services.warehouse.benefits.2"),
          t("services.warehouse.benefits.3"),
        ]
      }
    },
    {
      title: t("services.container.title"),
      backgroundImage: "/images/container-transport.jpg",
      details: {
        features: [
          t("services.container.features.0"),
          t("services.container.features.1"),
          t("services.container.features.2"),
          t("services.container.features.3"),
        ],
        description: t("services.container.description"),
        benefits: [
          t("services.container.benefits.0"),
          t("services.container.benefits.1"),
          t("services.container.benefits.2"),
          t("services.container.benefits.3"),
        ]
      }
    }
  ];

  return (
    <section id="services" className="border-t border-[#142436]/5">
      <div className="mx-auto max-w-[1530px] px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Section Title */}
        <div className="mb-12 flex justify-center">
          <div className="group inline-flex flex-col items-center text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#142436] transition-colors duration-300 group-hover:text-orange-600">
              {t("services.heading")}
            </h2>
            <div className="mt-2 h-1 w-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-300 group-hover:w-full" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group relative h-[70vh] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${service.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/30 transition-all duration-500" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8">
                {/* Title - Top Left */}
                <h3 className="text-3xl font-bold transition-colors duration-300">
                  <span className="inline-block rounded-xl px-4 py-2 md:px-5 md:py-2 bg-white/70 text-[#142436] dark:bg-black/50 dark:text-white backdrop-blur-sm">
                    {service.title}
                  </span>
                </h3>
                
                {/* Button - Bottom */}
                <div className="flex justify-start">
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg w-fit"
                  >
                    {t("services.more")}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Modal Header */}
              <div className="relative h-48 rounded-t-3xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedService.backgroundImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {selectedService.details.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{t("services.features")}</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedService.details.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{t("services.benefits")}</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedService.details.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                    {t("services.order")}
                  </button>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    {t("common.close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


