import 'aos/dist/aos.css';
import '../public/css/style.css';
import { useState } from 'react';

const Hero: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="brand">MyPortfolio</div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={isMenuOpen ? 'active' : ''}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="hero-wrapper" data-aos="fade-up" data-aos-delay="100">
        <div className="grid-background"></div>
        <div className="hero-container">
          <h1 className="hero-title" data-aos="fade-right" data-aos-delay="200">
            Frontend<br />Developer
          </h1>
          <p className="hero-subtitle" data-aos="fade-left" data-aos-delay="300">
            <span>Tech</span> |
          </p>
          <p className="hero-description" data-aos="fade-up" data-aos-delay="400">
            Menciptakan Website Yang Inovatif, Fungsional, dan User-Friendly untuk Solusi Digital.
          </p>
          <div className="skills" data-aos="fade-up" data-aos-delay="500">
            <button className="skill-button" data-aos="zoom-in" data-aos-delay="600">React</button>
            <button className="skill-button" data-aos="zoom-in" data-aos-delay="700">Javascript</button>
            <button className="skill-button" data-aos="zoom-in" data-aos-delay="800">Node.js</button>
            <button className="skill-button" data-aos="zoom-in" data-aos-delay="900">Tailwind</button>
          </div>
          <div className="action-buttons" data-aos="fade-up" data-aos-delay="1000">
            <button className="action-button" data-aos="flip-up" data-aos-delay="1100">
              Projects <span>📄</span>
            </button>
            <button className="action-button" data-aos="flip-up" data-aos-delay="1200">
              Contact <span>✉️</span>
            </button>
          </div>
          <div className="social-links" data-aos="fade-up" data-aos-delay="1300">
            <a href="#" className="social-link" data-aos="zoom-in" data-aos-delay="1400">🐱</a>
            <a href="#" className="social-link" data-aos="zoom-in" data-aos-delay="1500">in</a>
            <a href="#" className="social-link" data-aos="zoom-in" data-aos-delay="1600">📸</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;