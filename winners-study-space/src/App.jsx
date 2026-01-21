import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Amenities from './components/Amenities';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Amenities />
      <Pricing />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
