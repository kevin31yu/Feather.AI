// src/components/SignIn.js
import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './SignIn.css'; // Import SignIn CSS

const SignIn = ({ setUsername }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(''); // State to manage error messages
    const navigate = useNavigate(); // Hook for navigation

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/api/users/signin', formData);
            setUsername(response.data.user.username);
            navigate('/'); // Redirect to homepage on success
        } catch (error) {
            setError((error.response?.data?.message || 'Please try again.'));
            console.error('Error sign in:', error);
        }
        console.log('Sign In Data:', formData);
    };

    return (
        <div className="signin-container">
            <h1>Sign In</h1>
            <form className="signin-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
            {error && <div className="error-message">{error}</div>} {/* Display error message */}
        </div>
    );
};

export default SignIn;
