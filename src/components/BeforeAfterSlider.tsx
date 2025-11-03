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
    <div className="flex flex-col rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
      <div className="relative h-80 md:h-[450px] overflow-hidden">
        {/* Изображения */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${showAfter ? 'opacity-0' : 'opacity-100'}`}
          style={{
            backgroundImage: `url(${beforeImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${showAfter ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${afterImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Переключатель */}
        <button
          onClick={() => setShowAfter(!showAfter)}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm border border-gray-200 px-6 py-2 rounded-full text-sm font-medium shadow-md hover:bg-white transition flex items-center gap-2"
        >
          <span className={`w-2.5 h-2.5 rounded-full ${!showAfter ? 'bg-red-500' : 'bg-gray-300'}`} />
          {showAfter ? 'Показать "До"' : 'Показать "После"'}
          <span className={`w-2.5 h-2.5 rounded-full ${showAfter ? 'bg-red-500' : 'bg-gray-300'}`} />
        </button>

        {/* Лейбл */}
        <div className="absolute top-4 left-4 bg-white/90 px-4 py-1.5 rounded-full text-sm font-medium border border-gray-200 shadow-sm">
          {showAfter ? 'Результат' : 'До начала работ'}
        </div>
      </div>

      <div className="p-5 border-t border-gray-100">
        <p className="text-gray-800 font-medium">
          {showAfter ? afterText : beforeText}
        </p>
      </div>
    </div>
  );
};
