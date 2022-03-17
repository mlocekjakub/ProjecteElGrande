import React from 'react';
import PersonIcon from '@mui/icons-material/Person';

function EventsSearchedCard(props) {
    
    return (
        <div className="event-searched-card">
            <div className="event-searched-date">
                <div className="event-searched-day">{props.eventDateStart.slice(8, 10)}</div>
                <div className="event-searched-month">{props.eventDateStart.slice(5, 7)}</div>
            </div>
            <div className="event-info__found">
                <div className="event-info-category__found">
                    {props.sportName}
                </div>
                <div className="event-info-header__found">
                    {props.eventName}
                </div>
                <div className="event-info-paragraph__found">
                    <div className="event-info-paragraph-level__found">
                        level: <span className={props.experienceLevel}>{props.experienceLevel}</span>
                    </div>
                    <div className="event-info-paragraph-people__found">
                        <span>{props.maxParticipants}</span> 
                        <PersonIcon className="found_icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventsSearchedCard;