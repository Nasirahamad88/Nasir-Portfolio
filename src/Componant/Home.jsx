import React from 'react';
// import './vendor/bootstrap-icons/font/bootstrap-icons.css';
// import './vendor/bootstrap-icons/bootstrap-icons';
// import './vendor/bootstrap/dist/css/bootstrap.min.css';

import '../style.css'
// import './vendor/boxicons/css/boxicons.min.css'
// import './vendor/glightbox/css/glightbox.min.css'
// import './vendor/swiper/swiper-bundle.min.css'

// Import the image
import NasirImg from './img/nasir1.jpg';
import Header from './Header';
import About from './About';
import Services from './Services';
import PortfolioSection from './PortfolioSection';
import ResumeSection from './ResumeSection';
import Footer from './Footer';
import ContactSection from './ContactSection';

const Home = () => {
  return (
    <>
    <Header/>
    <div id="hero" className="d-flex align-items-center">
      <div className="container d-flex align-items-center" data-aos="zoom-in" data-aos-delay="100">
        <div className="text-container">
          <h1>MD.Nasir Ahamad</h1>
          <h2>I'm a professional Web Developer</h2>
          <a href="about.html" className="btn-about">About Me</a>
        </div>
        <div className="image-container">
          {/* Render the image */}
          <img src={NasirImg} alt="Hero" />
        </div>
      </div>
      
    </div>
    <div>
      <About/>
      <Services/>
      <PortfolioSection/>
      <ResumeSection/>
      <ContactSection/>
      <Footer/>
    </div>
    </>
    
  );
};

export default Home;
