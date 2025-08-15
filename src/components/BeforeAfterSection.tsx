import React, { useState } from 'react';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../../constants/type';

interface BeforeAfterSectionProps {
  projects: Project[];
  title?: string;
  description?: string;
  showMoreLink?: boolean;
}

export function BeforeAfterSection({ 
  projects, 
  title = "Результаты наших работ", 
  description = "Наглядные примеры того, как мы преображаем кровлю",
  showMoreLink = true
}: BeforeAfterSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Фильтруем проекты с beforeAfter
  const filteredProjects = projects.filter(p => p.beforeAfter);
  
  if (filteredProjects.length === 0) return null;

  const currentProject = filteredProjects[currentIndex];
  const { before, after } = currentProject.beforeAfter!;

  const handlePrevious = () => {
    setCurrentIndex(prev => prev === 0 ? filteredProjects.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % filteredProjects.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            {description}
          </p>
          
          <div className="relative">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 inline-block bg-white px-4 py-1 rounded-full shadow-sm">
              {currentProject.title}
            </h3>

            {/* Навигация */}
            <button 
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-10 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all"
              aria-label="Предыдущий пример"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
            </button>

            <BeforeAfterSlider 
              beforeImage={before}
              afterImage={after}
              beforeText={`Состояние до работ (${currentProject.location}, ${currentProject.year})`}
              afterText={`Готовая кровля (${currentProject.area} м²)`}
            />

            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-10 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all"
              aria-label="Следующий пример"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-800" />
            </button>

            {/* Индикаторы */}
            <div className="flex justify-center mt-6 space-x-2">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full ${index === currentIndex ? 'bg-red-500' : 'bg-gray-300'}`}
                  aria-label={`Пример ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {showMoreLink && (
            <div className="flex justify-center mt-6">
              <Link 
                to="/our-works" 
                className="px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
              >
                Смотреть больше примеров
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}