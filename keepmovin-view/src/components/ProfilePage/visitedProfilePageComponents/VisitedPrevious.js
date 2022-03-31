import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import axios from "axios";
import {ArrowBackIos} from "@material-ui/icons";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EventsPreviousMenu from "../profilePageComponents/EventsPreviousMenu";
import {useParams} from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";

function VisitedPrevious(props) {
    const theme = useSelector((state) => state.theme.value)

    let { visitedUserId } = useParams();

    const [previousEvents, setPreviousEvents] = useState([]);
    const [currentPagePrevious, setCurrentPagePrevious] = useState(1);
    const [isLimitNextPrevious, setIsLimitNextPrevious] = useState(false)
    const [isLimitBackPrevious, setIsLimitBackPrevious] = useState(true)
    const [numberOfPagesPrevious, setNumberOfPagesPrevious] = useState(1);
    const [isSectionPrivate, setIsSectionPrivate] = useState(false);

    const routeChange = useSelector((state) => state.isRouteChanged.value);

    useEffect(() => {
        axios
            .get(`/api/Setting/upload/visited-user`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "etag" : visitedUserId,
                }
            })
            .then(response => {
                if (response.data.upcomingEvents === false) {
                    axios
                        .get(`/api/Event/events-visited-user/previous`, {
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                "etag" : visitedUserId,
                                "currentPage": currentPagePrevious

                            }
                        })
                        .then(response => {
                            setNumberOfPagesPrevious(response.data["numberOfPages"])
                            setPreviousEvents(response.data["eventsFound"])
                        })
                    setIsSectionPrivate(false);
                }
                else {
                    setIsSectionPrivate(true);
                }
            })

    },[currentPagePrevious, routeChange])

    useEffect(() => {
        if (currentPagePrevious >= numberOfPagesPrevious) {
            setIsLimitNextPrevious(true);
        }
        else {
            setIsLimitNextPrevious(false);
        }
    }, [numberOfPagesPrevious])

    const nextPagePrevious = () => {
        if(currentPagePrevious + 1 === numberOfPagesPrevious) {
            setIsLimitNextPrevious(true);
        }
        setCurrentPagePrevious(currentPagePrevious + 1)
        setIsLimitBackPrevious(false)
    }

    const backPagePrevious = () => {
        if (currentPagePrevious - 1 === 1) {
            setIsLimitBackPrevious(true);
        }
        setCurrentPagePrevious(currentPagePrevious - 1)
        setIsLimitNextPrevious(false)
    }


    return (
        <div className={`info-content__container ${theme === 'light' ? 'info-content__container__light' : 'info-content__container__dark'}`}>
            {isSectionPrivate 
                ? <div className={`${theme === 'light' ? 'section-private-light' : 'section-private-dark'}`}><LockIcon /> This section is private</div>
                : <>
                    <EventsPreviousMenu content={previousEvents}/>
                    <div className={`profile__paginate ${theme === 'light' ? 'profile__paginate__light' : 'profile__paginate__dark'}`}>
                        {isLimitBackPrevious ?
                            <div className="paginate-back__profile-previous">
                                <ArrowBackIos className={`${theme === 'light' ? 'arrow-paginate__disabled' : 'arrow-paginate__disabled__dark'}`}/>
                            </div>
                            :
                            <div className="paginate-back__profile-previous" onClick={backPagePrevious}>
                                <ArrowBackIos className={`${theme === 'light' ? 'arrow-paginate__light' : 'arrow-paginate__dark'}`}/>
                            </div>
                        }
                        {currentPagePrevious} of {numberOfPagesPrevious}
                        {isLimitNextPrevious ?
                            <div className="paginate-back__profile-previous">
                                <ArrowForwardIosIcon className={`${theme === 'light' ? 'arrow-paginate__disabled' : 'arrow-paginate__disabled__dark'}`}/>
                            </div>
                            :
                            <div className="paginate-back__profile-previous" onClick={nextPagePrevious}>
                                <ArrowForwardIosIcon className={`${theme === 'light' ? 'arrow-paginate__light' : 'arrow-paginate__dark'}`}/>
                            </div>
                        }
                    </div>
                </>
            }
        </div>
    );
}

export default VisitedPrevious;