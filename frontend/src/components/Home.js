import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';
import SearchBar from './SearchBar';
import TripPlanDisplay from './TripPlanDisplay';
import MapComponent from './MapComponent';
import './Home.css';

const Home = ({ username }) => {
    const [destination, setDestination] = useState('');
    const [days, setDays] = useState('');
    const [tripPlan, setTripPlan] = useState([]);
    const [empty, setEmpty] = useState(true);
    const [loading, setLoading] = useState(false);
    const [coordinates, setCoordinates] = useState({ longitude: -73.935242, latitude: 40.730610 }); // Add state for coordinates

    const handleSubmit = async (e) => {
        e.preventDefault();
        await setEmpty(false);
        setLoading(true);
        try {
            const response = await axiosInstance.post('/api/trip', { destination, days });
            setTripPlan(response.data.tripPlan);
            setCoordinates(response.data.coordinates); // Update coordinates state
        } catch (error) {
            console.error('Error fetching trip plan:', error);
            setEmpty(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home">
            {username && <div className="username">
                <span>Welcome back, {username}!</span>
            </div>}
            <div className="container">
                <div className="map">
                    <SearchBar
                        destination={destination}
                        days={days}
                        setDestination={setDestination}
                        setDays={setDays}
                        handleSubmit={handleSubmit}
                    />
                    <MapComponent
                        longitude={coordinates.longitude}
                        latitude={coordinates.latitude}
                    />
                </div>
                <div className="content">
                {empty && <div className="loading"><p>Your trip begins here!</p></div>}
                {loading ? (
                    <div className="loading"><p>Got it, sounds like a plan...</p></div>
                ) : (
                    !empty && <TripPlanDisplay tripPlan={tripPlan} />
                )}
                </div>
            </div>
        </div>
    );
};

export default Home;
