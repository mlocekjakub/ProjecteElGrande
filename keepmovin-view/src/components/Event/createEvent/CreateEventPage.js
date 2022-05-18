import React, {useEffect, useState} from 'react';
import EventName from "./EventName";
import EventAbout from "./EventAbout";
import EventSport from "./EventSport";
import EventType from "./EventType";
import EventMaxParticipants from "./EventMaxParticipants";
import EventPrice from "./EventPrice";
import EventExperienceLevel from "./EventExperienceLevel";
import {useSelector} from "react-redux";
import "./CreateEventPage.css"
import EventLocation from "./EventLocation";
import EventDate from "./EventDate";
import defaultImage from "../../../Images/DefaultProfileImage.jpg"
import axios from "axios";

export default function CreateEventPage(props) {
    
    const [eventForm, setEventForm] = useState({
        name: "",
        startEvent: "",
        endEvent: "",
        experienceLevel: "",
        eventInfo: "",
        maxParticipants: "",
        status: "",
        currency: "",
        link: "",
        price: "",
        location: {
            city: "",
            country: "",
            zipCode: "",
        },
        type: "",
        sports: "",
    });

    const routeChange = useSelector((state) => state.isRouteChanged.value);
    
    const [organiserName, setOrganiserName] = useState("");
    
    useEffect(() => {
        let isMounted = true;
        axios
            .get(`/api/UserProfile/uploadProfileInformation`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'userId': localStorage.getItem("session")
                }
            })
            .then(content => content.status === 200 && isMounted && setOrganiserName(content.data.name + " " + content.data.surname))
        return () => {
            isMounted = false;
        }
    }, [routeChange])
    
    useEffect(() => {
        console.log(eventForm)
    }, [eventForm])
    
    const theme = useSelector((state) => state.theme.value)
    
    function HandleSubmit(e) {
        e.preventDefault();
        fetch("/api/event", {
            method: 'POST',
            headers: {
                'userId': localStorage["session"],
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: eventForm
        })
    }

    function HandleZipCode(e) {
        let previousState = {...eventForm}
        previousState.location = {...previousState.location, zipCode: e.target.value}
        setEventForm(previousState)
    }

    function HandleCity(e) {
        let previousState = {...eventForm}
        previousState.location = {...previousState.location, city: e.target.value}
        setEventForm(previousState)
    }

    function HandleCountry(e) {
        let previousState = {...eventForm}
        previousState.location = {...previousState.location, country: e.target.value}
        setEventForm(previousState)
    }
    
    
    
    return (
        <div className="create-event-page" data-theme={theme}>
            <form>
                <div className="create__header">
                    <h6>Create Event</h6>
                    <h3>Event Details</h3>
                </div>
                <div className="create__organiser">
                    <img src={defaultImage} alt="default-profile-image"/>
                    <div className="create__organiser-info">
                        <div className="create__organiser-nickname">{organiserName}</div>
                        <div className="create__organiser-profile">
                            Organiser -- your profile
                        </div>
                    </div>
                </div>
                <EventName 
                    eventForm={eventForm}
                    setEventForm={setEventForm}/>
                <h5> Event Date </h5>
                <EventDate
                    eventForm={eventForm}
                    setEventForm={setEventForm}/>
                <EventAbout 
                    eventForm={eventForm}
                    setEventForm={setEventForm}/>
                <EventSport
                    eventForm={eventForm}
                    setEventForm={setEventForm}/>
                <EventType
                    eventForm={eventForm}
                    setEventForm={setEventForm}/>
                <EventExperienceLevel
                    eventForm={eventForm}
                    setEventForm={setEventForm}/>
                <EventMaxParticipants 
                    eventForm={eventForm}
                    setEventForm={setEventForm}/>
                <h5> Price </h5>
                <EventPrice  
                    eventForm={eventForm}
                    setEventForm={setEventForm}/>
                <h5> Event Location </h5>
                <EventLocation
                    eventForm={eventForm}
                    setEventForm={setEventForm}
                    HandleCountry={HandleCountry}
                    HandleCity={HandleCity}
                    HandleZipCode={HandleZipCode}/>
                <input type="submit"
                       name="submit"
                       id="create-event"
                       onClick={(e) => HandleSubmit(e)}
                       value="Create Event"/>
            </form>
            <div className="create__event-preview">
                
            </div> 
        </div>
    );
}