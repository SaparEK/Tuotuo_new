"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale } from "@/context/LocaleProvider";

export default function Testimonials() {
  const { t } = useLocale();
  const reviews = [
    {
      text: "Отличная логистическая компания! Быстро доставили груз из Алматы в Москву. Водитель был вежливый, груз пришел в целости и сохранности. Рекомендую!",
      author: "Александр К.",
      rating: 5,
      date: "15 декабря 2024",
      link: "https://2gis.kz/almaty/firm/7000000101234567",
      avatar: "АК"
    },
    {
      text: "Работаем с TUOTUOKZ уже полгода. Всегда пунктуальны, цены адекватные. Особенно нравится отслеживание груза в реальном времени.",
      author: "Мария С.",
      rating: 5,
      date: "12 декабря 2024",
      link: "https://2gis.kz/almaty/firm/7000000101234568",
      avatar: "МС"
    },
    {
      text: "Заказывал доставку оборудования. Все прошло гладко, без задержек. Сотрудники компании профессиональные, отвечают на все вопросы.",
      author: "Дмитрий В.",
      rating: 5,
      date: "10 декабря 2024",
      link: "https://2gis.kz/almaty/firm/7000000101234569",
      avatar: "ДВ"
    },
    {
      text: "Очень довольна сервисом! Доставили мой груз точно в срок, упаковка была качественная. Буду обращаться еще.",
      author: "Елена П.",
      rating: 5,
      date: "8 декабря 2024",
      link: "https://2gis.kz/almaty/firm/7000000101234570",
      avatar: "ЕП"
    },
    {
      text: "Лучшая логистическая компания в городе! Работают быстро, надежно, цены честные. Особенно понравилось мобильное приложение для отслеживания.",
      author: "Сергей М.",
      rating: 5,
      date: "5 декабря 2024",
      link: "https://2gis.kz/almaty/firm/7000000101234571",
      avatar: "СМ"
    },
    {
      text: "Отличный сервис! Водитель приехал вовремя, груз доставил аккуратно. Все документы оформили быстро. Спасибо за качественную работу!",
      author: "Анна Л.",
      rating: 5,
      date: "3 декабря 2024",
      link: "https://2gis.kz/almaty/firm/7000000101234572",
      avatar: "АЛ"
    },
    {
      text: "Работаем с компанией уже год. Никогда не подводили, всегда выполняют обязательства. Рекомендую как надежного партнера.",
      author: "Игорь Р.",
      rating: 5,
      date: "1 декабря 2024",
      link: "https://2gis.kz/almaty/firm/7000000101234573",
      avatar: "ИР"
    },
    {
      text: "Заказывал международную доставку. Все прошло отлично, груз доставили в срок. Особенно понравилось отслеживание через приложение.",
      author: "Ольга Н.",
      rating: 5,
      date: "28 ноября 2024",
      link: "https://2gis.kz/almaty/firm/7000000101234574",
      avatar: "ОН"
    },
    {
      text: "Профессиональная команда! Всегда готовы помочь, отвечают на вопросы быстро. Доставка всегда в срок, груз в целости.",
      author: "Владимир Т.",
      rating: 5,
      date: "25 ноября 2024",
      link: "https://2gis.kz/almaty/firm/7000000101234575",
      avatar: "ВТ"
    },
    {
      text: "Отличная компания! Быстро, качественно, недорого. Особенно нравится постоплата - платишь только после доставки. Очень удобно!",
      author: "Татьяна К.",
      rating: 5,
      date: "22 ноября 2024",
      link: "https://2gis.kz/almaty/firm/7000000101234576",
      avatar: "ТК"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const itemsPerSlide = 2;


  // Handle infinite scroll reset
  useEffect(() => {
    const totalSlides = Math.ceil(reviews.length / itemsPerSlide);
    
    if (currentIndex === totalSlides) {
      // Reset to first slide without animation
      setTimeout(() => {
        setCurrentIndex(0);
      }, 500);
    } else if (currentIndex === -1) {
      // Reset to last slide without animation
      setTimeout(() => {
        setCurrentIndex(totalSlides - 1);
      }, 500);
    }
  }, [currentIndex, reviews.length, itemsPerSlide]);

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );


  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const totalSlides = Math.ceil(reviews.length / itemsPerSlide);
      return (prevIndex + 1) % totalSlides;
    });
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const totalSlides = Math.ceil(reviews.length / itemsPerSlide);
      return (prevIndex - 1 + totalSlides) % totalSlides;
    });
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    // Resize viewport to match current slide height for uniform page height
    const resizeViewport = () => {
      const el = viewportRef.current;
      const slide = slideRefs.current[currentIndex + 1]; // +1 due to leading clone
      if (!el || !slide) return;
      const targetHeight = slide.scrollHeight;
      el.style.height = targetHeight + "px";
    };

    resizeViewport();
    const ro = new ResizeObserver(resizeViewport);
    const slide = slideRefs.current[currentIndex + 1];
    if (slide) ro.observe(slide);
    return () => ro.disconnect();
  }, [currentIndex]);

  useEffect(() => {
    // Initial mount sizing
    const el = viewportRef.current;
    const slide = slideRefs.current[1];
    if (el && slide) {
      el.style.height = slide.scrollHeight + "px";
    }
  }, []);

  return (
    <section className="border-t border-[#142436]/5 dark:border-white/10 text-[#142436]">
      <div className="mx-auto max-w-[1530px] px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12 text-[#142436] dark:text-white">
          <div className="group inline-flex flex-col items-center text-center">
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight mb-4 text-[#142436] dark:text-[#142436] transition-colors duration-300 group-hover:text-orange-600">{t("testimonials.heading")}</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-300 group-hover:w-full" />
          </div>
        </div>
        
        <div className="relative w-full">
          {/* Slider Container */}
          <div ref={viewportRef} className="relative overflow-hidden rounded-2xl transition-[height] duration-500 ease-in-out">
            {/* Review Cards */}
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${(currentIndex + 1) * 100}%)` }}
            >
              {/* Clone last slide for infinite effect */}
              <div ref={(el) => { slideRefs.current[0] = el; }} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                  {reviews.slice(-itemsPerSlide).map((review, index) => (
                    <div key={`clone-${index}`} className="bg-white dark:bg-white/5 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-white/10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-full bg-[var(--brand)] flex items-center justify-center text-white font-semibold text-lg">
                          {review.avatar}
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#142436] dark:text-[#142436] text-lg">{review.author}</h4>
                          <div className="flex items-center gap-3">
                            <StarRating rating={review.rating} />
                            <span className="text-sm text-gray-500 dark:text-gray-400">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-[#142436] dark:text-[#142436] mb-6 leading-relaxed text-lg">{review.text}</p>
                      <a 
                        href={review.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[var(--brand)] hover:underline font-medium"
                      >
                        Читать на 2ГИС →
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Original slides */}
              {Array.from({ length: Math.ceil(reviews.length / itemsPerSlide) }, (_, slideIndex) => (
                <div ref={(el) => { slideRefs.current[slideIndex + 1] = el; }} key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                    {reviews.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((review, index) => (
                      <div key={index} className="bg-white dark:bg-white/5 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-white/10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 rounded-full bg-[var(--brand)] flex items-center justify-center text-white font-semibold text-lg">
                            {review.avatar}
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#142436] dark:text-[#142436] text-lg">{review.author}</h4>
                            <div className="flex items-center gap-3">
                              <StarRating rating={review.rating} />
                              <span className="text-sm text-gray-500 dark:text-gray-400">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-[#142436] dark:text-[#142436] mb-6 leading-relaxed text-lg">{review.text}</p>
                        <a 
                          href={review.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[var(--brand)] hover:underline font-medium"
                        >
                          Читать на 2ГИС →
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Clone first slide for infinite effect */}
              <div ref={(el) => { slideRefs.current[slideRefs.current.length - 1] = el; }} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                  {reviews.slice(0, itemsPerSlide).map((review, index) => (
                    <div key={`clone-first-${index}`} className="bg-white dark:bg-white/5 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-white/10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-full bg-[var(--brand)] flex items-center justify-center text-white font-semibold text-lg">
                          {review.avatar}
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#142436] dark:text-[#142436] text-lg">{review.author}</h4>
                          <div className="flex items-center gap-3">
                            <StarRating rating={review.rating} />
                            <span className="text-sm text-gray-500 dark:text-gray-400">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-[#142436] dark:text-[#142436] mb-6 leading-relaxed text-lg">{review.text}</p>
                      <a 
                        href={review.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[var(--brand)] hover:underline font-medium"
                      >
                        Читать на 2ГИС →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Navigation Arrows outside cards container */}
          <button
            onClick={prevSlide}
            className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
            aria-label="Предыдущий отзыв"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
            aria-label="Следующий отзыв"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}