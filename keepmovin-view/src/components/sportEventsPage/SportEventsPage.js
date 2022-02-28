import React, {useState, useEffect} from 'react';
import EventCard from "./sportEventsComponents/EventCard";
import SearchBar from "./sportEventsComponents/SearchBar";
import ButtonCard from "./sportEventsComponents/ButtonCard";
import {Pagination} from "@mui/material";
import "./sportEventsPage.css";
import SportFilter from "./sportEventsComponents/SportFilter";
import ExperienceFilter from "./sportEventsComponents/ExperienceFilter";
import PriceFilter from "./sportEventsComponents/PriceFilter";
import ParticipantsCountFilter from "./sportEventsComponents/ParticipantsCountFilter";
import TypeFilter from "./sportEventsComponents/TypeFilter";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";



function SportEventsPage() {

    const [allEvents, setAllEvents] = useState([])
    
    const [foundEvents, setFoundEvents] = useState([])
    
    const [searchedEventInput, setSearchedEventInput] = useState('')

    useEffect(() => {
        axios
            .get(`/api/event/${searchedEventInput}`)
            .then(response => {
                setFoundEvents(response.data)
            });
    }, [searchedEventInput])
    

   /* useEffect(async () => {
        const response = await fetch("/user/validate", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        })
        const content = await response.json()
            .then(content => localStorage.setItem('session', content))
    })*/
    
    function Events(props) {
        return props.display.map((event) =>
            (<EventCard key={event.eventId}
                        eventName={event.name}
                        dateStart={event.startEvent}
                        dateEnd={event.endEvent}
                        organizerId={event.organizerUserId}
                        maxParticipants={event.maxParticipants}
                        sportId={event.sportId}
                        experienceLevel={event.experienceLevel}/>))
        }
    
        
    return (
        <div className="wrapper">
            <div className="header">
                <h1>Events</h1>
            </div>
            <div className="searchbar-container">
                <div className="search-bar">
                    <button type="submit" className="search-button">
                        <SearchIcon />
                    </button>
                    <input type="text" className="search-txt" placeholder="Search.." 
                           required
                           onChange={(e) => {
                               setSearchedEventInput(e.target.value) }}
                    />
                </div>
            </div>
            <div className="create-event-button">
                <ButtonCard name="create" />
            </div>
            <div className="filter-container">
                <SportFilter />
                <ExperienceFilter />
                <PriceFilter />
                <ParticipantsCountFilter />
                <TypeFilter />
            </div>
            <div className="events-container">
               {/* {searchedEventInput !== '' ? <Events display={foundEvents} /> : <Events display={allEvents}/>}*/}
                <Events display={foundEvents} /> 
                
            </div>
        </div>
    )
}

export default SportEventsPage;