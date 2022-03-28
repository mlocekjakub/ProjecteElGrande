import React from 'react';
import EventsSearchedCard from "../../NavbarComponents/EventsSearchedCard";
import EventCardUpcoming from "./EventCardUpcoming";
import {useSelector} from "react-redux";

function EventsUpcomingMenu(props) {
    let numberOfEmptyCards = 6 - props.content.length
    const theme = useSelector((state) => state.theme.value)
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
                <div key={i} className={`${theme === 'light' ? 'empty-card__light' : 'empty-card__dark'}`}></div>)}
        </div>
    );
}

export default EventsUpcomingMenu;



