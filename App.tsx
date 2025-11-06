
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const refs = {
    home: homeRef,
    menu: menuRef,
    contact: contactRef,
  };

  const scrollToSection = (section: keyof typeof refs) => {
    refs[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#323130] text-white min-h-screen">
      <Header scrollToSection={scrollToSection} />
      <main>
        <div ref={homeRef}>
          <Hero scrollToSection={() => scrollToSection('menu')} />
        </div>
        <FeaturedProducts />
        <div ref={menuRef}>
          <Menu />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
