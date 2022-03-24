import React, {useEffect, useState} from 'react';
import {ArrowBackIos} from "@material-ui/icons";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";
import {useSelector} from "react-redux";
import EventsHostedMenu from "./EventsHostedMenu";

function Hosted(props) {

    const [hostedEvents, setHostedEvents] = useState([]);
    const [currentPageHosted, setCurrentPageHosted] = useState(1);
    const [isLimitNextHosted, setIsLimitNextHosted] = useState(false)
    const [isLimitBackHosted, setIsLimitBackHosted] = useState(true)
    const [numberOfPagesHosted, setNumberOfPagesHosted] = useState(1);

    const isUserLogged = useSelector((state) => state.isLogged.value)


    useEffect(() => {
        if (isUserLogged) {
            axios
                .get(`/api/Event/events-user/hosted`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        "etag" : localStorage.getItem('session'),
                        "currentPage": currentPageHosted

                    }
                })
                .then(response => {
                    setNumberOfPagesHosted(response.data["numberOfPages"])
                    setHostedEvents(response.data["eventsFound"])
                })
        }
    },[currentPageHosted])

    useEffect(() => {
        if (currentPageHosted >= numberOfPagesHosted) {
            setIsLimitNextHosted(true);
        }
        else {
            setIsLimitNextHosted(false);
        }
    }, [numberOfPagesHosted])
    

    const nextPageHosted = () => {
        if(currentPageHosted + 1 === numberOfPagesHosted) {
            setIsLimitNextHosted(true);
        }
        setCurrentPageHosted(currentPageHosted + 1)
        setIsLimitBackHosted(false)
    }

    const backPageHosted = () => {
        if (currentPageHosted - 1 === 1) {
            setIsLimitBackHosted(true);
        }
        setCurrentPageHosted(currentPageHosted - 1)
        setIsLimitNextHosted(false)
    }


    return (
        <div className="info-content">
            <EventsHostedMenu content={hostedEvents}/>
            <div className="profile__paginate">
                {isLimitBackHosted ?
                    <div className="paginate-back__profile-hosted">
                        <ArrowBackIos className="arrow-paginate__disabled"/>
                    </div>
                    :
                    <div className="paginate-back__profile-hosted" onClick={backPageHosted}>
                        <ArrowBackIos className="arrow-paginate"/>
                    </div>
                }
                {currentPageHosted} of {numberOfPagesHosted}
                {isLimitNextHosted ?
                    <div className="paginate-next__profile-hosted">
                        <ArrowForwardIosIcon className="arrow-paginate__disabled"/>
                    </div>
                    :
                    <div className="paginate-next__profile-hosted" onClick={nextPageHosted}>
                        <ArrowForwardIosIcon className="arrow-paginate"/>
                    </div>
                }
            </div>

        </div>
    );
}

export default Hosted;