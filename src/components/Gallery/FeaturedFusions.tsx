import React from 'react';
import { Trophy, ArrowUpRight } from 'lucide-react';
import { featuredCombos } from '../../data/memes';
import MemeCard from './MemeCard';

const FeaturedFusions: React.FC = () => {
  return (
    <section id="gallery" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-900 via-purple-900 to-indigo-900"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-flex items-center">
            <Trophy size={32} className="mr-2 text-pink-400" />
            Featured Fusions
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Check out the most popular meme combinations created by our community. Vote for your favorites!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCombos.map((meme) => (
            <MemeCard key={meme.id} meme={meme} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#"
            className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors"
          >
            <span>Browse all meme combinations</span>
            <ArrowUpRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFusions;