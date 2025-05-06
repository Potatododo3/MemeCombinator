import React, { useState } from 'react';
import { ThumbsUp, User, Calendar, Share2 } from 'lucide-react';
import { MemeCombo } from '../../types/meme';

interface MemeCardProps {
  meme: MemeCombo;
}

const MemeCard: React.FC<MemeCardProps> = ({ meme }) => {
  const [votes, setVotes] = useState(meme.votes);
  const [hasVoted, setHasVoted] = useState(false);
  
  const handleVote = () => {
    if (!hasVoted) {
      setVotes(votes + 1);
      setHasVoted(true);
    } else {
      setVotes(votes - 1);
      setHasVoted(false);
    }
  };

  return (
    <div className="bg-purple-900/40 backdrop-blur-md rounded-xl overflow-hidden hover-glitch group transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative">
        <img 
          src={meme.image} 
          alt={meme.name}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-pink-600/80 backdrop-blur-sm text-white px-2 py-1 rounded text-sm font-medium">
          {meme.name}
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-white/80 text-sm mb-4">{meme.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center text-white/70 text-sm">
            <User size={14} className="mr-1" />
            <span className="mr-3">{meme.creator}</span>
            <Calendar size={14} className="mr-1" />
            <span>{meme.createdAt}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              className="text-white/80 hover:text-white transition-colors"
              onClick={() => alert('Share feature coming soon!')}
            >
              <Share2 size={18} />
            </button>
            
            <button 
              className={`flex items-center space-x-1 px-2 py-1 rounded-md transition-colors ${
                hasVoted 
                  ? 'bg-pink-500/30 text-pink-300' 
                  : 'bg-purple-800/50 text-white/80 hover:text-white hover:bg-purple-800'
              }`}
              onClick={handleVote}
            >
              <ThumbsUp size={14} />
              <span>{votes}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeCard;