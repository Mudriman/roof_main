import React, { useState } from 'react';
import { CheckIcon, ClockIcon, AwardIcon, UsersIcon, ChevronRightIcon, MapPinIcon, BuildingIcon, FileTextIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { useProjects } from '../../context/ProjectsContext';
import { FeedbackForm } from '../components/FeedbackForm';
import aboutUsImg from '@/assets/O_nas_main2.jpg';

export function AboutUs() {
  const projects = useProjects();
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  
  return <div className="flex flex-col min-h-screen bg-white">
    {feedbackOpen && (
      <FeedbackForm onClose={() => setFeedbackOpen(false)} />
    )}
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={aboutUsImg}
          alt="Кровельные работы"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="space-y-6">
            {/* Бейдж */}
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-200 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              SOLID ROOF • С 2008 года
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Надежные <span className="text-red-500">кровельные</span> решения
            </h1>

            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              <span className="font-semibold text-white">SOLID ROOF</span> — это 15+ лет опыта,
              500+ успешных проектов и гарантия качества. Создаем долговечные кровельные системы,
              которые защищают ваше имущество на десятилетия.
            </p>

            {/* Статистика */}
            <div className="flex flex-wrap gap-6 mt-6">
              <div className="text-white">
                <div className="text-2xl font-bold text-red-500">15+</div>
                <div className="text-white/70 text-sm">лет опыта</div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold text-red-500">500+</div>
                <div className="text-white/70 text-sm">проектов</div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold text-red-500">5 лет</div>
                <div className="text-white/70 text-sm">гарантии</div>
              </div>
            </div>

            {/* CTA кнопки */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={() => setFeedbackOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 transform hover:-translate-y-1"
              >
                Запросить расчет
              </button>
              <Link
                to="/our-works"
                className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 text-center"
              >
                Наши проекты
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Скролл-индикатор */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/70 text-sm">Узнайте больше о нас</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
    {/* Company Info */}
    <div className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Наша история</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          Компания SOLID ROOF начала свою деятельность более 15 лет назад и за
          это время выросла в одного из лидеров рынка кровельных работ. Мы
          специализируемся на ремонте и монтаже кровель любой сложности,
          используя только современные технологии и качественные материалы.
        </p>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <div className="text-5xl font-bold text-red-600">15+</div>
          <div className="mt-2 text-lg">лет опыта</div>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold text-red-600">500+</div>
          <div className="mt-2 text-lg">проектов</div>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold text-red-600">5</div>
          <div className="mt-2 text-lg">лет гарантии</div>
        </div>
      </div>
      {/* Our Approach */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Наш подход к работе
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Наша миссия</h3>
            <p className="text-gray-700">
              Обеспечивать клиентов надежными, долговечными и эстетичными
              кровельными решениями, которые защитят их дома и коммерческие
              объекты на долгие годы. Мы стремимся быть лидером в отрасли,
              постоянно совершенствуя наши технологии и методы работы.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Наши ценности</h3>
            <p className="text-gray-700">
              Качество, профессионализм, честность и прозрачность — основные
              принципы нашей работы. Мы ценим доверие наших клиентов и делаем
              все возможное, чтобы оправдать их ожидания, предоставляя услуги
              высочайшего качества в оговоренные сроки.
            </p>
          </div>
        </div>
      </div>
      {/* Why Choose Us */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Почему выбирают нас
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <CheckIcon className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Гарантия качества
              </h3>
              <p className="text-gray-700">
                Предоставляем до 5 лет гарантии на все виды работ и
                используемые материалы.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <ClockIcon className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Соблюдение сроков
              </h3>
              <p className="text-gray-700">
                Выполняем работы строго в соответствии с согласованным
                графиком.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <AwardIcon className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Сертифицированные материалы
              </h3>
              <p className="text-gray-700">
                Используем только сертифицированные материалы высокого
                качества.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <UsersIcon className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Профессиональная команда
              </h3>
              <p className="text-gray-700">
                Наши специалисты имеют многолетний опыт и регулярно повышают
                квалификацию.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Projects */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center ">
          Реализованные проекты
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-10">
          Наши работы говорят сами за себя. Ознакомьтесь с некоторыми из наших
          недавних проектов, которые демонстрируют качество и профессионализм
          команды SOLID ROOF.
        </p>

        <ProjectsGrid
          projects={projects}
          maxItems={3}
          className="px-4 md:px-16 max-w-7xl mx-auto"
        />

        <div className="text-center mt-8">
          <Link
            to="/our-works"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
          >
            Смотреть все проекты
            <ChevronRightIcon className="w-5 h-5 ml-1" />
          </Link>
        </div>
      </div>
      {/* Team */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Наша команда</h2>
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-10">
          Команда SOLID ROOF — это опытные профессионалы, которые любят свое
          дело и стремятся к совершенству в каждом проекте. Наши специалисты
          имеют все необходимые сертификаты и постоянно совершенствуют свои
          навыки.
        </p>
        <div className="bg-red-600 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Работаем по всему Краснодару и Краснодарскому краю
          </h3>
          <p className="text-lg mb-6">
            Гарантируем результат, который удовлетворит Ваши потребности. Цена
            рассчитывается индивидуально по каждому проекту.
          </p>
          <button onClick={() => setFeedbackOpen(true)} className="bg-white text-red-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 inline-block">
            Запросить расчет
          </button>
        </div>
      </div>
      {/* Company Requisites */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Реквизиты</h2>
        <p className="text-gray-700 mb-8 text-center">
          Ниже приведены реквизиты компании. В случае необходимости получения
          дополнительных документов (свидетельства о государственной
          регистрации, идентификационного номера налогоплательщика) Вы можете
          обратиться в бухгалтерию предприятия.
        </p>
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <BuildingIcon className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Полное наименование
                </h3>
                <p className="text-gray-700">
                  ИП Мудриченко Максим Андреевич
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <FileTextIcon className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Название компании
                </h3>
                <p className="text-gray-700">Солидруф</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <FileTextIcon className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">ИНН</h3>
                <p className="text-gray-700">231220387938</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <FileTextIcon className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">ОГРНИП</h3>
                <p className="text-gray-700">315231200000503</p>
              </div>
            </div>
            <div className="flex items-start md:col-span-2">
              <div className="mr-4 mt-1">
                <MapPinIcon className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Юридический адрес
                </h3>
                <p className="text-gray-700">
                  г. Краснодар, ул. Трудовой Славы 62а, корп 2, оф. 163
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}