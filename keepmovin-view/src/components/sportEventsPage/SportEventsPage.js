import React, {useEffect, useState} from 'react';
import EventCard from "./sportEventsComponents/EventCard";
import ButtonCard from "./sportEventsComponents/ButtonCard";
import "./sportEventsPage.css";
import SportFilter from "./sportEventsComponents/SportFilter";
import ExperienceFilter from "./sportEventsComponents/ExperienceFilter";
import PriceFilter from "./sportEventsComponents/PriceFilter";
import ParticipantsCountFilter from "./sportEventsComponents/ParticipantsCountFilter";
import TypeFilter from "./sportEventsComponents/TypeFilter";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import {useSelector} from "react-redux";
import {Stack, TextField} from "@mui/material";
import DatePicker from "./sportEventsComponents/DatePicker";


function SportEventsPage() {

    const [allEvents, setAllEvents] = useState([])
    
    const [foundEvents, setFoundEvents] = useState([])
    
    const [searchedEventInput, setSearchedEventInput] = useState('')
    
    const sportsFilter = useSelector((state) => state.sports.value)
    
    const experienceFilter = useSelector((state) => state.experience.value)
    
    const typeFilter = useSelector((state) => state.type.value)
    
    const minParticipantsFilter = useSelector((state) => state.minParticipants.value)
    
    const maxParticipantsFilter = useSelector((state) => state.maxParticipants.value)

    const minPriceFilter = useSelector((state) => state.minPrice.value)

    const maxPriceFilter = useSelector((state) => state.maxPrice.value)
    
    function getUrl() {
        const urlStart = `/api/event?`;
        let sports = ``;
        sportsFilter.map((sport) => {
            sports += `Sports=${sport.sportId}&`
        })
        let minParticipants = `&MinParticipants=${minParticipantsFilter}`;
        let maxParticipants = `&MaxParticipants=${maxParticipantsFilter}`;
        let minPrice = `&MinPrice=${minPriceFilter}`;
        let maxPrice = `&MaxPrice=${maxPriceFilter}`;
        
        return urlStart + sports + minParticipants + maxParticipants + minPrice + maxPrice;
    }
    
    useEffect(() => {
        setTimeout(() => {
            let correctFetchUrl = getUrl();
            console.log(correctFetchUrl)
            axios
                .get(correctFetchUrl)
                .then(response => {
                    setFoundEvents(response.data)
                });
        }, 1000)
    }, [sportsFilter,
        experienceFilter, typeFilter,
        minParticipantsFilter, maxParticipantsFilter, 
        minPriceFilter, maxPriceFilter])
    

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
                        experienceLevel={event.experienceLevel}
                        price={event.price}
                        currency={event.currency}/>))
        }
    
        
        
    return (
        <div className="events-page-wrapper">
            <div className="header">
                <h1>Events</h1>
            </div>
            <div className="events-filters__container">
                <div className="filter-container">
                    <ButtonCard name="create" />
                    <SportFilter />
                    <ExperienceFilter />
                    <PriceFilter />
                    <ParticipantsCountFilter />
                    <TypeFilter />
                </div>
                <div className="events-container">
                    <div className="event-sorting">
                        <DatePicker />
                    </div>
                    <Events display={foundEvents} />
                </div>
            </div>
        </div>
    )
}

export default SportEventsPage;