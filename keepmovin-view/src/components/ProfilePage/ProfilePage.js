import "./ProfilePage.css"
import "../../index.css"
import defaultProfileImage from "../../Images/DefaultProfileImage.jpg"
import React, {useEffect, useRef, useState} from "react";
import Statistics from "./profilePageComponents/Statistics";
import axios from "axios";
import {useSelector} from "react-redux";
import Upcoming from "./profilePageComponents/Upcoming";
import Previous from "./profilePageComponents/Previous";
import Hosted from "./profilePageComponents/Hosted";
import {useNavigate} from "react-router-dom";

export default function ProfilePage() {
    
    const theme = useSelector((state) => state.theme.value)
    
    const [activeEvent, setActiveEvent] = useState('upcoming');
    
    const isUserLogged = useSelector((state) => state.isLogged.value)
    
    const navigate = useNavigate();
    
    const [pageReload, setPageReload] = useState(true);

    const routeChange = useSelector((state) => state.isRouteChanged.value);

    const [profileDetails, setProfileDetails] = useState({
        userId: localStorage.getItem('session'),
        userName: "",
        surname: "",
        location: {city: "", country: "", zipCode: ""},
        birthDate: "",
        phoneNumber: "",
        personalInfo: "",
        organisation: {name: ""},
    })
    
    
    useEffect(() => {
        if (isUserLogged) {
            axios
                .get(`/api/UserProfile/uploadProfileInformation`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "etag" : localStorage.getItem('session'),
                }
                })
                .then(content => {
                    setProfileDetails({
                        userName: `${content.data.name ? content.data.name : ''}`,
                        surname: `${content.data.surname ? content.data.surname : ''}`,
                        location: {
                            city: `${content.data.location && content.data.location.city ? content.data.location.city : ''}`,
                            country: `${content.data.location && content.data.location.country ? content.data.location.country : ''}`,
                            zipCode: `${content.data.location && content.data.location.zipCode ? content.data.location.zipCode : ''}`,
                        },
                        birthDate: `${content.data.birthDate ? content.data.birthDate : ''}`,
                        phoneNumber: `${content.data.phoneNumber ? content.data.phoneNumber : ''}`,
                        personalInfo: `${content.data.personalInfo ? content.data.personalInfo : ''}`,
                        organisation: {
                            name: `${content.data.organisation && content.data.organisation.name ? content.data.organisation.name : ''}`
                        },
                        userId: localStorage.getItem('session')
                    })
                })
        }
    }, [routeChange])
    
    const setActive = (status) => {
        setActiveEvent(status)
    }
    
    const RedirectToSettings = () => {
        navigate('/settings')
    }
    
    
    
    return (
        <div data-theme={theme} className={`profile-page-wrapper 
        ${theme === 'light' ? 'profile-page-wrapper__light' : 'profile-page-wrapper__dark'}`}>
            
            
            <div className={`profile-card__container 
        ${theme === 'light' ? 'profile-card__container__light' : 'profile-card__container__dark'}`}>
                <img className="profile-image" src={defaultProfileImage} alt="" />
                <div className="about-me__container">
                    <div className="about-header">about me</div>
                    {profileDetails.personalInfo  ?
                        <div className="user-data">{profileDetails.personalInfo}</div>
                        : <div className={`profile-incomplete
        ${theme === 'light' ? 'profile-incomplete__light' : 'profile-incomplete__dark'}`} onClick={RedirectToSettings}>
                            Fill in your aboutme</div>}
                </div>
            </div>
            
            
            <div className="profile-info__container">
                
                <div className={`socials-name__container 
        ${theme === 'light' ? 'socials-name__container__light' : 'socials-name__container__dark'}`}>
                    <div className="personal-content">
                        <div className="profile__name">{profileDetails.userName ?
                            <span className='user-data user-data-align'>{profileDetails.userName}</span>
                            : <span className={`profile-incomplete
        ${theme === 'light' ? 'profile-incomplete__light' : 'profile-incomplete__dark'}`} onClick={RedirectToSettings}>fill in your name</span> }
                            {profileDetails.surname ?
                                <span className="user-data">{profileDetails.surname}</span>
                                :<span className={`profile-incomplete
        ${theme === 'light' ? 'profile-incomplete__light' : 'profile-incomplete__dark'}`} onClick={RedirectToSettings}>fill in your surname</span>}
                        </div>
                        {profileDetails.location.city && profileDetails.location.country ?
                            <div className="user-data-paragraph">{profileDetails.location.city} {profileDetails.location.country}</div>
                            : <div className={`profile-incomplete 
        ${theme === 'light' ? 'profile-incomplete__light' : 'profile-incomplete__dark'}`} onClick={RedirectToSettings}>Fill in your location</div>}
                        {profileDetails.organisation.name ?
                            <div className="user-data-paragraph">Organisation: {profileDetails.organisation.name}</div>
                            : <div className={`profile-incomplete 
        ${theme === 'light' ? 'profile-incomplete__light' : 'profile-incomplete__dark'}`} onClick={RedirectToSettings}>Fill in your organisation</div>}
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
                    {activeEvent === 'upcoming' && <Upcoming ButtonState={activeEvent} />}
                    {activeEvent === 'previous' && <Previous ButtonState={activeEvent}/>}
                    {activeEvent === 'statistics' && <Statistics ButtonState={activeEvent}/>}
                    {activeEvent === 'hosted' && <Hosted ButtonState={activeEvent}/>}
                </div>
                
                
            </div>
            
            
        </div>
            
    )
}