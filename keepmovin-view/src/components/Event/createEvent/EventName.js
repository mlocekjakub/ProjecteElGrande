import React from 'react';

export default function EventName({eventForm, setEventForm}) {
    return (
        <div className="create__event-name">
            <label htmlFor="createName"> <h5>Event Name</h5></label>
            <input
                type="text"
                id="createName"
                placeholder="Name"
                value={eventForm.name}
                onChange={e => setEventForm({...eventForm, name: e.target.value})}
            />
        </div>
    );
}
