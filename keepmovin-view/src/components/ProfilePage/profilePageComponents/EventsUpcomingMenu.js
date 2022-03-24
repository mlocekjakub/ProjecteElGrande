import React from 'react';
import EventsSearchedCard from "../../NavbarComponents/EventsSearchedCard";
import EventCardUpcoming from "./EventCardUpcoming";

function EventsUpcomingMenu(props) {
    let numberOfEmptyCards = 6 - props.content.length
    return (
        <div className="events-menu">
            {props.content.map((event) =>
                (<EventCardUpcoming key={event.eventId}
                            eventCardId={event.eventId}
                            eventName={event.name}
                            eventDateStart={event.startEvent}
                            sportName={event.sports.name}
                            maxParticipants={event.maxParticipants}/>))
            }
            {Array.from({ length: numberOfEmptyCards }, (_, i) =>
                <div key={i} className="empty-card"></div>)}
        </div>
    );
}

export default EventsUpcomingMenu;



