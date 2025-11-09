import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gray-900 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#home" 
              className="text-xl font-bold text-white"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Arjunaa Seshadri
            </a>
            <p className="mt-2 text-gray-400 text-sm">
              AI/ML Engineer & Developer
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="#about" 
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </a>
          </div>
        </div>
        
        
      </div>
    </footer>
  );
};

export default Footer;