import React from 'react';
import DayPlan from './DayPlan';
import './TripPlanDisplay.css'; // Optional: for specific styles related to the trip plan display

const TripPlanDisplay = ({ tripPlan }) => {
    return (
        <div className="trip-plan-display">
            {Array.from({ length: Math.floor(tripPlan.length / 7) }, (_, index) => (
                <DayPlan key={index} dayPlan={tripPlan.slice(index * 7, (index + 1) * 7)} />
            ))}
        </div>
    );
};

export default TripPlanDisplay;
