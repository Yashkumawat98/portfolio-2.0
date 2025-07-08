import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import AnimatedCursor from './components/AnimatedCursor';
import BlobBackground from './components/BlobBackground';
import About from './components/About';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark 
        ? 'bg-black text-white' 
        : 'bg-white text-gray-900'
    } overflow-x-hidden cursor-none`}>
      {/* 3D Blob Background */}
      <BlobBackground isDark={isDark} />
      
      {/* Animated Cursor */}
      <AnimatedCursor isDark={isDark} />
      
      <Navigation isDark={isDark} />
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      
      <main>
        <section id="home">
          <Hero isDark={isDark} />
        </section>
        
        <section id="about">
          <About isDark={isDark} />
        </section>
        
        <section id="skills">
          <Skills isDark={isDark} />
        </section>
        
        <section id="certifications">
          <Certifications isDark={isDark} />
        </section>
        
        <section id="projects">
          <Projects isDark={isDark} />
        </section>
        
        <section id="education">
          <Education isDark={isDark} />
        </section>
        
        <section id="contact">
          <Contact isDark={isDark} />
        </section>
      </main>
      
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;