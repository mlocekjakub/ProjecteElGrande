import React from 'react';
import EventCard from "./EventCard";
import EventsSearchedCard from "../../NavbarComponents/EventsSearchedCard";

function EventsMenu(props) {
    let numberOfEmptyCards = 5 - props.content.length
    return (
        <div className="events-menu">
            <EventCard key={1202}
                       eventName="Runmageddon"
                       eventDateStart="2022-03-03 14:05:06.8633333"
                       sportName="Running"
                       maxParticipants="30" />
            {props.content.map((event) =>
                (<EventCard key={event.eventId}
                            eventName={event.name}
                            eventDateStart={event.startEvent}
                            sportName={event.sport}
                            maxParticipants={event.maxParticipants}/>))
            }
            {Array.from({ length: numberOfEmptyCards }, (_, i) =>
                <div className="empty-card"></div>)}
        </div>
    );
}

export default EventsMenu;



