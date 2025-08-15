import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
interface BeforeAfterCardProps {
  beforeImage: string;
  afterImage: string;
  beforeText: string;
  afterText: string;
}
export function BeforeAfterCard({
  beforeImage,
  afterImage,
  beforeText,
  afterText
}: BeforeAfterCardProps) {
  const [showAfter, setShowAfter] = useState(false);
  return <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        {/* Before Image */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${showAfter ? 'opacity-0' : 'opacity-100'}`} style={{
        backgroundImage: `url(${beforeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
        {/* After Image */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${showAfter ? 'opacity-100' : 'opacity-0'}`} style={{
        backgroundImage: `url(${afterImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
        {/* Navigation Controls */}
        <div className="absolute inset-x-0 bottom-0 flex justify-between p-3">
          <button className={`bg-white rounded-full p-2 shadow-md ${!showAfter ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`} onClick={() => setShowAfter(false)} disabled={!showAfter}>
            <ChevronLeftIcon className="w-5 h-5 text-gray-800" />
          </button>
          <button className={`bg-white rounded-full p-2 shadow-md ${showAfter ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`} onClick={() => setShowAfter(true)} disabled={showAfter}>
            <ChevronRightIcon className="w-5 h-5 text-gray-800" />
          </button>
        </div>
        {/* Status Indicator */}
        <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full shadow-md text-sm font-medium">
          {showAfter ? 'После' : 'До'}
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-800 font-medium">
          {showAfter ? afterText : beforeText}
        </p>
      </div>
    </div>;
}