import React from 'react';
import EventCard from "./sportEventsComponents/EventCard";

function Events(props) {
    console.log(props);
    return props.display.map((event) =>
        (<EventCard key={event.eventId}
                    eventId={event.eventId}
                    eventName={event.name}
                    dateStart={event.startEvent}
                    dateEnd={event.endEvent}
                    maxParticipants={event.maxParticipants}
                    sport={event.sports.name}
                    experienceLevels={event.experienceLevel.name}
                    price={event.price}
                    currency={event.currency}
                    location={event.location.city}
                    organiserId={event.user.organiser.userid}/>))
}

export default Events;