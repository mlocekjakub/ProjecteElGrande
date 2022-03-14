import React, {useEffect, useState} from 'react';
import EventCard from "./sportEventsComponents/EventCard";
import "./ListOfEvents.css";
import "../../index.css"
import SportFilter from "./sportEventsComponents/SportFilter";
import ExperienceFilter from "./sportEventsComponents/ExperienceFilter";
import PriceFilter from "./sportEventsComponents/PriceFilter";
import ParticipantsCountFilter from "./sportEventsComponents/ParticipantsCountFilter";
import TypeFilter from "./sportEventsComponents/TypeFilter";
import axios from "axios";
import {useSelector} from "react-redux";
import DateFilter from "./sportEventsComponents/DateFilter";
import LoadingSpinner from "./sportEventsComponents/LoadingSpinner";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {Link} from "react-router-dom";


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
    
    const datesFilter = useSelector((state) => state.rangeDate.value)
    
    const [currentPage, setCurrentPage] = useState(1);
    
    const [numberOfPages, setNumberOfPages] = useState();
    
    const [inputTimeout, setInputTimeout] = useState(null);
    
    const [isFetchingData, setIsFetchingData] = useState(false);
    
    const [eventsNotFound, setEventsNotFound] = useState(false);
    
    const [isLimitNext, setIsLimitNext] = useState(false);

    const [isLimitPrevious, setIsLimitPrevious] = useState(true);
    
    
    function getUrl() {
        const urlStart = `/api/event?`;
        let sports = ``;
        sportsFilter.map((sport) => {
            sports += `Sports=${sport.name}&`
        })
        
        let experiences = ``;
        experienceFilter.map((experience) => {
            experiences += `Experience=${experience.name}&`
        })
        
        let types = ``;
        typeFilter.map((eventType) => {
            types += `Type=${eventType.name}&`
        })
        
        let minParticipants = `MinParticipants=${minParticipantsFilter}`;
        let maxParticipants = `&MaxParticipants=${maxParticipantsFilter}`;
        let minPrice = `&MinPrice=${minPriceFilter}`;
        let maxPrice = `&MaxPrice=${maxPriceFilter}`;
        let minDate = `&MinDate=${datesFilter[0]}`
        let maxDate = `&MaxDate=${datesFilter[1]}`
        let pageNumber = `&CurrentPageNumber=${currentPage}`
        return urlStart + sports + experiences + types + minParticipants + maxParticipants + minDate + maxDate + minPrice + maxPrice + pageNumber;
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
                            setFoundEvents(response.data.eventsFound)
                            setNumberOfPages(response.data.numberOfPages)
                        }
                        setIsFetchingData(false);
                    });
            }, 1000) 
        )
    }, [sportsFilter,
        experienceFilter, typeFilter,
        minParticipantsFilter, maxParticipantsFilter, 
        minPriceFilter, maxPriceFilter,datesFilter, currentPage])
    

    const NextPage = () => {
        if(currentPage + 1 === numberOfPages) {
            setIsLimitNext(true);
        }
        setCurrentPage(currentPage + 1)
        setIsLimitPrevious(false)
    }
    
    const PreviousPage = () => {
        if (currentPage - 1 === 1) {
            setIsLimitPrevious(true);
        }
        setCurrentPage(currentPage - 1)
        setIsLimitNext(false)
    }
    
    function Events(props) {
        return props.display.map((event) =>
            (<EventCard key={event.eventId}
                        eventName={event.name}
                        dateStart={event.startEvent}
                        dateEnd={event.endEvent}
                        maxParticipants={event.maxParticipants}
                        sport={event.sport}
                        experienceLevel={event.experienceLevel}
                        price={event.price}
                        currency={event.currency}
                        location={event.location}/>))
        }
        
    return (
        <div className="events-page-wrapper">
            <div className="header">
                <h1>Events</h1>
            </div>
            <div className="events-filters__container">
                <div className="filter-container">
                    <Link className="create-button-link" to="/event/create">Create Event</Link>
                    <SportFilter />
                    <ExperienceFilter />
                    <PriceFilter />
                    <ParticipantsCountFilter />
                    <TypeFilter />
                </div>
                <div className="events-container">
                    <div className="events-page__locating">
                        <DateFilter />
                        {!eventsNotFound &&
                            <div className="events-page__pagination">
                                {isLimitPrevious
                                    ?
                                    <div className="events-page__paginate-button-disabled">
                                        <ArrowBackIosIcon className="events__back-icon"/>
                                    </div>
                                    :
                                    <div className="events-page__paginate-button">
                                        <ArrowBackIosIcon onClick={PreviousPage}/>
                                    </div>}
                                <div className="pagination__number">
                                    <span>{currentPage}</span> of <span>{numberOfPages}</span></div>
                                {isLimitNext
                                    ?
                                    <div className="events-page__paginate-button-disabled">
                                        <ArrowForwardIosIcon className="events__forward-icon"/>
                                    </div>
                                    :
                                    <div className="events-page__paginate-button">
                                        <ArrowForwardIosIcon onClick={NextPage} className="events__forward-icon"/>
                                    </div>}
                            </div>
                        }
                    </div>
                    <div>
                        {isFetchingData && <LoadingSpinner />}
                        {eventsNotFound && <div className="events__not-found">Events not found</div>}
                        <Events display={foundEvents} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SportEventsPage;