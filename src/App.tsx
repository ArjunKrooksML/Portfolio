import { Suspense, lazy } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Loading from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Hero />
        <Suspense fallback={<Loading />}>
          <Projects />
          <Experience />
          <Skills />
          <About />
          <Contact />
        </Suspense>
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
