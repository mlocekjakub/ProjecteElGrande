import React, {useEffect, useRef, useState} from 'react';
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import EventsSearchedCard from "./EventsSearchedCard";
import "./EventsSearchedContainer.css";
import {useDetectClickOutside} from "react-detect-click-outside";

function Searchbar(props) {
    const [typedInput, setTypedInput] = useState('');
    
    const [eventsFound, setEventsFound] = useState([]);
    
    const refFoundEvents = useRef(null);
    
    const refFoundEventsClickOutside = useDetectClickOutside(
        { onTriggered: closeSearchMenu });
    
    function expandFoundEventsContainer() {
        refFoundEvents.current.classList.add("events-found__active")
    }
    
    function closeSearchMenu() {
        refFoundEvents.current.classList.remove("events-found__active")
    }
    
    function EventsMenu() {
       if (typedInput === '') {
           return <div className="emptySearchMenu"> Type event you search for </div>;
       } 
       else {
           return eventsFound.map((event) =>
               (<EventsSearchedCard key={event.eventId}
                                    eventName={event.name}
                                    dateStart={event.startEvent}
                                    sportId={event.sportId}
                                    experienceLevel={event.experienceLevel}
                                    maxParticipants={event.maxParticipants}/>))
       }
    }
    
    return (
        <div className="search-bar-header" ref={refFoundEventsClickOutside}>
            <input type="text" className="search-txt-header" placeholder="Search for event.."
            required
            value = {typedInput}
            onChange = {(e) => {
                setTypedInput(e.target.value)
                axios
                    .get(`/api/event/${typedInput}`)
                    .then(response => {
                        setEventsFound(response.data)

                    })}
            }
            onClick={expandFoundEventsContainer}
            />
            <div className="glass-container">
                <SearchIcon className="header-search-icon" />
            </div>
            <div className="events-container__expanded" ref={refFoundEvents}>
                <EventsMenu />
            </div>
        </div>
    );
}

export default Searchbar;