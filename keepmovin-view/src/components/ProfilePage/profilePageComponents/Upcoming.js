import React, {useEffect, useState} from 'react';
import {ArrowBackIos} from "@material-ui/icons";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";
import {useSelector} from "react-redux";
import EventsUpcomingMenu from "./EventsUpcomingMenu";

function Upcoming(props) {
    
    const theme = useSelector((state) => state.theme.value)
    
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [currentPageUpcoming, setCurrentPageUpcoming] = useState(1);
    const [isLimitNextUpcoming, setIsLimitNextUpcoming] = useState(false)
    const [isLimitBackUpcoming, setIsLimitBackUpcoming] = useState(true)
    const [numberOfPagesUpcoming, setNumberOfPagesUpcoming] = useState(1);

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
    },[currentPageUpcoming])

    useEffect(() => {
        if (currentPageUpcoming >= numberOfPagesUpcoming) {
            setIsLimitNextUpcoming(true);
        }
        else {
            setIsLimitNextUpcoming(false);
        }
    }, [numberOfPagesUpcoming])

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
        <div className={`info-content__container ${theme === 'light' ? 'info-content__container__light' : 'info-content__container__dark'}`}>
            <EventsUpcomingMenu content={upcomingEvents}/>
            <div className={`profile__paginate ${theme === 'light' ? 'profile__paginate__light' : 'profile__paginate__dark'}`}>
                {isLimitBackUpcoming ?
                    <div className="paginate-back__profile-upcoming">
                        <ArrowBackIos className={`${theme === 'light' ? 'arrow-paginate__disabled' : 'arrow-paginate__disabled__dark'}`}/>
                    </div>
                    :
                    <div className="paginate-back__profile-upcoming" onClick={backPageUpcoming}>
                        <ArrowBackIos className={`${theme === 'light' ? 'arrow-paginate__light' : 'arrow-paginate__dark'}`}/>
                    </div>
                }
                {currentPageUpcoming} of {numberOfPagesUpcoming}
                {isLimitNextUpcoming ?
                    <div className="paginate-next__profile-upcoming">
                        <ArrowForwardIosIcon className={`${theme === 'light' ? 'arrow-paginate__disabled' : 'arrow-paginate__disabled__dark'}`}/>
                    </div>
                    :
                    <div className="paginate-next__profile-upcoming" onClick={nextPageUpcoming}>
                        <ArrowForwardIosIcon className={`${theme === 'light' ? 'arrow-paginate__light' : 'arrow-paginate__dark'}`}/>
                    </div>
                }
            </div>
          
        </div>
    );
}

export default Upcoming;