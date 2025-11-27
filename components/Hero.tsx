import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 px-4 md:px-8 max-w-[1600px] mx-auto overflow-hidden">
      <div className="relative h-[80vh] md:h-[85vh] w-full rounded-2xl overflow-hidden group">
        
        {/* Main Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
          alt="Modern Interior Glass" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay for text contrast */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Central Big Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <h1 className="text-white text-[12vw] md:text-[15vw] font-bold tracking-tighter opacity-90 leading-none">
            Precision
          </h1>
        </div>

        {/* Floating Description Box (Bottom Left) */}
        <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 max-w-xs md:max-w-sm bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg text-white z-20">
          <p className="text-xs md:text-sm font-medium leading-relaxed mb-4 text-gray-200">
            Crafting transparent spaces that harmonize modern aesthetics with timeless durability. 
            Redefining the essence of glass fitting and finishing for every structure.
          </p>
          <a href="#services" className="inline-flex items-center text-xs font-bold uppercase tracking-wider hover:text-gray-300 transition-colors">
            View Solutions <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        {/* Center Video/Image Inset */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-32 rounded-xl overflow-hidden border-2 border-white/30 z-20 items-center justify-center cursor-pointer hover:scale-105 transition-transform">
          <img 
            src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=400&auto=format&fit=crop" 
            alt="Process" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="relative z-10 bg-white/20 p-3 rounded-full backdrop-blur-sm">
            <Play className="w-4 h-4 text-white fill-white" />
          </div>
        </div>

        {/* Circular Badge (Bottom Right) */}
        <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-20 hidden md:block">
           <div className="relative w-32 h-32 flex items-center justify-center">
             <svg className="w-full h-full spin-slow" viewBox="0 0 100 100">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text fill="white" fontSize="11" fontWeight="bold" letterSpacing="2">
                  <textPath href="#circlePath" startOffset="0%">
                    • QUALITY • DURABILITY • CLARITY •
                  </textPath>
                </text>
             </svg>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;