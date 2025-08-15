import React from 'react';
import { PhoneIcon } from 'lucide-react';
export const ContactSection = () => {
  return <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 uppercase">
          Выезжаем по Краснодару и Краснодарскому краю
        </h2>
        <p className="text-lg text-gray-700 mb-4 max-w-3xl mx-auto">
          Гарантируем результат, который удовлетворит Ваши потребности. Цена
          рассчитывается индивидуально по каждому проекту.
        </p>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Для получения консультации и вызова специалиста на замеры звоните по
          телефонам:
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
          <a href="tel:+79892132481" className="inline-flex items-center justify-center px-6 py-3 bg-white border border-red-200 rounded-md shadow-sm text-lg font-medium text-red-600 hover:bg-red-50 transition duration-300">
            <PhoneIcon className="w-5 h-5 mr-2" />
            +7 (989) 213-24-81
          </a>
          <a href="tel:+79604865910" className="inline-flex items-center justify-center px-6 py-3 bg-red-600 rounded-md shadow-sm text-lg font-medium text-white hover:bg-red-700 transition duration-300">
            <PhoneIcon className="w-5 h-5 mr-2" />
            +7 (960) 486-59-10
          </a>
        </div>
        <div className="text-gray-700">
          <p className="mb-2">
            или отправляйте вопросы на адрес электронной почты
          </p>
          <a href="mailto:solidroof@yandex.ru" className="text-red-600 font-medium hover:underline">
            solidroof@yandex.ru
          </a>
        </div>
      </div>
    </section>;
};