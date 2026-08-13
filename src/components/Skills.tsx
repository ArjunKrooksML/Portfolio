import React, { useRef, useEffect } from 'react';
import { useAnimation } from '../hooks/useAnimation';
import { skillsData } from '../data';

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { animate } = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      animate(containerRef.current);
    }
  }, [animate]);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-gradient-primary">Skills & Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My elaborate Skills and Tech-Stack towards  <span className="text-gradient-accent font-semibold">AI/Machine Learning and Backend</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category) => (
            <div
              key={category.id}
              className="glass dark:glass-dark rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover-lift group animate-fade-in opacity-0 border border-white/20 dark:border-gray-700/30"
              style={{ animationDelay: `${category.id * 100}ms` }}
            >
              <div className="px-8 py-10">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 glow-primary">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-gradient-primary transition-all duration-300">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center group/item">
                      <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-200">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            <span className="text-gradient-accent">Technologies & Tools</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Python',
              'JavaScript',
              'React',
              'LangChain',
              'CrewAI',
              'LangGraph',
              'FastAPI',
              'PostgreSQL',
              'Docker',
              'Hugging Face',
              'OpenAI',
              'AWS'
            ].map((tool, index) => (
              <div 
                key={index}
                className="glass dark:glass-dark rounded-xl p-6 flex flex-col items-center justify-center shadow-lg border border-white/20 dark:border-gray-700/30 animate-fade-in opacity-0 hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-gray-900 dark:text-white font-bold text-center group-hover:text-gradient-primary transition-all duration-300">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;