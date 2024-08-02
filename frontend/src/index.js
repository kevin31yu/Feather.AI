// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // Ensure only one Router is used here

ReactDOM.render(
    <Router> {/* Only one Router should be here */}
        <App />
    </Router>,
    document.getElementById('root')
);
