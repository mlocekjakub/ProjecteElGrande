import React from 'react';
import EastIcon from '@mui/icons-material/East';
import PersonIcon from "@mui/icons-material/Person";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function EventCardPrevious(props) {

    const theme = useSelector((state) => state.theme.value)
    
    const navigate = useNavigate();
    
    return (
        <div className={`event-card ${theme === 'light' ? 'event-card__light' : 'event-card__dark'}`}>
            <div className="profile-event-card__image">
                <div className="event-date-card date-finished">
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

export default EventCardPrevious;