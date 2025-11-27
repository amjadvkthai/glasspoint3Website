import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-8 px-4 md:px-12 mt-20" id="contact">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Top Section: CTA + Image */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          <div className="lg:w-1/2">
             <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
               Engage with Us in <br /> Conversation.
             </h2>
             <p className="text-gray-400 text-sm md:text-base max-w-md mb-8 leading-relaxed">
               In a global world based on communication, a brand must look beyond its borders, 
               open up to new experiences, and dare to be different. Meeting the brightest 
               minds of one's time is the most effective way to nurture creativity.
             </p>
             <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="bg-transparent border-b border-gray-700 py-3 w-full max-w-xs focus:outline-none focus:border-white transition-colors"
                />
                <button className="text-sm font-bold uppercase tracking-wider border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition-colors">
                  Send
                </button>
             </div>
          </div>

          <div className="lg:w-1/2 flex justify-end">
             <div className="w-full max-w-md h-64 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" 
                  alt="Office Meeting" 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-xs text-gray-400">
           <div>
             <h4 className="text-white font-bold uppercase mb-4">About</h4>
             <ul className="space-y-2">
               <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
             </ul>
           </div>
           <div>
             <h4 className="text-white font-bold uppercase mb-4">Services</h4>
             <ul className="space-y-2">
               <li><a href="#" className="hover:text-white transition-colors">Glass Fitting</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Etching</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Polishing</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
             </ul>
           </div>
           <div>
             <h4 className="text-white font-bold uppercase mb-4">Social Media</h4>
             <ul className="space-y-2">
               <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
               <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
             </ul>
           </div>
           <div className="flex items-end justify-end md:justify-start">
              {/* Optional extra column or spacer */}
           </div>
        </div>

        {/* Bottom Bar: Logo */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs order-2 md:order-1 mt-4 md:mt-0">© 2024 GLASSPOINT. All rights reserved.</p>
          <div className="order-1 md:order-2">
             <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">GLASSPOINT</h1>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;