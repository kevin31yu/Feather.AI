// src/App.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp'; // Import SignUp component
import SignIn from './components/SignIn'; // Import SignIn component
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

function App() {
    const [username, setUsername] = useState('');

    const handleSignOut = () => {
        setUsername('');
    }

    return (
        <div className="app">
            <NavBar /> {/* Include NavBar component */}
            {username && <div className="username">
                <span>Welcome back, {username}!</span>
                <button onClick={handleSignOut} className="button">Sign Out</button>
            </div>} {/* Display error message */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn setUsername={setUsername} />} />
                {/* Add other routes here if needed */}
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
