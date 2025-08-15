import { Link } from "react-router-dom";
import { Project } from "../constants/type";
import { ExternalLinkIcon } from "lucide-react";

type ProjectCardProps = {
  project: Project;
  categoryLabel?: string;
};

export const ProjectCard = ({ project, categoryLabel }: ProjectCardProps) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
    <div className="h-64 overflow-hidden relative group">
      <img 
        src={project.mainImage} 
        alt={project.title} 
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-4 w-full">
          <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full mb-2">
            {categoryLabel}
          </span>
          <div className="flex justify-between items-center">
            <span className="text-white text-sm">
              {project.location}, {project.year}
            </span>
            <span className="text-white text-sm">{project.area} м²</span>
          </div>
        </div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <Link 
        to={`/our-works/${project.id}`} 
        className="text-red-600 font-medium hover:text-red-700 transition duration-300 flex items-center"
      >
        Подробнее о проекте
        <ExternalLinkIcon className="w-4 h-4 ml-1" />
      </Link>
    </div>
  </div>
);