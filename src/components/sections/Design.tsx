'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';
import ScrollReveal from '../ui/ScrollReveal';

const Design = () => {
  return (
    <section id="design" className="py-20 md:py-32 relative px-6 border-t border-white/5 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] bg-primary/5 rounded-full mix-blend-screen filter blur-[150px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal direction="up" className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-6">
          <div>
            <span className="text-primary font-mono text-base uppercase tracking-widest block mb-2">{portfolioData.design.subtitle}</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white">{portfolioData.design.title}</h2>
          </div>
          <p className="text-gray-400 text-base max-w-sm text-left md:text-right mt-6 md:mt-0 font-light">
            {portfolioData.design.description}
          </p>
        </ScrollReveal>

        {/* Bento Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[350px] md:auto-rows-[320px]">
          {portfolioData.design.items.map((item, index) => {
            const isLarge = item.id === '01';
            const colorClass = 
              item.color === 'cyan' ? 'hover:border-primary/50' :
              item.color === 'purple' ? 'hover:border-primary/50' :
              'hover:border-primary/50';
            
            const badgeClass = 
              item.color === 'cyan' ? 'border-primary/30 bg-primary/10 text-primary' :
              item.color === 'purple' ? 'border-primary/30 bg-primary/10 text-primary' :
              'border-primary/30 bg-primary/10 text-primary';

            return (
              <ScrollReveal 
                key={item.id}
                delay={index * 0.1}
                className={`${
                  isLarge ? 'md:col-span-8 md:row-span-2' : 'md:col-span-4 md:row-span-1'
                } relative group rounded-3xl overflow-hidden glass-panel border border-white/10 ${colorClass} transition-colors duration-500 z-20`}
              >
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className={`object-cover opacity-20 mix-blend-screen group-hover:scale-105 group-hover:opacity-40 transition-all duration-1000 ease-out ${!isLarge && 'opacity-10'}`} 
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0c] ${isLarge ? 'via-[#0a0a0c]/60' : 'via-[#0a0a0c]/80'} to-transparent`}></div>
                <div className={`absolute inset-x-8 bottom-8 z-10 ${!isLarge ? 'inset-x-6 bottom-6' : ''}`}>
                  <span className={`px-4 py-2 rounded-full border font-mono text-sm mb-4 inline-block backdrop-blur-md ${badgeClass}`}>
                    {item.id} / {item.label}
                  </span>
                  <h3 className={`${isLarge ? 'text-3xl md:text-5xl' : 'text-2xl'} font-display font-bold text-white mb-2`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-base font-light leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Design;
