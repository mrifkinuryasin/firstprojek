// import React, { useEffect } from 'react';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import '../public/css/style.css';
import { FaCode, FaMobileAlt, FaShieldAlt, FaBug } from 'react-icons/fa';

const skills = [
  {
    icon: <FaCode />,
    title: "Website Development",
    description: "UI modern dan interaktif dengan React, Next.js, Tailwind CSS, dan Framer Motion.",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Dev",
    description: "Aplikasi Android/iOS dengan Flutter dan Dart yang ringan, responsif, dan elegan.",
    tags: ["Flutter", "Dart", "Firebase"],
  },
  {
    icon: <FaShieldAlt />,
    title: "Penetration Testing",
    description: "Melakukan penetration testing pada sistem atau aplikasi.",
    tags: ["Kali Linux", "Nmap", "Burp Suite", "Wireshark"],
  },
  {
    icon: <FaBug />,
    title: "Vulnerability Assessment",
    description: "Audit keamanan dan pemindaian kerentanan aplikasi secara menyeluruh.",
    tags: ["Nikto", "Nmap", "Burp Suite", "OpenVAS"],
  },
];

const Skills: React.FC = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: true,
  //     mirror: false,
  //   });
  // }, []);

  return (
    <section className="skills-section" id="skills" data-aos="fade-up" data-aos-delay="100">
      <div className="container">
        <h2 className="section-title" data-aos="fade-right" data-aos-delay="200">
          My Skills
        </h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index} data-aos="zoom-in" data-aos-delay={300 + index * 100}>
              <div className="icon" data-aos="fade-up" data-aos-delay={400 + index * 100}>
                {skill.icon}
              </div>
              <h3 className="skill-title" data-aos="fade-up" data-aos-delay={500 + index * 100}>
                {skill.title}
              </h3>
              <p className="description" data-aos="fade-up" data-aos-delay={600 + index * 100}>
                {skill.description}
              </p>
              <div className="tags" data-aos="fade-up" data-aos-delay={700 + index * 100}>
                {skill.tags.map((tag, i) => (
                  <span className="tag" key={i} data-aos="zoom-in" data-aos-delay={800 + index * 100 + i * 50}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;