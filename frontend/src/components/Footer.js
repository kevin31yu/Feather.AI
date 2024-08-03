// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} WanderPlan. All rights reserved. Created by Kevin Yu.</p>
        </footer>
    );
};

export default Footer;
