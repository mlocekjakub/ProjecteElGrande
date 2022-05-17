import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import axios from "axios";
import {FormControl, MenuItem, Select} from "@mui/material";

export default function EventExperienceLevel({eventForm, setEventForm}) {

    const [experienceLevels, setExperienceLevels] = useState([]);

    const routeChange = useSelector((state) => state.isRouteChanged.value);

    const theme = useSelector((state) => state.theme.value)

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
            <FormControl>
                <Select
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                backgroundColor: theme === 'light' ? '#EDEFF1' : '#1F1F23',
                                '& .MuiMenuItem-root': {
                                    color: theme === 'light' ? '#18181BFF': '#efeff1'
                                },
                            },
                        },
                    }}
                    value={eventForm.experienceLevel}
                    onChange={e => setEventForm({...eventForm, experienceLevel: e.target.value})}
                    displayEmpty
                    inputProps={{ 'aria-label': 'With label' }}
                >
                    <MenuItem value="">
                        <em>Select Experience Level</em>
                    </MenuItem>
                    {experienceLevels && experienceLevels.map(exp => <MenuItem key={exp.experienceLevelId} value={exp}>{exp.name}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    );
}