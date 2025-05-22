import React from 'react';
import '../public/css/style.css';

const nav: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="brand">Rifki Nuryasin</div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
  
};

export default nav;
