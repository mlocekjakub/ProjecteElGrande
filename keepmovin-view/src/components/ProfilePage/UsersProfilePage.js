import "./ProfilePage.css"
import "../../index.css"
import defaultProfileImage from "../../Images/DefaultProfileImage.jpg"
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import "./UsersProfilePage.css";
import VisitedHosted from "./visitedProfilePageComponents/VisitedHosted";
import VisitedStatistics from "./visitedProfilePageComponents/VisitedStatistics";
import VisitedPrevious from "./visitedProfilePageComponents/VisitedPrevious";
import VisitedUpcoming from "./visitedProfilePageComponents/VisitedUpcoming";
import LockIcon from "@mui/icons-material/Lock";

export default function UsersProfilePage() {
    
    let { visitedUserId } = useParams();

    const theme = useSelector((state) => state.theme.value)

    const [activeEvent, setActiveEvent] = useState('upcoming');

    const navigate = useNavigate();

    const routeChange = useSelector((state) => state.isRouteChanged.value);

    const [profileDetails, setProfileDetails] = useState({
        userId: visitedUserId,
        userName: "",
        surname: "",
        location: {city: "", country: "", zipCode: ""},
        birthDate: "",
        phoneNumber: "",
        personalInfo: "",
        organisation: {name: ""},
    })
    
    const [privacySettings, setPrivacySettings] = useState({});


    useEffect(() => {
        axios
            .get(`/api/UserProfile/GetUserProfile`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "etag" : visitedUserId,
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
                    userId: visitedUserId
                })
            })
        axios
            .get(`/api/Setting/upload/visited-user`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "etag" : visitedUserId,
                }
            }).then(response => setPrivacySettings(response.data))
       
    }, [routeChange])

    const setActive = (status) => {
        setActiveEvent(status)
    }
    
    return (
        <div data-theme={theme} className={`profile-page-wrapper 
        ${theme === 'light' ? 'profile-page-wrapper__light' : 'profile-page-wrapper__dark'}`}>


            <div className={`profile-card__container 
        ${theme === 'light' ? 'profile-card__container__light' : 'profile-card__container__dark'}`}>
                <img className="profile-image" src={defaultProfileImage} alt="" />
                <div className="about-me__container">
                    <div className="about-header">about me</div>
                    {privacySettings.aboutMe === false ? profileDetails.personalInfo 
                        ? <div className="user-data">{profileDetails.personalInfo} </div>
                        : <div className={`profile-incomplete__visiting${theme === 'light' ? 'profile-incomplete__light' : 'profile-incomplete__dark'}`}>
                            No info about user
                        </div> 
                        : <div className={`${theme === 'light' ? 'section-about-me-light' : 'section-about-me-dark'}`}><LockIcon /> private</div>
                    }
                </div>
            </div>


            <div className="profile-info__container">

                <div className={`socials-name__container 
        ${theme === 'light' ? 'socials-name__container__light' : 'socials-name__container__dark'}`}>
                    <div className="personal-content">
                        <div className="profile__name__visiting">
                            {profileDetails.userName && <span className='user-data user-data-align'>{profileDetails.userName}</span>}
                            {profileDetails.surname && <span className="user-data">{profileDetails.surname}</span>}
                            {!profileDetails.userName && !profileDetails.surname && <span className={`profile-incomplete__visiting
                            ${theme === 'light' ? 'profile-incomplete__light' : 'profile-incomplete__dark'}`}>No info about username</span>}
                        </div>
                        {privacySettings.location === false ? 
                            profileDetails.location.city && profileDetails.location.country 
                                ? 
                                <div
                                    className="user-data-paragraph">{profileDetails.location.city} {profileDetails.location.country}
                                </div>
                                : 
                                <div className={`profile-incomplete__visiting${theme === 'light' ? 'profile-incomplete__light' : 'profile-incomplete__dark'}`}>
                                    No info about location
                                </div> 
                            : 
                            <div className={`${theme === 'light' ? 'section-location-light' : 'section-location-dark'}`}><LockIcon className="lock-location-icon"/>Location is private</div>
                        }
                        {profileDetails.organisation.name ?
                            <div className="user-data-paragraph">Organisation: {profileDetails.organisation.name}</div>
                            : <div className={`profile-incomplete__visiting 
        ${theme === 'light' ? 'profile-incomplete__light' : 'profile-incomplete__dark'}`}>No info about organisation</div>}
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
                    {activeEvent === 'upcoming' && <VisitedUpcoming visitedId={visitedUserId}/>}
                    {activeEvent === 'previous' && <VisitedPrevious visitedId={visitedUserId}/>}
                    {activeEvent === 'statistics' && <VisitedStatistics visitedId={visitedUserId}/>}
                    {activeEvent === 'hosted' && <VisitedHosted visitedId={visitedUserId}/>}
                </div>


            </div>


        </div>

    )
}