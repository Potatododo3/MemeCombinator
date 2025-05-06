import React from 'react';
import { Map } from 'lucide-react';
import { roadmapItems } from '../../data/memes';

const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-flex items-center">
            <Map size={32} className="mr-2 text-pink-400" />
            Meme Roadmap
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our journey to meme domination is just beginning. Check out what's coming next!
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500"></div>
            
            {roadmapItems.map((item, index) => (
              <div 
                key={item.title}
                className={`relative mb-12 ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'}`}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-end">
                      {index % 2 === 0 ? (
                        <>
                          <span>{item.title}</span>
                          <span className="ml-2 text-2xl">{item.icon}</span>
                        </>
                      ) : (
                        <>
                          <span className="mr-2 text-2xl">{item.icon}</span>
                          <span>{item.title}</span>
                        </>
                      )}
                    </h3>
                    <p className={`text-white/70 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-2/12 flex justify-center relative">
                    <div className={`w-6 h-6 rounded-full z-10 ${
                      item.completed 
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600' 
                        : 'bg-purple-800 border-2 border-purple-600'
                    }`}></div>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;