// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Componant/Home';
import Header from './Componant/Header';
import ContactSection from './Componant/ContactSection';
import PortfolioSection from './Componant/PortfolioSection';
import ResumeSection from './Componant/ResumeSection';
import Services from './Componant/Services';


import React from 'react';
import Footer from './Componant/Footer';
import Projects from './Componant/Projects';

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Services/>
      <PortfolioSection/>
      <Projects/>
      <ResumeSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default App;
