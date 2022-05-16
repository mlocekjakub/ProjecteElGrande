import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import axios from "axios";

export default function EventSport({eventForm, setEventForm}) {

    const [sports, setSports] = useState([]);

    const routeChange = useSelector((state) => state.isRouteChanged.value);

    useEffect(() => {
        let isMounted = true;
        axios.get('/api/Sport')
            .then(response => response.status === 200 && isMounted && setSports(response.data))

        return () => {
            isMounted = false;
        }
    }, [routeChange])

    return (
        <div className="create__sport">
            <label htmlFor="createSport"> <h5>Sports Discipline</h5> </label>
            <input
                type="text"
                id="createSport"
                placeholder="Sports Discipline"
                value={eventForm.sports}
                onChange={e => setEventForm({...eventForm, sports: e.target.value})}
            />
        </div>
    );
}
