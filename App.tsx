
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import DigitalSolutions from './components/DigitalSolutions';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'sobre', 'experiencia', 'servicos', 'solucoes-digitais', 'contato'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header activeSection={activeSection} />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="sobre">
          <About />
        </section>
        <section id="experiencia">
          <Experience />
        </section>
        <section id="servicos">
          <Services />
        </section>
        <section id="solucoes-digitais">
          <DigitalSolutions />
        </section>
        <section id="contato">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
