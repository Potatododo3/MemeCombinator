import React from 'react';
import './styles/animations.css';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HeroSection from './components/Hero/HeroSection';
import MemeCombinerTool from './components/MemeCombiner/MemeCombinerTool';
import FeaturedFusions from './components/Gallery/FeaturedFusions';
import RoadmapSection from './components/Roadmap/RoadmapSection';
import TokenInfoSection from './components/TokenInfo/TokenInfoSection';
import CommunitySection from './components/Community/CommunitySection';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <Header />
      
      <main>
        <HeroSection />
        <MemeCombinerTool />
        <FeaturedFusions />
        <RoadmapSection />
        <TokenInfoSection />
        <CommunitySection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;