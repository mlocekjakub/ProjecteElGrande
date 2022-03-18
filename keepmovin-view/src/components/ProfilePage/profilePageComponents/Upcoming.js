import React, {useEffect, useState} from 'react';
import {ArrowBackIos} from "@material-ui/icons";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";
import {useSelector} from "react-redux";
import EventsMenu from "./EventsMenu";

function Upcoming(props) {
    
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [currentPageUpcoming, setCurrentPageUpcoming] = useState(1);
    const [isLimitNextUpcoming, setIsLimitNextUpcoming] = useState(false)
    const [isLimitBackUpcoming, setIsLimitBackUpcoming] = useState(true)
    const [numberOfPagesUpcoming, setNumberOfPagesUpcoming] = useState(0);

    const isUserLogged = useSelector((state) => state.isLogged.value)
    

    useEffect(() => {
        if (isUserLogged) {
            axios
                .get(`/api/Event/events-user/upcoming`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        "etag" : localStorage.getItem('session'),
                        "currentPage": currentPageUpcoming

                    }
                })
                .then(response => {
                    setNumberOfPagesUpcoming(response.data["numberOfPages"])
                    setUpcomingEvents(response.data["eventsFound"])

                })
        }
        if (currentPageUpcoming >= numberOfPagesUpcoming) {
            setIsLimitNextUpcoming(true);
        }
    },[])

    const nextPageUpcoming = () => {
        if(currentPageUpcoming + 1 === numberOfPagesUpcoming) {
            setIsLimitNextUpcoming(true);
        }
        setCurrentPageUpcoming(currentPageUpcoming + 1)
        setIsLimitBackUpcoming(false)
    }

    const backPageUpcoming = () => {
        if (currentPageUpcoming - 1 === 1) {
            setIsLimitBackUpcoming(true);
        }
        setCurrentPageUpcoming(currentPageUpcoming - 1)
        setIsLimitNextUpcoming(false)
    }
    
    
    return (
        <div className="info-content">
            <EventsMenu content={upcomingEvents}/>
            <div className="profile__paginate">
                {isLimitBackUpcoming ?
                    <div className="paginate-back__profile-upcoming">
                        <ArrowBackIos className="arrow-paginate__disabled"/>
                    </div>
                    :
                    <div className="paginate-back__profile-upcoming" onClick={backPageUpcoming}>
                        <ArrowBackIos className="arrow-paginate"/>
                    </div>
                }
                {currentPageUpcoming} of {numberOfPagesUpcoming}
                {isLimitNextUpcoming ?
                    <div className="paginate-next__profile-upcoming">
                        <ArrowForwardIosIcon className="arrow-paginate__disabled"/>
                    </div>
                    :
                    <div className="paginate-next__profile-upcoming" onClick={nextPageUpcoming}>
                        <ArrowForwardIosIcon className="arrow-paginate"/>
                    </div>
                }
            </div>
          
        </div>
    );
}

export default Upcoming;