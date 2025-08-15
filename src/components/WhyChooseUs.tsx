import React from 'react';
import { AwardIcon, ClockIcon, UserIcon } from 'lucide-react';
export const WhyChooseUs = () => {
  return <section className="w-full bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Более 15 лет мы создаем надежные кровельные решения, которым
            доверяют наши клиенты
          </p>
        </div>
        {/* Center Logo */}
        <div className="flex justify-center mb-12">
          <div className="relative w-40 h-40 bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
            <div className="absolute inset-2 bg-gray-700 rounded-full flex items-center justify-center">
              <div className="text-5xl font-bold">
                <span className="text-red-600">S</span>
                <span className="text-white">R</span>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-red-600 rotate-45 transform origin-center"></div>
            </div>
          </div>
        </div>
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="h-48 overflow-hidden">
              <img src="/image.png" alt="Гарантия качества" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <AwardIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Гарантия качества
              </h3>
              <p className="text-gray-600">
                Гарантия до 5 лет на все виды работ
              </p>
            </div>
          </div>
          {/* Benefit 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="h-48 overflow-hidden">
              <img src="/image.png" alt="Профессиональное оборудование" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Профессиональное оборудование
              </h3>
              <p className="text-gray-600">
                Используем современное оборудование высокого качества
              </p>
            </div>
          </div>
          {/* Benefit 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="h-48 overflow-hidden">
              <img src="/image.png" alt="Соблюдение сроков" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <ClockIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Соблюдение сроков
              </h3>
              <p className="text-gray-600">
                Работаем по четкому согласованному графику
              </p>
            </div>
          </div>
          {/* Benefit 4 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="h-48 overflow-hidden">
              <img src="/image.png" alt="Опытные специалисты" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <UserIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Опытные специалисты
              </h3>
              <p className="text-gray-600">
                Команда профессионалов с многолетним опытом работы
              </p>
            </div>
          </div>
        </div>
        {/* Additional Premium Touch */}
        <div className="mt-16 text-center">
          <div className="inline-block py-3 px-6 bg-red-600 text-white font-medium rounded-full transition hover:bg-red-700 cursor-pointer">
            Узнать больше о наших услугах
          </div>
        </div>
      </div>
    </section>;
};