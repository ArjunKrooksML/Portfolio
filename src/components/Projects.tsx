import React, { useRef, useEffect } from 'react';
import { useAnimation } from '../hooks/useAnimation';
import { projectsData } from '../data';
import { ProjectCard } from './ProjectCard';

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { animate } = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      animate(containerRef.current);
    }
  }, [animate]);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my AI and machine learning projects demonstrating my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;