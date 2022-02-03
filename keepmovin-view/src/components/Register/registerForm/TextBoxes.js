import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './RegisterCSS.css';



export default function FormPropsTextFields() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {
                    m: 1, width: '35ch', top: '1ch'
                },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField 
                    required
                    id="outlined-required-mail"
                    label="Email"
                    placeholder="Required"
                />
            </div>
            <div>
                <TextField
                    required
                    id="outlined-required-password"
                    label="New password"
                    placeholder="Required"
                />
            </div>
            <div>
                <TextField
                    required
                    id="outlined-required-password"
                    label="Confirm password"
                    placeholder ="Required"
                />
            </div>
            <div>
            </div>
            </Box>
    );
}

