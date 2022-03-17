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
import {createEvent} from "../API/Api";
import {Button} from "@mui/material";
import CityInput from "./eventForm/CityInput";
import CountryInput from "./eventForm/CountryInput";
import ZipCodeInput from "./eventForm/ZipCodeInput";


export default function EventForm() {
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