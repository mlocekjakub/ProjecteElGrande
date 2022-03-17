import React from 'react';
import EventCard from "./EventCard";
import EventsSearchedCard from "../../NavbarComponents/EventsSearchedCard";

function UpcomingEvents(trigger,setTrigger, content) {
    
    return (
        <div className="events-menu">
            {content.events.map((event) =>
            (<EventCard key={event.eventId}
                                 eventName={event.name}
                                 eventDateStart={event.startEvent}
                                 sportName={event.sport}
                                 maxParticipants={event.maxParticipants}/>))
            }
        </div>
    );
}

export default UpcomingEvents;