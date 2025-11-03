import React, { useState } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';

export const SubApplication = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Простая клиентская валидация
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Пожалуйста, заполните все обязательные поля: имя, телефон и email.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      console.log('Заявка принята:', formData);
      alert('Спасибо! Мы получили вашу заявку и свяжемся с вами в ближайшее время.');
      setFormData({ name: '', phone: '', email: '', message: '' });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-3">
          Свяжитесь с нами
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Оставьте заявку, и наш специалист свяжется с вами для консультации и расчета стоимости
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <PhoneIcon className="w-5 h-5 text-red-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Телефон</h4>
                  <p className="text-lg">+7 (989) 213-24-81</p>
                </div>
              </div>
              <div className="flex items-start">
                <MailIcon className="w-5 h-5 text-red-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Email</h4>
                  <p className="text-lg">solidroof@yandex.ru</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-red-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Адрес</h4>
                  <p className="text-lg">
                    г. Краснодар, ул. Трудовой Славы, д. 62а, <br /> корпус 2, офис 163
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-gray-50 rounded-md">
              <h4 className="font-medium mb-3">Режим работы:</h4>
              <p className="text-gray-600 mb-1">Пн-Пт: 9:00 - 18:00</p>
              <p className="text-gray-600 mb-1">Сб: 10:00 - 15:00</p>
              <p className="text-gray-600">Вс: выходной</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Оставить заявку</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-red-500 text-white py-3 rounded-md font-medium hover:bg-red-600 transition-colors disabled:opacity-70"
              >
                {isLoading ? 'Отправка...' : 'Отправить заявку'}
              </button>
              <p className="text-xs text-center text-gray-500 mt-2">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
