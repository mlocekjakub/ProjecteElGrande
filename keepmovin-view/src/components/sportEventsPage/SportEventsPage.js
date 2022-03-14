import React, {useEffect, useState} from 'react';
import EventCard from "./sportEventsComponents/EventCard";
import ButtonCard from "./sportEventsComponents/ButtonCard";
import "./sportEventsPage.css";
import "../../index.css"
import SportFilter from "./sportEventsComponents/SportFilter";
import ExperienceFilter from "./sportEventsComponents/ExperienceFilter";
import PriceFilter from "./sportEventsComponents/PriceFilter";
import ParticipantsCountFilter from "./sportEventsComponents/ParticipantsCountFilter";
import TypeFilter from "./sportEventsComponents/TypeFilter";
import axios from "axios";
import {useSelector} from "react-redux";
import DatePicker from "./sportEventsComponents/DatePicker";
import LoadingSpinner from "./sportEventsComponents/LoadingSpinner";


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
    
    const [inputTimeout, setInputTimeout] = useState(null);
    
    const [isFetchingData, setIsFetchingData] = useState(false);
    
    const [eventsNotFound, setEventsNotFound] = useState(false);
    
    function getUrl() {
        const urlStart = `/api/event?`;
        let sports = ``;
        sportsFilter.map((sport) => {
            sports += `Sports=${sport.sportId}&`
        })
        
        let experiences = ``;
        experienceFilter.map((experience) => {
            experiences += `Experience=${experience.experienceLevelId}&`
        })
        
        let types = ``;
        typeFilter.map((eventType) => {
            types += `Type=${eventType.typeId}&`
        })
        
        let minParticipants = `MinParticipants=${minParticipantsFilter}`;
        let maxParticipants = `&MaxParticipants=${maxParticipantsFilter}`;
        let minPrice = `&MinPrice=${minPriceFilter}`;
        let maxPrice = `&MaxPrice=${maxPriceFilter}`;
        return urlStart + sports + experiences + types + minParticipants + maxParticipants + minPrice + maxPrice;
    }
    
    
    useEffect(() => {
        setIsFetchingData(true);
        setEventsNotFound(false);
        setFoundEvents([])
        if (inputTimeout) {
            clearTimeout(inputTimeout)
        }
        setInputTimeout(
            setTimeout(() => {
                let correctFetchUrl = getUrl();
                axios
                    .get(correctFetchUrl)
                    .then(response => {
                        if (response.data === '') {
                            setEventsNotFound(true);
                        }
                        else {
                            setFoundEvents(response.data)
                        }
                        setIsFetchingData(false);
                    });
            }, 1000) 
        )
    }, [sportsFilter,
        experienceFilter, typeFilter,
        minParticipantsFilter, maxParticipantsFilter, 
        minPriceFilter, maxPriceFilter])
    

 
    
    function Events(props) {
        return props.display.map((event) =>
            (<EventCard key={event.eventId}
                        eventName={event.name}
                        dateStart={event.startEvent}
                        dateEnd={event.endEvent}
                        maxParticipants={event.maxParticipants}
                        sport={event.sportsSportId}
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
                    <DatePicker />
                    
                    {isFetchingData && <LoadingSpinner />}

                    {eventsNotFound && <div className="events__not-found">Events not found</div>}
                    
                    <Events display={foundEvents} />
                </div>
            </div>
        </div>
    )
}

export default SportEventsPage;