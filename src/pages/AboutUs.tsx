import React, { useState } from 'react';
import { CheckIcon, ClockIcon, AwardIcon, UsersIcon, ChevronRightIcon, MapPinIcon, BuildingIcon, FileTextIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { useProjects } from '../../context/ProjectsContext';
import { FeedbackForm } from '../components/FeedbackForm';

export function AboutUs() {
  const projects = useProjects();
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return <div className="flex flex-col min-h-screen bg-white">
    {feedbackOpen && (
      <FeedbackForm onClose={() => setFeedbackOpen(false)} />
    )}
    <div className="relative h-[600px] w-full">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <img src="/O_nas_main2.jpg" alt="Кровельные работы" className="w-full h-full object-cover" />
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Надежные кровельные решения от профессионалов
          </h1>
          <p className="text-xl text-white mb-8 leading-relaxed">
            SOLID ROOF — это 15+ лет опыта, 500+ успешных проектов и гарантия
            качества до 5 лет. Мы создаем долговечные кровельные системы,
            которые защищают ваше имущество на десятилетия.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => setFeedbackOpen(true)} className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors">
              Запросить расчет
            </button>
            <Link to="/our-works" className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 rounded-md font-medium text-lg transition-colors">
              Наши проекты
            </Link>
          </div>
        </div>
      </div>
    </div>
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