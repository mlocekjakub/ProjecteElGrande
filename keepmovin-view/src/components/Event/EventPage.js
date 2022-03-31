import React, {useEffect, useState} from 'react';
import "./EventPage.css";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import LoadingSpinner from "../ListOfEvents/sportEventsComponents/LoadingSpinner";


function EventPage() {
    let {id} = useParams();
    const [eventModel, setEventModel] = useState();

    const routeChange = useSelector((state) => state.isRouteChanged.value);

    const [timer, setTimer] = useState();
    
    useEffect(() => {
        axios
            .get(`/api/Event/${id}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then(response => {
                setEventModel(response.data)
            })
    }, [routeChange])
    
    setInterval(() => {
        {
            var startDate = new Date(eventModel ? eventModel.startEvent : 0).getTime();
            var now = new Date().getTime();
            var countdown = startDate - now;

            var days = Math.floor(countdown / (1000 * 60 * 60 * 24));
            var hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((countdown % (1000 * 60)) / 1000);
            
            setTimer(`Days: ${days} Hours: ${hours} Minutes ${minutes} Seconds ${seconds}`);
        }
        
    }, 1000)

    return (
        <div className="site">
            <div className="flex-title">
                <div className="left-column">
                    <div className="event-title">{eventModel ? eventModel.name : ""}</div>
                    <div className="event-category">Category: {eventModel ? eventModel.sports.name : ""}</div>
                    <div
                        className="event-date">Date: {eventModel ? `${eventModel.startEvent.slice(0, 10).replaceAll("-", "/")}-${eventModel.endEvent.slice(0, 10).replaceAll("-", "/")}` : ""}</div>
                </div>
                <div className="right-column">
                    <Link to={`/profile/${eventModel ? eventModel.user.userProfileId : ""}`} className={`events__organiser-info`} >{eventModel ? eventModel.user.name : ""} {eventModel ? eventModel.user.surname : ""}</Link>
                    <div
                        className="event-cost">{eventModel ? eventModel.price : ""} {eventModel ? eventModel.currency : ""}</div>
                    {/*<div className="join-button">Join</div>*/}
                </div>
            </div>
            <div className="grid-infos">
                <div className="about-event-title"> About Event:</div>
                <div className="about-event">{eventModel ? eventModel.eventInfo : ""}</div>
                <div className="experience-place">{eventModel ? eventModel.experienceLevel.name : ""}</div>
                <div className="time-place">{timer}</div>
                <div className="map">
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe width="600" height="500" id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=%C5%81%C4%85cko&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                            </iframe>
                        </div>
                    </div>
                    <div>Location: {eventModel ? eventModel.location.city : ""}</div>
                </div>
            </div>
        </div>
    );
}

export default EventPage;