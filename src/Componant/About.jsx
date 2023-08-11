import React from 'react';
import Skills from './Skills';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import './vendor/bootstrap-icons/bootstrap-icons';
// import 'bootstrap/dist/css/bootstrap.min.css';

import '../style.css'
// import './vendor/boxicons/css/boxicons.min.css'
// import './vendor/glightbox/css/glightbox.min.css'
// import './vendor/swiper/swiper-bundle.min.css'

import NasirImg from './img/nasir1.jpg'
import Facts from './Facts';
import Testimonials from './Testimonials';
import Header from './Header';

const About = () => {
  return (
    // <Header/>
    <section id="about" className="about">
     <div className="container" data-aos="fade-up">
        <div className="section-title py-5">
          <h2>About</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <img src={NasirImg} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Web Devloper &amp; UI/UX Designer</h3>
            <p className="fst-italic">
            Welcome to my corner of the digital universe! I'm MD.Nasir Ahamad, a passionate web developer with a knack for SEO mastery and a flair for social media magic. With a strong belief in the power of a well-crafted online presence, I'm here to help businesses not just exist in the digital realm, but thrive.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-rounded-right"></i> <strong>Birthday:</strong> 14 February 1999</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>Website:</strong> https://nasir-ahamad.netlify.app/</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>Phone:</strong> +880 1759 277 464</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>City:</strong> City: Dhaka, Bangladesh</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-rounded-right"></i> <strong>Age:</strong> 25</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>Degree:</strong> Bs.C Math</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>Email:</strong> Nasirahamad017@gmail.com</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                </ul>
              </div>
            </div>
            <p>
            As a seasoned web developer, I have spent years honing my skills in creating websites that transcend mere aesthetics. My commitment lies in producing user-centric platforms that seamlessly blend functionality and design. Whether it's building responsive websites that adapt to all devices or crafting intuitive user interfaces, I thrive on turning ideas into captivating digital experiences.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Skills/>
        <Facts/>
        <Testimonials/>
        <Header/>
      </div>
    </section>
    

    
  );
};

export default About;
