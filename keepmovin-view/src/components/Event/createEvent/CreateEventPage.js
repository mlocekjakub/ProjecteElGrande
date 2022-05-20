import React, {useEffect, useRef, useState} from 'react';
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
import {useDetectClickOutside} from "react-detect-click-outside";
import {useNavigate} from "react-router-dom";

export default function CreateEventPage() {
    
    const [eventForm, setEventForm] = useState({
        name: "",
        startEvent: "",
        endEvent: "",
        experienceLevel: "",
        eventInfo: "",
        maxParticipants: "",
        status: "upcoming",
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

    const [redirectToMainPage, setRedirectToMainPage] = useState(false);

    const theme = useSelector((state) => state.theme.value)

    const navigate = useNavigate()

    const modalClickOutside = useDetectClickOutside(
        { onTriggered: closeModalCreate });
    
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

    const modalSuccessRef = useRef(null);

    const modalErrorRef = useRef(null);
    
    
    function HandleSubmit(e) {
        e.preventDefault();
        fetch("/api/event", {
            method: 'POST',
            headers: {
                'userId': localStorage["session"],
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventForm)
        }).then(response => {
            if(response.status === 200) {
                setRedirectToMainPage(true);
                modalSuccessRef.current.classList.add("create__modal-active")
            }
            else {
                modalErrorRef.current.classList.add("create__modal-active")
            }
        })
    }

    useEffect(() => {
        const handler = () => {
            modalSuccessRef.current.classList.remove("create__modal-active")
            modalErrorRef.current.classList.remove("create__modal-active")
        };
        window.addEventListener('scroll', handler);
        return () => {
            window.removeEventListener('scroll', handler);
        };
    }, []);

    useEffect(() => {
        if (redirectToMainPage) {
            setTimeout(() => {
                navigate("/list-of-events")
            }, 1000)
        }
    }, [redirectToMainPage])

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
    
    function closeModalCreate() {
        modalSuccessRef.current.classList.remove("create__modal-active")
        modalErrorRef.current.classList.remove("create__modal-active")
    }
    
    const isDetails = eventForm.name !== ""
        && eventForm.details !== ""
        && eventForm.startEvent !== ""
        && eventForm.endEvent !== ""
    

    const isSportsPreferences = eventForm.sports !== "" 
            && eventForm.type !== ""
            && eventForm.experienceLevel !== ""
            && eventForm.maxParticipants !== ""
    

    const isLocation = eventForm.location.country !== ""
            && eventForm.location.city !== ""
            && eventForm.location.zipCode !== ""

    const isPrice = eventForm.price !== ""
            && eventForm.currency !== ""

    const isBlockFilled = (progressState === 1 && isDetails) ||
        (progressState === 2 && isSportsPreferences) ||
        (progressState === 3 && isLocation) ||
        (progressState === 4 && isPrice)
    
    useEffect(() => {
        console.log(eventForm)
    })
    
    return (
        <div className="create-event-page" data-theme={theme}>
            <div className="create__status-modal" ref={modalClickOutside}>
                <div className="create__modal-success" ref={modalSuccessRef}>
                    Successfully created event
                </div>
                <div className="create__modal-error" ref={modalErrorRef}>
                    Something went wrong
                </div>
            </div>
            <form className={`${progressState === 1 && 'initial-width'}`}>
                <div className="create__header">
                    <h6>Create Event</h6>
                    <h3 className="create__event-header">
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
                        <h5 className="create__event-date-header"> Event Date </h5>
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
                            disabled={isBlockFilled === false}
                            className={`create__next-page-button ${isBlockFilled ? 'create__next-page-button-active' : 'create__next-page-button-inactive'}`}
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