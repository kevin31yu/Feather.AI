import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';
import SearchBar from './SearchBar';
import TripPlanDisplay from './TripPlanDisplay';
import './Home.css';

const Home = () => {
    const [destination, setDestination] = useState('');
    const [days, setDays] = useState('');
    const [tripPlan, setTripPlan] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/api/trip', { destination, days });
            setTripPlan(response.data.tripPlan);
        } catch (error) {
            console.error('Error fetching trip plan:', error);
        }
    };

    return (
        <div className="home">
            <SearchBar
                destination={destination}
                days={days}
                setDestination={setDestination}
                setDays={setDays}
                handleSubmit={handleSubmit}
            />
            <TripPlanDisplay tripPlan={tripPlan} />
        </div>
    );
};

export default Home;
