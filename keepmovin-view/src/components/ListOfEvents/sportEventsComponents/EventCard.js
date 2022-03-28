import React, {useEffect, useState} from 'react';
import eventImage from "../../../Images/News-Trailer-Web-4Sep20.png";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from "@mui/icons-material/Person";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import axios from "axios";


function EventCard(props) {
    const isUserLogged = useSelector((state) => state.isLogged.value)
    
    const [usersJoined, setUsersJoined] = useState([])
    
    const [joinButtonState, setJoinButtonState] = useState('join')
    
    const [isFetchingData, setIsFetchingData] = useState(false)

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
                setIsFetchingData(false);
            })
    }, [])
    
    useEffect(() => {
        if (isUserLogged === false) {
            setJoinButtonState('signIn')
        }
    }, [isUserLogged])
    
    
    
    return (
        <div className="event-1">
            <img src={eventImage} alt="" />
            <div className="description">
                <div className="info__event-list">
                    <div className="category">
                        {props.sport}
                    </div>
                    <div className="event__title">
                        <h4>{props.eventName}</h4>
                    </div>
                    <div className="events__card-nav-price">{props.price} {props.currency}</div>
                    <div className="date">
                        {(props.dateStart).slice(0,10)}
                    </div>
                </div>
                <div className="events-statistics">
                    <div className="location">
                        <LocationOnIcon className="location-icon"/>
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
            <article className="events__card-nav">
                {isFetchingData ? <button className="btn" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                </button> : <div>
                    {joinButtonState === 'join' && <div className="sign-up-event" onClick={()=>JoinToEvent(props.eventId)}>Join</div>}
                    {joinButtonState === 'signIn' && <div className="sign-up-event__disable">Sign in to join</div>}
                    {joinButtonState === 'joined' && <div className="sign-up-event__joined">You Joined</div>}
                    {joinButtonState === 'hosting' && <div className="sign-up-event__hosting"><span>You host</span> <span>this event</span></div>}
                </div>}
            </article>
        </div>
    )
}

export default EventCard;