import React from 'react';
import '../style.css'

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>As a web developer, I offer the following services:</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box iconbox-blue">
              <div className="icon">
                <i className="bx bx-code"></i>
              </div>
              <h4><a href="">Web Development</a></h4>
              <p>I specialize in building responsive and dynamic websites using the latest web technologies.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box iconbox-orange ">
              <div className="icon">
                <i className="bx bx-paint"></i>
              </div>
              <h4><a href="">UI/UX Design</a></h4>
              <p>I create intuitive and user-friendly interfaces that enhance the overall user experience.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box iconbox-pink">
              <div className="icon">
                <i className="bx bx-cloud-upload"></i>
              </div>
              <h4><a href="">Website Deployment</a></h4>
              <p>I ensure smooth deployment of websites on servers, optimizing performance and security.</p>
            </div>
          </div>

          {/* Add more services here */}
        </div>
      </div>
    </section>
  );
};

export default Services;
