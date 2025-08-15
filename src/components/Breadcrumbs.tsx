import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { ChevronRightIcon, HomeIcon } from "lucide-react";
import { useProjects } from "../../context/ProjectsContext";
import { breadcrumbsMap } from "../../constants/breadcrumbsMap";

export const Breadcrumbs = () => {
  const location = useLocation();
  const { id } = useParams();
  const projects = useProjects();

  if (location.pathname === "/") {
    return null;
  }

  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-gray-50 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center text-sm text-gray-500 py-4 w-full">
          <ol className="flex items-center flex-wrap">
            <li className="flex items-center">
              <Link
                to="/"
                className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
              >
                <HomeIcon className="w-4 h-4 mr-1" />
                <span>Главная</span>
              </Link>
            </li>

            {pathnames.map((segment, index) => {
              const href = `/${pathnames.slice(0, index + 1).join("/")}`;
              let label = breadcrumbsMap[segment] || decodeURIComponent(segment);

              if (segment === id) {
                const project = projects.find((p) => p.id === segment);
                if (project) label = project.title;
              }

              return (
                <li key={index} className="flex items-center">
                  <ChevronRightIcon className="w-4 h-4 mx-2 text-gray-400" />
                  {index === pathnames.length - 1 ? (
                    <span className="text-gray-800 font-medium">{label}</span>
                  ) : (
                    <Link
                      to={href}
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      {label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </nav>
  );
};