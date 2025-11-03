import React, { useState } from 'react';
import { ContactSection } from '../components/ContactSection';
import { SearchIcon, FilterIcon } from 'lucide-react';
import { useProjects } from '../../context/ProjectsContext';
import { Project, ProjectCategory } from '../constants/type';
import { ProjectCard } from '../components/ProjectCard';
import ourWorks from '@/assets/our-works.jpg';
import { FeedbackForm } from '../components/FeedbackForm';


// Первый блок страницы
const HeroSection = () => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {feedbackOpen && <FeedbackForm onClose={() => setFeedbackOpen(false)} />}
      <div className="absolute inset-0">
        <img
          src={ourWorks}
          alt="Наши работы"
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
              Портфолио проектов
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Наши <span className="text-red-500">работы</span>
            </h1>

            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              Реализованные проекты компании SOLID ROOF по монтажу и ремонту кровли
              в <span className="font-semibold text-white">Краснодаре</span> и
              Краснодарском крае
            </p>

            {/* Статистика */}
            <div className="flex flex-wrap gap-6 mt-6">
              <div className="text-white">
                <div className="text-2xl font-bold text-red-500">200+</div>
                <div className="text-white/70 text-sm">проектов</div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold text-red-500">10+</div>
                <div className="text-white/70 text-sm">лет опыта</div>
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
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25"
              >
                Вызвать мастера
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300">
                +7 (989) 213-24-81
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Скролл-индикатор */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/70 text-sm">Листайте вниз</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>

  );
};


// Блок фильтрации и поиска обьектов
type FilterSearchSectionProps = {
  categories: { id: string; label: string }[];
  activeCategory: ProjectCategory;
  searchTerm: string;
  onCategoryChange: (category: ProjectCategory) => void;
  onSearchChange: (term: string) => void;
};
const FilterSearchSection = ({
  categories,
  activeCategory,
  searchTerm,
  onCategoryChange,
  onSearchChange,
}: FilterSearchSectionProps) => (
  <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id as ProjectCategory)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory === category.id
                ? 'bg-red-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Поиск проектов..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  </section>
);


// Сетка проектов
type ProjectsGridProps = {
  projects: Project[];
  categories: { id: string; label: string }[];
  onResetFilters: () => void;
};
const ProjectsGrid = ({ projects, categories, onResetFilters }: ProjectsGridProps) => {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <FilterIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Проекты не найдены</h3>
        <p className="text-gray-600 mb-4">Попробуйте изменить параметры поиска</p>
        <button
          onClick={onResetFilters}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          Сбросить фильтры
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          categoryLabel={categories.find(c => c.id === project.category)?.label}
        />
      ))}
    </div>
  );
};


// Блок статисики
const stats = [
  { value: "15+", label: "лет опыта работы" },
  { value: "500+", label: "выполненных проектов" },
  { value: "500 000+", label: "м² уложенной кровли" },
];
const StatsSection = () => (
  <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Наши достижения</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">{stat.value}</div>
            <div className="text-gray-700">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


// Основная страница Наши работы
export const OurWorksPage = () => {
  const projects = useProjects();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch = (
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'Все проекты' },
    { id: 'pvc-membrane', label: 'Монтаж ПВХ мембраны' },
    { id: 'roof-repair', label: 'Ремонт кровли' },
    { id: 'flat-roof', label: 'Устройство плоских крыш' },
  ];

  return (
    <div className="w-full bg-white">
      <HeroSection />
      <FilterSearchSection
        categories={categories}
        activeCategory={activeCategory}
        searchTerm={searchTerm}
        onCategoryChange={setActiveCategory}
        onSearchChange={setSearchTerm}
      />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ProjectsGrid
            projects={filteredProjects}
            categories={categories}
            onResetFilters={() => {
              setActiveCategory('all');
              setSearchTerm('');
            }}
          />
        </div>
      </section>
      <StatsSection />
      <ContactSection />
    </div>
  );
};