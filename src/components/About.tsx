
export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1530px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center">
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Надежный партнер в сфере грузоперевозок с многолетним опытом работы
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              История нашей компании
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-200 via-orange-400 to-orange-600"></div>
              
              <div className="space-y-8">
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-400 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">🚛</span>
                      <h4 className="font-bold text-gray-900 text-lg">Основание компании</h4>
                      <span className="text-orange-600 font-semibold text-sm bg-orange-100 px-3 py-1 rounded-full">2015</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Начали с небольшого автопарка из 5 грузовиков, обслуживая местные маршруты в Казахстане.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-400 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">🌍</span>
                      <h4 className="font-bold text-gray-900 text-lg">Расширение географии</h4>
                      <span className="text-orange-600 font-semibold text-sm bg-orange-100 px-3 py-1 rounded-full">2018</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Запустили международные перевозки в Китай и Россию. Автопарк вырос до 25 единиц техники.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-400 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">📱</span>
                      <h4 className="font-bold text-gray-900 text-lg">Цифровизация процессов</h4>
                      <span className="text-orange-600 font-semibold text-sm bg-orange-100 px-3 py-1 rounded-full">2021</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Внедрили систему отслеживания грузов в реальном времени и мобильное приложение для клиентов.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-400 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">🏆</span>
                      <h4 className="font-bold text-gray-900 text-lg">Лидер рынка</h4>
                      <span className="text-orange-600 font-semibold text-sm bg-orange-100 px-3 py-1 rounded-full">2024</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Стали одной из ведущих логистических компаний в регионе с автопарком более 100 грузовиков.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Наши достижения
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                <div className="text-sm text-gray-600">Единиц техники</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">Стран доставки</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">5000+</div>
                <div className="text-sm text-gray-600">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">99.5%</div>
                <div className="text-sm text-gray-600">Успешных доставок</div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Наши ценности</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Надежность и пунктуальность
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Прозрачность в работе
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Индивидуальный подход к каждому клиенту
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Постоянное развитие и инновации
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

