import React from 'react';
import '../style.css';
import { Link } from "react-router-dom";
import About from './About.jsx';
import Contact from './ContactSection.jsx';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Fiverr BD. All rights reserved.</p>
                <ul className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact</Link>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
