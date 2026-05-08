'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import ScrollReveal from '../ui/ScrollReveal';

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-20 md:py-32 relative px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal direction="right">
          <h2 className="text-5xl md:text-6xl border-b border-white/10 pb-6 mb-20 font-display font-bold">The Journey.</h2>
        </ScrollReveal>
        
        <div ref={containerRef} className="relative pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="w-full bg-gradient-to-b from-primary via-primary/50 to-transparent h-full"
            />
          </div>

          {/* Timeline Items */}
          <div className="flex flex-col gap-24">
            {portfolioData.experience.map((item, index) => {
              const isEven = index % 2 === 0;
              const nodeColorClass = 
                item.color === 'cyan' ? 'border-primary/50 group-hover:bg-primary/80' :
                item.color === 'pink' ? 'border-primary/50 group-hover:bg-primary/80' :
                'border-white/30 group-hover:bg-white/60';
              
              const dateColorClass = 
                item.color === 'cyan' ? 'text-primary/80' :
                item.color === 'pink' ? 'text-primary/80' :
                'text-white/60';

              const hoverBorderClass = 
                item.color === 'cyan' ? 'group-hover:border-primary/20' :
                item.color === 'pink' ? 'group-hover:border-primary/20' :
                'group-hover:border-white/20';

              return (
                <div 
                  key={index}
                  className={`relative md:w-1/2 group ${
                    isEven ? 'md:pr-16 md:text-right md:ml-0' : 'md:pl-16 md:ml-auto'
                  }`}
                >
                  <ScrollReveal direction={isEven ? 'right' : 'left'} delay={0.1}>
                    {/* Node */}
                    <div className={`absolute left-[-33px] ${isEven ? 'md:left-auto md:right-[-10px]' : 'md:left-[-10px]'} top-2 w-5 h-5 rounded-full bg-space-900 border-2 z-10 transition-all duration-300 ${nodeColorClass}`}></div>
                    
                    <span className={`font-mono text-base mb-2 block ${dateColorClass}`}>{item.date}</span>
                    <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
                    {item.company && <h4 className="text-xl text-gray-500 mb-4">{item.company}</h4>}
                    <p className={`text-gray-400 text-base bg-[#0a0a0c] border border-white/5 p-8 rounded-2xl transition-colors duration-300 shadow-md ${hoverBorderClass} whitespace-pre-line`}>
                      {item.description}
                    </p>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Experience;
