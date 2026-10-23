import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { FaLinkedin } from 'react-icons/fa6';
import { SiGithub, SiYoutube } from 'react-icons/si';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-content">
          <p>&copy; {new Date().getFullYear()} Built with MERN Stack by Sivaranjani Sahadevan.</p>
          <div className="footer-socials" aria-label="Social media links">
            <a href="https://github.com/SivaranjaniSahadevan07" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <SiGithub aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/sivaranjani-s-775593202/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin aria-hidden="true" />
            </a>
            <a href="https://www.youtube.com/@codewithsr07" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <SiYoutube aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
