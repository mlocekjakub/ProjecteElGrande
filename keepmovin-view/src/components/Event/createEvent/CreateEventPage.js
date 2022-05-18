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

export default function CreateEventPage() {
    
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
    
    const [progressState, setProgressState] = useState(1);

    const theme = useSelector((state) => state.theme.value)
    
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
    
    function IncrementProgress(e) {
        e.preventDefault()
        progressState < 4 && setProgressState(progressState + 1)
    }
    
    function DecrementProgress(e) {
        e.preventDefault()
        progressState > 1 && setProgressState(progressState - 1)
    }
    
    
    
    return (
        <div className="create-event-page" data-theme={theme}>
            <form>
                <div className="create__header">
                    <h6>Create Event</h6>
                    <h3>
                        {progressState === 1 && "Event Details"}
                        {progressState === 2 && "Sport Preferences"}
                        {progressState === 3 && "Location"}
                        {progressState === 4 && "Price"}

                    </h3>
                </div>
                {progressState === 1 && 
                    <div className="create__organiser">
                        <img src={defaultImage} alt="default-profile-image"/>
                        <div className="create__organiser-info">
                            <div className="create__organiser-nickname">{organiserName}</div>
                            <div className="create__organiser-profile">
                                Organiser -- your profile
                            </div>
                        </div>
                    </div>
                }
                {progressState === 1 &&
                    <>
                        <EventName
                            eventForm={eventForm}
                            setEventForm={setEventForm}/>
                        <EventAbout
                            eventForm={eventForm}
                            setEventForm={setEventForm}/>
                        <h5> Event Date </h5>
                        <EventDate 
                            eventForm={eventForm} 
                            setEventForm={setEventForm}/>
                    </>
                }
                {progressState === 2 &&
                    <>
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
                    </>
                }
                {progressState === 3 &&
                    <EventLocation
                        eventForm={eventForm}
                        setEventForm={setEventForm}
                        HandleCountry={HandleCountry}
                        HandleCity={HandleCity}
                        HandleZipCode={HandleZipCode}/>
                    
                }
                {progressState === 4 &&
                    <EventPrice
                        eventForm={eventForm}
                        setEventForm={setEventForm}/>
                }
                <hr className="create__form-separator" />
                <div className="create__progress-bar">
                    <div className="create__progress-piece create__progress-bar-filled" />
                    <div className={`create__progress-piece ${progressState > 1 && 'create__progress-bar-filled'}`} />
                    <div className={`create__progress-piece ${progressState > 2 && 'create__progress-bar-filled'}`} />
                    <div className={`create__progress-piece ${progressState > 3 && 'create__progress-bar-filled'}`} />
                </div>
                <div className="create__navigation-buttons">
                    <button 
                        disabled={progressState === 1}
                        className={`create__previous-page-button ${progressState === 1 ? 'create__previous-inactive' : 'create__previous-active'}`} 
                        onClick={e => DecrementProgress(e)}>
                        Previous
                    </button>
                    {progressState !== 4 && 
                        <button 
                            className="create__next-page-button" 
                            onClick={e => IncrementProgress(e)}>
                            Next
                        </button>
                    }
                    {progressState === 4 && 
                        <input type="submit" 
                               name="submit"
                               className="create__submit-button"
                               id="create-event"
                               onClick={(e) => HandleSubmit(e)}
                               value="Create Event"/>
                    }
                </div>
            </form>
        </div>
    );
}