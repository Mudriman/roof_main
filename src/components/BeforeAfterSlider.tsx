import React, { useState } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeText: string;
  afterText: string;
}

export const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeText,
  afterText,
}: BeforeAfterSliderProps) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative h-72 sm:h-80 md:h-96 lg:h-[450px] overflow-hidden">
        {/* Изображения с плавным переходом */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            showAfter ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage: `url(${beforeImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden={showAfter}
        />
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            showAfter ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${afterImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden={!showAfter}
        />

        {/* Кнопка переключения - теперь более заметная */}
        <button
          onClick={() => setShowAfter(!showAfter)}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 hover:bg-white px-5 py-3 rounded-full shadow-lg transition-all flex items-center gap-3 text-base font-semibold border border-gray-200"
          aria-label={showAfter ? 'Показать исходное состояние' : 'Показать результат'}
        >
          <span className={`inline-block w-3 h-3 rounded-full ${!showAfter ? 'bg-red-500' : 'bg-gray-300'}`} />
          <span>{showAfter ? 'Показать "До"' : 'Показать "После"'}</span>
          <span className={`inline-block w-3 h-3 rounded-full ${showAfter ? 'bg-red-500' : 'bg-gray-300'}`} />
        </button>

        {/* Индикатор текущего состояния */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-gray-200">
          {showAfter ? 'Результат' : 'Исходное состояние'}
        </div>
      </div>

      {/* Описание с анимацией */}
      <div className="p-5 border-t border-gray-100 transition-colors duration-300">
        <p className="text-gray-800 font-medium">
          {showAfter ? afterText : beforeText}
        </p>
      </div>
    </div>
  );
};