import React, { useRef, useEffect } from 'react';
import { Mail, MapPin, Linkedin, Twitter, Github as GitHub } from 'lucide-react';
import { useAnimation } from '../hooks/useAnimation';

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { animate } = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      animate(containerRef.current);
    }
  }, [animate]);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-slide-in-left opacity-0">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium text-gray-900 dark:text-white">
                    Email
                  </h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    arjunaa2003@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium text-gray-900 dark:text-white">
                    Location
                  </h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    New York City, NY
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/arjunaa-seshadri-b3598b216/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 p-3 rounded-full transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </a>
                
                <a
                  href="https://github.com/ArjunKrooksML"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 p-3 rounded-full transition-colors"
                  aria-label="GitHub profile"
                >
                  <GitHub className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right opacity-0">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 border border-white/20 dark:border-gray-700/30">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Let’s Build Something
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Drop me an email and I’ll get back to you to discuss more AI and Backend related stuff!
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:arjunaa2003@gmail.com"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3 px-6 font-semibold text-white transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 btn-modern"
                >
                  Email Arjunaa
                </a>
                <a
                  href="https://www.linkedin.com/in/arjunaa-seshadri-b3598b216/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl glass dark:glass-dark py-3 px-6 font-semibold text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover-lift"
                >
                  Message on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;