import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import axios from "axios";

export default function EventType({eventForm, setEventForm}) {

    const [types, setTypes] = useState([]);

    const routeChange = useSelector((state) => state.isRouteChanged.value);
    
    useEffect(() => {
        let isMounted = true;
        axios.get('/api/Type')
            .then(response => response.status === 200 && isMounted && setTypes(response.data))
        
        return () => {
            isMounted = false;
        }
    }, [routeChange])
    
    return (
        <div className="create__type">
            <label htmlFor="createType"> <h5>Event Type</h5> </label>
            <input
                type="text"
                id="createType"
                placeholder="Event Type"
                value={eventForm.type}
                onChange={e => setEventForm({...eventForm, type: e.target.value})}
            />
        </div>
    );
}
