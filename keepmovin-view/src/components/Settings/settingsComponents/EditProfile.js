import * as React from "react";
import { useEffect, useState } from "react";
import "./Settings.css";
import AcceptChangesButton from "./AcceptChangesButton";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { maxWidth } from "@mui/system";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function EditProfile() {

    const [value, setValue] = React.useState('Controlled');
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(async () => {
        const response = await fetch("api/UserProfile/uploadProfileInformation", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "etag": localStorage.getItem('session')

            },
            credentials: 'include',
        })
        const content = await response.json()
            .then(content => console.log(content))
            .then(console.log(content))

    }, [])

    const [checked, setChecked] = React.useState(true);

    const handleCheckBox = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <div className="centered">
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '35ch' },
                }}

                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Name"
                        multiline
                        maxRows={4}
                        onChange={handleChange}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Surname"
                        placeholder="Placeholder"
                        multiline
                    />

                </div>
               
                <div>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="City"
                        multiline
                        maxRows={4}
                        onChange={handleChange}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Country"
                        placeholder="Placeholder"
                        multiline
                    />
                </div>
                <div>
                    <label>
                        Enter your birthday : <br></br>
                        <br></br>
                        <input type="date" name="bday"></input>
                    </label>
                </div>
                <div>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Phone number"
                        multiline
                        maxRows={1}
                        onChange={handleChange}
                    />
                    </div>
                <div>
                    <TextField sx={{ m: 1, width: '65ch' }}
                        id="outlined-multiline-static"
                        label="About Me"
                        multiline
                        rows={4}

                    />
                </div>

                <p className="organization-content-info"> In this field below You can enter the organization you represent, and ask for verification. After positive verification by the management board of your
                    organization, it will be displayed as verified and You will be able to create events signed with the name of the organization.</p>

                <Checkbox
                    checked={checked}
                    onChange={handleCheckBox}
                    inputProps={{ 'aria-label': 'controlled' }}
                />

                <div>

                    <TextField
                        id="outlined-multiline-flexible"
                        label="Organization"
                        multiline
                        maxRows={4}
                        onChange={handleChange}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="KRS"
                        multiline
                        maxRows={4}
                        onChange={handleChange}
                    />
                </div>
                
               
            </Box>


            <AcceptChangesButton module="EditProfile" />
        </div>

    )

}

