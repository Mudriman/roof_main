import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PhoneIcon, MenuIcon, XIcon } from "lucide-react";
import { FeedbackForm } from "./FeedbackForm";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Главная" },
    { to: "/services", label: "Услуги" },
    { to: "/our-works", label: "Наши работы" },
    { to: "/about-us", label: "О нас" }
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {feedbackOpen && (
          <FeedbackForm onClose={() => setFeedbackOpen(false)} />
        )}
        {/* Логотип */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo-full.png"
            alt="Solid Roof Logo"
            className="hidden md:block h-12"
          />
          <img
            src="/logo-short.png"
            alt="Solid Roof Logo"
            className="block md:hidden h-10"
          />
        </Link>

        {/* Desktop меню */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 hover:text-red-600 hover:font-bold transition-colors font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => setFeedbackOpen(true)}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 flex items-center"
          >
            <PhoneIcon className="w-4 h-4 mr-2" />
            Запросить расчет
          </button>
        </div>

        {/* Mobile бургер */}
        <button
          className="md:hidden text-gray-700 hover:text-red-600"
          onClick={() => setMenuOpen(true)}
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Мобильное меню с анимацией */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Затемнение фона */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setMenuOpen(false)}
        />

        {/* Панель */}
        <div
          className={`absolute top-0 right-0 w-64 bg-white h-full shadow-lg transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-lg font-bold">Меню</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-red-600"
            >
              <XIcon className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto p-4">
            <button
              onClick={() => {
                setFeedbackOpen(true);
                setMenuOpen(false);
              }}
              className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 flex items-center justify-center"
            >
              <PhoneIcon className="w-4 h-4 mr-2" />
              Запросить расчет
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
