'use client';

import React, { useState, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about', color: 'text-primary' },
    { name: 'Skills', href: '#skills', color: 'text-primary' },
    { name: 'Work', href: '#projects', color: 'text-primary' },
    { name: 'Design', href: '#design', color: 'text-primary' },
    { name: 'Journey', href: '#experience', color: 'text-primary' },
  ];

  const firstName = portfolioData.name.split(' ')[0];
  const lastName = portfolioData.name.split(' ')[1];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed w-full z-50 top-0 transition-all duration-300 ${
          isScrolled ? 'glass-panel py-2' : 'glass-panel border-b-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-2xl md:text-3xl font-display font-bold tracking-tighter hover-trigger text-white mix-blend-difference group flex-shrink-0">
            <span className="text-primary group-hover:text-primary transition-colors">{firstName}</span>{lastName}.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-base font-medium tracking-wide">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`hover-trigger hover:${link.color} transition-colors`}
              >
                {link.name}
              </a>
            ))}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full glass-panel hover:bg-white/10 transition-colors flex items-center justify-center hover-trigger"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-black" />}
              </button>
            )}
            <a 
              href="#contact" 
              className="hover-trigger text-white bg-white/10 px-5 py-2 rounded-full hover:bg-primary hover:text-black transition-all"
            >
              Connect
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-black" />}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-t border-white/10 animate-in fade-in duration-200">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={handleNavClick}
                  className="text-white hover:text-primary transition-colors py-2 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={handleNavClick}
                className="text-white bg-white/10 px-4 py-3 rounded-full hover:bg-primary hover:text-black transition-all font-medium text-center"
              >
                Connect
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
