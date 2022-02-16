import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';


export default function FormPropsTextFields() {
             
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {
                    m: 1, width: '80ch', top: '20ch'
                },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField className="login"
                    required
                    id="outlined-required-login"
                    label="Email"
                    helperText="* Field required"
                    

                />
            </div>
            <div>
                <TextField className="password"
                    required
                    id="outlined-required-password"
                    label="Password"
                    helperText="* Field required"
                    type="password"
                />
            </div>
        </Box>

    );

}
