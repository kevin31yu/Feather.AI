import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';
import SearchBar from './SearchBar';
import TripPlanDisplay from './TripPlanDisplay';
import './Home.css';

const Home = ({ username }) => {
    const [destination, setDestination] = useState('');
    const [days, setDays] = useState('');
    const [tripPlan, setTripPlan] = useState([]);
    const [loading, setLoading] = useState(false); // Add loading state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when request starts
        try {
            const response = await axiosInstance.post('/api/trip', { destination, days });
            setTripPlan(response.data.tripPlan);
        } catch (error) {
            console.error('Error fetching trip plan:', error);
        } finally {
            setLoading(false); // Set loading to false when request finishes
        }
    };



    return (
        <div className="home">
            {username && <div className="username">
                <span>Welcome back, {username}!</span>
            </div>}
            <SearchBar
                destination={destination}
                days={days}
                setDestination={setDestination}
                setDays={setDays}
                handleSubmit={handleSubmit}
            />
            <div className="container">
            <div className="map">
                <img src="/icon.png"></img>
            </div>
            {loading ? (
                <div className="loading"><p>Got it, sounds like a plan...</p></div> // Display loading message
            ) : (
                <TripPlanDisplay tripPlan={tripPlan} />
            )}
            </div>
        </div>
    );
};

export default Home;
