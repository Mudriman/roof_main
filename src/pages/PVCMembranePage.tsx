import React, { useState } from 'react';
import { ContactSection } from '../components/ContactSection';
import { ShieldIcon, CheckIcon, ZapIcon, DropletIcon, SunIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import montagPvxImg from '@/assets/montag-pvx.jpg';
import { FeedbackForm } from '../components/FeedbackForm';

export const PVCMembranePage = () => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {feedbackOpen && <FeedbackForm onClose={() => setFeedbackOpen(false)} />}
        <div className="absolute inset-0">
          <img
            src={montagPvxImg}
            alt="Монтаж ПВХ мембраны"
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="space-y-6">
              {/* Бейдж */}
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-200 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                Профессиональный монтаж
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                ПВХ <span className="text-red-500">мембрана</span>
              </h1>

              <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                Надежная гидроизоляция кровли с гарантией <span className="font-semibold text-white">10 лет</span>.
                Современные технологии для долговечной защиты вашего здания.
              </p>

              {/* Преимущества списком */}
              <div className="space-y-3 mt-6">
                {['Гарантия 10 лет', 'Быстрый монтаж', 'Европейские материалы'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-white/90">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button 
                  onClick={() => setFeedbackOpen(true)}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25"
                >
                  Рассчитать стоимость
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300">
                  +7 (989) 213-24-81
                </button>
              </div>

            </div>
          </div>

        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/70 text-sm">Листайте вниз</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Description Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <ShieldIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  О технологии ПВХ мембран
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                ПВХ мембрана представляет собой современный полимерный материал
                для гидроизоляции кровли, который обладает высокой прочностью,
                эластичностью и устойчивостью к неблагоприятным погодным
                условиям.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Монтаж ПВХ мембраны — это технологически сложный процесс,
                требующий профессионального подхода и специального оборудования.
                Компания "SOLID ROOF" специализируется на качественном монтаже
                ПВХ мембран на плоских кровлях различных типов зданий.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
                Этапы монтажа ПВХ мембраны
              </h3>
              <div className="space-y-6 mb-10">
                <div className="flex">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Подготовка основания
                    </h4>
                    <p className="text-gray-700">
                      Очистка поверхности от мусора и пыли, выравнивание
                      неровностей, устранение дефектов существующего кровельного
                      покрытия.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Устройство пароизоляции
                    </h4>
                    <p className="text-gray-700">
                      Монтаж пароизоляционной пленки для защиты утеплителя от влаги,
                      поступающей из помещений здания. Герметизация швов и примыканий.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Монтаж теплоизоляции
                    </h4>
                    <p className="text-gray-700">
                      Укладка теплоизоляционных плит из минеральной ваты или
                      экструдированного пенополистирола вразбежку швов.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Монтаж разделительного слоя
                    </h4>
                    <p className="text-gray-700">
                      Укладка геотекстиля для защиты ПВХ мембраны от
                      механических повреждений и компенсации температурных расширений.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Укладка и сварка ПВХ мембраны
                    </h4>
                    <p className="text-gray-700">
                      Раскрой материала, укладка полотен с нахлестом, сварка
                      швов с помощью автоматического и ручного оборудования.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Устройство примыканий и проходок
                    </h4>
                    <p className="text-gray-700">
                      Герметизация мест примыкания к парапетам, вентиляционным
                      шахтам, водосточным воронкам и другим элементам кровли.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">7</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Контроль качества
                    </h4>
                    <p className="text-gray-700">
                      Проверка герметичности швов методом продувки воздухом,
                      общий визуальный контроль качества выполненных работ.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Сроки выполнения работ
                </h3>
                <p className="text-gray-700">
                  Сроки монтажа ПВХ мембраны зависят от площади кровли,
                  сложности объекта и погодных условий. В среднем, монтаж ПВХ
                  мембраны на площади 1000 м² занимает от 7 до 14 дней.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-red-600">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Гарантия на работы
                  </h4>
                  <p className="text-gray-700">
                    Компания "SOLID ROOF" предоставляет гарантию на монтаж ПВХ
                    мембраны до 5 лет.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-red-600">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Срок службы ПВХ мембраны
                  </h4>
                  <p className="text-gray-700">
                    При правильном монтаже и эксплуатации срок службы ПВХ
                    мембраны составляет от 25 до 30 лет.
                  </p>
                </div>
              </div>
              <div className="mt-12">
                <Link to="/services" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  Вернуться к списку услуг
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden sticky top-8">
                <div className="bg-red-600 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">
                    Преимущества ПВХ мембраны
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">
                          Долговечность
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Срок службы до 30 лет без потери эксплуатационных
                          свойств
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <DropletIcon className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">
                          Водонепроницаемость
                        </h4>
                        <p className="text-gray-700 text-sm">
                          100% защита от протечек благодаря бесшовной технологии
                          сварки
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <SunIcon className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">
                          Устойчивость к УФ-излучению
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Не разрушается под воздействием солнечных лучей
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ZapIcon className="w-5 h-5 text-purple-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">
                          Эластичность
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Выдерживает значительные деформации основания без
                          потери целостности
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <h4 className="font-bold text-gray-900 mb-4">
                      Используемые материалы
                    </h4>
                    <p className="text-gray-700 mb-4">
                      Мы работаем только с проверенными производителями ПВХ
                      мембран:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Logicroof (Технониколь)</li>
                      <li>Protan (Норвегия)</li>
                      <li>Sikaplan (Швейцария)</li>
                      <li>Bauder (Германия)</li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <a href="tel:+79892132481" className="block w-full bg-red-600 text-white text-center py-3 rounded-md font-medium hover:bg-red-700 transition duration-300">
                      Заказать монтаж
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </div>)
    ;
};
