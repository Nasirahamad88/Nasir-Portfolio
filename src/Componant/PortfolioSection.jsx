import React from 'react';
import '../style.css'
import { Link } from "react-router-dom";
import Pic1 from './img/portfolio/portfolio-1.jpg'
import Pic2 from './img/portfolio/portfolio-2.png'
import Pic3 from './img/portfolio/portfolio-3.png'
import Header from './Header';
import Projects from './Projects'
// import Pic4 from '.Componant/img/portfolio/portfolio-4.jpg'

const PortfolioSection = () => {
    return (
        <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title py-5">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit...</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                    <section id="portfolio-details" className="portfolio-details">
                        <div classNameName="container">

                            <div className="row gy-4">

                                <div className="col-lg-8">
                                    <div className="portfolio-details-slider swiper">
                                        <div className="swiper-wrapper align-items-center">

                                            <div className="swiper-slide">
                                                <img src={Pic1} alt="" />
                                            </div>

                                            {/* <div className="swiper-slide">
                                                <img src={Pic2} alt="" />
                                            </div>

                                            <div className="swiper-slide">
                                                <img src={Pic3} alt="" />
                                            </div> */}

                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="portfolio-info">
                                        <h3>Project information</h3>
                                        <ul>
                                            <li><strong>Category</strong>: Web design</li>
                                            <li><strong>Client</strong>: ASU Company</li>
                                            <li><strong>Project date</strong>: 01 March, 2020</li>
                                            <li><strong>Project URL</strong>: <a href="#">https://www.upwork.com/freelancers/~01d24ca3544ed5f390</a></li>
                                        </ul>
                                    </div>
                                    <div className="portfolio-description">
                                        <h2>This is an example of portfolio detail</h2>
                                        <p>
                                            Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>
                    {/* <div id="preloader"></div>
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a> */}
                </div>
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                    <section id="portfolio-details" className="portfolio-details">
                        <div classNameName="container">

                            <div className="row gy-4">

                                <div className="col-lg-8">
                                    <div className="portfolio-details-slider swiper">
                                        <div className="swiper-wrapper align-items-center">

                                            {/* <div className="swiper-slide">
                                                <img src={Pic1} alt="" />
                                            </div> */}

                                            {/* <div className="swiper-slide">
                                                
                                            </div> */}

                                            <div className="swiper-slide">
                                                <img src={Pic2} alt="" />
                                            </div>

                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="portfolio-info">
                                        <h3>Project information</h3>
                                        <ul>
                                            <li><strong>Category</strong>: Web design</li>
                                            <li><strong>Client</strong>: ASU Company</li>
                                            <li><strong>Project date</strong>: 01 March, 2020</li>
                                            <li><strong>Project URL</strong>: <a href="#">https://www.upwork.com/freelancers/~01d24ca3544ed5f390</a></li>
                                        </ul>
                                    </div>
                                    <div className="portfolio-description">
                                        <h2>This is an example of portfolio detail</h2>
                                        <p>
                                            Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>
                    {/* <div id="preloader"></div>
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a> */}
                </div>
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                    <section id="portfolio-details" className="portfolio-details">
                        <div classNameName="container">

                            <div className="row gy-4">

                                <div className="col-lg-8">
                                    <div className="portfolio-details-slider swiper">
                                        <div className="swiper-wrapper align-items-center">

                                            {/* <div className="swiper-slide">
                                                <img src={Pic1} alt="" />
                                            </div> */}

                                            <div className="swiper-slide">
                                                <img src={Pic3} alt="" />
                                            </div>

                                            {/* <div className="swiper-slide">
                                                <img src={Pic3} alt="" />
                                            </div> */}

                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="portfolio-info">
                                        <h3>Project information</h3>
                                        <ul>
                                            <li><strong>Category</strong>: Web design</li>
                                            <li><strong>Client</strong>: ASU Company</li>
                                            <li><strong>Project date</strong>: 01 March, 2020</li>
                                            <li><strong>Project URL</strong>: <a href="#">https://www.upwork.com/freelancers/~01d24ca3544ed5f390</a></li>
                                        </ul>
                                    </div>
                                    <div className="portfolio-description">
                                        <h2>This is an example of portfolio detail</h2>
                                        <p>
                                            Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>
                    {/* <div id="preloader"></div>
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a> */}
                </div>
            </div>
            <div>
            <div className='section-title px-5 '>
           <button type="button" className="btn btn-secondary btn-lg px-5"> <Link to="/Projects" className="">More Projects</Link></button>
            </div>
            <Header/>
            </div>
        </section>
    );
};

export default PortfolioSection;
