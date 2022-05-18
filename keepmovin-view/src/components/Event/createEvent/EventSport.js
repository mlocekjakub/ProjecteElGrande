import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import axios from "axios";
import {FormControl, FormHelperText, makeStyles, MenuItem, Select} from "@mui/material";

export default function EventSport({eventForm, setEventForm}) {

    const [sports, setSports] = useState([]);

    const routeChange = useSelector((state) => state.isRouteChanged.value);

    const theme = useSelector((state) => state.theme.value)

    useEffect(() => {
        let isMounted = true;
        axios.get('/api/Sport')
            .then(response => response.status === 200 && isMounted && setSports(response.data))

        return () => {
            isMounted = false;
        }
    }, [routeChange])

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handler = () => {
            setIsOpen(false);
        };
        window.addEventListener('scroll', handler);
        return () => {
            window.removeEventListener('scroll', handler);
        };
    }, []);
    

    return (
        <div className="create__sport">
            <label htmlFor="createSport"> <h5>Sports Discipline</h5> </label>
            <FormControl>
                <Select
                    open={isOpen}
                    onOpen={() => {
                        setIsOpen(true);
                    }}
                    onClose={() => {
                        setIsOpen(false);
                    }}
                    MenuProps={{
                        disableScrollLock: true,
                        PaperProps: {
                            sx: {
                                backgroundColor: theme === 'light' ? '#EDEFF1' : '#1F1F23',
                                '& .MuiMenuItem-root': {
                                    color: theme === 'light' ? '#18181BFF': '#efeff1',
                                },
                            },
                        },
                    }}
                    value={eventForm.sports}
                    onChange={e => setEventForm({...eventForm, sports: e.target.value})}
                    displayEmpty
                    inputProps={{ 'aria-label': 'With label' }}
                >
                    <MenuItem value="">
                        <em>Select Sport</em>
                    </MenuItem>
                    {sports && sports.map(sport => <MenuItem key={sport.sportId} value={sport}>{sport.name}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    );
}
