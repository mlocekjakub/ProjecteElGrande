import React, {useEffect, useState} from 'react';
import eventImage from "../../../Images/News-Trailer-Web-4Sep20.png";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from "@mui/icons-material/Person";
import {useDispatch, useSelector} from "react-redux";
import defaultProfileImage from "../../../Images/DefaultProfileImage.jpg";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";


function EventCard(props) {
    const isUserLogged = useSelector((state) => state.isLogged.value)
    
    const [usersJoined, setUsersJoined] = useState([])
    
    const [joinButtonState, setJoinButtonState] = useState('join')
    
    const [isFetchingData, setIsFetchingData] = useState(false)
    
    const theme = useSelector((state) => state.theme.value)
    
    const [isUserOrganiser, setIsUserOrganiser] = useState(false);
    
    const navigate = useNavigate();
    
    const [organiserProfile, setOrganiserProfile] = useState({
        name: "",
        surname: "",
    });

    const routeChange = useSelector((state) => state.isRouteChanged.value);

    function JoinToEvent(eventId){
        fetch(`api/Event/join?userId=${localStorage["session"]}&eventId=${eventId}`)
    }
    
    useEffect(() => {
        setIsFetchingData(true);
        axios
            .get(`/api/Event/events-user`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "eventsId": props.eventId
                }
            })
            .then(response => {
                setUsersJoined(response.data)
                if (isUserLogged) {
                    response.data.map((user) => {
                        if (user.userid === localStorage['session']) {
                            setJoinButtonState('joined')
                        }
                    })
                    if (props.organiserId === localStorage['session']) {
                        setJoinButtonState('hosting')
                    }
                }
                if (props.organiserId !== localStorage['session']) {
                    axios
                        .get(`/api/UserProfile/GetUserProfile`, {
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                "etag": props.organiserId,
                            }
                        }).then(content => {
                        setOrganiserProfile({
                            name: `${content.data.name ? content.data.name : ''}`,
                            surname: `${content.data.surname ? content.data.surname : ''}`
                        })
                    })
                    setIsUserOrganiser(false);
                }
                else {
                  setIsUserOrganiser(true)
                }
                setIsFetchingData(false);
            })
        
    }, [routeChange])
    
    useEffect(() => {
        if (isUserLogged === false) {
            setJoinButtonState('signIn')
        }
    }, [isUserLogged])
    
    
    
    return (
        <div className={`event-1 ${theme === 'light' ? 'event-1-light' : 'event-1-dark'}`} onClick={() => navigate(`/event/${props.eventId}`)}>
            <img src={eventImage} alt="" />
            <div className="description">
                <div className="info__event-list">
                    <div className="category">
                        {props.sport}
                    </div>
                    <div className={`event__title ${theme === 'light' ? 'event__title-light' : 'event__title-dark'}`}>
                        <h4>{props.eventName}</h4>
                    </div>
                    <div className={`events__card-nav-price ${theme === 'light' ? 'event-price-light' : 'event-price-dark'}`}>{props.price} {props.currency}</div>
                    <div className="date"> {(props.dateStart).slice(0,10)}</div>
                </div>
                <div className="events-statistics">
                    <div className="location">
                        <LocationOnIcon className={`location-icon ${theme === 'light' ? 'event-card-icon-light' : 'event-card-icon-dark'}`}/>
                        {props.location}
                    </div>
                    <div className="events-level">
                        <SignalCellularAltIcon className="level-icon"/>
                        {props.experienceLevels}
                    </div>
                    <div className="events-participants">
                        <PersonIcon className="participants-icon" />
                        {usersJoined.length} / {props.maxParticipants}
                    </div>
                </div>
            </div>
            <article className='events__card-nav'>
                {isFetchingData 
                    ? <button className="btn" type="button" disabled>
                        <span className={`spinner-border spinner-border-sm ${theme === 'light' ? 'event-btn-light' : 'event-btn-dark'}`} role="status" aria-hidden="true"></span>
                    </button> 
                    : isUserOrganiser === false && <Link to={`/profile/${props.organiserId}`} className={`events__organiser-info ${theme === 'light' ? 'event__organiser-light' : 'event__organiser-dark'}`}>
                        <img className="events__organiser-image" src={defaultProfileImage} alt="" />
                        <p className="events__organiser-name">
                            <span>
                                {!organiserProfile.name && !organiserProfile.surname && 'Organiser'}
                                {organiserProfile.name && organiserProfile.name}
                                &nbsp;
                                {organiserProfile.surname && organiserProfile.surname}
                            </span>
                        </p>
                    </Link>}
                {isFetchingData ? <button className="btn" type="button" disabled>
                    <span className={`spinner-border spinner-border-sm ${theme === 'light' ? 'event-btn-light' : 'event-btn-dark'}`} role="status" aria-hidden="true"></span>
                </button> : <div>
                    {joinButtonState === 'join' && <div className={`${theme === 'light' 
                        ? 'sign-up-event' 
                        : 'sign-up-event__dark'}`} onClick={()=>JoinToEvent(props.eventId)}>Join</div>}
                    {joinButtonState === 'signIn' && <div className="sign-up-event__disable">Sign in to join</div>}
                    {joinButtonState === 'joined' && <div className="sign-up-event__joined">You Joined</div>}
                    {joinButtonState === 'hosting' && <div 
                        className={`sign-up-event__hosting ${theme === 'light' 
                            ? 'sign-up-event__hosting-light' 
                            : 'sign-up-event__hosting-dark'}`}><span>You host</span> <span>this event</span></div>}
                </div>}
            </article>
        </div>
    )
}

export default EventCard;