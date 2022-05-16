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
                    <h2>Create Event</h2>
                    <p> This page allow you to
                        create new event in which
                        other users will be able to
                        join in!
                    </p>
                </div>
                <EventName 
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
                <EventPrice  
                    eventForm={eventForm}
                    setEventForm={setEventForm}/>
                <h4> Event Date </h4>
                <EventDate
                    eventForm={eventForm}
                    setEventForm={setEventForm}/>
                <h4> Event Location </h4>
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
        </div>
    );
}