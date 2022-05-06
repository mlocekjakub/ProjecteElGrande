import React from 'react';
import {useSelector} from "react-redux";

function EventsMenu({content, CardTag}) {
    let numberOfEmptyCards = 6 - content.length
    const theme = useSelector((state) => state.theme.value)
    return (
        <div className="events-menu">
            
            {content.map((event) =>
                    (<CardTag key={event.eventId} 
                                        eventCardId={event.eventId} 
                                        eventName={event.name} 
                                        sportName={event.sports.name} 
                                        eventDateStart={event.startEvent} 
                                        maxParticipants={event.maxParticipants}/>))}
            {Array.from({ length: numberOfEmptyCards }, (_, i) =>
                <div key={i} className={`empty-card ${theme === 'light' ? 'empty-card__light' : 'empty-card__dark'}`}></div>)}
        </div>
    );
}

export default EventsMenu;