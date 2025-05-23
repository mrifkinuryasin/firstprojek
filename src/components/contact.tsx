import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="connect-section" id="contact">
      <h2 className="connect-title">Let’s Connect</h2>
      <p className="connect-subtitle">
        Feel free to reach out anytime — let’s create something great together
      </p>

      <div className="connect-cards">
        <a
          href="https://instagram.com/kikokhatake"
          target="_blank"
          rel="noopener noreferrer"
          className="card instagram"
        >
          <FaInstagram className="icon" />
          <div>
            <h3>Instagram</h3>
            <p>@kikokhatake</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/muhammad-rifki-75272a24a/"
          target="_blank"
          rel="noopener noreferrer"
          className="card linkedin"
        >
          <FaLinkedin className="icon" />
          <div>
            <h3>LinkedIn</h3>
            <p>Muhammad Rifki Nuryasin</p>
          </div>
        </a>

        <a
          href="https://wa.me/6283149333194"
          target="_blank"
          rel="noopener noreferrer"
          className="card whatsapp"
        >
          <FaWhatsapp className="icon" />
          <div>
            <h3>WhatsApp</h3>
            <p>+62 831-4933-3194</p>
          </div>
        </a>

        <a
          href="https://github.com/mrifkinuryasin"
          target="_blank"
          rel="noopener noreferrer"
          className="card github"
        >
          <FaGithub className="icon" />
          <div>
            <h3>GitHub</h3>
            <p>@mrifkinuryasin</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
