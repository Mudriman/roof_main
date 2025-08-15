import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <div className="flex items-center mb-6">
          <img src="/logo-dark.png" alt="Solid Roof Logo" className="h-12 bg-transparent p-1 rounded" />
        </div>
        <p className="text-gray-400 mb-6">
          Профессиональные кровельные работы с гарантией качества и
          соблюдением сроков.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-6">Услуги</h3>
        <ul className="space-y-4">
          <li>
            <Link to="/services/pvc-membrane" className="text-gray-400 hover:text-white transition duration-300">
              Монтаж ПВХ мембраны
            </Link>
          </li>
          <li>
            <Link to="/services/roof-repair" className="text-gray-400 hover:text-white transition duration-300">
              Ремонт кровли
            </Link>
          </li>
          <li>
            <Link to="/services/flat-roof" className="text-gray-400 hover:text-white transition duration-300">
              Устройство плоских крыш
            </Link>
          </li>
          <li>
            <Link to="/our-works" className="text-gray-400 hover:text-white transition duration-300">
              Наши работы
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-6">Контакты</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <MapPinIcon className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
            <span className="text-gray-400">
              г. Краснодар, ул. Трудовой Славы, д. 62а, корпус 2, офис 183
            </span>
          </li>
          <li className="flex items-center">
            <MailIcon className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
            <a href="mailto:solidroof@yandex.ru" className="text-gray-400 hover:text-white transition duration-300">
              solidroof@yandex.ru
            </a>
          </li>
          <li className="flex items-center">
            <PhoneIcon className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
            <a href="tel:+79892132483" className="text-gray-400 hover:text-white transition duration-300">
              +7 (989) 213-24-83
            </a>
          </li>
          <li className="flex items-center">
            <PhoneIcon className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
            <a href="tel:+79892132483" className="text-gray-400 hover:text-white transition duration-300">
              +7 (960) 486-59-10
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-6 mt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
      © 2023 · SOLID ROOF. Все права защищены.
    </div>
  </footer>;
};