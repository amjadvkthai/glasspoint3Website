import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeatureSection: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-12 max-w-[1600px] mx-auto">
      <div className="rounded-3xl overflow-hidden bg-[#FDFDFD]">
        <div className="flex flex-col lg:flex-row">
          
          {/* Left: Full Image */}
          <div className="lg:w-1/2 h-[400px] lg:h-[600px]">
             <img 
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop" 
              alt="Modern Living Room" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center">
             <div className="flex space-x-2 text-xs font-bold uppercase tracking-wider text-gray-800 mb-6">
                <span>Innovation</span>
                <span>•</span>
                <span>Timeless</span>
             </div>

             <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
               Modern Style <br />
               Timeless Charm
             </h2>

             <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-md">
               Discover Glasspoint's comprehensive solutions for 2024. Featuring precision etching, 
               robust fitting services, and innovative lifestyle concepts alongside striking 
               tables, mirrors, and architectural glass.
             </p>

             <button className="self-start bg-black text-white px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors flex items-center group">
               About Us <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
             </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;