import React, {useState, useEffect} from 'react';
import EventCard from "./eventCard/EventCard";
import "./ListOfEvents.css"
import Filter from "./filters/Filter";
import SearchBar from "./filters/SearchBar";
import ButtonCard from "./eventCard/ButtonCard";
import SportFilter from "./filters/SportFilter";
import {Pagination} from "@mui/material";


function ListOfEvents() {
    return (
        <div className="wrapper">
            <div className="searchbar-container">\
                <SearchBar />
            </div>
            <div className="create-event-button">
                <ButtonCard name="create" />
            </div>
            <div className="filter-container">
                <Filter />
                <Filter />
                <Filter />
                <Filter />
                <Filter />
                <Filter />
                <Filter />
            </div>
            <div className="events-container">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <Pagination className="pagination" count={10} color="success" />
            </div>
        </div>
    )
}

export default ListOfEvents;