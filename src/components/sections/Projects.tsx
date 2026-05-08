'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';
import ScrollReveal from '../ui/ScrollReveal';
import TiltCard from '../ui/TiltCard';
import MagneticButton from '../ui/MagneticButton';

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-40 relative px-6 bg-space-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-baseline mb-24 border-b border-white/10 pb-8">
          <ScrollReveal direction="right">
            <h2 className="text-5xl md:text-7xl font-display font-bold">Selected Works.</h2>
          </ScrollReveal>
        </div>

        <div className="flex flex-col gap-32">
          {portfolioData.projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const shadowColor = 
              project.color === 'cyan' ? 'rgba(0,243,255,0.1)' :
              project.color === 'purple' ? 'rgba(188,19,254,0.1)' :
              'rgba(255,0,127,0.1)';
            
            const hoverShadowColor = 
              project.color === 'cyan' ? 'rgba(0,243,255,0.3)' :
              project.color === 'purple' ? 'rgba(188,19,254,0.3)' :
              'rgba(255,0,127,0.3)';

            const textNeonColor = 
              project.color === 'cyan' ? 'text-primary' :
              project.color === 'purple' ? 'text-primary' :
              'text-primary';

            return (
              <div 
                key={index} 
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center group project-wrapper`}
              >
                <ScrollReveal direction={isEven ? 'right' : 'left'} className="w-full md:w-3/5">
                  <TiltCard className="w-full aspect-video rounded-2xl overflow-hidden glass-panel relative hover-trigger transition-shadow duration-700 shadow-lg group-hover:shadow-xl">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" 
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700"></div>
                  </TiltCard>
                </ScrollReveal>

                <ScrollReveal 
                  direction={isEven ? 'left' : 'right'} 
                  delay={0.2} 
                  className={`w-full md:w-2/5 flex flex-col gap-6 relative z-10 -mt-10 md:mt-0 ${
                    isEven ? 'md:-ml-20' : 'md:-mr-20 text-left md:text-right items-start md:items-end'
                  }`}
                >
                  <div className="glass-panel p-10 rounded-2xl backdrop-blur-2xl text-left">
                    <h3 className={`text-sm uppercase ${textNeonColor} tracking-widest mb-2 font-display`}>
                      {project.type}
                    </h3>
                    <h4 className="text-4xl font-bold mb-6">{project.title}</h4>
                    <p className="text-gray-400 text-base mb-6">{project.description}</p>
                    <div className="flex gap-3 flex-wrap text-sm text-white/50 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 rounded-full border border-white/10">{tag}</span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.frontendLink && (
                        <MagneticButton as="a" href={project.frontendLink} target="_blank" className={`text-base font-bold ${textNeonColor} hover:underline`}>
                          Frontend Code
                        </MagneticButton>
                      )}
                      {project.backendLink && (
                        <MagneticButton as="a" href={project.backendLink} target="_blank" className="text-base font-bold text-primary hover:underline">
                          Backend Code
                        </MagneticButton>
                      )}
                      {project.repoLink && (
                        <MagneticButton as="a" href={project.repoLink} target="_blank" className={`text-base font-bold ${textNeonColor} hover:underline`}>
                          Explore Repository
                        </MagneticButton>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
