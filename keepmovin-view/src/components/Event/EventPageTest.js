import React, {useEffect, useState} from 'react';
import "./EventPage.css";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import defaultProfileImage from "../../Images/DefaultProfileImage.jpg";
import LoadingSpinner from "../ListOfEvents/sportEventsComponents/LoadingSpinner";
import defaultEventImage from "../../Images/News-Trailer-Web-4Sep20.png";
import PersonIcon from '@mui/icons-material/Person';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import "./EventPageTest.scss";
import UserJoinedCard from "./eventPage/UserJoinedCard";


function EventPageTest() {
    let {id} = useParams();
    const [eventModel, setEventModel] = useState();

    const isUserLogged = useSelector((state) => state.isLogged.value)

    const theme = useSelector((state) => state.theme.value)

    const routeChange = useSelector((state) => state.isRouteChanged.value);

    const [isFetched, setIsFetched] = useState(false);

    const [usersJoined, setUsersJoined] = useState(0)

    const [joinButtonState, setJoinButtonState] = useState()
    
    const [displayTimer, setDisplayTimer] = useState();

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

    }, [routeChange])

    const timerInterval = setInterval(() => {
        if (eventModel) {
            if (new Date(eventModel.startEvent) >= Date.now()) {
                let startDate = `${new Date(eventModel.startEvent).getTime()}`;
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
                
                setDisplayTimer(true);
            }
            else {
                
                setDisplayTimer(false);
                
            }
        }
        
    }, 1000)
    
    useEffect(() => {
        if (displayTimer === false) {
            clearInterval(timerInterval)
        }
    }, [displayTimer])
    

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
        window.location.reload(false);
    }



    return (
        <div className="event-page-wrapper" data-theme={theme}>
            {eventModel ? 
            <>
                <div className="event-page__top">
                    <div className="event-page__header-top">
                        <div className="event-page__header">
                            <div className="header__event-image">
                                <img src={defaultEventImage} alt="" />
                            </div>
                            <div className="header__calendar-card">
                                <div className="calendar-card__top">
                                </div>
                                <div className="calendar-day">
                                    {eventModel.startEvent.slice(8, 10)}
                                </div>
                            </div>
                        </div>
                        <div className="event-page__event-info">
                            <div className="event-info__date">
                                <span>{new Date(eventModel.startEvent).toLocaleDateString('en-US', { weekday: 'long' })} </span>
                                <span>at</span>
                                <span>{new Date(eventModel.startEvent).toLocaleString('en-US', {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: true})}</span>
                                
                            </div>
                            <div className="event-info__title">
                                {eventModel.name}
                            </div>
                            <div className="event-price">
                                {eventModel.price} {eventModel.currency}
                            </div>
                        </div>
                    </div>
                    <div className="event-page__organiser-state">
                        <div className="organiser-container">
                            <img src={defaultProfileImage} alt=""/>
                            <div className="organiser__name">
                                <span className="organiser__name__name" onClick={handleProfile}>
                                    {!organiserProfile.name && !organiserProfile.surname && <span>this Organiser</span>}
                                    <span>{organiserProfile && organiserProfile.name ? organiserProfile.name : ''}</span>
                                <span>{organiserProfile && organiserProfile.surname ? organiserProfile.surname : ''}</span>
                                </span> hosts this event
                            </div>
                        </div>
                        {joinButtonState
                            ? joinButtonState === 'join'
                                ? <div className="state-container-join" onClick={()=>JoinToEvent(id)}>Join</div>
                                : joinButtonState === 'hosting'
                                    ? <div className="state-container-host">You are host</div>
                                    : joinButtonState === 'joined' 
                                    ? <div className="state-container-joined">You joined</div> 
                                        : <div className="state-container-sign-in">Sign in to join</div>
                            
                            : <button className="btn" type="button" disabled>
                                <span className={`spinner-border spinner-border-sm ${theme === 'light' ? 'event-page-btn-light' : 'event-page-btn-dark'}`} role="status" aria-hidden="true"></span>
                            </button>
                        }
                    </div>
                </div>
                <div className="event-page__bottom">
                    <div className="event-page__info-left">
                        <div className="date-to-start-container">
                            <h3 className="events-start-in">
                                {displayTimer === true ? 'Events start in:' : displayTimer === false ? 'Expired' :
                                    <div className="spinner-border spinner-border-sm" role="status">
                                    </div>}
                            </h3>
                            <div className="timer">
                                <div>
                                    <h6>Days</h6>
                                    <h2>{timerCounter.daysEvent ? timerCounter.daysEvent : <span className="expired-count">0</span>}</h2>
                                </div>
                                <div>
                                    <h6>Hours</h6>
                                    <h2>{timerCounter.hoursEvent ? timerCounter.hoursEvent : <span className="expired-count">0</span>}</h2>
                                </div>
                                <div>
                                    <h6>Minutes</h6>
                                    <h2>{timerCounter.minutesEvent ? timerCounter.minutesEvent: <span className="expired-count">0</span>}</h2>
                                </div>
                                <div>
                                    <h6>Seconds</h6>
                                    <h2>{timerCounter.secondsEvent ? timerCounter.secondsEvent : <span className="expired-count">0</span>}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="about-container">
                            <h3 className="about__header">
                                Detailed information
                            </h3>
                            <div className="about__some-infos">
                                <div className="some-infos__organiser">
                                    <div className="some-infos__organiser-icon event-page-icon">
                                        <PersonIcon />
                                    </div>
                                    <div className="some-infos__organiser-name">
                                        <span className="some-infos_paragraph">Organiser:</span>
                                        &nbsp;
                                        {!organiserProfile.name || !organiserProfile.surname 
                                            ? <span className="no-personal-info">No personal info</span>
                                            : <span>{organiserProfile.name} {organiserProfile.surname}</span>}
                                    </div>
                                </div>
                                <div className="some-infos__event-type">
                                    <div className="some-infos__type-icon event-page-icon">
                                        <SportsScoreIcon />
                                    </div>
                                    <div className="some-infos__type-name">
                                        <span className="some-infos_paragraph">Type:</span>
                                        &nbsp;{eventModel.type.name}
                                    </div>
                                </div>
                                <div className="some-infos__event-sport">
                                    <div className="some-infos__sport-icon event-page-icon">
                                        <SportsHandballIcon />
                                    </div>
                                    <div className="some-infos__sport-name">
                                        <span className="some-infos_paragraph">Sport:</span>
                                        &nbsp;{eventModel.sports.name}
                                    </div>
                                </div>
                                <div className="some-infos__event-level">
                                    <div className="some-infos__level-icon event-page-icon">
                                        <SignalCellularAltIcon />
                                    </div>
                                    <div className="some-infos__level-name">
                                        <span className='some-infos_paragraph'>Level:</span>
                                        &nbsp; 
                                        <span className={`${eventModel.experienceLevel.name === 'Beginner' && 'Beginner'}
                                        ${eventModel.experienceLevel.name === 'Intermediate' && 'Intermediate'}
                                        ${eventModel.experienceLevel.name === 'Expert' && 'Expert'}`}>
                                        {eventModel.experienceLevel.name}</span>
                                    </div>
                                </div>
                                <div className="some-infos__event-date-range">
                                    <div className="some-infos__date-icon event-page-icon">
                                        <DateRangeIcon />
                                    </div>
                                    <div className="some-infos__date-name">
                                        <span className='some-infos_paragraph'>Date:</span>
                                        &nbsp;
                                        {eventModel.startEvent.slice(0, 10).replaceAll("-", "/")} - {eventModel.endEvent.slice(0, 10).replaceAll("-", "/")}
                                    </div>
                                </div>
                                <div className="about__about">
                                    {eventModel.eventInfo 
                                        ? eventModel.eventInfo
                                        : 'No info about event'}
                                </div>
                            </div>
                        </div>
                        <div className="location-container">
                            <div className="location__events-page"><span className="event-location-icon"><LocationOnIcon /></span>
                                Location: {eventModel.location.city}</div>
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe width="600" height="500" id="gmap_canvas"
                                            src="https://maps.google.com/maps?q=%C5%81%C4%85cko&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="event-page__participants-container">
                        <h3 className="participants__header">
                            Participants List
                        </h3>
                        <div className="participants-statistics">
                            <div className="participants-joined">
                                <div className="joined-count">{usersJoined.length}</div>
                                <div className="joined-count-header">Joined</div>
                            </div>
                            <div className="participants-max">
                                <div className="max-count">{eventModel.maxParticipants}</div>
                                <div className="max-count-header">Max</div>
                            </div>
                        </div>
                        <div className="recent-participants-joined">
                            {Array.from({ length: usersJoined.length }, (_, i) =>
                                <UserJoinedCard key={i} user={usersJoined[i]}/>)
                            }
                            
                            <div className="participants__show-more">
                                See more participants
                            </div>
                        </div>
                    </div>
                </div>
            
            </>
                :
                <LoadingSpinner />
            }
            
        </div>
        
    );
}

export default EventPageTest;