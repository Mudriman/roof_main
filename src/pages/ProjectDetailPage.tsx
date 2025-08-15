import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { Link, useParams } from 'react-router-dom';
import { CalendarIcon, MapPinIcon, RulerIcon, CheckCircleIcon, ArrowLeftIcon, ClipboardCheckIcon, UsersIcon, ClockIcon } from 'lucide-react';
import { useProjects } from '../../context/ProjectsContext';
export const ProjectDetailPage = () => {
  // Этапы проекта
  const { id } = useParams();
  const projects = useProjects();
  
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="w-full bg-white py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Проект не найден</h1>
        <Link 
          to="/our-works" 
          className="text-red-600 hover:text-red-700 font-medium inline-flex items-center"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Вернуться к списку проектов
        </Link>
      </div>
    );
  }

  // Находим похожие проекты
  const similarProjects = project.similarProjects 
    ? projects.filter(p => project.similarProjects?.includes(p.id))
    : [];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative h-[60vh] min-h-[600px]">
          <img 
            src={project.mainImage} 
            alt={project.title} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Info Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <Link 
              to="/our-works" 
              className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Вернуться к списку проектов
            </Link>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-gray-700">
                <CalendarIcon className="w-5 h-5 text-red-600 mr-2" />
                <span>{project.year} год</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPinIcon className="w-5 h-5 text-red-600 mr-2" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <RulerIcon className="w-5 h-5 text-red-600 mr-2" />
                <span>{project.area} м²</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircleIcon className={`w-5 h-5 ${project.status === 'completed' ? 'text-green-600' : 'text-yellow-500'} mr-2`} />
                <span>
                  {project.status === 'completed' ? 'Завершен' : 
                   project.status === 'in-progress' ? 'В процессе' : 'Запланирован'}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                О проекте
              </h2>
              
              {project.fullDescription.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4">
                  {paragraph}
                </p>
              ))}

              {project.stages && project.stages.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">
                    Этапы работ
                  </h2>
                  <div className="space-y-12 mb-8">
                    {project.stages.map(stage => (
                      <div key={stage.id} className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/2">
                          <div className="rounded-lg overflow-hidden shadow-md">
                            <img 
                              src={stage.imageUrl} 
                              alt={stage.title} 
                              className="w-full h-64 object-cover" 
                            />
                          </div>
                        </div>
                        <div className="md:w-1/2 flex flex-col justify-center">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="text-white font-bold">
                                {stage.id}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {stage.title}
                            </h3>
                          </div>
                          <p className="text-gray-700">{stage.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden sticky top-8">
                <div className="bg-red-600 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">
                    Технические характеристики
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Тип кровли:</span>
                      <span className="font-medium text-gray-900">
                        {project.specifications.roofType}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Основание:</span>
                      <span className="font-medium text-gray-900">
                        {project.specifications.base}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Теплоизоляция:</span>
                      <span className="font-medium text-gray-900">
                        {project.specifications.insulation}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Разделительный слой:</span>
                      <span className="font-medium text-gray-900">
                        {project.specifications.separatorLayer}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Гидроизоляция:</span>
                      <span className="font-medium text-gray-900">
                        {project.specifications.waterproofing}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Толщина утеплителя:</span>
                      <span className="font-medium text-gray-900">
                        {project.specifications.insulationThickness}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 space-y-4">
                    <div className="flex items-start">
                      <ClipboardCheckIcon className="w-5 h-5 text-red-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">Гарантия</h4>
                        <p className="text-gray-700 text-sm">
                          {project.specifications.warranty} на все виды работ
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ClockIcon className="w-5 h-5 text-red-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">Срок выполнения</h4>
                        <p className="text-gray-700 text-sm">
                          {project.specifications.duration}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a 
                      href="tel:+79892132481" 
                      className="block w-full bg-red-600 text-white text-center py-3 rounded-md font-medium hover:bg-red-700 transition duration-300"
                    >
                      Заказать похожий проект
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      {similarProjects.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Похожие проекты
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarProjects.map(similarProject => (
                <div 
                  key={similarProject.id} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl"
                >
                  <Link to={`/our-works/${similarProject.id}`}>
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={similarProject.mainImage} 
                        alt={similarProject.title} 
                        className="w-full h-full object-cover transform hover:scale-105 transition duration-500" 
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {similarProject.title}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {similarProject.description}
                      </p>
                      <span className="text-red-600 font-medium hover:text-red-700 transition duration-300 flex items-center">
                        Подробнее
                        <svg 
                          className="w-4 h-4 ml-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection />
    </div>
  );
};