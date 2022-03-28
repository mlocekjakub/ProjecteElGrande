import * as React from "react";
import "./EventForm.css";
import NameInput from "./eventForm/NameInput";
import PictureInput from "./eventForm/PictureInput";
import DateTimeInput from "./eventForm/DateTimeInput";
import SportSelect from "./eventForm/SportSelect";
import TypeSelect from "./eventForm/TypeSelect";
import ParticipantsInput from "./eventForm/ParticipantsInput";
import ExperienceSelect from "./eventForm/ExperienceSelect";
import PriceInput from "./eventForm/PriceInput";
import InfoInput from "./eventForm/InfoInput";
import {Button} from "@mui/material";
import CityInput from "./eventForm/CityInput";
import CountryInput from "./eventForm/CountryInput";
import ZipCodeInput from "./eventForm/ZipCodeInput";
import {useRef} from "react";
import {createEvent} from "../API/Api";


//
// let event_model_json = {
//     "Name": name,
//     "StartEvent": start_event,
//     "EndEvent": end_event,
//     "ExperienceLevel": JSON.parse(experience_level),
//     "EventInfo": info,
//     "MaxParticipants": max_participants,
//     "Status": status,
//     "Currency": currency,
//     "Link": "",
//     "Price": price,
//     "Location":{
//         "City": city,
//         "Country": country,
//         "ZipCode": zipCode,
//     },
//     "Type": JSON.parse(eventType),
//     "Sports": JSON.parse(sport),
// }
// fetch("/api/event", {
//     method: 'POST',
//     headers: {
//         'userId': localStorage["session"];
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(event_model_json)
// })

// window.location.href = '/list-of-events';

export default function EventForm() {
    // const status = "upcoming";
    // const [name, setName] = useRef();
    // const [startEvent, setStartEvent] =  useRef();
    // const [endEvent, setEndEvent] = useRef();
    // const [sport, setSport] = useRef();
    // const [maxParticipants, setMaxParticipants] = useRef();
    // const [experienceLevel, setExperienceLevel] = useRef();
    // const [price, setPrice] =  useRef();
    // const [currency,setCurrency] = useRef();
    // const [info, setInfo] = useRef();
    // const [eventType, setEventType] =useRef();
    // const [city,setCity] = useRef();
    // const [country,setCountry] = useRef();
    // const [zipCode, setZipCode] = useRef();

    return (
        <div className="grid-container-3">
            <NameInput/>
            <PictureInput
                src="/Images/tempevent.jpg"/>
            <div className="grid-container-infos">
                <DateTimeInput
                    id="datetime-local-start"
                    label="Start Event"
                    name="StartEvent"
                />
                <DateTimeInput
                    id="datetime-local-end"
                    label="End Event"
                    name="EndEvent"
                />
                <SportSelect/>
                <TypeSelect/>
                <CityInput/>
                <CountryInput/>
                <ZipCodeInput/>
                <ParticipantsInput/>
                <ExperienceSelect/>
                <PriceInput/>
            </div>
            <InfoInput/>
            <Button id="save-button" variant="contained" onClick={createEvent} disableElevation sx={{
                top: '30ch', width: '80ch', position: 'none'
            }}>
                Save
            </Button>
        </div>)
}