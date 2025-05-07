import React, { useState } from 'react';
import { Atom, Dices, ArrowRight } from 'lucide-react';
import { Meme } from '../../types/meme';
import ResultDisplay from './ResultDisplay';

// Define preset memes
const pepeMeme: Meme = {
  id: 'pepe',
  name: 'Pepe the Frog',
  image: '/pepe.jpg', // Path relative to the public folder
  description: 'The iconic sad frog, a classic internet meme.',
  ticker: 'PEPE',
};

const dogeMeme: Meme = {
  id: 'doge',
  name: 'Doge',
  image: '/doge.jpg', // Path relative to the public folder
  description: 'Much wow. Such Shiba Inu. Very crypto.',
  ticker: 'DOGE',
};

const MemeCombinerTool: React.FC = () => {
  const [combinedMeme, setCombinedMeme] = useState<Meme | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState<string>("");

  const handleCombine = () => {
    setIsLoading(true);
    setLoadingMessage("Uploading images...");
    
    setTimeout(() => {
      setLoadingMessage("Authenticating AI...");
    }, 1500);

    setTimeout(() => {
      const newName = "PepeDoge";
      
      setCombinedMeme({
        id: `combined-${Date.now()}`,
        name: newName,
        image: '/pepedoge.png', // Preset combined image
        description: `A legendary fusion of ${pepeMeme.name} and ${dogeMeme.name}`,
        ticker: 'PEPEDOGE', // Added ticker for the combined meme
      });
      
      setIsLoading(false);
      setLoadingMessage("");
    }, 3000); // Total 3 seconds
  };

  const resetCombiner = () => {
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
            Meme Combiner Lab Demo
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Witness the fusion of two legendary memes! This is a demo showcasing the MemeCombiner capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {!combinedMeme ? (
            <>
              {/* Display Pepe Meme */}
              <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg text-center">
                <img src={pepeMeme.image} alt={pepeMeme.name} className="w-full h-48 md:h-64 object-contain rounded-md mb-3" />
                <h3 className="text-xl font-semibold text-white mb-1">{pepeMeme.name}</h3>
                {pepeMeme.ticker && <p className="text-sm text-indigo-400 mb-1">Ticker: ${pepeMeme.ticker}</p>}
                <p className="text-xs text-white/70 px-2">{pepeMeme.description}</p>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <button
                  className={`bg-gradient-to-r from-pink-500 to-purple-600 
                            hover:from-pink-600 hover:to-purple-700 text-white 
                            py-3 px-6 rounded-lg transition-all duration-300 
                            flex items-center justify-center
                            ${isLoading ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:scale-105'}`}
                  onClick={handleCombine}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex flex-col items-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-4 border-white/20 border-t-white mb-2"></div>
                      <span>{loadingMessage}</span>
                    </div>
                  ) : (
                    <>
                      <span className="mr-2">Combine</span>
                      <Dices size={20} />
                    </>
                  )}
                </button>
              </div>
              
              {/* Display Doge Meme */}
              <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg text-center">
                <img src={dogeMeme.image} alt={dogeMeme.name} className="w-full h-48 md:h-64 object-contain rounded-md mb-3" />
                <h3 className="text-xl font-semibold text-white mb-1">{dogeMeme.name}</h3>
                {dogeMeme.ticker && <p className="text-sm text-indigo-400 mb-1">Ticker: ${dogeMeme.ticker}</p>}
                <p className="text-xs text-white/70 px-2">{dogeMeme.description}</p>
              </div>
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