// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar'; // Import NavBar component
import './App.css';

function App() {
    return (
        <div className="app">
            <NavBar /> {/* Include NavBar component */}
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Add other routes here if needed */}
            </Routes>
        </div>
    );
}

export default App;
