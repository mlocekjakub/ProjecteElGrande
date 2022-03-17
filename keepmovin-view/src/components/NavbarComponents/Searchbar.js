import React, {useEffect, useRef, useState} from 'react';
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import EventsSearchedCard from "./EventsSearchedCard";
import "./EventsSearchedContainer.css";
import {useDetectClickOutside} from "react-detect-click-outside";
import {useDispatch, useSelector} from "react-redux";
import {changeSearchPhrase} from "../../features/SearchPhraseNav";

function Searchbar(props) {
    
    const typedInput = useSelector((state) => state.searchNav.value)
    
    const dispatch = useDispatch();
    
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

    useEffect(() => {
        axios
            .get(`/api/Event/input/${typedInput}`)
            .then(response => {
                setEventsFound(response.data)

            })
    }, [typedInput])
    
    function EventsMenu() {
       if (typedInput === "") {
           return <div className="emptySearchMenu"> Type event you search for </div>;
       } 
       else {
           return eventsFound.map((event) =>
               (<EventsSearchedCard key={event.eventId}
                                    eventName={event.name}
                                    eventDateStart={event.startEvent}
                                    sportName={event.sport}
                                    experienceLevel={event.experienceLevel}
                                    maxParticipants={event.maxParticipants}/>))
       }
    }
    
    return (
        <div className="search-bar-header" ref={refFoundEventsClickOutside}>
            <input type="text" className="search-txt-header" placeholder="Search for event.."
            required
            value = {typedInput}
            onChange = {(e) => { dispatch(changeSearchPhrase(e.target.value)) }
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