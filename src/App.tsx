import React, { Suspense, lazy } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Loading from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Hero />
        <Suspense fallback={<Loading />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
