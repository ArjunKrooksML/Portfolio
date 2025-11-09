import React from 'react';
import { ExternalLink, Github as GitHub } from 'lucide-react';
import { Project } from '../types';
import LazyImage from './LazyImage';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div
      className="glass dark:glass-dark rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover-lift group animate-slide-up opacity-0 border border-white/20 dark:border-gray-700/30"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-48 overflow-hidden relative">
        <LazyImage
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="View source code on GitHub"
              >
                <GitHub size={16} className="text-white" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="View live project"
              >
                <ExternalLink size={16} className="text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-sm">
            {project.category.replace('-', ' ').toUpperCase()}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gradient-primary transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};