import React from 'react';
import EventCardHosted from "./EventCardHosted";
import {useSelector} from "react-redux";

function EventsHostedMenu(props) {
    let numberOfEmptyCards = 6 - props.content.length
    const theme = useSelector((state) => state.theme.value)
    
    return (
        <div className="events-menu">
            {props.content.map((event) =>
                (<EventCardHosted key={event.eventId}
                            eventName={event.name}
                            eventCardId={event.eventId}      
                            sportName={event.sports.name}
                            eventDateStart={event.startEvent}
                            maxParticipants={event.maxParticipants}/>))
            }
            {Array.from({ length: numberOfEmptyCards }, (_, i) =>
                <div key={i} className={`${theme === 'light' ? 'empty-card__light' : 'empty-card__dark'}`}></div>)}
        </div>
    );
}

export default EventsHostedMenu;