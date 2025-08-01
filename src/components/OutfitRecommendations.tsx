import React from 'react';
import { occasionsData } from '../data/occasions';
import OutfitCard from './OutfitCard';
import { ArrowLeft, Users, User } from 'lucide-react';

interface OutfitRecommendationsProps {
  occasion: string;
  onBack: () => void;
}

const OutfitRecommendations: React.FC<OutfitRecommendationsProps> = ({ occasion, onBack }) => {
  const occasionData = occasionsData[occasion];
  
  if (!occasionData) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-600">Occasion not found. Please select a valid occasion.</p>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <button
          onClick={onBack}
          className="flex items-center text-purple-600 hover:text-purple-800 mb-8 font-medium transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Occasions
        </button>
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {occasionData.name} Outfits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {occasionData.description}
          </p>
        </div>

        {/* Men's Outfits */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <User className="h-6 w-6 mr-3 text-blue-600" />
            <h3 className="text-3xl font-bold text-gray-800">Men's Outfits</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {occasionData.maleOutfits.map((outfit, index) => (
              <OutfitCard key={index} outfit={outfit} gender="male" />
            ))}
          </div>
        </div>

        {/* Women's Outfits */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <Users className="h-6 w-6 mr-3 text-pink-600" />
            <h3 className="text-3xl font-bold text-gray-800">Women's Outfits</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {occasionData.femaleOutfits.map((outfit, index) => (
              <OutfitCard key={index} outfit={outfit} gender="female" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutfitRecommendations;