import React, {useEffect, useState} from 'react';
import "./EventPage.css";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import defaultProfileImage from "../../Images/DefaultProfileImage.jpg";
import LoadingSpinner from "../ListOfEvents/sportEventsComponents/LoadingSpinner";
import defaultEventImage from "../../Images/News-Trailer-Web-4Sep20.png";
import PersonIcon from '@mui/icons-material/Person';


function EventPage() {
    let {id} = useParams();
    const [eventModel, setEventModel] = useState();
    
    const isUserLogged = useSelector((state) => state.isLogged.value)
    
    const theme = useSelector((state) => state.theme.value)

    const routeChange = useSelector((state) => state.isRouteChanged.value);
    
    const [isFetched, setIsFetched] = useState(false);
    
    const [usersJoined, setUsersJoined] = useState(0)
    
    const [joinButtonState, setJoinButtonState] = useState()
    
    const navigate = useNavigate();
    
    const [timerCounter, setTimerCounter] = useState({
        startDateEvent: "",
        nowEvent: "",
        countdownEvent: "",
        daysEvent: "",
        hoursEvent: "",
        minutesEvent: "",
        secondsEvent: "",
    })

    /*setInterval(() => {
        let startDate = `${eventModel && new Date(eventModel.startEvent).getTime()}`;
        let now = new Date().getTime();
        let countdown = startDate - now
        let days = Math.floor(countdown / (1000 * 60 * 60 * 24));
        let hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((countdown % (1000 * 60)) / 1000);


        setTimerCounter({
            startDateEvent: startDate,
            nowEvent: now,
            countdownEvent: countdown,
            daysEvent: days,
            hoursEvent: hours,
            minutesEvent: minutes,
            secondsEvent: seconds,
        })
    }, 1000)
*/

    const [organiserProfile, setOrganiserProfile] = useState({
        name: "",
        surname: "",
        userId: "",
    });

    useEffect(() => {
        axios
            .get(`/api/Event/${id}`)
            .then(response => {
                setEventModel(response.data)
            })
        console.log('dupa')
        
    }, [routeChange])
    
    useEffect(async () => {
        if (eventModel) {
            await axios
                .get(`/api/UserProfile/GetUserProfile`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        "etag": eventModel.user.organiser.userid
                    }
                }).then(content => {
                setOrganiserProfile({
                    name: `${content.data.name ? content.data.name : ''}`,
                    surname: `${content.data.surname ? content.data.surname : ''}`
                })
            })
            await axios
                .get(`/api/Event/events-user`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        "eventsId": id
                    }
                })
                .then(response => {
                    setUsersJoined(response.data)
                    if (isUserLogged) {
                        if (response.data.some(user => user.userid === localStorage['session'])) {
                            setJoinButtonState('joined')
                        }
                        else {
                            setJoinButtonState('join')
                        }
                        if (eventModel.user.organiser.userid === localStorage['session']) {
                            setJoinButtonState('hosting')
                        }
                    }
                    else {
                        setJoinButtonState('signin')
                    }
                })
        }
    }, [eventModel])
    
    function handleProfile() {
        if (eventModel) {
            if (eventModel.user.organiser.userid === localStorage['session']) {
                navigate('/profile')
            }
            else {
                navigate(`/profile/${eventModel.user.organiser.userid}`)
            }
        }
    }

    function JoinToEvent(){
        fetch(`/api/Event/join?userId=${localStorage["session"]}&eventId=${id}`)
            .then((response) => console.log(response))
    }
    
    
    
    return (
        <div className="event-site" data-theme={theme}>
            {eventModel ? 
                <>
                    <div className="flex-title">
                        <div className="event-site__left-column">
                            <img src={defaultEventImage} alt="" />
                            <div className="left-column__event-header">
                                <div className="event-title">{eventModel.name}</div>
                                <div className="event-category">Category: {eventModel.sports.name}</div>
                                <div className="event-date">
                                    Date: {eventModel.startEvent.slice(0, 10).replaceAll("-", "/")} - {eventModel.endEvent.slice(0, 10).replaceAll("-", "/")}
                                </div>
                            </div>
                        </div>
                        <div className="event-side__right-column">
                            <div
                                className="event-cost">{eventModel.price} {eventModel.currency}
                            </div>
                            {joinButtonState
                                ? joinButtonState === 'join' 
                                    ? <div className="join-button__event-page" onClick={()=>JoinToEvent(id)}>{joinButtonState}</div>
                                    : joinButtonState === 'hosting' 
                                        ? <div className="host-button__event-page">{joinButtonState}</div>
                                        : <div className="signup-button__event-page">Sign up to join</div>
                                
                                : <button className="btn" type="button" disabled>
                                        <span className={`spinner-border spinner-border-sm ${theme === 'light' ? 'event-page-btn-light' : 'event-page-btn-dark'}`} role="status" aria-hidden="true"></span>
                                    </button>
                            }
                        </div>
                    </div>
                    <div className="grid-infos">
                        {/*<div className="time-place">data</div>*/}
                        <div className="left-column__events-page">
                            <div className="organiser-info__events-page" onClick={handleProfile}>
                                <img src={defaultProfileImage} alt=""/>
                                {!organiserProfile.name && !organiserProfile.surname && <span>this Organiser</span>}
                                <span>{organiserProfile && organiserProfile.name ? organiserProfile.name : ''}</span>
                                <span>{organiserProfile && organiserProfile.surname ? organiserProfile.surname : ''}</span>
                            </div>
                            <div className="about-event">
                                <div className="about-event-title">About Event:</div>
                                {eventModel.eventInfo 
                                    ? <div className="about-event__paragraph">{eventModel.eventInfo}</div> 
                                    : <div className="about-event__paragraph">No info about event</div>
                                }
                            </div>
                        </div>

                        <div className="right-column__events-page">
                            <div className="time-place">
                                <div className="timer-container__eventPage">
                                    <div>
                                        <h6>Days</h6>
                                        <h2>{timerCounter.daysEvent}</h2>
                                    </div>
                                    <div>
                                        <h6>Hours</h6>
                                        <h2>{timerCounter.hoursEvent}</h2>
                                    </div>
                                    <div>
                                        <h6>Minutes</h6>
                                        <h2>{timerCounter.minutesEvent}</h2>
                                    </div>
                                    <div>
                                        <h6>Seconds</h6>
                                        <h2>{timerCounter.secondsEvent}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="event-page_statistics">
                                <div className="statistics-place">
                                    {eventModel.experienceLevel.name}
                                </div>
                                <div className="statistics-place">
                                    {eventModel.sports.name}
                                </div>
                                <div className="statistics-place">
                                    <PersonIcon /> {usersJoined.length} / {eventModel.maxParticipants}
                                </div>
                            </div>
                            <div className="map">
                                <div className="mapouter">
                                    <div className="gmap_canvas">
                                        <iframe width="600" height="500" id="gmap_canvas"
                                                src="https://maps.google.com/maps?q=%C5%81%C4%85cko&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                                        </iframe>
                                    </div>
                                </div>
                                <div className="location__events-page">Location: {eventModel.location.city}</div>
                            </div>
                        </div>
                    </div>
                </> : 
                <LoadingSpinner />
            }
        </div>
    );
}

export default EventPage;