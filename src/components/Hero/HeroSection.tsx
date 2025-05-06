import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 300);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <section id="hero" className="min-h-screen pt-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-meme-green-dark to-meme-blue-dark"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-meme-yellow via-transparent to-transparent animate-pulse"></div>
      </div>
      
      {/* Floating meme images */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" 
          alt="Floating meme" 
          className="absolute w-24 h-24 object-cover rounded-full opacity-30 top-1/4 left-1/4 float"
          style={{ animationDelay: "0s" }}
        />
        <img 
          src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg" 
          alt="Floating meme" 
          className="absolute w-32 h-32 object-cover rounded-full opacity-30 top-1/3 right-1/4 float"
          style={{ animationDelay: "1s" }}
        />
        <img 
          src="https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg" 
          alt="Floating meme" 
          className="absolute w-20 h-20 object-cover rounded-full opacity-30 bottom-1/3 left-1/3 float"
          style={{ animationDelay: "2s" }}
        />
      </div>
      
      <div className="container mx-auto px-4 pt-20 relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center">
        <h1 className={`font-display text-6xl md:text-8xl mb-6 text-white ${glitching ? 'glitch' : ''}`}>
          Meme<span className="text-meme-yellow">Combinator</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl glow-text font-display">
          WHERE MEMES COMBINE & EVOLVE
        </p>
        
        <button 
          className="bg-gradient-to-r from-meme-yellow via-meme-green to-meme-blue
                    text-brand-dark font-bold text-lg px-8 py-4 rounded-md 
                    transition-all duration-300 hover:scale-105 
                    hover:shadow-lg hover:shadow-meme-yellow/20
                    flex items-center group"
          onClick={() => document.getElementById('combine')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span>ENTER THE LAB</span>
          <Sparkles 
            size={20} 
            className="ml-2 group-hover:animate-spin"
          />
        </button>
        
        <div className="mt-12 flex flex-col items-center">
          <p className="text-white/70 mb-4 font-display">SCROLL TO START</p>
          <div className="animate-bounce">
            <svg 
              className="w-6 h-6 text-meme-yellow" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;