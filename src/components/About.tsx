import React, { useRef, useEffect } from 'react';
import { useAnimation } from '../hooks/useAnimation';
import secondary from '../assets/Secondary.jpg';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { animate } = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      animate(containerRef.current);
    }
  }, [animate]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Block */}
          <div className="relative animate-slide-in-left opacity-0">
            <div className="aspect-square w-full max-w-md mx-auto relative overflow-hidden rounded-lg shadow-xl">
              <img
                src={secondary}
                alt="Secondary Photo"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg -z-10"></div>
          </div>

          {/* Text Block */}
          <div className="animate-slide-in-right opacity-0">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              <u>A Passionate AI & Machine Learning Engineer</u>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a dedicated AI and Machine Learning graduate with a strong academic background and hands-on experience in building pragmatic projects. I am extremely curious about the upcoming trends in the AI domain, currently working in the Corporate as an AI/ML Developer, I seem to be in awe of what's possible.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I'm driven by curiosity and a commitment to pushing the boundaries of what's possible with AI. My approach combines rigorous theoretical understanding with practical implementation skills, allowing me to develop solutions that address real-world challenges.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h4>
                <p className="text-gray-700 dark:text-gray-300"><b>B.Tech in Computer Science and Engineering, AI and ML</b></p>
                
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h4>
                <p className="text-gray-700 dark:text-gray-300"><b>Delhi NCR, India</b></p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
