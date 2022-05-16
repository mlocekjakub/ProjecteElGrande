import React from 'react';

export default function EventDate({eventForm, setEventForm}) {
    return (
        <div className="create__date">
            <div className="create__date-start">
                <label htmlFor="createStartDate"> Event Start Date </label>
                <input
                    type="text"
                    id="createStartDate"
                    placeholder="Start Date"
                    value={eventForm.startEvent}
                    onChange={e => setEventForm({...eventForm, startEvent: e.target.value})}
                />
            </div>
            <div className="create__date-end">
                <label htmlFor="createEndDate"> Event End Date </label>
                <input
                    type="text"
                    id="createEndDate"
                    placeholder="End Date"
                    value={eventForm.endEvent}
                    onChange={e => setEventForm({...eventForm, dateEnd: e.target.value})}
                />
            </div>
        </div>
    );
}
