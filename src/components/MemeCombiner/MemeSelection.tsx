import React from 'react';
import { Meme } from '../../types/meme';

interface MemeSelectionProps {
  title: string;
  memes: Meme[];
  selectedMeme: Meme | null;
  setSelectedMeme: (meme: Meme) => void;
  className?: string;
}

const MemeSelection: React.FC<MemeSelectionProps> = ({ 
  title, 
  memes, 
  selectedMeme, 
  setSelectedMeme,
  className = ''
}) => {
  return (
    <div className={`bg-purple-900/40 backdrop-blur-md rounded-xl p-6 ${className}`}>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      
      {selectedMeme ? (
        <div className="relative">
          <img 
            src={selectedMeme.image} 
            alt={selectedMeme.name}
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <h4 className="text-lg font-medium text-white">{selectedMeme.name}</h4>
          <p className="text-sm text-white/70">{selectedMeme.description}</p>
          <button 
            onClick={() => setSelectedMeme(null)}
            className="mt-3 text-sm text-pink-400 hover:text-pink-300 transition-colors"
          >
            Change selection
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-white/80 text-sm mb-3">Select a meme:</p>
          <div className="grid grid-cols-2 gap-2">
            {memes.slice(0, 6).map((meme) => (
              <button
                key={meme.id}
                onClick={() => setSelectedMeme(meme)}
                className="group transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden rounded-lg bg-purple-800/50">
                  <img 
                    src={meme.image} 
                    alt={meme.name}
                    className="w-full h-20 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end p-2">
                    <span className="text-xs text-white font-medium truncate w-full">
                      {meme.name}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MemeSelection;