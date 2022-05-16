import React from 'react';

export default function EventAbout({eventForm, setEventForm}) {
    return (
        <div className="create__event-about">
            <label htmlFor="createAbout"> <h5>Details </h5></label>
            <textarea 
                name="EventAbout"
                id="createAbout"
                autoComplete="off"
                placeholder="Details about Event"
                value={eventForm.eventInfo}
                onChange={e => setEventForm({...eventForm, eventInfo: e.target.value})}
                />
        </div>
    );
}
