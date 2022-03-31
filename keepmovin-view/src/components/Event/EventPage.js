import React, {useEffect, useState} from 'react';
import "./EventPage.css";
import axios from "axios";
import {useParams} from "react-router-dom";


function EventPage() {
    let {id} = useParams();
    const [eventModel, setEventModel] = useState();

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
    }, [])
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
                    <div
                        className="event-cost">{eventModel ? eventModel.price : ""} {eventModel ? eventModel.currency : ""}</div>
                    {/*<div className="join-button">Join</div>*/}
                </div>
            </div>
            <div className="grid-infos">
                <div className="about-event-title"> About Event:</div>
                <div className="about-event">{eventModel ? eventModel.eventInfo : ""}</div>
                <div className="experience-place">{eventModel ? eventModel.experienceLevel.name : ""}</div>
                {/*<div className="time-place">data</div>*/}
                <div className="map">
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe width="600" height="500" id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=%C5%81%C4%85cko&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                        </div>
                    </div>
                    <div>Location: {eventModel ? eventModel.location.city : ""}</div>
                </div>
            </div>
        </div>
    );
}

export default EventPage;