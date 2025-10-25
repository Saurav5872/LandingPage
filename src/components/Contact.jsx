import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaGlobe, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="contact-title">Get In <span className="text-orange">Touch</span></h2>
          <p className="contact-subtitle">
            Let’s turn your ideas into reality—connect with us today and start your digital journey!
          </p>
        </div>

        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="info-card">
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <h5>Email</h5>
                  <p>Info@vibesoft.in</p>
                </div>
              </div>
              <div className="info-item">
                <FaPhoneAlt className="info-icon" />
                <div>
                  <h5>Phone</h5>
                  <p>+91 86300 16443</p>
                </div>
              </div>
              <div className="info-item">
                <FaGlobe className="info-icon" />
                <div>
                  <h5>Website</h5>
                  <p>vibesoft.in</p>
                </div>
              </div>
              <div className="info-item">
                <FaInstagram className="info-icon" />
                <div>
                  <h5>Instagram</h5>
                  <p>@vibesoft_in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <form className="contact-form">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className="form-control" placeholder="Enter your name" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Enter your email" />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" rows="5" className="form-control" placeholder="Write your message..."></textarea>
              </div>

              <button type="submit" className="btn btn-send">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
