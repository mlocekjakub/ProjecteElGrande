import React, {useState} from 'react';
import NamePlace from "./eventPage/NamePlace";
import PicturePlace from "./eventPage/PicturePlace";
import Info from "./eventPage/Info";
import {useParams} from "react-router-dom";
import { Button } from "@mui/material";
import { useEffect} from "react";





function EventPage() {
    useEffect(async () => {
        const response = await fetch("/user/validate", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        })
        const content = await response.json()
            .then(content => localStorage.setItem('session', content))

    })
    

    let {id} = useParams();
    const [eventName, setEventName] = useState("")
    const [price, setPrice] = useState("")
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [sport, setSport] = useState("")
    const [limit, setLimit] = useState("")
    const [experience, setExperience] = useState("")

    fetch(`/api/Event/${id}`)
        .then(response => response.json())
        .then(data => {
            setEventName(data.name)
            setPrice("5 USD")
            setStart(data.startEvent)
            setEnd(data.endEvent)
            setSport(data.sportId)
            setLimit(data.maxParticipants)
            setExperience(data.experienceLevel)

        });
    return (
        <div className="grid-container-3">
            <NamePlace
                    name={eventName}/>
            <Info label="Price" text={price}/>
            <Button id="save-button" variant="contained" onClick="" disableElevation sx={{
                top: '30ch', width: '80ch', position: 'none'
            }}>
                Join Now
            </Button>
            
            <PicturePlace
                src="/Images/tempevent.jpg"/>
            <div className="grid-container-infos">
                <Info label="Start" text={start.slice(0,10)}/>
                <Info label="End" text={end.slice(0,10)}/>
                <Info label="Sport" text={sport}/>
                <Info label="Limit participants" text={limit}/>
                <Info label="Experience" text={experience}/>
            </div>


            {/*<Button id="save-button" variant="contained" onClick="" disableElevation sx={{*/}
            {/*    top: '30ch', width: '80ch', position: 'none'*/}
            {/*}}>*/}
            {/*    Edit*/}
            {/*</Button>*/}
        </div>);
}

export default EventPage;