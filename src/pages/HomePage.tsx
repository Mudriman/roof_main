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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Стоимость и преимущества
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
          Мы предлагаем прозрачную стоимость и гарантированное качество:
          <br />
          <span className="font-semibold text-gray-900">
            от 8 000 ₽/м² по бетонному основанию
          </span>{" "}
          и{" "}
          <span className="font-semibold text-gray-900">
            от 350 ₽/м² за гидроизоляцию
          </span>
        </p>
      </div>
    </section>
    );
};

const ProfessionalApproach = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

                {/* Текстовая часть */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Профессиональный подход к каждому проекту
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Мы понимаем, что каждый объект уникален и требует индивидуального подхода.
                        Наши специалисты проводят детальное обследование, учитывают все особенности
                        конструкции и ваши пожелания, чтобы предложить оптимальное решение.
                    </p>

                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                            Бесплатная консультация
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                            Детальная смета без скрытых платежей
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                            Поэтапная оплата работ
                        </li>
                    </ul>
                </div>

                {/* Статистика */}
                <div className="bg-white rounded-lg shadow p-8 text-center">
                    <p className="text-red-600 text-2xl font-bold mb-2">500+</p>
                    <p className="text-gray-600 mb-6">выполненных проектов</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                        95% клиентов рекомендуют нас своим знакомым
                    </p>
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