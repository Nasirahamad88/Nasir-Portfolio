import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import './vendor/aos/aos.js';
import './vendor/swiper/swiper-bundle.min.css'
// import './vendor/swiper/swiper-bundle.min.js'
// import './vendor/swiper/swiper-bundle.min.js.map'
import '../style.css';
import Img1 from './img/testimonials/testimonials-1.jpg'
import Img2 from './img/testimonials/testimonials-2.jpg'
import Img3 from './img/testimonials/testimonials-3.jpg'
import Img4 from './img/testimonials/testimonials-4.jpg'
import Img5 from './img/testimonials/testimonials-5.jpg'

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Testimonials</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <Swiper className="testimonials-slider" data-aos="fade-up" data-aos-delay="10" pagination={{ clickable: true }}
        autoplay={{ delay: 100 }}>
          <SwiperSlide>
            <div className="testimonial-item">
              <img src={Img1} className="testimonial-img" alt="./img/testimonials/testimonials-1.jpg" />
              <h3>Saul Goodman</h3>
              <h4>Ceo & Founder</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-item">
              <img src={Img2} className="testimonial-img" alt="" />
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-item">
              <img src={Img3} className="testimonial-img" alt="" />
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-item">
              <img src={Img4} className="testimonial-img" alt="" />
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-item">
              <img src={Img5} className="testimonial-img" alt="" />
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>

          {/* Add more SwiperSlides for other testimonials */}

        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
