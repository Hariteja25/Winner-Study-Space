import React, { useState } from 'react';
import '../styles/Header.css';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header class="header">
      <div class="container header-container">
        <a href="#" class="logo" onClick={() => scrollToSection('hero')}>
          <img src="/logo.png" alt="Winners Study Space" class="logo-img" />
        </a>

        <div class="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </div>

        <nav class={`nav-menu ${isOpen ? 'open' : ''}`}>
          <a href="#amenities" class="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('amenities'); }}>Amenities</a>
          <a href="#gallery" class="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>Gallery</a>
          <a href="#pricing" class="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>Pricing</a>
          <a href="#contact" class="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          <a href="#contact" class="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Book a Desk</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
