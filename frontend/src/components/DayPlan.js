import React from 'react';
import './DayPlan.css'; // Optional: for specific styles related to day plans

const DayPlan = ({ dayPlan }) => {
    if (dayPlan.length !== 7) return null;

    return (
        <div className="day-plan">
            <h3>{dayPlan[0]}</h3> {/* Day X: */}
            <div className="activity-box">
                <h4>{dayPlan[1]}</h4> {/* Morning: ... */}
                {dayPlan.slice(2, 3).map((item, index) => (
                    <div key={index} className="activity-item">{item}</div> // Morning activities
                ))}
            </div>
            <div className="activity-box">
                <h4>{dayPlan[3]}</h4> {/* Afternoon: ... */}
                {dayPlan.slice(4, 5).map((item, index) => (
                    <div key={index + 1} className="activity-item">{item}</div> // Afternoon activities
                ))}
            </div>
            <div className="activity-box">
                <h4>{dayPlan[5]}</h4> {/* Evening: ... */}
                {dayPlan.slice(6,7).map((item, index) => (
                    <div key={index + 2} className="activity-item">{item}</div> // Evening activities
                ))}
            </div>
        </div>
    );
};

export default DayPlan;
