import React from 'react';
import '../public/css/style.css';

const hero: React.FC = () => {
  return (
    <section className="hero">
      <h1>Muhammad Rifki Nuryasin</h1>
      <p>Ini adalah aplikasi React + TypeScript dengan style CSS manual.</p>
      <a href="#" className="button">Mulai Sekarang</a>
    </section>
  );
};

export default hero;