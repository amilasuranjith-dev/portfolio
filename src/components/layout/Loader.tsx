'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const readyToHide = () => setIsLoading(false);
    const timer = window.setTimeout(readyToHide, document.readyState === 'complete' ? 300 : 1200);
    window.addEventListener('load', readyToHide, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', readyToHide);
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 bg-space-900 z-[10000] flex justify-center items-center"
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 rounded-full border-2 border-transparent border-t-primary border-b-primary"
        />
        <span className="absolute inset-0 flex items-center justify-center text-primary font-display tracking-[0.3em] text-sm animate-pulse">
          INIT
        </span>
      </div>
    </motion.div>
  );
};

export default Loader;
