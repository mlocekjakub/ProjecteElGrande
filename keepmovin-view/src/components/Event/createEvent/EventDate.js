import React from 'react';
import TextField from "@mui/material/TextField";

export default function EventDate({eventForm, setEventForm}) {
    return (
        <div className="create__date">
            <div className="create__date-start">
                <label htmlFor="createStartDate"> Event Start Date </label>
                <input type="datetime-local"
                       id="createStartDate"
                       onChange={e => setEventForm({...eventForm, startEvent: e.target.value})}
                       value={eventForm.startEvent ? eventForm.startEvent : (new Date()).toISOString().slice(0, 16)}
                       min={new Date().toISOString().slice(0, 16)} max="2024-01-01T23:59:59" />
            </div>
            <div className="create__date-end">
                <label htmlFor="createEndDate"> Event End Date </label>
                <input type="datetime-local" 
                       id="createEndDate"
                       onChange={e => setEventForm({...eventForm, endEvent: e.target.value})}
                       value={eventForm.endEvent ? eventForm.endEvent : (new Date()).toISOString().slice(0, 16)}
                       min={new Date().toISOString().slice(0, 16)} max="2024-01-01T23:59:59" />
            </div>
        </div>
    );
}
