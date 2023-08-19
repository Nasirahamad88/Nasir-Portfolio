import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import App from './App.jsx'
import Home from './Componant/Home';
// import Header from './Componant/Header';
import Contact from './Componant/ContactSection';
import Portfolio from './Componant/PortfolioSection';
import Resume from './Componant/ResumeSection';
import Services from './Componant/Services';
import About from "./Componant/About";
import Projects from "./Componant/Projects";


const router = createBrowserRouter([
  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Services",
    element: <Services/>,
  },
  {
    path: "/Contact",
    element: <Contact/>,
  },
  {
    path: "/Portfolio",
    element: <Portfolio/>,
  },
  {
    path: "/Resume",
    element: <Resume/>,
  },
  {
    path: "/Projects",
    element: <Projects/>,
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);