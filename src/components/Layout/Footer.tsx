import React from 'react';
import { Heart, Zap, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Zap size={24} className="text-pink-500 mr-2" strokeWidth={2.5} />
              <h3 className="text-xl font-bold">MemeCombiner</h3>
            </div>
            <p className="text-gray-400 mb-4">Where memes evolve into money.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Combine', 'Gallery', 'Roadmap', 'Token', 'Community'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Meme of the Day</h4>
            <div className="bg-purple-900/30 rounded-lg p-4">
              <img 
                src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg" 
                alt="Meme of the day" 
                className="rounded-md mb-2 w-full object-cover h-32"
              />
              <p className="text-sm text-gray-400">Distracted Boyfriend</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 MemeCombiner. Powered by Internet Chaos™
          </p>
          <p className="text-gray-500 text-sm flex items-center">
            Made with <Heart size={16} className="text-pink-500 mx-1" /> for the meme community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;