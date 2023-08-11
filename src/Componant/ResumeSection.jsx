import React from 'react';
import '../style.css'
import Header from './Header';

const ResumeSection = () => {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title py-5">
          <h2>Resume</h2>
          <p>MD.Nasir Ahamad</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Nasir Ahamad</h4>
              <p><em>To secure a challenging role as an HTML, CSS, JavaScript, React, and Firebase developer that will allow me to utilize my technical skills and creative abilities to create innovative and efficient web applications.</em></p>
              <p>
                <ul>
                  <li>Dhaka, Bangladesh</li>
                  <li>nasirahamad017@gmail.com</li>
                  <li>+8801759277464</li>
                </ul>
              </p>
            </div>

            <h3 className="resume-title">Technical Skills</h3>
            <div className="resume-item">
              <h4>Proficient in</h4>
              <p>HTML, CSS, JavaScript, React, Firebase</p>
            </div>
            {/* Other technical skills and experience */}
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Freelancer</h4>
              <h5>Year - Year</h5>
              <p><em>Worked on a team to develop responsive websites using HTML, CSS, JavaScript, React, and Firebase</em></p>
              <p>
                <ul>
                  <li>Assisted in implementing React and Firebase functionality</li>
                  <li>Utilized Git for version control and code management</li>
                  {/* More details about experience */}
                </ul>
              </p>
            </div>
            {/* Other professional experiences */}
          </div>
        </div>
      </div>
      <div>
        <Header/>
      </div>
    </section>
  );
};

export default ResumeSection;
