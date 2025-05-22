import React from 'react'
import '../public/css/style.css';

const about = () => {
  return (
   <section id="about"
   className="about-section">
      <div className="about-container">
        <h2 className="about-title">Tentang Saya</h2>
        <p className="about-text">
          Halo! Saya <strong>Muhammad Rifki Nuryasin</strong>, seorang pengembang perangkat lunak yang fokus pada pengembangan aplikasi web dan mobile. Saya memiliki ketertarikan besar pada teknologi modern seperti React, TypeScript, dan pengembangan antarmuka pengguna yang elegan.
        </p>
        <p className="about-text">
          Dengan pengalaman di berbagai proyek, saya percaya bahwa desain yang baik dan kode yang bersih dapat menciptakan solusi digital yang berdampak. Saya selalu berusaha belajar hal baru dan tumbuh bersama komunitas teknologi.
        </p>
      </div>
    </section>
  )
}

export default about