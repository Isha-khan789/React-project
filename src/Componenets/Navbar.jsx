import { useEffect, useState } from 'react';
import React from 'react';
import { CgMenuRight } from "react-icons/cg";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [activeSection, setactiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'services', 'about', 'pricing', 'testimonials'];
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setactiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -80; // adjust for navbar height
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setisOpen(false);
    setactiveSection(targetId);
  };

  const navlinks = (
    <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0'>
      {['home', 'services', 'about', 'pricing', 'testimonials'].map(section => (
        <li key={section}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleScrollTo(section)}
            className={`text-white ${activeSection === section ? 'isActive' : ''}`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </motion.button>
        </li>
      ))}
    </ul>
  );

  const contactButton = () => (
    <button
      onClick={() => handleScrollTo('contact')}
      className='inline-block text-center text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded w-fit'
    >
      Contact us
    </button>
  );

  return (
    <header className='bg-herobg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10'>
      <div className='container mx-auto flex justify-between items-center h-full'>
        <div>
          <a href="/">
            <img src="/logo.svg" alt="logo" />
          </a>
        </div>
        <div className='hidden md:flex flex-grow justify-center'>
          <nav>
            {navlinks}
          </nav>
        </div>
        <div className='hidden md:block py-2'>
          {contactButton()}
        </div>
        <div>
          <button
            onClick={() => setisOpen(!isOpen)}
            className={`text-white focus:outline-none ${isOpen ? 'border-white' : ''}`}
          >
            <CgMenuRight className='size-6' />
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className='md:hidden bg-herobg p-4 flex flex-col space-y-4'>
          {navlinks}
          {contactButton()}
        </nav>
      )}
    </header>
  );
};

export default Navbar;