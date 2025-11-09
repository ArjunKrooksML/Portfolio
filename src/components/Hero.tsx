import React, { useEffect, useRef } from 'react';
import { ArrowDownIcon } from 'lucide-react';
import { useAnimation } from '../hooks/useAnimation';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import ParticleBackground from './ParticleBackground';
import myProfilePic from '../assets/portfolio.jpg';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { animate } = useAnimation();
  
  const typingText = useTypingAnimation({
    texts: [
      'AI/ML Engineer',
      'Computer Vision Specialist',
      'NLP Expert',
      'Agentic AI Researcher',
      'Full-Stack Developer'
    ],
    speed: 100,
    pauseTime: 2000
  });

  useEffect(() => {
    if (containerRef.current) {
      animate(containerRef.current);
    }
  }, [animate]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Modern Background Layers */}
      <div className="absolute inset-0 z-[-2]">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>
      
      {/* Particle Background */}
      <ParticleBackground />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="text-gradient-primary text-5xl md:text-6xl lg:text-7xl font-extrabold">
                {typingText}
                <span className="animate-pulse text-blue-500">|</span>
              </span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 dark:text-gray-300 mt-4 block">
                Into the realms of <span className="text-gradient-accent font-semibold">Agentic</span> and <span className="text-gradient-accent font-semibold">Generative AI</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              A critical thinker, striving to deliver as per the ever evolving Industry norms.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover-lift glow-primary btn-modern"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10">View My Work</span>
              </a>
              <a
                href="#contact"
                className="group px-8 py-4 glass dark:glass-dark text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold rounded-xl transition-all duration-300 hover-lift border border-gray-200 dark:border-gray-700"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10">Contact Me</span>
              </a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in-delayed">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl hover-lift">
                <img
                  src={myProfilePic}
                  alt="Arjunaa Seshadri Profile Photo"
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg float">
                AI
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDownIcon className="h-8 w-8 text-gray-600 dark:text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;
