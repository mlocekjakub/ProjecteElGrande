import * as React from "react";
import { useEffect, useState } from "react";
import "./Settings.css";
import AcceptChangesButton from "./AcceptChangesButton";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { maxWidth } from "@mui/system";



export default function EditProfile() {
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="centered">
            <p><h4>"EDIT PROFILE"</h4></p>
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
                        maxRows={4}                      onChange={handleChange}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Country"
                        placeholder="Placeholder"
                        multiline
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
            </Box>
            <AcceptChangesButton module ="EditProfile" />
        </div>

    )
}


