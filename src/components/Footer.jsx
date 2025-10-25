import React from "react";
import { FaTwitter, FaFacebookF, FaGooglePlusG, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer  text-white pt-5">
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3 text-orange">VibeSoft</h5>
            <p>VibeSoft is a leading SEO and web development company in Faridabad. Affordable website design & Development services. Contact us today!</p>
            <p>
              <strong>Phone:</strong> +91 8630016443 <br />
              <strong>Email:</strong> info@vibesoft.in
            </p>
            <p>
              <strong>Address:</strong> Chamunda vihar phase 1, Ramnagar Rd, Kashipur, Uttarakhand 244713
            </p>
            <div className="social-icons mt-3">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaGooglePlusG /></a>
              <a href="#"><FaPinterestP /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Services */}
          <div className="col-md-2 mb-4">
            <h5 className="mb-3">Services</h5>
            <ul className="list-unstyled">
              <li><a href="#">Advertising</a></li>
              <li><a href="#">Best SEO Services</a></li>
              <li><a href="#">E-Commerce</a></li>
              <li><a href="#">Website Development</a></li>
              <li><a href="#">Social Media Marketing Agency</a></li>
            </ul>
          </div>

          {/* Community / Shop */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Community & Shop</h5>
            <ul className="list-unstyled">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Product Shooting & Reels</a></li>
              <li><a href="#">Marketplace Listing And Ads</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Legal Pages</a></li>
            </ul>
          </div>
        </div>

        <hr className="bg-secondary" />
        <p className="text-center mb-0">&copy; 2025 VibeSoft. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
