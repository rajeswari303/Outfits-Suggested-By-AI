import React, { useState } from 'react';
import Header from './components/Header';
import OccasionSelector from './components/OccasionSelector';
import OutfitRecommendations from './components/OutfitRecommendations';
import Footer from './components/Footer';

function App() {
  const [selectedOccasion, setSelectedOccasion] = useState<string>('');
  const [showRecommendations, setShowRecommendations] = useState<boolean>(false);

  const handleOccasionSelect = (occasion: string) => {
    setSelectedOccasion(occasion);
    setShowRecommendations(true);
  };

  const handleBack = () => {
    setShowRecommendations(false);
    setSelectedOccasion('');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {showRecommendations ? (
        <OutfitRecommendations 
          occasion={selectedOccasion} 
          onBack={handleBack}
        />
      ) : (
        <OccasionSelector 
          selectedOccasion={selectedOccasion}
          onOccasionSelect={handleOccasionSelect}
        />
      )}
      
      <Footer />
    </div>
  );
}

export default App;