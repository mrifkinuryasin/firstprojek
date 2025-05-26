// import React, { useEffect } from 'react';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import '../public/css/style.css';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: true,
  //     mirror: false,
  //   });
  // }, []);

  return (
    <section className="connect-section" id="contact"  data-aos-delay="100">
      <h2 className="connect-title" data-aos="fade-right" data-aos-delay="200">
        Let’s Connect
      </h2>
      <p className="connect-subtitle" data-aos="fade-left" data-aos-delay="300">
        Feel free to reach out anytime — let’s create something great together
      </p>

      <div className="connect-cards">
        <a
          href="https://instagram.com/kikokhatake"
          target="_blank"
          rel="noopener noreferrer"
          className="card instagram"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <FaInstagram className="icon" data-aos="fade-up" data-aos-delay="500" />
          <div>
            <h3 data-aos="fade-up" data-aos-delay="600">Instagram</h3>
            <p data-aos="fade-up" data-aos-delay="700">@kikokhatake</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/muhammad-rifki-75272a24a/"
          target="_blank"
          rel="noopener noreferrer"
          className="card linkedin"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <FaLinkedin className="icon" data-aos="fade-up" data-aos-delay="600" />
          <div>
            <h3 data-aos="fade-up" data-aos-delay="700">LinkedIn</h3>
            <p data-aos="fade-up" data-aos-delay="800">Muhammad Rifki Nuryasin</p>
          </div>
        </a>

        <a
          href="https://wa.me/6283149333194"
          target="_blank"
          rel="noopener noreferrer"
          className="card whatsapp"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <FaWhatsapp className="icon" data-aos="fade-up" data-aos-delay="700" />
          <div>
            <h3 data-aos="fade-up" data-aos-delay="800">WhatsApp</h3>
            <p data-aos="fade-up" data-aos-delay="900">+62 831-4933-3194</p>
          </div>
        </a>

        <a
          href="https://github.com/mrifkinuryasin"
          target="_blank"
          rel="noopener noreferrer"
          className="card whatsapp"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <FaGithub className="icon" data-aos="fade-up" data-aos-delay="800" />
          <div>
            <h3 data-aos="fade-up" data-aos-delay="800">GitHub</h3>
            <p data-aos="fade-up" data-aos-delay="900">@mrifkinuryasin</p>
          </div>
        </a>

      </div>
    </section>
  );
};

export default Contact;