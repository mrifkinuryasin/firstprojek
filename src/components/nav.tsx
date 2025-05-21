import React from 'react';
import '../public/css/style.css';

const nav: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="brand">MyApp</div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default nav;
