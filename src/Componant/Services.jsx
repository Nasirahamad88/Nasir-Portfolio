import React from 'react';
import '../style.css'
import Header from './Header';
import './vendor/boxicons/css/boxicons.css'

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title py-5">
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
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box iconbox-pink">
              <div className="icon">
                <i className="bx bx-cloud-upload"></i>
              </div>
              <h4><a href="">Social Media Magic</a></h4>
              <p>In today's digital age, social media is a force to be reckoned with. Our social media marketing strategies are tailored to your brand's identity, helping you engage with your audience, build a loyal community, and increase brand awareness.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box iconbox-pink">
              <div className="icon">
                <i className="bx bx-cloud-upload"></i>
              </div>
              <h4><a href="">SEO Optimization</a></h4>
              <p>We understand that a stunning website is only as effective as its visibility. Our SEO specialists work diligently to ensure your content ranks high on search engines, driving organic traffic and boosting your online presence.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box iconbox-pink">
              <div className="icon">
                <i className="bx bx-cloud-upload"></i>
              </div>
              <h4><a href="">Photoshop</a></h4>
              <p>I can edit and create social post,ads post and many more....</p>
            </div>
          </div>

          {/* Add more services here */}
        </div>
      </div>
      <div>
        <Header/>
      </div>
    </section>
  );
};

export default Services;
