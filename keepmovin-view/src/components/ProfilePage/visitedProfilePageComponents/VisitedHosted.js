import React, {useEffect, useState} from 'react';
import {ArrowBackIos} from "@material-ui/icons";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import EventsMenu from "../profilePageComponents/EventsMenu";
import EventCardHosted from "../profilePageComponents/EventCardHosted";

function VisitedHosted(props) {
    const theme = useSelector((state) => state.theme.value)

    let { visitedUserId } = useParams();

    const [hostedEvents, setHostedEvents] = useState([]);
    const [currentPageHosted, setCurrentPageHosted] = useState(1);
    const [isLimitNextHosted, setIsLimitNextHosted] = useState(false)
    const [isLimitBackHosted, setIsLimitBackHosted] = useState(true)
    const [numberOfPagesHosted, setNumberOfPagesHosted] = useState(1);
    const [isSectionPrivate, setIsSectionPrivate] = useState(false);

    const routeChange = useSelector((state) => state.isRouteChanged.value);


    useEffect(() => {
        axios
            .get(`/api/Setting/upload/visited-user`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "visitedUserId" : visitedUserId,
                }
            })
            .then(response => {
                if (response.data.hostedEvents === false) {
                    axios
                        .get(`/api/Event/events-visited-user/hosted`, {
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                "visitedUserId": visitedUserId,
                                "currentPage": currentPageHosted

                            }
                        })
                        .then(response => {
                            setNumberOfPagesHosted(response.data["numberOfPages"])
                            setHostedEvents(response.data["eventsFound"])
                        })
                    setIsSectionPrivate(false);
                }
                else {
                    setIsSectionPrivate(true);
                }
            })

    },[currentPageHosted, routeChange])

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
        <div className={`info-content__container ${theme === 'light' ? 'info-content__container__light' : 'info-content__container__dark'}`}>
            {isSectionPrivate 
                ? <div className={`${theme === 'light' ? 'section-private-light' : 'section-private-dark'}`}><LockIcon /> This section is private</div> 
                : <>
                    <EventsMenu CardTag={EventCardHosted} content={hostedEvents}/>
                    <div className={`profile__paginate ${theme === 'light' ? 'profile__paginate__light' : 'profile__paginate__dark'}`}>
                        {isLimitBackHosted ?
                            <div className="paginate-back__profile-hosted">
                                <ArrowBackIos className={`${theme === 'light' ? 'arrow-paginate__disabled' : 'arrow-paginate__disabled__dark'}`}/>
                            </div>
                            :
                            <div className="paginate-back__profile-hosted" onClick={backPageHosted}>
                                <ArrowBackIos className={`${theme === 'light' ? 'arrow-paginate__light' : 'arrow-paginate__dark'}`}/>
                            </div>
                        }
                        {currentPageHosted} of {numberOfPagesHosted}
                        {isLimitNextHosted ?
                            <div className="paginate-next__profile-hosted">
                                <ArrowForwardIosIcon className={`${theme === 'light' ? 'arrow-paginate__disabled' : 'arrow-paginate__disabled__dark'}`}/>
                            </div>
                            :
                            <div className="paginate-next__profile-hosted" onClick={nextPageHosted}>
                                <ArrowForwardIosIcon className={`${theme === 'light' ? 'arrow-paginate__light' : 'arrow-paginate__dark'}`}/>
                            </div>
                        }
                    </div>
                </>
            }
        </div>
    );
}

export default VisitedHosted;