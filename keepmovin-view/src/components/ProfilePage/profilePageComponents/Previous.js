import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import axios from "axios";
import {ArrowBackIos} from "@material-ui/icons";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EventsMenu from "./EventsMenu";

function Previous(props) {

    const [previousEvents, setPreviousEvents] = useState([]);
    const [currentPagePrevious, setCurrentPagePrevious] = useState(1);
    const [isLimitNextPrevious, setIsLimitNextPrevious] = useState(false)
    const [isLimitBackPrevious, setIsLimitBackPrevious] = useState(true)
    const [numberOfPagesPrevious, setNumberOfPagesPrevious] = useState(0);

    const isUserLogged = useSelector((state) => state.isLogged.value)
    
    useEffect(() => {
        if (isUserLogged) {
            axios
                .get(`/api/Event/events-user/previous`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        "etag" : localStorage.getItem('session'),
                        "currentPage": currentPagePrevious

                    }
                })
                .then(response => {
                    setNumberOfPagesPrevious(response.data["numberOfPages"])
                    setPreviousEvents(response.data["eventsFound"])

                })
        }
        if (currentPagePrevious >= numberOfPagesPrevious) {
            setIsLimitNextPrevious(true);
        }
    }, [])

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
        <div className="info-content">
            <EventsMenu content={previousEvents}/>
            <div className="profile__paginate">
                {isLimitBackPrevious ?
                    <div className="paginate-back__profile-previous">
                        <ArrowBackIos className="arrow-paginate__disabled"/>
                    </div>
                    :
                    <div className="paginate-back__profile-previous" onClick={backPagePrevious}>
                        <ArrowBackIos className="arrow-paginate"/>
                    </div>
                }
                {currentPagePrevious} of {numberOfPagesPrevious}
                {isLimitNextPrevious ?
                    <div className="paginate-back__profile-previous">
                        <ArrowForwardIosIcon className="arrow-paginate__disabled"/>
                    </div>
                    :
                    <div className="paginate-back__profile-previous" onClick={nextPagePrevious}>
                        <ArrowForwardIosIcon className="arrow-paginate"/>
                    </div>
                }
            </div>
        </div>
    );
}

export default Previous;