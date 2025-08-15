// ServiceCard.tsx
import { Link } from 'react-router-dom';
import type {Service} from "../../constants/type";

export const ServiceCard = ({ service }: { service: Service }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
    <div className="h-64 overflow-hidden">
      <img 
        src={service.imageUrl} 
        alt={service.title} 
        className="w-full h-full object-cover transform hover:scale-105 transition duration-500" 
      />
    </div>
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-3">
          <service.icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{service.description}</p>
      <Link 
        to={service.link} 
        className="text-gray-700 font-medium hover:text-red-600 transition duration-300 flex items-center"
      >
        Подробнее
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  </div>
);