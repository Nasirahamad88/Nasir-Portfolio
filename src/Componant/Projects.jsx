import React from 'react';

import '../style.css'
import Header from './Header';
import Pic11 from './img/portfolio/Doza Coffee.png'
import Pic21 from './img/portfolio/Gold website.png'
import Pic31 from './img/portfolio/restaurent website.png'
import Pic41 from './img/portfolio/ecommerse.png'
import Pic51 from './img/portfolio/resturent 1.png'

const Projects = () => {
    return (
        <div className='py-5'>
           <div className="row row-cols-1 row-cols-md-2 g-4 py-5">
      <div className="col">
        <div className="card">
          <img src={Pic11} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Doza Coffee</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            
          </div>
          <button className="btn btn-primary"><a href="https://doza-coffee.netlify.app" className="Live Demo"> Live Demo</a></button>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={Pic21} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Gold website</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            
          </div>
          <button className="btn btn-primary"><a href="https://coffee-shops-website.netlify.app" className="Live Demo"> Live Demo</a></button>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={Pic31} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">restaurent website</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
          <button className="btn btn-primary"><a href="https://restaurantssss.netlify.app" className="Live Demo"> Live Demo</a></button>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={Pic41} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">E-commerse</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <button className="btn btn-primary"><a href="https://luxury-paletas-09be55.netlify.app/" className="Live Demo"> Live Demo</a></button>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={Pic51} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">E-commerse</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <button className="btn btn-primary"><a href="https://aesthetic-beijinho-19638a.netlify.app/" className="Live Demo"> Live Demo</a></button>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={Pic41} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">E-commerse</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <button className="btn btn-primary"><a href="#" className="Live Demo"> Live Demo</a></button>
        </div>
      </div>
    </div> 
    <div>
        <Header/>
    </div>
        </div>
    );
};

export default Projects;