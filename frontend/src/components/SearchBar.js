import React from 'react';
import './SearchBar.css'; // Optional: for specific styles related to the search bar

const SearchBar = ({ destination, days, setDestination, setDays, handleSubmit }) => {
    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <div className="search-input">
                    <div className="input-group">
                        <label htmlFor="destination">Destination</label>
                        <input
                            id="destination"
                            type="text"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            placeholder="Enter your destination"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="days">Days</label>
                        <input
                            id="days"
                            type="text"
                            value={days}
                            onChange={(e) => setDays(e.target.value)}
                            placeholder="Number of days"
                        />
                    </div>
                    <button type="submit" className="button">Get Trip Plan</button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
