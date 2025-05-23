// components/Contact.tsx
import React from "react";
import '../public/css/style.css'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope className="icon" />
              <span>youremail@example.com</span>
            </div>
            <div className="info-item">
              <FaPhoneAlt className="icon" />
              <span>+62 831-4933-3194</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <span>Jakarta, Indonesia</span>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows={5} required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
