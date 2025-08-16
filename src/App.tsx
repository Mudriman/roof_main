// App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProjectsProvider } from "../context/ProjectsContext";
import AppRoutes from "./routes";

export function App() {
  return (
    <ProjectsProvider>
      <BrowserRouter basename="/roof_main">
        <AppRoutes />
      </BrowserRouter>
    </ProjectsProvider>
  );
}
