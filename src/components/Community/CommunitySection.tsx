import React from 'react';
import { Users, Twitter, MessageSquare, AtSign } from 'lucide-react';

const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-flex items-center">
            <Users size={32} className="mr-2 text-pink-400" />
            Join the Memunity
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Connect with fellow meme enthusiasts, creators, and investors across our social platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-purple-900/40 backdrop-blur-md rounded-xl p-6 hover:bg-purple-900/60 transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white mr-4">
                <Twitter size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Twitter</h3>
            </div>
            <p className="text-white/70 mb-4">Follow us for the latest meme trends, token updates, and community highlights.</p>
            <a 
              href="#"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
            >
              Follow @MemeCombiner
            </a>
            <div className="mt-4 bg-purple-800/50 rounded-lg p-3 opacity-70 group-hover:opacity-100 transition-opacity">
              <div className="flex items-start">
                <img 
                  src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" 
                  alt="Avatar" 
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="flex items-center">
                    <span className="text-white font-medium">@MemeCombiner</span>
                    <span className="text-white/50 text-xs ml-2">2h ago</span>
                  </div>
                  <p className="text-white/90 text-sm">Excited to announce our latest meme combination tool is now LIVE! Create, vote, share! 🚀</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-900/40 backdrop-blur-md rounded-xl p-6 hover:bg-purple-900/60 transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white mr-4">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Discord</h3>
            </div>
            <p className="text-white/70 mb-4">Join our vibrant community for daily meme discussions, contests, and exclusive drops.</p>
            <a 
              href="#"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
            >
              Join 10,420+ members
            </a>
            <div className="mt-4 bg-purple-800/50 rounded-lg p-3 opacity-70 group-hover:opacity-100 transition-opacity">
              <div className="flex flex-col space-y-2">
                <span className="text-indigo-300 text-xs uppercase font-semibold">Active channels</span>
                <div className="flex items-center text-white/90">
                  <span className="text-green-400 mr-2">•</span>
                  <span>#meme-lab</span>
                  <span className="ml-auto text-white/50 text-xs">128 online</span>
                </div>
                <div className="flex items-center text-white/90">
                  <span className="text-green-400 mr-2">•</span>
                  <span>#token-talk</span>
                  <span className="ml-auto text-white/50 text-xs">85 online</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-900/40 backdrop-blur-md rounded-xl p-6 hover:bg-purple-900/60 transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center text-white mr-4">
                <AtSign size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Telegram</h3>
            </div>
            <p className="text-white/70 mb-4">Get instant updates, chat with the team, and connect with the global meme community.</p>
            <a 
              href="#"
              className="inline-block bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
            >
              Join Telegram Group
            </a>
            <div className="mt-4 bg-purple-800/50 rounded-lg p-3 opacity-70 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center justify-between text-white/90 text-sm mb-2">
                <span>Members</span>
                <span>6,969</span>
              </div>
              <div className="flex items-center justify-between text-white/90 text-sm">
                <span>Online</span>
                <span className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  420
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-purple-900/50 text-white border border-purple-700 rounded-l-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 px-6 rounded-r-md transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-white/60 text-sm mt-2">Get the dankest memes and project updates delivered to your inbox</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;