import React from 'react';
import {Link} from "react-router-dom";

export default function EventCardNav(
    {
        isFetchingData, 
        organiserProfile, 
        joinButtonState, 
        theme,
        eventId,
        isUserOrganiser,
        defaultProfileImage,
        joinToEvent,
        organiserId,
        isMobile
    }) {
    
    return (
        <article className={`${isMobile ? 'events__card-display-mobile' : 'events__card-display-desktop'}`}>
            {isFetchingData
                ? <button className="btn" type="button" disabled>
                    <span className={`spinner-border spinner-border-sm ${theme === 'light' ? 'event-btn-light' : 'event-btn-dark'}`} role="status" aria-hidden="true"></span>
                </button>
                : isUserOrganiser === false && <Link to={`/profile/${organiserId}`} className=
                {`events__organiser-info 
                ${theme === 'light' ? 'event__organiser-light' : 'event__organiser-dark'}
                ${isMobile ? 'events__organiser-mobile' : 'events__organiser-desktop'}`}>
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
                    : 'sign-up-event__dark'}`} onClick={()=>joinToEvent(eventId)}>Join</div>}
                {joinButtonState === 'signIn' && <div className="sign-up-event__disable">Sign in to join</div>}
                {joinButtonState === 'joined' && <div className="sign-up-event__joined">You Joined</div>}
                {joinButtonState === 'hosting' && <div
                    className={`sign-up-event__hosting ${theme === 'light'
                        ? 'sign-up-event__hosting-light'
                        : 'sign-up-event__hosting-dark'}`}><span>You host</span> <span>this event</span></div>}
            </div>}
        </article>
    );
}