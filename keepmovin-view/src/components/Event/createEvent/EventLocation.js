import React from 'react';

export default function EventLocation({eventForm, HandleCountry, HandleCity, HandleZipCode}) {

    return (
        <div className="create__event-location">
            <div className="create__country">
                <label htmlFor="createCountry">Country</label>
                <input
                    type="text"
                    id="createCountry"
                    placeholder="Country"
                    value={eventForm.location.country}
                    onChange={e => HandleCountry(e)}
                />
            </div>
            <div className="create__city">
                <label htmlFor="createCity">City</label>
                <input
                    type="text"
                    id="createCity"
                    placeholder="City"
                    value={eventForm.location.city}
                    onChange={e => HandleCity(e)}
                />
            </div>
            <div className="create__zip-code">
                <label htmlFor="createZipCode">Zip-Code</label>
                <input
                    type="text"
                    id="createZipCode"
                    placeholder="Zip Code"
                    value={eventForm.location.zipCode}
                    onChange={e => HandleZipCode(e)}
                />
            </div>
        </div>
    );
}
