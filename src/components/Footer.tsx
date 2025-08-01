import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="h-6 w-6 mr-2 text-purple-400" />
          <span className="text-lg font-semibold">Virtual Stylist</span>
          <Sparkles className="h-6 w-6 ml-2 text-purple-400" />
        </div>
        <p className="text-gray-300 mb-4">
          AI-powered outfit recommendations for life's special moments
        </p>
        <div className="flex items-center justify-center text-gray-400">
          <span>Made with</span>
          <Heart className="h-4 w-4 mx-2 text-red-400" />
          <span>for style enthusiasts</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;