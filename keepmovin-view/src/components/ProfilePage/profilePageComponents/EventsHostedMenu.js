import React from 'react';
import EventCardHosted from "./EventCardHosted";

function EventsHostedMenu(props) {
    let numberOfEmptyCards = 6 - props.content.length
    return (
        <div className="events-menu">
            {props.content.map((event) =>
                (<EventCardHosted key={event.eventId}
                            eventName={event.name}
                            sportName={event.sports.name}/>))
            }
            {Array.from({ length: numberOfEmptyCards }, (_, i) =>
                <div className="empty-card"></div>)}
        </div>
    );
}

export default EventsHostedMenu;