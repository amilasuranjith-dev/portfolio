'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import ScrollReveal from '../ui/ScrollReveal';

const Skills = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden px-6" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <ScrollReveal>
            <h2 className="text-6xl md:text-8xl font-bold font-display tracking-tighter opacity-10 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none">TECHNOLOGIES</h2>
            <h3 className="text-4xl md:text-5xl relative z-10 text-primary">Technical Arsenal</h3>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 auto-rows-[280px]">
          {portfolioData.skills.map((skill, index) => {
            const isLarge = skill.category === 'Frontend Applications';
            const colorClass = 
              skill.color === 'pink' ? 'group-hover:text-primary' :
              skill.color === 'cyan' ? 'group-hover:text-primary' :
              skill.color === 'purple' ? 'group-hover:text-primary' :
              'group-hover:text-white';
            
            const borderClass = 
              skill.color === 'pink' ? 'bg-primary' :
              skill.color === 'cyan' ? 'bg-primary' :
              skill.color === 'purple' ? 'bg-primary' :
              'bg-white';

            return (
              <ScrollReveal 
                key={index} 
                delay={index * 0.1}
                className={`glass-panel ${isLarge ? 'p-10' : 'p-8'} rounded-2xl flex flex-col justify-end hover-trigger group transition-transform duration-500 hover:-translate-y-2 ${
                  isLarge ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`text-5xl md:text-7xl text-white/20 mb-auto transition-colors duration-500 ${colorClass}`}>
                  {skill.icon === 'frontend' && (
                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l-11 5v14l11 5 11-5v-14l-11-5zm-9 17.5v-11l9-4.1 9 4.1v11l-9 4.1-9-4.1zm9-12.4l-6.8 3.1v6.8l6.8 3.1 6.8-3.1v-6.8l-6.8-3.1z"/></svg>
                  )}
                  {skill.icon === 'backend' && "API"}
                  {skill.icon === 'database' && "DB"}
                  {skill.icon === 'tools' && "Tools"}
                </div>
                <h4 className={`${isLarge ? 'text-3xl' : 'text-2xl'} font-bold mb-2`}>{skill.category}</h4>
                <p className={`${isLarge ? 'text-base' : 'text-base'} text-gray-400`}>{skill.description}</p>
                {skill.tags && (
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {skill.tags.map(tag => (
                      <span key={tag} className="text-sm px-3 py-2 glass-panel text-white/80 rounded">{tag}</span>
                    ))}
                  </div>
                )}
                <div className={`h-1 w-0 group-hover:w-full transition-all duration-700 mt-4 rounded ${borderClass}`}></div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
