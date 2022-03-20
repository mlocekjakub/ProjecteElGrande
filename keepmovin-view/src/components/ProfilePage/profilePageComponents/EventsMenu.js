import React from 'react';
import EventCard from "./EventCard";
import EventsSearchedCard from "../../NavbarComponents/EventsSearchedCard";

function EventsMenu(props) {
    let numberOfEmptyCards = 6 - props.content.length
    console.log(props.content)
    return (
        <div className="events-menu">
            {props.content.map((event) =>
                (<EventCard key={event.eventId}
                            eventName={event.name}
                            eventDateStart={event.startEvent}
                            sportName={event.sports.name}
                            maxParticipants={event.maxParticipants}/>))
            }
            {Array.from({ length: numberOfEmptyCards }, (_, i) =>
                <div className="empty-card"></div>)}
        </div>
    );
}

export default EventsMenu;



