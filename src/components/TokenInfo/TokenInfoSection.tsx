import React from 'react';
import { Coins } from 'lucide-react';
import { tokenInfo } from '../../data/memes';

const TokenInfoSection: React.FC = () => {
  return (
    <section id="token" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-900 via-purple-900 to-indigo-900"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-flex items-center">
            <Coins size={32} className="mr-2 text-pink-400" />
            $MEME Token
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our ecosystem is powered by the $MEME token, with unique burn mechanics tied to meme combinations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Token Allocation Chart */}
          <div className="bg-purple-900/40 backdrop-blur-md rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Token Allocation</h3>
            
            <div className="relative pt-1">
              {tokenInfo.map((item, index) => (
                <div key={item.name} className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="text-xl mr-2">{item.icon}</span>
                      <span className="text-white font-medium">{item.name}</span>
                    </div>
                    <span className="text-white/90 font-medium">{item.percentage}%</span>
                  </div>
                  
                  <div className="overflow-hidden h-4 mb-1 text-xs flex rounded-full bg-purple-800/50">
                    <div 
                      style={{ width: `${item.percentage}%` }}
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center rounded-full 
                                ${index === 0 ? 'bg-pink-500' : 
                                  index === 1 ? 'bg-purple-500' : 
                                  index === 2 ? 'bg-indigo-500' : 'bg-blue-500'}`}
                    ></div>
                  </div>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Token Utility */}
          <div className="bg-purple-900/40 backdrop-blur-md rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Token Utility</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg mr-4">
                  <span className="text-xl">🔄</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Meme Fusion</h4>
                  <p className="text-white/70 text-sm">Spend tokens to combine memes with higher success rates and rarer outcomes.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg mr-4">
                  <span className="text-xl">🗳️</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Governance</h4>
                  <p className="text-white/70 text-sm">Vote on platform features, meme trends, and community initiatives.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg mr-4">
                  <span className="text-xl">🔥</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Meme Burn Mechanics</h4>
                  <p className="text-white/70 text-sm">Every meme combination burns a small amount of tokens, creating deflationary pressure.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg mr-4">
                  <span className="text-xl">💎</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Premium Features</h4>
                  <p className="text-white/70 text-sm">Access exclusive meme templates, editing tools, and early feature releases.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenInfoSection;