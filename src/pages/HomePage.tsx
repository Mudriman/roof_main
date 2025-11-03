import React, { useState } from 'react';
import cn from "clsx";
import { Link } from 'react-router-dom';
import { useProjects } from '../../context/ProjectsContext';
import { BeforeAfterSection } from '../components/BeforeAfterSection';
import { SubApplication } from '../components/SubApplication';
import { FeedbackForm } from '../components/FeedbackForm';
import homeBack from '@assets/main_home.png';


const Hero = () => {
    const [feedbackOpen, setFeedbackOpen] = useState(false);
    return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Форма обратной связи */}
      {feedbackOpen && <FeedbackForm onClose={() => setFeedbackOpen(false)} />}

      {/* Фоновое изображение + градиент */}
      <div className="absolute inset-0">
        <img
          src={homeBack}
          alt="Крыша"
          className="w-full h-full object-cover"
        />
        <div
          className={cn(
            "absolute inset-0",
            "bg-black/50 bg-gradient-to-t from-black/70 to-transparent",
            "xl:bg-none xl:bg-gradient-to-r xl:from-black/80 xl:via-black/50 xl:to-transparent",
            "xl:w-1/2"
          )}
        />
      </div>

      {/* Контент */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white z-10">
        <div
          className={cn(
            "max-w-full space-y-6",
            "sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-[50%]",
            "mt-10 sm:mt-0"
          )}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight mb-4">
            Плоская кровля под ключ — надёжно, красиво и с гарантией
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-8">
            Делаем кровлю из ПВХ-мембраны, которая прослужит десятилетиями.
            <br className="hidden sm:block" />
            Без протечек, с гарантией до 5 лет и ценой до{" "}
            <span className="font-semibold text-white">8 000 ₽/м²</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setFeedbackOpen(true)}
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors text-base shadow-lg hover:shadow-red-700/30"
            >
              Консультация
            </button>

            <Link
              to="/our-works"
              className={cn(
                "bg-white/10 hover:bg-white/20 backdrop-blur-sm",
                "border border-white/20 px-6 py-3 rounded-lg font-semibold transition-colors text-base",
                "shadow-lg hover:shadow-white/10 text-center sm:text-left"
              )}
            >
              Посмотреть проекты
            </Link>
          </div>

        </div>
      </div>
    </section>
    );
};

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-900">
            Стоимость и преимущества
          </h2>
          <p className="text-gray-500 text-lg">
            Цена, которую вы видите — цена, которую вы платите. Без доплат и сюрпризов.
          </p>
        </div>

        {/* Контент */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть */}
          <div className="space-y-8">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="text-4xl md:text-5xl font-semibold text-gray-900 mb-2">
                  до 8 000 ₽/м²
                </div>
                <p className="text-gray-600 text-lg">по бетонному основанию</p>
              </div>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                максимальная цена
              </span>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-4xl md:text-5xl font-semibold text-gray-900 mb-2">
                от 350 ₽/м²
              </div>
              <p className="text-gray-600 text-lg">за гидроизоляцию</p>
              <p className="text-sm text-gray-400 mt-2">
                Стоимость не изменится после согласования.
              </p>
            </div>
          </div>

          {/* Правая часть */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-600 to-rose-500 rounded-3xl p-10 text-white shadow-md">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Гарантия цены и качества</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Заключаем договор с фиксированной стоимостью — <br />
                  без скрытых платежей и пересчетов после старта.
                </p>
              </div>
            </div>

            {/* Декор */}
            <div className="absolute -bottom-5 -left-5 w-10 h-10 bg-red-200/50 rounded-full blur-md"></div>
            <div className="absolute -top-5 -right-5 w-8 h-8 bg-rose-300/40 rounded-full blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfessionalApproach = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Текстовая часть */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
            Профессиональный подход к каждому объекту
          </h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Мы не просто выполняем монтаж — мы точно рассчитываем, сколько материалов нужно
            именно для вашего объекта. Без переплат и излишков: вы покупаете ровно то количество,
            которое действительно необходимо.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="w-2.5 h-2.5 bg-red-600 rounded-full mr-3 mt-2"></span>
              <span>
                <strong>Точный замер на месте</strong> — учитываем уклоны, примыкания, вентиляцию и все детали конструкции.
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2.5 h-2.5 bg-red-600 rounded-full mr-3 mt-2"></span>
              <span>
                <strong>Расчёт расхода материалов</strong> с учётом технических норм, без округлений “в плюс”.
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2.5 h-2.5 bg-red-600 rounded-full mr-3 mt-2"></span>
              <span>
                <strong>Экономия бюджета</strong> — никаких лишних закупок, каждый метр идёт в дело.
              </span>
            </li>
          </ul>
        </div>

        {/* Правая часть — визуальный блок вместо статистики */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-6 6h6a2 2 0 002-2v-5a2 2 0 00-2-2h-1"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Расчёт под ваш объект
          </h3>
          <p className="text-gray-600 mb-6">
            Вы получаете смету, где указано точное количество материалов и работ.  
            Цена согласуется заранее и остаётся неизменной.
          </p>
          <div className="bg-gradient-to-r from-red-600 to-rose-500 text-white py-3 rounded-xl font-medium">
            Итог = честная стоимость без переплат
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
    const projects = useProjects();


    return (
        <div>
            <Hero />
            <WhyChooseUs />
            <ProfessionalApproach />
            <BeforeAfterSection projects={projects} />
            {/* <TestimonialsSection testimonials={testimonialsData} /> */}
            <SubApplication />
        </div>
    );
};

export default Home;