import React from 'react';
import EventCard from "./EventCard";

function UpcomingEvents(props) {
    return (
        <div className="events-menu">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <div className="empty-card"></div>
            <div className="empty-card"></div>
        </div>
    );
}

export default UpcomingEvents;