import React, { useState } from 'react';
import { ContactSection } from '../components/ContactSection';
import { SearchIcon, FilterIcon} from 'lucide-react';
import { useProjects } from '../../context/ProjectsContext';
import { Project, ProjectCategory } from '../constants/type';
import { ProjectCard } from '../components/ProjectCard';
import ourWorks from '@/assets/our-works.jpg';


// Первый блок страницы
const HeroSection = () => (
  <section className="relative">
    <div className="absolute inset-0 bg-black/60 z-10"></div>
    <div className="relative h-[600px]">
      <img src={ourWorks} alt="Наши работы" className="w-full h-full object-cover" />
    </div>
    <div className="absolute inset-0 z-20 flex items-center justify-center">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Наши работы</h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Выполненные проекты компании SOLID ROOF по монтажу и ремонту кровли в Краснодаре и Краснодарском крае
        </p>
      </div>
    </div>
  </section>
);

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
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === category.id 
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