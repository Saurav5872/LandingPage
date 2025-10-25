import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";
import { FaCode, FaBullhorn, FaChartLine, FaShoppingCart, FaMobileAlt, FaCameraRetro, FaPenNib, FaMapMarkedAlt, FaPalette, FaUsers } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "Building responsive, secure, and performance-driven websites that elevate your digital presence and fuel growth."
  },
  {
    icon: <FaChartLine />,
    title: "SEO Optimization",
    desc: "Boosting your visibility with tailored SEO strategies that enhance ranking, drive traffic, and sustain long-term success."
  },
  {
    icon: <FaShoppingCart />,
    title: "E-Commerce Solutions",
    desc: "Creating seamless, user-friendly eCommerce platforms to help you manage and grow your online store efficiently."
  },
  {
    icon: <FaBullhorn />,
    title: "Advertising",
    desc: "Delivering impactful campaigns that engage audiences and enhance your brand presence across digital platforms."
  },
  {
    icon: <FaMobileAlt />,
    title: "App Development",
    desc: "Designing powerful, intuitive mobile apps to boost engagement and meet modern business demands."
  },
  {
    icon: <FaCameraRetro />,
    title: "Product Shoots & Reels",
    desc: "Capturing visually stunning product reels and shoots that increase conversions and build brand trust."
  },
  {
    icon: <FaPenNib />,
    title: "Content Writing",
    desc: "Crafting compelling, SEO-friendly content that connects with audiences and strengthens your brand identity."
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Google Listing & Reviews",
    desc: "Optimizing Google listings and reviews to build credibility and improve your local business reach."
  },
  {
    icon: <FaPalette />,
    title: "Logo & Branding Design",
    desc: "Creating unique, memorable brand visuals and logo designs that express your identity effectively."
  }
  // {
  //   icon: <FaUsers />,
  //   title: "Internship Program",
  //   desc: "Hands-on digital marketing, web development, and SEO internships that help shape future professionals."
  // }
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="services" className="services-section py-5">
      <div className="container text-center">
        <h6 className="fw-bold text-orange mb-2 text-xl text-gray-600 mb-8 leading-relaxed" data-aos="fade-up">
          WHY CHOOSE US
        </h6>
        <h1 className="fw-bold gradient-text mb-5" data-aos="fade-up">
          Our <span className="text-orange">Services</span>
        </h1>

        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              key={index}
              data-aos="zoom-in"
            >
              <div className="service-card p-4 h-100 ">
                <div className="icon-wrapper mb-3">{service.icon}</div>
                <h5 className="fw-bold mb-2">{service.title}</h5>
                <p className="text-muted">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
