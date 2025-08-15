import React, { useState } from 'react';
import cn from "clsx";
import { ShieldCheck, Clock, CheckCircle, Award } from "lucide-react";
import { Link } from 'react-router-dom';
import { useProjects } from '../../context/ProjectsContext';
import { BeforeAfterSection } from '../components/BeforeAfterSection';
import { SubApplication } from '../components/SubApplication';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { testimonialsData } from '../../constants/testimonials';
import { FeedbackForm } from '../components/FeedbackForm';
const features = [
    {
        icon: ShieldCheck,
        title: "Гарантия качества",
        text: "Предоставляем до 5 лет гарантии на все виды работ и используемые материалы.",
    },
    {
        icon: Clock,
        title: "Соблюдение сроков",
        text: "Выполняем работы строго в соответствии с согласованными графиками.",
    },
    {
        icon: Award,
        title: "Сертифицированные материалы",
        text: "Используем только сертифицированные материалы.",
    },
    {
        icon: CheckCircle,
        title: "Гарантия качества",
        text: "Предоставляем до 5 лет гарантии на все виды работ и используемые материалы.",
    },
];

const Hero = () => {
    const [feedbackOpen, setFeedbackOpen] = useState(false);
    return (
        <section className="relative w-full h-[80vh] min-h-[500px] flex items-center overflow-hidden">
            {/* Фоновое изображение с улучшенным затемнением */}
            {feedbackOpen && (
                <FeedbackForm onClose={() => setFeedbackOpen(false)} />
            )}
            <div className="absolute inset-0">
                <img
                    src="/main_home.png"
                    alt="Крыша"
                    className="w-full h-full object-cover"
                />
                <div
                    className={cn(
                        "absolute inset-0",
                        // Для экранов < 1300px: полное затемнение с градиентом сверху
                        "bg-black/50", // Базовое затемнение
                        "bg-gradient-to-t from-black/70 to-transparent", // Дополнительный градиент

                        // Для экранов ≥ 1300px: затемнение только левой половины
                        "xl:bg-none", // Отключаем глобальное затемнение
                        "xl:bg-gradient-to-r xl:from-black/80 xl:via-black/50 xl:to-transparent",
                        "xl:w-1/2" // Занимает ровно половину экрана
                    )}
                />
            </div>

            {/* Контент */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white z-10">
                <div className={cn(
                    "max-w-full space-y-6", // Добавил space-y-6 для вертиканых отступов
                    "sm:max-w-lg md:max-w-xl lg:max-w-2xl",
                    // Ограничиваем ширину текстового блока на широких экранах
                    "xl:max-w-[50%]",
                    // Добавляем немного отступа сверху на мобильных
                    "mt-10 sm:mt-0"
                )}>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight mb-3 md:mb-4">
                        Надежные кровельные решения из ПВХ мембраны
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-white/90 leading-relaxed max-w-[90%]">
                        Профессиональный монтаж современных кровельных систем с гарантией качества.
                        Специализируемся на плоских кровлях для жилых и коммерческих объектов.
                    </p>

                    {/* Кнопки */}
                    <div className="flex flex-col sm:flex-row gap-3 mb-8 md:mb-10">
                        <button onClick={() => setFeedbackOpen(true)} className="bg-red-600 hover:bg-red-700 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-white font-medium transition-colors text-base shadow-lg hover:shadow-red-700/30">
                            Консультация
                        </button>
                        <Link
                            to="/our-works"
                            className={cn(
                                "bg-white/10 hover:bg-white/20 backdrop-blur-sm",
                                "border border-white/20 px-5 py-2.5 sm:px-6 sm:py-3",
                                "rounded-lg font-medium transition-colors text-base",
                                "shadow-lg hover:shadow-white/10",
                                "text-center sm:text-left"
                            )}
                        >
                            Проекты
                        </Link>
                    </div>

                    {/* Статистика */}
                    <div className={cn(
                        "flex flex-wrap gap-6 sm:gap-8",
                        "backdrop-blur-sm bg-white/10 p-4 rounded-xl",
                        "border border-white/10",
                        "mx-auto sm:mx-0",
                        "w-max max-w-full"
                    )}>
                        <div className="text-center min-w-[70px]">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">15+</p>
                            <span className="text-xs sm:text-sm opacity-80">лет опыта</span>
                        </div>
                        <div className="text-center min-w-[70px]">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">500+</p>
                            <span className="text-xs sm:text-sm opacity-80">проектов</span>
                        </div>
                        <div className="text-center min-w-[70px]">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">5</p>
                            <span className="text-xs sm:text-sm opacity-80">лет гарантии</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const WhyChooseUs = () => {
    return (
        <section className="py-16  bg-white">
            <div className="container max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Почему выбирают нас</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    Более 15 лет мы создаем надежные кровельные решения, которым доверяют наши клиенты
                </p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map(({ icon: Icon, title, text }, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <Icon size={40} className="text-red-600 mb-4" />
                            <h3 className="text-lg font-semibold mb-2">{title}</h3>
                            <p className="text-gray-600 text-sm">{text}</p>
                        </div>
                    ))}
                </div>
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
            <TestimonialsSection testimonials={testimonialsData} />
            <SubApplication />
        </div>
    );
};

export default Home;