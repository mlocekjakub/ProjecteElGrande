import React from 'react';

export default function EventMaxParticipants({eventForm, setEventForm}) {
    return (
        <div className="create__max-participants">
            <label htmlFor="createMaxParticipants"> <h5>Max Participants</h5> </label>
            <input
                type="text"
                id="createMaxParticipants"
                placeholder="Max Participants"
                value={eventForm.maxParticipants}
                onChange={e => setEventForm({...eventForm, maxParticipants: e.target.value})}
            />
        </div>
    );
}
