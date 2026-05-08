'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import MagneticButton from '../ui/MagneticButton';
import ScrollReveal from '../ui/ScrollReveal';

const Hero = () => {
  return (
    <section className="relative min-h-screen md:min-h-screen flex items-center justify-center overflow-hidden bg-space-900 transition-colors duration-500 pt-20 md:pt-0">
      
      {/* Layer 1: Solid Text (Background) */}
      <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden whitespace-nowrap pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8, scaleY: 1 }}
          animate={{ opacity: 1, scale: 1, scaleY: 1.25 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[18vw] md:text-[20vw] font-black tracking-tighter text-[#eae0cc] leading-none select-none font-display"
        >
          PORTFOLIO
        </motion.h1>
      </div>

      {/* Mobile-optimized Layout */}
      <div className="md:hidden relative w-full h-full z-20 flex flex-col items-center justify-center px-4">
        {/* Mobile Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6"
        >
          <h1 className="text-5xl md:text-6xl font-black font-display tracking-tight text-white mb-2">
            {portfolioData.name.split(' ')[0]}
            <span className="text-primary"> {portfolioData.name.split(' ')[1]}</span>
          </h1>
          <p className="text-gray-300 text-sm font-light">Full Stack Developer</p>
        </motion.div>

        {/* Mobile Image Container - Optimized height */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[450vh] max-h-96 mb-6"
        >
          <Image 
            src="/portfolio_img.png" 
            alt={portfolioData.name} 
            fill
            priority
            className="object-contain object-center drop-shadow-[0_10px_30px_rgba(255,107,0,0.2)]"
          />
        </motion.div>

        {/* Mobile Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-6"
        >
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            {portfolioData.description}
          </p>
        </motion.div>

        {/* Mobile CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <MagneticButton 
            as="a" 
            href="#projects" 
            className="uppercase tracking-widest text-black bg-[#eae0cc] hover:bg-white px-8 py-3 text-sm font-bold rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Explore My Work
          </MagneticButton>
        </motion.div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex absolute inset-x-0 bottom-0 top-auto justify-center z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-block mt-auto h-[85vh] w-full max-w-4xl"
        >
          <Image 
            src="/portfolio_img.png" 
            alt={portfolioData.name} 
            fill
            priority
            className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex-shrink-0 z-10"
          />
        </motion.div>
      </div>

      {/* Layer 3: Stroked Text (Foreground Overlay) */}
      <div className="absolute inset-0 flex items-center justify-center z-20 overflow-hidden whitespace-nowrap pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8, scaleY: 1 }}
          animate={{ opacity: 1, scale: 1, scaleY: 1.25 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[18vw] md:text-[20vw] font-black tracking-tighter text-transparent leading-none select-none font-display" 
          style={{ WebkitTextStroke: '3px #eae0cc' }}
        >
          PORTFOLIO
        </motion.h1>
      </div>

      {/* Supporting Content Overlay - Desktop only */}
      <div className="hidden md:block absolute bottom-[5vh] md:bottom-10 left-0 w-full px-8 z-30">
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-end gap-6">
          <ScrollReveal direction="right" delay={0.8}>
            <div className="text-left">
              <p className="font-display text-primary tracking-[0.2em] text-base uppercase mb-2">{portfolioData.name}</p>
              <p className="text-white text-lg font-light max-w-sm">
                {portfolioData.description}
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" delay={1}>
            <MagneticButton 
              as="a" 
              href="#projects" 
              className="uppercase tracking-widest text-black bg-[#eae0cc] hover:bg-white px-10 py-5 text-base font-bold rounded-full transition-colors shadow-lg"
            >
              Explore Work
            </MagneticButton>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 z-30"
      >
        <span className="text-sm font-bold uppercase font-display tracking-[0.3em] text-primary drop-shadow-[0_0_8px_rgba(255,107,0,0.8)]" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="relative w-[2px] h-10 bg-white/10 overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-transparent via-primary to-transparent animate-scroll-line shadow-[0_0_8px_rgba(255,107,0,1)]"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
