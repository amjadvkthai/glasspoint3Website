import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-16 border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-medium mb-2">{stat.value}</span>
              <span className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">{stat.label}</span>
              {stat.subLabel && <span className="text-xs text-gray-400 mt-1">{stat.subLabel}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;