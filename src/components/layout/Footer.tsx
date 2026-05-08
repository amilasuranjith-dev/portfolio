'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const firstName = portfolioData.name.split(' ')[0];
  const lastName = portfolioData.name.split(' ')[1];

  return (
    <footer
      className="relative z-10 pt-24 pb-12 px-6"
      style={{ backgroundColor: '#0a0a0c', color: '#ffffff', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}
    >
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-0 pb-20 mb-12"
        style={{ color: '#ffffff', borderBottom: '1px solid rgba(255, 255, 255, 0.10)' }}
      >
        
        {/* Brand & Pitch */}
        <div className="flex flex-col items-center md:items-start">
          <button 
            onClick={scrollToTop}
            className="text-4xl md:text-5xl font-display font-black tracking-tighter hover-trigger mb-6 group text-left"
            style={{ color: '#ffffff' }}
          >
            <span className="text-primary group-hover:text-primary transition-colors duration-500">{firstName}</span><span style={{ color: '#ffffff' }}>{lastName}.</span>
          </button>
          <p className="text-base max-w-sm text-center md:text-left leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.72)' }}>
            {portfolioData.description}
          </p>
        </div>

        {/* Connect Links */}
        <div className="flex flex-col items-center md:items-end gap-8">
          <h4 className="font-mono text-sm uppercase tracking-[0.2em]" style={{ color: 'rgba(255, 255, 255, 0.60)' }}>Socials / Links</h4>
          <div className="flex gap-8">
            <a href={portfolioData.socials.github} target="_blank" className="text-gray-300 hover:text-primary transition-colors duration-300 font-bold text-base" style={{ color: '#d1d5db' }}>
              GitHub <span className="ml-1 opacity-50">↗</span>
            </a>
            <a href={portfolioData.socials.linkedin} target="_blank" className="text-gray-300 hover:text-primary transition-colors duration-300 font-bold text-base" style={{ color: '#d1d5db' }}>
              LinkedIn <span className="ml-1 opacity-50">↗</span>
            </a>
            <a href={`mailto:${portfolioData.socials.email}`} className="text-gray-300 hover:text-primary transition-colors duration-300 font-bold text-base" style={{ color: '#d1d5db' }}>
              Email <span className="ml-1 opacity-50">↗</span>
            </a>
          </div>
        </div>

      </div>
      
      {/* Lower Footer */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-medium" style={{ color: 'rgba(255, 255, 255, 0.55)' }}>
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
        
        <div 
          onClick={scrollToTop}
          className="flex items-center gap-4 group hover-trigger cursor-pointer px-6 py-3 rounded-full border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-300"
        >
          <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 group-hover:shadow-[0_0_10px_#ff6b00] transition-all"></div>
          <span className="uppercase tracking-[0.2em] group-hover:text-primary transition-colors">Back to Orbit</span>
        </div>

        <p className="uppercase tracking-widest" style={{ color: '#666666' }}>
          Designed & Engineered in <span style={{ color: '#d1d5db', fontWeight: 700 }}>Sri Lanka</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
