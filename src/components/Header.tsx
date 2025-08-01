import React from 'react';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="mr-3 h-8 w-8" />
          <h1 className="text-4xl md:text-5xl font-bold">Virtual Stylist</h1>
          <Sparkles className="ml-3 h-8 w-8" />
        </div>
        <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
          Outfits Suggested by AI for Life's Most Memorable Moments
        </p>
      </div>
    </header>
  );
};

export default Header;