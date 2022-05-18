import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import axios from "axios";
import {FormControl, MenuItem, Select} from "@mui/material";

export default function EventType({eventForm, setEventForm}) {

    const [types, setTypes] = useState([]);

    const routeChange = useSelector((state) => state.isRouteChanged.value);

    const theme = useSelector((state) => state.theme.value)
    
    useEffect(() => {
        let isMounted = true;
        axios.get('/api/Type')
            .then(response => response.status === 200 && isMounted && setTypes(response.data))
        
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
        <div className="create__type">
            <label htmlFor="createType"> <h5>Event Type</h5> </label>
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
                    value={eventForm.type}
                    onChange={e => setEventForm({...eventForm, type: e.target.value})}
                    displayEmpty
                    inputProps={{ 'aria-label': 'With label' }}
                >
                    <MenuItem value="">
                        <em>Select Type</em>
                    </MenuItem>
                    {types && types.map(type => <MenuItem key={type.typeId} value={type}>{type.name}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    );
}
