import React, { useRef, useEffect } from 'react';
import { useAnimation } from '../hooks/useAnimation';
import { experienceData } from '../data';

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { animate } = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      animate(containerRef.current);
    }
  }, [animate]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and academic background in AI and machine learning.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-indigo-200 dark:bg-indigo-900/50"></div>

          <div className="space-y-12">
            {experienceData.map((item, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400 z-10"></div>

                {/* Content */}
                <div
                  className={`md:w-1/2 ml-6 md:ml-0 ${
                    i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div
                    className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md animate-slide-in-left opacity-0"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-indigo-800 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/50 rounded-full">
                      {item.period}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {item.role}
                    </h3>
                    <h4 className="text-indigo-600 dark:text-indigo-400 mb-3">
                      {item.organization}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                    {item.achievements && (
                      <ul className="mt-3 space-y-1">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-1.5 mr-2"></span>
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;