import React from 'react';
export function ProfessionalApproach() {
  return <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Профессиональный подход к каждому проекту
            </h2>
            <p className="text-gray-600 mb-8">
              Мы понимаем, что каждый объект уникален и требует индивидуального
              подхода. Наши специалисты проводят детальное обследование,
              учитывают все особенности конструкции и ваши пожелания, чтобы
              предложить оптимальное решение.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                <span>Бесплатная консультация</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                <span>Детальная смета без скрытых платежей</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                <span>Поэтапная оплата работ</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/3 bg-white p-8 rounded-lg shadow-md">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-red-500 mb-2">500+</h3>
              <p className="text-gray-600 mb-4">выполненных проектов</p>
              <div className="w-full h-1 bg-red-500 mb-4"></div>
              <p className="text-gray-600 text-sm">
                95% клиентов рекомендуют нас своим знакомым
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}