import "./ProfilePage.css"
import "../../index.css"
import profileImage from "../../Images/pexels-photo-771742.jpeg"
import defaultProfileImage from "../../Images/DefaultProfileImage.jpg"
import EventsMenu from "./profilePageComponents/EventsMenu";
import React, {useEffect, useState} from "react";
import Statistics from "./profilePageComponents/Statistics";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {ArrowBackIos} from "@material-ui/icons";
import axios from "axios";
import {useSelector} from "react-redux";

export default function ProfilePage() {
    
    
    const [activeEvent, setActiveEvent] = useState('upcoming');
    
    const [upcomingEvents, setUpcomingEvents] = useState();
    
    const [previousEvents, setPreviousEvents] = useState();
    
    const [statistics, setStatistics] = useState();
    
    const [isLogged, setIsLogged] = useState(false);
    
    const [profile, setProfile] = useState();
    
    const isUserLogged = useSelector((state) => state.isLogged.value)
    
    
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
                        <div className="profile__name">Filip Koniuszewski</div>
                        <div className="profile__location">Krakow, Poland</div>
                    </div>
                    <div className="profile__socials-info">
                        <div className="profile__following">
                            <div className="number">399</div>
                            <div className="heading">Following</div>
                        </div>
                        <div className="profile__followed">
                            <div className="number">250</div>
                            <div className="heading">Followed</div>
                        </div>
                        <div className="profile__rating">
                            <div className="number">4.9</div>
                            <div className="heading">Rating</div>
                        </div>
                    </div>
                    <div className="about">
                        <div className="about-header">about</div>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Mauris vel vulputate ante. 
                        Praesent consequat, nisl at molestie iaculis, 
                        sem lacus cursus justo,
                    </div>
                </div>
                <div className="info">
                    <div className="info-buttons">
                        <div className="info__nav">
                            <div className="nav__menu">
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
                                    className={`stats__nav ${activeEvent === 'statistics' && 'button-active'}`} 
                                    onClick={() => setActive('statistics')}>
                                    Statistics
                                </div>
                            </div>
                            {activeEvent === "upcoming" || activeEvent === "previous" ?
                            <div className="profile__paginate">
                                <ArrowBackIos className="arrow-paginate"/>
                                1 of 1
                                <ArrowForwardIosIcon className="arrow-paginate"/>
                            </div> : ""
                            }
                        </div>
                    </div>
                    <div className="info-content">
                        {activeEvent === 'upcoming' && <EventsMenu content={upcomingEvents}/>}
                        {activeEvent === 'previous' && <EventsMenu content={previousEvents}/>}
                        {activeEvent === 'statistics' && <Statistics content={statistics}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}