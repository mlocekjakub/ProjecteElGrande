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



function SportEventsPage() {

    const [allEvents, setAllEvents] = useState([])

    useEffect(() => {
        axios
            .get ('/api/event')
            .then(response => {
                setAllEvents(response.data)
            });
    }, [])
    

        
    return (
        <div className="wrapper">
            <div className="header">
                <h1>Events</h1>
            </div>
            <div className="searchbar-container">
                <SearchBar />
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
                {allEvents.map((event) =>
                    (<EventCard key={event.eventId} 
                                eventName={event.name} 
                                dateStart={event.startEvent} 
                                dateEnd={event.endEvent} 
                                organizerId={event.organizerUserId}
                                maxParticipants={event.maxParticipants}
                                sportId={event.sportId}
                                experienceLevel={event.experienceLevel}/>))}
                <Pagination className="pagination" count={5} color="primary" />
            </div>
        </div>
    )
}

export default SportEventsPage;