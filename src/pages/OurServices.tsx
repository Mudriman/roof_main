import React from 'react';
import { services } from '../../constants/services-data';
import { ServiceCard } from '../components/ServiceCard';
import { ContactSection } from '../components/ContactSection';

export const OurServices = () => {
  return <div className="w-full bg-white">
    {/* Основная секция */}
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Наши услуги
        </h1>
        {/* Секция наши услуги */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
    {/* Секция обратной связи */}
    <ContactSection/>
  </div>;
};