// App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProjectsProvider } from "../context/ProjectsContext";
import { ScrollToTop } from './components/ScrollToTop.tsx';
import AppRoutes from "./routes";

export function App() {
  return (
    <ProjectsProvider>
      <BrowserRouter basename="/roof_main">
          <ScrollToTop/>
          <AppRoutes />
      </BrowserRouter>
    </ProjectsProvider>
  );
}
