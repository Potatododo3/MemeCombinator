import React, { useState } from 'react';
import { Atom, Dices, ArrowRight } from 'lucide-react';
import { popularMemes } from '../../data/memes';
import { Meme } from '../../types/meme';
import MemeSelection from './MemeSelection';
import ResultDisplay from './ResultDisplay';

const MemeCombinerTool: React.FC = () => {
  const [selectedMeme1, setSelectedMeme1] = useState<Meme | null>(null);
  const [selectedMeme2, setSelectedMeme2] = useState<Meme | null>(null);
  const [combinedMeme, setCombinedMeme] = useState<Meme | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCombine = () => {
    if (!selectedMeme1 || !selectedMeme2) return;
    
    setIsAnimating(true);
    setIsLoading(true);
    
    // Simulate processing time
    setTimeout(() => {
      const randomMeme = popularMemes[Math.floor(Math.random() * popularMemes.length)];
      const newName = `${selectedMeme1.name.substring(0, 4)}${selectedMeme2.name.substring(selectedMeme2.name.length - 4)}`;
      
      setCombinedMeme({
        id: `combined-${Date.now()}`,
        name: newName,
        image: randomMeme.image, // For demo purposes, just use a random existing meme
        description: `A powerful fusion of ${selectedMeme1.name} and ${selectedMeme2.name}`
      });
      
      setIsLoading(false);
    }, 2000);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };

  const resetCombiner = () => {
    setSelectedMeme1(null);
    setSelectedMeme2(null);
    setCombinedMeme(null);
  };

  return (
    <section id="combine" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-flex items-center">
            <Atom size={32} className="mr-2 text-pink-400" />
            Meme Combiner Lab
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Select two memes to combine and create a new hybrid meme that could become the next viral sensation!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {!combinedMeme ? (
            <>
              <MemeSelection 
                title="Base Meme"
                memes={popularMemes}
                selectedMeme={selectedMeme1}
                setSelectedMeme={setSelectedMeme1}
                className={isAnimating ? 'combine-anim' : ''}
              />
              
              <div className="flex flex-col items-center justify-center">
                <button
                  className={`bg-gradient-to-r from-pink-500 to-purple-600 
                            hover:from-pink-600 hover:to-purple-700 text-white 
                            py-3 px-6 rounded-lg transition-all duration-300 
                            flex items-center justify-center
                            ${selectedMeme1 && selectedMeme2 ? 'opacity-100 hover:scale-105' : 'opacity-50 cursor-not-allowed'}`}
                  onClick={handleCombine}
                  disabled={!selectedMeme1 || !selectedMeme2 || isAnimating}
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-4 border-white/20 border-t-white"></div>
                  ) : (
                    <>
                      <span className="mr-2">Combine</span>
                      <Dices size={20} />
                    </>
                  )}
                </button>
                
                <div className="mt-4 flex items-center text-white/60">
                  <ArrowRight size={16} />
                  <span className="ml-2 text-sm">Random result each time</span>
                </div>
              </div>
              
              <MemeSelection 
                title="Modifier Meme"
                memes={popularMemes}
                selectedMeme={selectedMeme2}
                setSelectedMeme={setSelectedMeme2}
                className={isAnimating ? 'combine-anim' : ''}
              />
            </>
          ) : (
            <ResultDisplay 
              combinedMeme={combinedMeme}
              resetCombiner={resetCombiner}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default MemeCombinerTool;