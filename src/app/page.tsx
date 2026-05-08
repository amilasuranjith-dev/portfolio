'use client';

import dynamic from 'next/dynamic';
import Loader from '@/components/layout/Loader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Design from '@/components/sections/Design';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

// Dynamic imports for performance and browser-only APIs
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), { ssr: false });
const ParticleBackground = dynamic(() => import('@/components/ui/ParticleBackground'), { ssr: false });

export default function Home() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <ParticleBackground />
      
      {/* Ambient Glowing Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-primary/10 dark:bg-black/40 rounded-full mix-blend-screen filter blur-[100px] animate-blob -z-10 pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#eae0cc]/25 dark:bg-[#050508]/40 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000 -z-10 pointer-events-none"></div>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Design />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
