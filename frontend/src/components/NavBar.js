// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Optional: for specific styles related to the navbar

const NavBar = ({ username, setUsername }) => {

    const handleSignOut = () => {
        setUsername('');
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img src="/icon.png" alt="App Icon" className="navbar-icon" />
                </Link>
                <Link to="/"><h1 className="navbar-title">WanderPlan</h1></Link>
            </div>
            <ul className="navbar-links">
                {username && <li><Link onClick={handleSignOut}>Sign Out</Link></li>}
                {!username && <li><Link to="/signin">Sign In</Link></li>}
                {!username && <li><Link to="/signup">Sign Up</Link></li>}
                <li><a href="https://www.linkedin.com/in/kevin-32-yu/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
