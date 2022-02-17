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


function SportEventsPage() {
    
    return (
        <div className="wrapper">
            <header className="header">
                <h1>Events</h1>
            </header>
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
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                
                <Pagination className="pagination" count={10} color="primary" />
            </div>
        </div>
    )
}

export default SportEventsPage;