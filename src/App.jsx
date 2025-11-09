import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ServicesContactFooter from './components/ServicesContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-cyan-200/30 selection:text-white">
      {/* Smooth scroll behavior */}
      <style>{`html{scroll-behavior:smooth}`}</style>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ServicesContactFooter />
    </div>
  );
}
