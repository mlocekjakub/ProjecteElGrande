import * as React from "react";
import "./EventForm.css";
import NameInput from "./eventForm/NameInput";
import PictureInput from "./eventForm/PictureInput";
import DateTimeInput from "./eventForm/DateTimeInput";
import SportSelect from "./eventForm/SportSelect";
import ParticipantsInput from "./eventForm/ParticipantsInput";
import ExperienceSelect from "./eventForm/ExperienceSelect";
import PriceInput from "./eventForm/PriceInput";
import InfoInput from "./eventForm/InfoInput";
import SaveButton from "./eventForm/SaveButton";


export default function EventForm() {
    return (
        <div className="grid-container-3">
            <NameInput/>
            <PictureInput/>
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
                <ParticipantsInput/>
                <ExperienceSelect/>
                <PriceInput/>
            </div>
            <InfoInput/>
            <SaveButton
                text="Save"/>
        </div>)
}