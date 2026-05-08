'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';
import ScrollReveal from '../ui/ScrollReveal';
import TiltCard from '../ui/TiltCard';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative px-6 bg-gradient-to-b from-space-900 via-space-800 to-space-900 border-y border-white/5">
      {/* Dot Matrix Background Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center relative z-10">
        {/* Asymmetric Image composition */}
        <div className="w-full md:w-1/2 relative h-full min-h-[400px] md:min-h-[500px] pt-10 md:pt-0">
          <ScrollReveal direction="right">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse transition-all duration-1000"></div>
            
            {/* 3D Profile Card */}
            <TiltCard className="relative z-10 w-[80%] aspect-[3/4] glass-panel rounded-3xl overflow-hidden float-anim mx-auto shadow-[0_30px_70px_-15px_rgba(0,0,0,1)] border border-white/20 hover:border-primary transition-colors duration-500 group">
              <Image 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" 
                alt="Coding Terminal" 
                fill
                className="object-cover mix-blend-overlay opacity-80 group-hover:scale-110 transition-transform duration-1000 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-transparent to-white/10 opacity-70"></div>
              
              {/* Inner floating frame */}
              <div className="absolute inset-6 border border-white/10 rounded-2xl pointer-events-none group-hover:border-primary/50 transition-colors duration-500" style={{ transform: 'translateZ(40px)' }}></div>
            </TiltCard>

            {/* Decorative floating element */}
            <TiltCard className="absolute bottom-4 -right-2 md:-right-4 w-28 h-28 md:w-40 md:h-40 glass-panel rounded-full flex items-center justify-center float-anim shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 hover:border-primary transition-all duration-500 z-20 group">
              <div className="text-center font-display group-hover:scale-110 transition-transform duration-500" style={{ transform: 'translateZ(30px)' }}>
                <span className="block text-3xl md:text-4xl text-primary font-bold drop-shadow-[0_0_15px_rgba(0,243,255,0.8)]">{portfolioData.about.experienceYears}</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400">{portfolioData.about.experienceLabel}</span>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <ScrollReveal direction="left" delay={0.2}>
            <h2 className="text-sm font-display text-primary tracking-[0.3em] uppercase">{portfolioData.about.subtitle}</h2>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.3}>
            <h3 className="text-5xl md:text-6xl font-bold leading-tight">Driven by <span className="text-glow">Clean Architecture</span> & Performance.</h3>
          </ScrollReveal>
          {portfolioData.about.paragraphs.map((para, index) => (
            <ScrollReveal key={index} direction="left" delay={0.4 + index * 0.1}>
              <p className="text-gray-400 leading-relaxed text-xl">
                {para}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
