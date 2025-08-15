// src/context/ProjectsContext.tsx
import React, { createContext, ReactNode, useContext } from "react";
import { projects } from "../src/constants/projects";
import { Project } from "../src/constants/type";

const ProjectsContext = createContext<Project[]>(projects);

export const useProjects = () => useContext(ProjectsContext);

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  );
};
