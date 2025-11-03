import React, { useState } from 'react';
import { ContactSection } from '../components/ContactSection';
import { LayoutIcon, CheckIcon, ThermometerIcon, UmbrellaIcon, BarChart2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';
import roofTightImg from '@/assets/roof-tight.jpg';
import { FeedbackForm } from '../components/FeedbackForm';

export const FlatRoofPage = () => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return <div className="w-full bg-white">

    {/* Hero Section */}
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
       {/* Форма обратной связи */}
            {feedbackOpen && <FeedbackForm onClose={() => setFeedbackOpen(false)} />}

      <div className="absolute inset-0">
        <img
          src={roofTightImg}
          alt="Устройство плоских крыш"
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
              Под ключ
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Плоские <span className="text-red-500">крыши</span>
            </h1>

            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              Комплексное решение для обустройства надежной и долговечной
              плоской кровли с гарантией <span className="font-semibold text-white">до 10 лет</span>.
            </p>

            {/* Преимущества списком */}
            <div className="space-y-3 mt-6">
              {['Современные материалы', 'Срок службы 25+ лет', 'Проектирование и монтаж'].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-white/90">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25" 
                onClick={() => setFeedbackOpen(true)}
              >
                Рассчитать проект
              </button>
              <Link 
                to="/our-works"
                className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                Смотреть портфолио
              </Link>
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
                <LayoutIcon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Устройство плоских крыш под ключ
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Плоская кровля — это современное и функциональное решение для
              коммерческих и жилых зданий. Компания "SOLID ROOF" выполняет
              полный комплекс работ по устройству плоских крыш из ПВХ мембраны
              с использованием современных материалов и технологий.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Мы осуществляем как устройство новых плоских крыш при
              строительстве зданий, так и реконструкцию существующих кровель с
              изменением конструкции и улучшением технических характеристик.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
              Типы плоских крыш
            </h3>
            <div className="space-y-6 mb-10">
              <div className="bg-white rounded-lg shadow p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Традиционная плоская кровля
                </h4>
                <p className="text-gray-700 mb-4">
                  Классическая конструкция с расположением слоев в следующем
                  порядке (снизу вверх): несущая конструкция,
                  теплоизоляция, гидроизоляция.
                </p>
                <p className="text-gray-700">
                  Применяется для большинства типов зданий и сооружений.
                  Обеспечивает хорошую теплоизоляцию и защиту от атмосферных
                  осадков.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Инверсионная плоская кровля
                </h4>
                <p className="text-gray-700 mb-4">
                  Конструкция с обратным расположением слоев: несущая
                  конструкция, гидроизоляция, теплоизоляция, защитный слой.
                </p>
                <p className="text-gray-700">
                  Преимущество данной конструкции — защита гидроизоляционного
                  слоя от механических повреждений и УФ-излучения. Применяется
                  для эксплуатируемых кровель (террасы, зеленые крыши).
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Эксплуатируемая плоская кровля
                </h4>
                <p className="text-gray-700 mb-4">
                  Кровля, предназначенная для размещения дополнительных
                  функциональных зон: террас, зеленых насаждений, зон отдыха,
                  парковок.
                </p>
                <p className="text-gray-700">
                  Требует усиленной конструкции и дополнительных защитных
                  слоев. Позволяет эффективно использовать площадь крыши для
                  различных целей.
                </p>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
              Этапы устройства плоской кровли
            </h3>
            <div className="space-y-6 mb-10">
              <div className="flex">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Проектирование и расчет
                  </h4>
                  <p className="text-gray-700">
                    Разработка проекта с учетом особенностей здания, климатических условий,
                    требований заказчика. Расчет нагрузок, подбор материалов, проектирование
                    узлов и деталей, составление сметы.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Подготовка основания
                  </h4>
                  <p className="text-gray-700">
                    Очистка поверхности от мусора и пыли, выравнивание неровностей,
                    устранение дефектов. Проверка уклона для водоотвода.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
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
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Монтаж теплоизоляции
                  </h4>
                  <p className="text-gray-700">
                    Укладка теплоизоляционных плит из минеральной ваты, экструдированного
                    пенополистирола или PIR-плит вразбежку швов для исключения мостиков холода.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Устройство разделительного слоя
                  </h4>
                  <p className="text-gray-700">
                    Укладка геотекстиля для защиты гидроизоляции от механических повреждений
                    и компенсации температурных расширений.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-white font-bold">6</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Монтаж гидроизоляции
                  </h4>
                  <p className="text-gray-700">
                    Укладка и сварка ПВХ или ТПО мембраны, устройство примыканий к парапетам,
                    вентиляционным шахтам и другим конструктивным элементам.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-white font-bold">7</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Контроль качества и сдача работ
                  </h4>
                  <p className="text-gray-700">
                    Проверка качества выполненных работ, испытание на герметичность,
                    устранение выявленных недостатков. Составление акта сдачи-приемки работ.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Специальные решения для плоских крыш
              </h3>
              <p className="text-gray-700 mb-4">
                Компания "SOLID ROOF" предлагает дополнительные решения для
                повышения функциональности и долговечности плоских крыш:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Установка систем антиобледенения и снеготаяния</li>
                <li>Монтаж систем молниезащиты</li>
                <li>Установка систем безопасности для обслуживания кровли</li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white rounded-lg shadow p-6 border-l-4 border-red-600">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Гарантия на работы
                </h4>
                <p className="text-gray-700">
                  Компания "SOLID ROOF" предоставляет гарантию на устройство
                  плоских крыш до 5 лет в зависимости от типа кровли и
                  используемых материалов.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border-l-4 border-red-600">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Сроки выполнения работ
                </h4>
                <p className="text-gray-700">
                  Сроки устройства плоской кровли зависят от площади,
                  сложности объекта и погодных условий. В среднем, устройство
                  плоской кровли площадью 100 м² занимает от 1 до 2 недель.
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
                  Преимущества плоских крыш
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <BarChart2Icon className="w-5 h-5 text-red-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">
                        Экономичность
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Снижение затрат на строительство за счет уменьшения
                        объема используемых материалов
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <UmbrellaIcon className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">
                        Функциональность
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Возможность использования площади крыши для различных
                        целей (террасы, сады, солнечные батареи)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ThermometerIcon className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">
                        Энергоэффективность
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Хорошая теплоизоляция и возможность установки систем
                        энергосбережения
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Надежность</h4>
                      <p className="text-gray-700 text-sm">
                        При правильном устройстве плоская кровля обеспечивает
                        надежную защиту от атмосферных осадков
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8">
                  <h4 className="font-bold text-gray-900 mb-4">
                    Используемые материалы
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Мы работаем с проверенными производителями кровельных
                    материалов:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>ПВХ и ТПО мембраны (Logicroof, Protan, Sikaplan)</li>
                    <li>
                      Теплоизоляционные материалы (ROCKWOOL, ТЕХНОНИКОЛЬ,
                      URSA)
                    </li>
                    <li>Комплектующие и аксессуары для монтажа кровли</li>
                  </ul>
                </div>
                <div className="mt-8">
                  <a href="tel:+79892132481" className="block w-full bg-red-600 text-white text-center py-3 rounded-md font-medium hover:bg-red-700 transition duration-300">
                    Заказать устройство кровли
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContactSection />
  </div>;
};