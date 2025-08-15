import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { ClockIcon, CheckIcon, AlertTriangleIcon, ActivityIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import repairRoofImg from '@/assets/repair-roof.jpg';

export const RoofRepairPage = () => {
  return <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative h-[60vh] min-h-[600px]">
          <img src={repairRoofImg} alt="Ремонт кровли" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ремонт кровли
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Оперативное устранение протечек и восстановление кровельного
              покрытия любой сложности
            </p>
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
                  <ClockIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Ремонт кровли: быстро и надежно
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Протечки кровли могут привести к серьезным повреждениям
                конструкций здания и внутренней отделки помещений. Компания
                "SOLID ROOF" предлагает профессиональные услуги по ремонту
                кровли любого типа с гарантией качества выполненных работ.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Мы выполняем как локальный ремонт (устранение отдельных
                протечек), так и капитальный ремонт с полной или частичной
                заменой кровельного покрытия.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
                Виды ремонта кровли
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-red-600">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Локальный ремонт
                  </h4>
                  <p className="text-gray-700">
                    Устранение отдельных дефектов, заделка трещин, замена
                    поврежденных участков кровельного покрытия, герметизация
                    примыканий.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-red-600">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Капитальный ремонт
                  </h4>
                  <p className="text-gray-700">
                    Полная или частичная замена кровельного покрытия,
                    восстановление или замена теплоизоляционного слоя.
                  </p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
                Этапы ремонта кровли
              </h3>
              <div className="space-y-6 mb-10">
                <div className="flex">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Диагностика
                    </h4>
                    <p className="text-gray-700">
                      Тщательный осмотр кровли, выявление всех дефектов,
                      определение причин протечек.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Составление плана работ
                    </h4>
                    <p className="text-gray-700">
                      Определение объема работ, расчет необходимых материалов,
                      составление плана работ с указанием сроков выполнения работ.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Подготовительные работы
                    </h4>
                    <p className="text-gray-700">
                      Очистка кровли от мусора и старого покрытия, демонтаж
                      поврежденных участков, подготовка основания.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Ремонтные работы
                    </h4>
                    <p className="text-gray-700">
                      Устранение выявленных дефектов, замена поврежденных
                      участков, восстановление целостности кровельного покрытия.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Контроль качества
                    </h4>
                    <p className="text-gray-700">
                      Проверка качества выполненных работ, испытание на
                      герметичность, устранение выявленных недостатков.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Сдача объекта
                    </h4>
                    <p className="text-gray-700">
                      Приемка выполненных работ заказчиком, оформление
                      гарантийных обязательств, рекомендации по эксплуатации.
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
                Ремонт различных типов кровли
              </h3>
              <div className="space-y-6 mb-10">
                <div className="bg-white rounded-lg shadow p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Ремонт мягкой кровли
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Ремонт кровли из ПВХ мембраны.
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Устранение пузырей и разрывов</li>
                    <li>Восстановление примыканий</li>
                    <li>Замена участков покрытия</li>
                    <li>Гидроизоляция кровельных узлов и проходок</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Ремонт эксплуатируемой кровли
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Ремонт кровли с террасами.
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Восстановление гидроизоляционного слоя</li>
                    <li>Восстановление примыканий</li>
                    <li>Замена участков покрытия</li>
                    <li>Гидроизоляция кровельных узлов и проходок</li>
                  </ul>
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
                    Преимущества ремонта кровли от SOLID ROOF
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <ClockIcon className="w-5 h-5 text-red-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">
                          Оперативность
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Выезд специалиста на объект в кратчайшие сроки после согласования
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">
                          Гарантия качества
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Гарантия на все виды ремонтных работ до 5 лет
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ActivityIcon className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">
                          Комплексный подход
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Устранение не только следствий, но и причин протечек
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <h4 className="font-bold text-gray-900 mb-4">
                      Признаки необходимости ремонта кровли
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <AlertTriangleIcon className="w-4 h-4 text-red-500 mr-2 mt-1" />
                        <span className="text-gray-700">
                          Следы протечек на потолке
                        </span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangleIcon className="w-4 h-4 text-red-500 mr-2 mt-1" />
                        <span className="text-gray-700">
                          Повреждения кровельного покрытия
                        </span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangleIcon className="w-4 h-4 text-red-500 mr-2 mt-1" />
                        <span className="text-gray-700">
                          Отслоения и вздутия покрытия
                        </span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangleIcon className="w-4 h-4 text-red-500 mr-2 mt-1" />
                        <span className="text-gray-700">
                          Нарушение герметичности швов
                        </span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangleIcon className="w-4 h-4 text-red-500 mr-2 mt-1" />
                        <span className="text-gray-700">
                          Застой воды на кровле
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <a href="tel:+79892132481" className="block w-full bg-red-600 text-white text-center py-3 rounded-md font-medium hover:bg-red-700 transition duration-300">
                      Заказать ремонт кровли
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