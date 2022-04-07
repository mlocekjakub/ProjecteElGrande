import React, {useEffect, useState} from 'react';
import EastIcon from '@mui/icons-material/East';
import PersonIcon from "@mui/icons-material/Person";
import axios from "axios";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function EventCardHosted(props) {

    const [usersJoined, setUsersJoined] = useState(0)
    
    const navigate = useNavigate();

    const theme = useSelector((state) => state.theme.value)

    useEffect(() => {
        let eventId = props.eventCardId
        axios
            .get(`/api/Event/events-user`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "eventsId": eventId
                }
            })
            .then(response => {
                setUsersJoined(response.data)
            })
    }, []);
    
    return (
        <div className={`event-card ${theme === 'light' ? 'event-card__light' : 'event-card__dark'}`}>
            <div className="profile-event-card__image">
                <div className="event-people__count">
                    <PersonIcon className="people-icon__profile"/>
                    <div className="counter__profile">{usersJoined.length} / {props.maxParticipants}</div>
                </div>
                <div className="event-date-card">
                    <div className="event-date-card__year">
                        {props.eventDateStart.slice(0, 4)}
                    </div>
                    <div className="event-date-card__day">
                        {props.eventDateStart.slice(8, 10)}
                    </div>
                    <div className="event-date-card__month">
                        {props.eventDateStart.slice(5, 7)}
                    </div>
                </div>
            </div>
            <div className="profile-event-card__info">
                <div className="info-header-category">
                    <div className={`info-header__title ${theme === 'light' ? 'info-header__title__light' : 'info-header__title__dark'}`}>{props.eventName}</div>
                    <div onClick={() => navigate(`/event/${props.eventCardId}`)} className={`${theme === 'light' ? 'info-header-button__light' : 'info-header-button__dark'}`}><EastIcon /></div>
                </div>
                <div className="info-header">
                    <div className={`info-header-category ${theme === 'light' ? 'info-header-category__light' : 'info-header-category__dark'}`}>{props.sportName}</div>
                </div>
            </div>
        </div>
    );
}

export default EventCardHosted;