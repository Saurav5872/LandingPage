import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutUs.css";
import aboutImage from "../assets/team1.jpg"; // your image

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="aboutus" className="about-us-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Text Section */}
          <div className="col-lg-6 col-md-12" data-aos="fade-right">
            <h6 className="text-uppercase fw-bold mb-2 text-orange">About Us</h6>
            <h2 className="fw-bold mb-3 gradient-text">VibeSoft's Mission <span className="text-orange">and Story</span></h2>
            <h5 className="fw-semibold mb-3">Founded in 2021,</h5>

            <p className="fade-in-text">
              Vibesoft was born with a clear purpose: to bridge the gap between
              businesses and their digital potential. With a dynamic team of
              passionate experts, we specialize in{" "}
              <strong className="text-orange">SEO, Digital Marketing</strong>, and{" "}
              <strong className="text-orange">Web Development</strong>, delivering results-driven
              solutions that empower clients to grow online.
            </p>

            <div className="mission-section mt-4">
              <h4 className="fw-bold gradient-text text-orange">🎯 Our Mission</h4>
              <p className="fade-in-text">
                We put your business goals at the heart of everything we do. Our
                mission is to:
              </p>

              <ul className="fade-in-text">
                <li>Understand your challenges, aspirations, and vision</li>
                <li>Tailor bespoke strategies in SEO, marketing, and web development</li>
                <li>
                  Equip businesses—from startups to established firms—with the tools
                  needed to thrive online
                </li>
                <li>
                  By focusing on real outcomes, transparent communication, and affordable
                  excellence, we aim to elevate brands and help businesses succeed digitally.
                </li>
              </ul>
            </div>

            <button className="btn-orange mt-3 px-4 py-2">Our Services</button>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-6 col-md-12 text-center mt-4 mt-lg-0" data-aos="fade-left">
            <div className="image-wrapper">
              <img
                src={aboutImage}
                alt="About us"
                className="img-fluid rounded-4 shadow-lg floating"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
