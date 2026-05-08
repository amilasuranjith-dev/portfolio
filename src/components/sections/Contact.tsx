'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { portfolioData } from '@/data/portfolioData';
import ScrollReveal from '../ui/ScrollReveal';
import MagneticButton from '../ui/MagneticButton';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    alert('Message sent! (Simulated)');
    reset();
  };

  return (
    <section id="contact" className="py-10 md:py-20 relative px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[#ffffff]/5 to-transparent flex items-center justify-center -z-10"></div>
      
      <ScrollReveal className="max-w-5xl mx-auto glass-panel p-8 md:p-16 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-8xl font-bold font-display mb-6">Let's Connect.</h2>
          <p className="text-gray-400 text-lg">Have a project in mind or want to discuss engineering opportunities? My inbox is always open.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-full justify-center mb-12 text-center">
          <div className="glass-panel p-6 rounded-xl flex-1 hover:border-primary transition-colors">
            <span className="block text-sm uppercase text-gray-500 mb-2">Email directly</span>
            <a href={`mailto:${portfolioData.socials.email}`} className="text-primary hover:underline hover-trigger font-bold break-all text-lg">
              {portfolioData.socials.email}
            </a>
          </div>
          <div className="glass-panel p-6 rounded-xl flex-1 hover:border-primary transition-colors">
            <span className="block text-sm uppercase text-gray-500 mb-2">Phone / WhatsApp</span>
            <a href={`tel:${portfolioData.socials.phone.replace(/\s/g, '')}`} className="text-primary hover:underline hover-trigger font-bold text-lg">
              {portfolioData.socials.phone}
            </a>
          </div>
          <div className="glass-panel p-6 rounded-xl flex-1 hover:border-primary transition-colors">
            <span className="block text-sm uppercase text-gray-500 mb-2">Location</span>
            <span className="text-primary font-bold text-lg">{portfolioData.socials.location}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full relative group">
              <input 
                type="text" 
                id="name"
                {...register('name', { required: 'Name is required' })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all peer hover-trigger" 
                placeholder=" " 
              />
              <label htmlFor="name" className="absolute left-6 top-4 text-gray-500 pointer-events-none transition-all peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:text-xs">
                Name
              </label>
              {errors.name && <span className="text-primary text-xs mt-1">{errors.name.message}</span>}
            </div>
            <div className="w-full relative group">
              <input 
                type="email" 
                id="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all peer hover-trigger" 
                placeholder=" " 
              />
              <label htmlFor="email" className="absolute left-6 top-4 text-gray-500 pointer-events-none transition-all peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:text-xs">
                Email
              </label>
              {errors.email && <span className="text-primary text-xs mt-1">{errors.email.message}</span>}
            </div>
          </div>
          <div className="w-full relative group">
            <textarea 
              id="message" 
              rows={4} 
              {...register('message', { required: 'Message is required' })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all peer resize-none hover-trigger" 
              placeholder=" "
            ></textarea>
            <label htmlFor="message" className="absolute left-6 top-4 text-gray-500 pointer-events-none transition-all peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:text-xs">
              Message
            </label>
            {errors.message && <span className="text-primary text-xs mt-1">{errors.message.message}</span>}
          </div>
          
          <div className="mt-4">
            <MagneticButton 
              type="submit"
              className="px-10 py-5 bg-white/10 border border-white/20 rounded-xl text-white font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto overflow-hidden group text-lg"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Send Message
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </MagneticButton>
          </div>
        </form>
      </ScrollReveal>
    </section>
  );
};

export default Contact;
