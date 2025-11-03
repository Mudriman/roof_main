// Header.tsx
import React, { useState, useMemo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { PhoneIcon, MenuIcon, XIcon } from "lucide-react";
import logoFull from '@assets/logo-full.png';
import logoShort from '@assets/logo-short.png';
import logoFullWhite from '@assets/logo-dark.png';
import logoShortWhite from '@assets/logo-short-dark.png';
import { FeedbackForm } from "../FeedbackForm";

export type HeaderVariant = "default" | "transparent" | "hero";

interface HeaderProps {
  variant?: HeaderVariant;
}

// Константы выносим наружу
const navLinks = [
  { to: "/", label: "Главная" },
  { to: "/services", label: "Услуги" },
  { to: "/our-works", label: "Наши работы" },
  { to: "/about-us", label: "О нас" }
];

// Мемоизированные стили
const getStyles = (variant: HeaderVariant) => {
  const isTransparent = variant === "transparent" || variant === "hero";
  
  return {
    desktopLogo: isTransparent ? logoFullWhite : logoFull,
    mobileLogo: isTransparent ? logoShortWhite : logoShort,
    text: isTransparent 
      ? (variant === "hero" ? "text-white hover:text-red-200 font-semibold" : "text-white hover:text-red-200")
      : "text-gray-700 hover:text-red-600",
    button: `px-4 py-2 rounded-md flex items-center font-semibold ${
      isTransparent 
        ? "bg-white text-red-600 hover:bg-gray-100" 
        : "bg-red-600 text-white hover:bg-red-700"
    }`,
    header: `w-full transition-colors duration-200 ${
      isTransparent 
        ? "bg-transparent absolute top-0 left-0 z-40" 
        : "bg-white shadow-sm"
    }`,
    burger: isTransparent ? "text-white" : "text-gray-700"
  };
};

export const Header = React.memo(({ variant = "default" }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const location = useLocation();

  // Мемоизируем вычисление стилей
  const styles = useMemo(() => getStyles(variant), [variant]);

  // Мемоизируем обработчики
  const openFeedback = useCallback(() => setFeedbackOpen(true), []);
  const closeFeedback = useCallback(() => setFeedbackOpen(false), []);
  const openMenu = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  
  const closeMenuAndOpenFeedback = useCallback(() => {
    setMenuOpen(false);
    setFeedbackOpen(true);
  }, []);

  return (
    <header className={styles.header}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {feedbackOpen && <FeedbackForm onClose={closeFeedback} />}

        <Link to="/" className="flex items-center">
          <img 
            src={styles.desktopLogo} 
            alt="Solid Roof" 
            className="hidden md:block h-12" 
          />
          <img 
            src={styles.mobileLogo} 
            alt="Solid Roof" 
            className="block md:hidden h-10" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`${styles.text} font-semibold ${
                  location.pathname === link.to ? "font-bold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button onClick={openFeedback} className={styles.button}>
            <PhoneIcon className="w-4 h-4 mr-2" />
            Запросить расчет
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${styles.burger}`} 
          onClick={openMenu}
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <MobileMenu 
          onClose={closeMenu}
          onFeedback={closeMenuAndOpenFeedback}
        />
      )}
    </header>
  );
});

// Выносим мобильное меню в отдельный компонент
const MobileMenu = React.memo(({ 
  onClose, 
  onFeedback 
}: { 
  onClose: () => void; 
  onFeedback: () => void; 
}) => (
  <div className="fixed inset-0 z-50 md:hidden transition-opacity duration-200">
    <div className="absolute inset-0 bg-black/40" onClick={onClose} />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl mx-4 w-full max-w-sm overflow-hidden border border-gray-100">
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <span className="text-lg font-semibold text-gray-800">Меню</span>
          <button onClick={onClose} className="text-gray-500 hover:text-red-600">
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col p-2">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="text-gray-800 hover:text-red-600 py-3 px-4 text-center rounded-lg transition-colors"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-100">
          <button
            onClick={onFeedback}
            className="w-full bg-red-600 text-white py-3 rounded-lg flex items-center justify-center text-base font-medium hover:bg-red-700"
          >
            <PhoneIcon className="w-5 h-5 mr-2" />
            Запросить расчет
          </button>
        </div>
      </div>
    </div>
  </div>
));