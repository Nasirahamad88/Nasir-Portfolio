import React from 'react';
import './vendor/bootstrap-icons/bootstrap-icons.css';
// import './vendor/bootstrap-icons/bootstrap-icons';
import './vendor/bootstrap/css/bootstrap.min.css';

import '../style.css'
// import './vendor/boxicons/css/boxicons.min.css'
// import './vendor/glightbox/css/glightbox.min.css'
// import './vendor/swiper/swiper-bundle.min.css'
// import about from './About.jsx'
import { Link } from "react-router-dom";
// import Home from './Componant/Home';
// import Header from './Componant/Header';
// import Contact from './Componant/ContactSection';
// import Portfolio from './Componant/PortfolioSection';
// import Resume from './Componant/ResumeSection';
// import Services from './Componant/Services';

const Header = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h1 className="logo me-auto me-lg-1"><Link to="/">Nasir Portfolio</Link></h1>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><Link className="active" to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <div className="header-social-links">
          <a href="" className="twitter"><i className="bi bi-twitter"></i></a>
          <Link to="https://www.facebook.com/lightsnasir.nasir" className="facebook"><i className="bi bi-facebook"></i></Link>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="https://www.linkedin.com/in/nasir-ahamad-b38346289/" className="linkedin"><i className="bi bi-linkedin"></i></a>
          <a href="https://github.com/Nasirahamad88" className="Github"><i className="bi bi-github"></i></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
