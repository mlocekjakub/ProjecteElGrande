import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import axios from "axios";

export default function EventExperienceLevel({eventForm, setEventForm}) {

    const [experienceLevels, setExperienceLevels] = useState([]);

    const routeChange = useSelector((state) => state.isRouteChanged.value);

    useEffect(() => {
        let isMounted = true;
        axios.get('/api/Experience')
            .then(response => response.status === 200 && isMounted && setExperienceLevels(response.data))

        return () => {
            isMounted = false;
        }
    }, [routeChange])

    return (
        <div className="create__experience-level">
            <label htmlFor="createExperienceLevel"> <h5>Experience Level</h5></label>
            <input
                type="text"
                id="createExperienceLevel"
                placeholder="Experience"
                value={eventForm.experienceLevel}
                onChange={e => setEventForm({...eventForm, experienceLevel: e.target.value})}
            />
        </div>
    );
}