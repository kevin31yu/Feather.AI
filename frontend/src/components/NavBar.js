// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Optional: for specific styles related to the navbar

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src="/icon.png" alt="App Icon" className="navbar-icon" />
                <h1 className="navbar-title">WanderPlan</h1>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><a href="https://www.linkedin.com/in/kevin-32-yu/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
