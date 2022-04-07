import React, {useEffect, useState} from 'react';
import {ArrowBackIos} from "@material-ui/icons";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";
import {useSelector} from "react-redux";
import EventsUpcomingMenu from "../profilePageComponents/EventsUpcomingMenu";
import {useNavigate, useParams} from "react-router-dom";
import LockIcon from '@mui/icons-material/Lock';

function VisitedUpcoming() {

    let { visitedUserId } = useParams();

    const theme = useSelector((state) => state.theme.value)

    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [currentPageUpcoming, setCurrentPageUpcoming] = useState(1);
    const [isLimitNextUpcoming, setIsLimitNextUpcoming] = useState(false)
    const [isLimitBackUpcoming, setIsLimitBackUpcoming] = useState(true)
    const [numberOfPagesUpcoming, setNumberOfPagesUpcoming] = useState(1);
    const [isSectionPrivate, setIsSectionPrivate] = useState(false);
    const [isFetchingData, setIsFetchingData] = useState(false);
    
    const navigate = useNavigate();

    const routeChange = useSelector((state) => state.isRouteChanged.value);


    useEffect(() => {
        setIsFetchingData(true);
        axios
            .get(`/api/Setting/upload/visited-user`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "visitedUserId" : visitedUserId,
                }
            })
            .then(response => {
                if (response.data.upcomingEvents === false) {
                    axios
                        .get(`/api/Event/events-visited-user/upcoming`, {
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                "visitedUserId" : visitedUserId,
                                "currentPage": currentPageUpcoming

                            }
                        })
                        .then(response => {
                            setNumberOfPagesUpcoming(response.data["numberOfPages"])
                            setUpcomingEvents(response.data["eventsFound"])
                        })
                    setIsSectionPrivate(false);
                }
                else {
                    setIsSectionPrivate(true);
                }
                setIsFetchingData(false);
            })
        
    },[currentPageUpcoming, routeChange])

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
            {isSectionPrivate 
                ? <div className={`${theme === 'light' ? 'section-private-light' : 'section-private-dark'}`}><LockIcon /> This section is private</div> 
                : <>
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
                </>
            }

        </div>
    );
}

export default VisitedUpcoming;