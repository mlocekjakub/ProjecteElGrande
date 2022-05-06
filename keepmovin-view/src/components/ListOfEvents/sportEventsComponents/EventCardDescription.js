import React from 'react';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import PersonIcon from "@mui/icons-material/Person";

export default function EventCardDescription(
    {
        eventId,
        sport,
        eventName,
        price,
        currency,
        dateStart,
        location,
        experienceLevels,
        usersJoined,
        maxParticipants,
        theme,
        navigate
    }) {
    
    return (
        <div className="description" onClick={() => navigate(`/event/${eventId}`)}>
            <div className="info__event-list">
                <div className="category">
                    {sport}
                </div>
                <div className={`event__title ${theme === 'light' ? 'event__title-light' : 'event__title-dark'}`}>
                    <h4>{eventName}</h4>
                </div>
                <div className={`events__card-nav-price ${theme === 'light' ? 'event-price-light' : 'event-price-dark'}`}>{price} {currency}</div>
                <div className="date"> {(dateStart).slice(0,10)}</div>
            </div>
            <div className="events-statistics">
                <div className="location">
                    <LocationOnIcon className={`location-icon ${theme === 'light' ? 'event-card-icon-light' : 'event-card-icon-dark'}`}/>
                    {location}
                </div>
                <div className="events-level">
                    <SignalCellularAltIcon className={`level-icon ${theme === 'light' ? 'event-card-icon-light' : 'event-card-icon-dark'}`}/>
                    {experienceLevels}
                </div>
                <div className="events-participants">
                    <PersonIcon className={`participants-icon ${theme === 'light' ? 'event-card-icon-light' : 'event-card-icon-dark'}`} />
                    {usersJoined.length} / {maxParticipants}
                </div>
            </div>
        </div>
    );
}