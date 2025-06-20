import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';
import GridBackground from './components/GridBackground';

function App() {
  return (
    <div className="min-h-screen relative">
      <GridBackground />
      <Header />
      <Hero />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;