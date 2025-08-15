// routes/index.tsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../pages/HomePage";
import { OurServices } from "../pages/OurServices";
import { PVCMembranePage } from "../pages/PVCMembranePage";
import { RoofRepairPage } from "../pages/RoofRepairPage";
import { FlatRoofPage } from "../pages/FlatRoofPage";
import { OurWorksPage } from "../pages/OurWorksPage";
import { ProjectDetailPage } from "../pages/ProjectDetailPage";
import { AboutUs } from "../pages/AboutUs";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        {/* Услуги */}
        <Route path="/services" element={<OurServices />} />
        <Route path="/services/pvc-membrane" element={<PVCMembranePage />} />
        <Route path="/services/roof-repair" element={<RoofRepairPage />} />
        <Route path="/services/flat-roof" element={<FlatRoofPage />} />

        {/* Наши работы */}
        <Route path="/our-works" element={<OurWorksPage />} />
        <Route path="/our-works/:id" element={<ProjectDetailPage />} />

        {/* О нас */}
        <Route path="/about-us" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}
