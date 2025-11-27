import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const IntroSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-12 max-w-[1600px] mx-auto" id="who-we-are">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        
        {/* Left Side: Image + Large Title */}
        <div className="relative flex-1">
          <div className="relative z-10 rounded-2xl overflow-hidden h-[400px] md:h-[600px] w-full md:w-[90%]">
             <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
              alt="Office Glass" 
              className="w-full h-full object-cover"
            />
            {/* Badge on Image */}
             <div className="absolute top-6 left-6 bg-white px-4 py-1 rounded-full border border-gray-200 text-xs font-semibold uppercase tracking-wider">
              Expert Craftsmanship
            </div>
          </div>
          
          {/* Overlapping/Connected Title */}
          <div className="relative lg:absolute lg:-bottom-16 lg:left-10 z-20 bg-white p-4 md:p-8 lg:bg-transparent lg:p-0">
             <h2 className="text-4xl md:text-6xl font-bold leading-tight">
               Crystal Clear <br/>
               <span className="text-gray-400">Vision</span>
             </h2>
          </div>
        </div>

        {/* Right Side: Content + Small Image Card */}
        <div className="flex-1 flex flex-col justify-start lg:pt-20">
          
          <div className="bg-[#F4F2EE] p-8 rounded-2xl max-w-md mb-8">
             <div className="inline-block border border-gray-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest mb-4">
                Beveling & Polishing
             </div>
             <h3 className="text-2xl font-serif mb-2">Refining the edges of perfection</h3>
             <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Glasspoint specializes in the intricate details. Our beveling and polishing services turn raw glass into architectural masterpieces.
             </p>
             <h3 className="text-2xl font-bold font-serif">Into a gallery <br/> of elegance</h3>
          </div>

          <div className="relative group max-w-sm self-end lg:self-start lg:ml-12">
            <div className="rounded-2xl overflow-hidden h-[300px] relative">
               <img 
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop" 
                alt="Furniture Glass" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
               <div className="absolute top-4 left-4 border border-white/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                  Best Finishing
               </div>
               
               <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium max-w-[150px]">Indulge in the artistry of everyday living</p>
               </div>
            </div>
            
            <button className="absolute -bottom-6 -right-6 md:bottom-4 md:right-4 bg-glass-dark text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors z-30">
              <ArrowUpRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroSection;