import React from 'react';
import EventsSearchedCard from "../../NavbarComponents/EventsSearchedCard";
import EventCardPrevious from "./EventCardPrevious";
import {useSelector} from "react-redux";

function EventsPreviousMenu(props) {
    const theme = useSelector((state) => state.theme.value)
    
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
                <div key={i} className={`${theme === 'light' ? 'empty-card__light' : 'empty-card__dark'}`}></div>)}
        </div>
    );
}

export default EventsPreviousMenu;