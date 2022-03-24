import React from 'react';
import EventsSearchedCard from "../../NavbarComponents/EventsSearchedCard";
import EventCardPrevious from "./EventCardPrevious";

function EventsPreviousMenu(props) {
    let numberOfEmptyCards = 6 - props.content.length
    return (
        <div className="events-menu">
            {props.content.map((event) =>
                (<EventCardPrevious 
                            key={event.eventId}
                            eventName={event.name}
                            eventDateStart={event.startEvent}
                            sportName={event.sports.name}/>))
            }
            {Array.from({ length: numberOfEmptyCards }, (_, i) =>
                <div key={i} className="empty-card"></div>)}
        </div>
    );
}

export default EventsPreviousMenu;