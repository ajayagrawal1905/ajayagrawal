import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ExperienceEducation from './Components/ExperienceEducation';
import './index.css';

const App = () => {
  return (
    <>
      <div className="dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
      
      <Hero />
      <About />
      <Skills />
      <ExperienceEducation />
      <Projects />
      <Contact />
       <Footer /> 
      </div>
    </>
  );
};

export default App;