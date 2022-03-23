import React from 'react';
import EastIcon from '@mui/icons-material/East';
import PersonIcon from "@mui/icons-material/Person";

function EventCardHosted(props) {
    return (
        <div className="event-card">
            <div className="profile-event-card__image">
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
                    <div className="info-header__title">{props.eventName}</div>
                    <div className="info-header-button"><EastIcon /></div>
                </div>
                <div className="info-header">
                    <div className="info-category">{props.sportName}</div>
                </div>
            </div>
        </div>
    );
}

export default EventCardHosted;