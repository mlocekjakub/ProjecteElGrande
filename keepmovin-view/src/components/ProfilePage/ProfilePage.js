import "./ProfilePage.css"
import "../../index.css"
import defaultProfileImage from "../../Images/DefaultProfileImage.jpg"
import React, {useEffect, useState} from "react";
import Statistics from "./profilePageComponents/Statistics";
import axios from "axios";
import {useSelector} from "react-redux";
import Upcoming from "./profilePageComponents/Upcoming";
import Previous from "./profilePageComponents/Previous";
import Hosted from "./profilePageComponents/Hosted";

export default function ProfilePage() {
    
    const theme = useSelector((state) => state.theme.value)
    const [activeEvent, setActiveEvent] = useState('upcoming');
    
    const [statistics, setStatistics] = useState();
    
    const isUserLogged = useSelector((state) => state.isLogged.value)

    const [profileItems, setProfileItems] = useState();
    
    
    useEffect(() => {
        if (isUserLogged) {
            axios
                .get(`/api/UserProfile/Get`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "etag" : localStorage.getItem('session'),
                }
                })
                .then(response => {
                    setProfileItems(response.data)
                })
        }
    }, [])
    
    const setActive = (status) => {
        setActiveEvent(status)
    }
    
    
    
    return (
        <div className={`profile-page-wrapper 
        ${theme === 'light' ? 'profile-page-wrapper__light' : 'profile-page-wrapper__dark'}`}>
            
            
            <div className={`profile-card__container 
        ${theme === 'light' ? 'profile-card__container__light' : 'profile-card__container__dark'}`}>
                <img className="profile-image" src={defaultProfileImage} alt="" />
                <div className="about-me__container">
                    <div className="about-header">about</div>
                    {profileItems && profileItems.personalInfo  ?
                        <div>{profileItems.personalInfo}</div>
                        : <div className={`about-header__incomplete 
        ${theme === 'light' ? 'profile-incomplete__light' : 'profile-incomplete__dark'}`}>
                            Fill in your aboutme</div>}
                </div>
            </div>
            
            
            <div className="profile-info__container">
                
                <div className={`socials-name__container 
        ${theme === 'light' ? 'socials-name__container__light' : 'socials-name__container__dark'}`}>
                    <div className="personal-content">
                        <div className="profile__name">{profileItems && profileItems.name ?
                            <span>{profileItems.name}</span>
                            : <span className={`profile-incomplete
        ${theme === 'light' ? 'profile-incomplete__light' : 'profile-incomplete__dark'}`}>fill in your name</span> }
                            {profileItems && profileItems.surname ?
                                <span>{profileItems.surname}</span>
                                :<span className={`profile-incomplete
        ${theme === 'light' ? 'profile-incomplete__light' : 'profile-incomplete__dark'}`}>fill in your surname</span>}
                        </div>
                        {profileItems && profileItems.locationCity && profileItems.locationCountry ?
                            <div className="profile__location">{profileItems.locationCity} {profileItems.locationCountry}</div>
                            : <div className={`profile__location__incomplete 
        ${theme === 'light' ? 'profile-incomplete__light' : 'profile-incomplete__dark'}`}>Fill in your location</div>}
                    </div>
                    <div className={`profile__socials-info 
        ${theme === 'light' ? 'profile__socials-info__light' : 'profile__socials-info__dark'}`}>
                        <div className="following"><span className="light">0</span> <span 
                            className={`${theme === 'light' ? '' : 'follow__dark'}`}>Following</span></div>
                        <div className="followed"><span className="light">0</span> <span 
                            className={`${theme === 'light' ? '' : 'follow__dark'}`}>Followed</span></div>
                        <div className="rating"><span className="light">0</span> <span 
                            className={`${theme === 'light' ? '' : 'follow__dark'}`}>Rating</span></div>
                    </div>
                </div>

                <div className={`statistics__container 
        ${theme === 'light' ? '' : 'statistics__container__dark'}`}>
                    <div className={`${theme === 'light' ? 'info__nav' : 'info__nav__dark'}`}>
                        <div
                            className={`upcoming-events__nav ${activeEvent === 'upcoming' ? theme === 'light' ? 'button-active' : 'button-active__dark' : ''}`}
                            onClick={() => setActive('upcoming')}>
                            Upcoming Events
                        </div>
                        <div
                            className={`previous-events__nav ${activeEvent === 'previous' ? theme === 'light' ? 'button-active' : 'button-active__dark' : ''}`}
                            onClick={() => setActive('previous')}>
                            Previous Events
                        </div>
                        <div
                            className={`hosted-events__nav ${activeEvent === 'hosted' ? theme === 'light' ? 'button-active' : 'button-active__dark' : ''}`}
                            onClick={() => setActive('hosted')}>
                            Hosted
                        </div>
                        <div
                            className={`stats__nav ${activeEvent === 'statistics' ? theme === 'light' ? 'button-active' : 'button-active__dark' : ''}`}
                            onClick={() => setActive('statistics')}>
                            Statistics
                        </div>
                    </div>
                    {activeEvent === 'upcoming' && <Upcoming />}
                    {activeEvent === 'previous' && <Previous />}
                    {activeEvent === 'statistics' && <Statistics />}
                    {activeEvent === 'hosted' && <Hosted />}
                </div>
                
                
            </div>
            
            
        </div>
            
    )
}