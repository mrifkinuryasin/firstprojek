// components/Skills.tsx
import React from "react";
import '../public/css/style.css';
import { FaCode, FaMobileAlt, FaShieldAlt, FaBug } from "react-icons/fa";

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
    tags: ["Kali Linux", "Nmap", "Burp Suite", "Wireshark"],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="icon">{skill.icon}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="description">{skill.description}</p>
              <div className="tags">
                {skill.tags.map((tag, i) => (
                  <span className="tag" key={i}>
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
}

export default Skills;
