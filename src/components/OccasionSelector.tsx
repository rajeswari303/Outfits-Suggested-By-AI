import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';

interface OccasionSelectorProps {
  selectedOccasion: string;
  onOccasionSelect: (occasion: string) => void;
}

const validOccasions = [
  'festivals',
  'graduation', 
  'family-gatherings',
  'casual-outing',
  'job-interview',
  'wedding',
  'parties'
];

const OccasionSelector: React.FC<OccasionSelectorProps> = ({ selectedOccasion, onOccasionSelect }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedInput = inputValue.toLowerCase().trim().replace(/\s+/g, '-');
    
    if (!inputValue.trim()) {
      setError('Please enter an occasion');
      return;
    }

    if (validOccasions.includes(normalizedInput)) {
      setError('');
      onOccasionSelect(normalizedInput);
    } else {
      setError('Please enter a valid occasion: festivals, graduation, family gatherings, casual outing, job interview, wedding, or parties');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (error) setError('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-12 w-12 mr-4 text-purple-600" />
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Virtual Stylist
              </h2>
              <Sparkles className="h-12 w-12 ml-4 text-purple-600" />
            </div>
            <p className="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed">
              Outfits Suggested by AI for Life's Most Memorable Moments
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 backdrop-blur-sm bg-opacity-95">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              What's the Occasion?
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Enter occasion (e.g., wedding, graduation, festivals...)"
                  className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              </div>
              
              {error && (
                <div className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300"
              >
                Get Style Recommendations
              </button>
            </form>

            <div className="mt-8 text-sm text-gray-500">
              <p className="mb-2">Available occasions:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Festivals', 'Graduation', 'Family Gatherings', 'Casual Outing', 'Job Interview', 'Wedding', 'Parties'].map((occasion, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                    {occasion}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OccasionSelector;