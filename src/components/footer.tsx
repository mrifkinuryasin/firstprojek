// import React, { useEffect } from 'react';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import '../public/css/style.css';

const Footer: React.FC = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: true,
  //     mirror: false,
  //   });
  // }, []);

  return (
    <footer  data-aos-delay="100">
      <div className="footer-atas">
        <div className="footer1" data-aos="fade-up" data-aos-delay="200">
          <h1 data-aos="fade-right" data-aos-delay="300">Rifki Nuryasin</h1>
          <p data-aos="fade-right" data-aos-delay="400">Hidup untuk memberi arti, bukan sekadar eksistensi</p>
          <div className="footer-icon">
            <a href="" data-aos="zoom-in" data-aos-delay="500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/>
              </svg>
            </a>
            <a href="" data-aos="zoom-in" data-aos-delay="600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" fill-rule="evenodd" d="M20.452 20.45h-3.56v-5.57c0-1.328-.022-3.036-1.85-3.036c-1.851 0-2.134 1.447-2.134 2.942v5.664H9.352V8.997h3.413v1.566h.049c.475-.9 1.636-1.85 3.367-1.85c3.605 0 4.27 2.371 4.27 5.456zM5.339 7.433a2.063 2.063 0 1 1 0-4.13a2.065 2.065 0 0 1 0 4.13M7.12 20.45H3.558V8.997H7.12zM23 0H1a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1"/>
              </svg>
            </a>
            <a href="" data-aos="zoom-in" data-aos-delay="700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>
              </svg>
            </a>
            <a href="" data-aos="zoom-in" data-aos-delay="800">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer1" data-aos="fade-up" data-aos-delay="300">
          <h1 data-aos="fade-right" data-aos-delay="400">Back to pages</h1>
          <div className="linkcepat">
            <a href="#Hero" data-aos="fade-up" data-aos-delay="500">Home</a>
            <a href="#about" data-aos="fade-up" data-aos-delay="550">About</a>
            <a href="#skills" data-aos="fade-up" data-aos-delay="600">Skills</a>
            <a href="#contact" data-aos="fade-up" data-aos-delay="650">Contacts</a>
          </div>
        </div>
        <div className="footer1" data-aos="fade-up" data-aos-delay="400">
          <h1 data-aos="fade-right" data-aos-delay="500">Services</h1>
          <div className="linkcepat">
            <p  data-aos="fade-up" data-aos-delay="600">Website Development</p>
            <p  data-aos="fade-up" data-aos-delay="650">Penetration Testing</p>
            <p  data-aos="fade-up" data-aos-delay="700">Vulnerability Assesment</p>
            <p  data-aos="fade-up" data-aos-delay="750">Mobile App Dev</p>
          </div>
        </div>
        <div className="footer1" data-aos="fade-up" data-aos-delay="500">
          <h1 data-aos="fade-right" data-aos-delay="600">Contact</h1>
          <div className="linkcepat">
            <p  data-aos="fade-up" data-aos-delay="700">home</p>
            <p  data-aos="fade-up" data-aos-delay="750">home</p>
            <p  data-aos="fade-up" data-aos-delay="800">home</p>
            <p  data-aos="fade-up" data-aos-delay="850">home</p>
          </div>
        </div>
      </div>

      <div className="footer-bawah"  data-aos-delay="600">
        <div className="footer-bawah-logo">
          <a href=""  data-aos-delay="700">@2025 Muhammad Rifki Nuryasin</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;