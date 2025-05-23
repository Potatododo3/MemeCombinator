import React, { useState } from 'react';
import { Sparkles, Share2, Repeat, CreditCard } from 'lucide-react';
import { Meme } from '../../types/meme';

interface ResultDisplayProps {
  combinedMeme: Meme;
  resetCombiner: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ combinedMeme, resetCombiner }) => {
  const [isMinting, setIsMinting] = useState(false);
  const [shareStatus, setShareStatus] = useState<string>("Share");
  
  const handleMint = () => {
    setIsMinting(true);
    setTimeout(() => {
      setIsMinting(false);
      alert('Minting successful! (This is a demo)');
    }, 2000);
  };

  const handleShare = async () => {
    const shareData = {
      title: combinedMeme.name,
      text: combinedMeme.description,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        setShareStatus("Shared!");
        setTimeout(() => setShareStatus("Share"), 2000);
      } catch (error) {
        console.error('Error sharing:', error);
        setShareStatus("Failed");
        setTimeout(() => setShareStatus("Share"), 2000);
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${combinedMeme.name} - ${combinedMeme.description}. Check it out at ${window.location.href}`);
        setShareStatus("Copied!");
        setTimeout(() => setShareStatus("Share"), 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
        setShareStatus("Copy Failed");
        alert("Sharing not supported. Failed to copy link to clipboard.");
        setTimeout(() => setShareStatus("Share"), 2000);
      }
    }
  };

  return (
    <div className="md:col-span-3 bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-md rounded-xl p-8 text-center">
      <div className="flex flex-col items-center max-w-md mx-auto">
        <div className="relative mb-6">
          <div className="absolute -inset-1.5 bg-pink-500/30 rounded-xl blur-md"></div>
          <div className="relative">
            <img 
              src={combinedMeme.image} 
              alt={combinedMeme.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          
          <div className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-md text-sm font-medium flex items-center">
            <Sparkles size={14} className="mr-1" />
            New Meme!
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-1 glow-text">{combinedMeme.name}</h3>
        {combinedMeme.ticker && <p className="text-md text-indigo-300 mb-2 glow-text">Ticker: ${combinedMeme.ticker}</p>}
        <p className="text-white/80 mb-6">{combinedMeme.description}</p>
        
        <div className="grid grid-cols-2 gap-4 w-full mb-6">
          <button 
            className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50"
            onClick={handleMint}
            disabled={isMinting}
          >
            {isMinting ? (
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/20 border-t-white mr-2"></div>
            ) : (
              <CreditCard size={18} className="mr-2" />
            )}
            <span>{isMinting ? 'Minting...' : 'Mint as Token'}</span>
          </button>
          
          <button 
            className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
            onClick={handleShare}
          >
            <Share2 size={18} className="mr-2" />
            <span>{shareStatus}</span>
          </button>
        </div>
        
        <button 
          onClick={resetCombiner}
          className="text-white/70 hover:text-white flex items-center transition-colors"
        >
          <Repeat size={16} className="mr-2" />
          <span>Combine new memes</span>
        </button>
      </div>
    </div>
  );
};

export default ResultDisplay;