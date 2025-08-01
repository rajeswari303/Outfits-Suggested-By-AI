import React from 'react';
import { Outfit } from '../types';
import { Star, Sparkles } from 'lucide-react';

interface OutfitCardProps {
  outfit: Outfit;
  gender: 'male' | 'female';
}

const OutfitCard: React.FC<OutfitCardProps> = ({ outfit, gender }) => {
  const imageUrl = gender === 'male' ? outfit.maleImage : outfit.femaleImage;
  
  if (!imageUrl) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-80 overflow-hidden">
        <img
          src={imageUrl}
          alt={`${outfit.name} - ${gender}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2">
          <Sparkles className="h-5 w-5 text-purple-600" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{outfit.name}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{outfit.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
            <Star className="h-4 w-4 mr-2 text-amber-500" />
            Essential Accessories
          </h4>
          <div className="flex flex-wrap gap-2">
            {outfit.accessories.map((accessory, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
              >
                {accessory}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Styling Tips</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {outfit.tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OutfitCard;