﻿import "./ProfilePage.css"
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
        <div className="profile-page-wrapper">
            <div className="profile-background"></div>
            <div className="profile">
                <div className="profile-card">
                    <div className="personal-content">
                        <img className="profile-image" src={defaultProfileImage} alt="" />
                        <div className="profile__name">{profileItems && profileItems.name ? 
                            <span>{profileItems.name}</span>
                            : <span className="profile-incomplete">fill in your name</span> }
                            {profileItems && profileItems.surname ?
                                <span>{profileItems.surname}</span>
                            :<span className="profile-incomplete">fill in your surname</span>}
                        </div>
                            
                        {profileItems && profileItems.locationCity && profileItems.locationCountry ?
                            <div className="profile__location">{profileItems.locationCity} {profileItems.locationCountry}</div>
                            : <div className="profile__location__incomplete">Fill in your location</div>}
                    </div>
                    <div className="profile__socials-info">
                        <div className="profile__following">
                            <div className="number">{profileItems && profileItems.followed && `${profileItems.followed.length}`}</div>
                            <div className="heading">Following</div>
                        </div>
                        <div className="profile__followed">
                            <div className="number">{profileItems && profileItems.followers && `${profileItems.followers.length}`}</div>
                            <div className="heading">Followed</div>
                        </div>
                        <div className="profile__rating">
                            <div className="number">0</div>
                            <div className="heading">Organiser Rating</div>
                        </div>
                    </div>
                    <div className="about">
                        <div className="about-header">about</div>
                        {profileItems && profileItems.personalInfo  ?
                            <div>{profileItems.personalInfo}</div>
                            : <div className="about-header__incomplete">Fill in your aboutme</div>}
                    </div>
                </div>
                <div className="info">
                        <div className="info__nav">
                            <div 
                                className={`upcoming-events__nav ${activeEvent === 'upcoming' && 'button-active'}`} 
                                onClick={() => setActive('upcoming')}>
                                Upcoming Events
                            </div>
                            <div 
                                className={`previous-events__nav ${activeEvent === 'previous' && 'button-active'}`} 
                                onClick={() => setActive('previous')}>
                                Previous Events
                            </div>
                            <div
                                className={`hosted__nav ${activeEvent === 'hosted' && 'button-active'}`}
                                onClick={() => setActive('hosted')}>
                                Hosted
                            </div>
                            <div 
                                className={`stats__nav ${activeEvent === 'statistics' && 'button-active'}`} 
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