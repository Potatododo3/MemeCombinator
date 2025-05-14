import React, { useState, useEffect } from 'react';
import { Menu, X, Twitter } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/90 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://i.imgur.com/3q5DX79.png"
            alt="MemeCombinator Logo"
            className="h-24 w-auto mr-2"
          />
          <h1 className="text-2xl font-display text-white glow-text">
            Meme<span className="text-meme-yellow">Combinator</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Combine', 'Gallery', 'Roadmap', 'Token', 'Community'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-meme-yellow transition-colors duration-300 hover-glitch"
            >
              {item}
            </a>
          ))}
          <a
            href="https://x.com/meme_combinator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            <Twitter size={24} />
          </a>
          <button className="bg-gradient-to-r from-meme-yellow to-meme-green text-brand-dark font-bold px-4 py-2 rounded-md transition-all duration-300 hover:scale-105">
            Connect Wallet
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['Combine', 'Gallery', 'Roadmap', 'Token', 'Community'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-meme-yellow transition-colors duration-300 block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="https://x.com/meme_combinator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300 flex items-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Twitter size={20} className="mr-2" />
              Follow us on X
            </a>
            <button className="bg-gradient-to-r from-meme-yellow to-meme-green text-brand-dark font-bold px-4 py-2 rounded-md transition-all duration-300 w-full">
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;