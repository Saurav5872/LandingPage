import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "./HeroSection.css";
import teamImg from "../assets/team.jpg";

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const setHeroPadding = () => {
      const navbar = document.getElementById("main-navbar");
      if (!navbar || !heroRef.current) return;

      const navHeight = navbar.getBoundingClientRect().height;
      const extraGap = 20; // optional spacing below navbar
      heroRef.current.style.paddingTop = `${navHeight + extraGap}px`;
    };

    setHeroPadding();
    window.addEventListener("resize", setHeroPadding);

    return () => window.removeEventListener("resize", setHeroPadding);
  }, []);

  return (
    <section id="home" ref={heroRef} className="hero-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Image */}
          <Col md={6} className="text-center mb-4 mb-md-0 position-relative">
            <div className="image-container">
              <Image src={teamImg} alt="Team Working" fluid className="custom-image shadow-lg" />
              <div className="trusted-badge">100% <br /> Trusted <br /> Partner</div>
              <div className="growth-card">
                <p className="m-0 fw-bold text-orange">300% Growth</p>
                <small>Average Client ROI</small>
              </div>
            </div>
          </Col>

          {/* Right Side - Text */}
          <Col md={6}>
            <div className="text-content fade-up">
              <h1 className="fw-bold mb-2">
                Transform Your Business with <span className="text-orange">Digital Excellence</span>
              </h1>
              <p className="text-muted mb-4">
                We’re VibeSoft, your trusted digital partner. From stunning websites to powerful mobile apps,
                strategic advertising to complete e-commerce solutions — we deliver results that matter.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <Button className="btn-orange">Get Started Today →</Button>
               <Button 
  as="a" 
  href="#services" 
  variant="outline-dark" 
  className=" text-decoration-none"
>
  View Our Services
</Button>

              </div>

              <div className="d-flex flex-wrap gap-4 mt-4 stats">
                <div>
                  <h5 className="fw-bold text-orange">1500+</h5>
                  <p className="text-muted small">Projects Completed</p>
                </div>
                <div>
                  <h5 className="fw-bold text-primary">99%</h5>
                  <p className="text-muted small">Client Satisfaction</p>
                </div>
                <div>
                  <h5 className="fw-bold text-orange">5+</h5>
                  <p className="text-muted small">Years Experience</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
