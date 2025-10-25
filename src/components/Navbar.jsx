import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import logo from "../assets/Vibesoft-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      {/* Navbar */}
      <nav
         id="main-navbar"
  className={`navbar navbar-expand-lg justify-content-between align-items-center px-4 py-1 position-fixed w-100 ${
    scrolled ? "scrolled" : ""
  }`}
>
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src={logo}
              alt="VibeSoft Logo"
              width="100%"
              height="60px"
              className="me-2"
            />
            {/* <div>
              <h5 className="m-0 fw-bold">VibeSoft</h5>
              <small className="text-muted" style={{ fontSize: "11px" }}>
                Best IT Services
              </small>
            </div> */}
          </a>

          {/* Mobile Toggle */}
          <button className="menu-btn d-lg-none" onClick={toggleSidebar}>
            {sidebarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>

          {/* Desktop Menu */}
          <ul className="navbar-nav d-none d-lg-flex align-items-center gap-3 ms-auto">
            <li className="nav-item"><a className="nav-link active-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#aboutus">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#clients">Clients</a></li>
            <li className="nav-item"><a className="nav-link" href="#reviews">Reviews</a></li>
            <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item">
              <a href="#" className="btn btn-orange ms-lg-3">
                Start Now
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sidebar (for mobile) */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        {/* Close Icon inside sidebar */}
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes size={24} />
        </button>

        <ul className="sidebar-links">
          <li><a href="#home" onClick={toggleSidebar}>Home</a></li>
          <li><a href="#aboutus" onClick={toggleSidebar}>About</a></li>
          <li><a href="#services" onClick={toggleSidebar}>Services</a></li>
          <li><a href="#clients" onClick={toggleSidebar}>Clients</a></li>
          <li><a href="#reviews" onClick={toggleSidebar}>Reviews</a></li>
          <li><a href="#pricing" onClick={toggleSidebar}>Pricing</a></li>
          <li><a href="#contact" onClick={toggleSidebar}>Contact</a></li>
          <li><a href="#" className="btn btn-orange mt-3" onClick={toggleSidebar}>Start Now</a></li>
        </ul>
      </div>

      {/* Overlay */}
      {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Navbar;
