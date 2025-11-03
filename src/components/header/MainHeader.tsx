import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PhoneIcon, MenuIcon, XIcon } from "lucide-react";
import logoFull from '@assets/logo-full.png';
import logoShort from '@assets/logo-short.png';
import { FeedbackForm } from "../FeedbackForm";

export const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Главная" },
    { to: "/services", label: "Услуги" },
    { to: "/our-works", label: "Наши работы" },
    { to: "/about-us", label: "О нас" }
  ];

  return (
    <header className="w-full bg-white shadow-sm z-50 relative">
      {feedbackOpen && <FeedbackForm onClose={() => setFeedbackOpen(false)} />}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Логотип */}
        <Link to="/" className="flex items-center">
          <img 
            src={logoFull} 
            alt="Solid Roof" 
            className="hidden md:block h-12" 
          />
          <img 
            src={logoShort} 
            alt="Solid Roof" 
            className="block md:hidden h-10" 
          />
        </Link>

        {/* Десктопная навигация */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-gray-700 hover:text-red-600 font-medium transition-colors ${
                  location.pathname === link.to ? "text-red-600 font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button 
            onClick={() => setFeedbackOpen(true)}
            className="bg-red-600 text-white px-5 py-2 rounded-md flex items-center font-semibold hover:bg-red-700 transition-colors"
          >
            <PhoneIcon className="w-4 h-4 mr-2" />
            Расчет
          </button>
        </div>

        {/* Мобильное меню */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(true)}
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <span className="text-lg font-semibold text-gray-800">Меню</span>
              <button 
                onClick={() => setMenuOpen(false)}
                className="text-gray-500 hover:text-red-600"
              >
                <XIcon className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col p-4">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-800 hover:text-red-600 py-3 px-4 rounded-lg transition-colors text-center font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <div className="p-4 border-t border-gray-100">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setFeedbackOpen(true);
                }}
                className="w-full bg-red-600 text-white py-3 rounded-lg flex items-center justify-center font-medium hover:bg-red-700 transition-colors"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Запросить расчет
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};