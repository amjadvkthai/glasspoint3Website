import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const ServicesGallery: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-12 max-w-[1600px] mx-auto" id="services">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <h2 className="text-4xl md:text-5xl font-bold max-w-lg leading-tight">
          Explore Our Proudly <br /> Services
        </h2>
        <div className="mt-6 md:mt-0 text-right">
           <p className="text-xs md:text-sm text-gray-500 max-w-xs ml-auto mb-4">
             Glasspoint showcases its vision of contemporary architecture, interior design trends, and innovative fitting.
           </p>
           <button className="bg-black text-white px-6 py-2 text-xs font-bold uppercase tracking-wider rounded flex items-center ml-auto hover:bg-gray-800 transition-colors">
             View All <ArrowUpRight className="ml-2 w-3 h-3" />
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
        {SERVICES.map((service) => (
          <div 
            key={service.id} 
            className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
              service.size === 'large' ? 'md:col-span-2' : 
              service.size === 'tall' ? 'row-span-2' : ''
            }`}
          >
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>

            {/* Content */}
            <div className="absolute bottom-6 left-6 w-[calc(100%-3rem)] flex justify-between items-end">
               <h3 className="text-white text-xl md:text-2xl font-medium tracking-tight">
                 {service.title}
               </h3>
               <div className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors">
                 <ArrowUpRight className="w-4 h-4 text-black" />
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGallery;