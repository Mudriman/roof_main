// components/ProjectsGrid.tsx
import { Link } from 'react-router-dom';
import { Project, ProjectCategory } from '../constants/type';

type ProjectsGridProps = {
  projects: Project[];
  maxItems?: number;
  showCategories?: boolean;
  categories?: {
    id: ProjectCategory;
    label: string;
  }[];
  onResetFilters?: () => void;
  className?: string;
};

export const ProjectsGrid = ({
  projects,
  maxItems = projects.length,
  showCategories = false,
  categories = [],
  onResetFilters,
  className = ''
}: ProjectsGridProps) => {
  // Ограничиваем количество проектов
  const displayedProjects = projects.slice(0, maxItems);
  
  // Определяем количество колонок
  const gridCols = maxItems >= 3 ? 'md:grid-cols-3' : 
                  maxItems === 2 ? 'md:grid-cols-2' : 
                  'md:grid-cols-1';
  
  return (
    <div className={className}>
      {/* Категории (если нужно) */}
      {showCategories && categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => {/* обработка выбора категории */}}
              className="px-4 py-2 text-sm rounded-md bg-gray-100 hover:bg-gray-200"
            >
              {category.label}
            </button>
          ))}
          {onResetFilters && (
            <button
              onClick={onResetFilters}
              className="px-4 py-2 text-sm rounded-md bg-gray-100 hover:bg-gray-200"
            >
              Сбросить фильтры
            </button>
          )}
        </div>
      )}
      
      {/* Сетка проектов */}
      <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
        {displayedProjects.map(project => (
          <div 
            key={project.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <Link to={`/our-works/${project.id}`}>
              <div className="h-48 overflow-hidden">
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {project.location}, {project.year} год
                </p>
                <p className="text-gray-700 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};