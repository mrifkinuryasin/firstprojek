// import React, { useEffect } from 'react';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import '../public/css/style.css';

const About: React.FC = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: true,
  //     mirror: false,
  //   });
  // }, []);

  return (
    <section id="about" className="about-section"  data-aos-delay="100">
      <div className="about-container">
        <h2 className="about-title" data-aos="fade-right" data-aos-delay="200">
          About Me
        </h2>
        <p className="about-text" data-aos="fade-up" data-aos-delay="300">
          Halo! Saya <strong>Muhammad Rifki Nuryasin</strong>, seorang pengembang perangkat lunak yang fokus pada pengembangan aplikasi web dan mobile. Saya memiliki ketertarikan besar pada teknologi modern seperti React, TypeScript, dan pengembangan antarmuka pengguna yang elegan.
        </p>
        <p className="about-text" data-aos="fade-up" data-aos-delay="400">
          Dengan pengalaman di berbagai proyek, saya percaya bahwa desain yang baik dan kode yang bersih dapat menciptakan solusi digital yang berdampak. Saya selalu berusaha belajar hal baru dan tumbuh bersama komunitas teknologi.
        </p>
      </div>
    </section>
    
  );
};

export default About;