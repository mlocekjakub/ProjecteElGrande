import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import "./Settings.css";
import AcceptChangesButton from "./AcceptChangesButton";




export default function ChangePassword() {


    return (
        <div className="centered">
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        label="Old password"
                        id="outlined-size-small"
                        size="small"
                    />
                </div>
                <div>
                    <TextField
                        label="New password"
                        id="outlined-size-small"
                        size="small"
                    />
                </div>
                <div>
                    <TextField
                        label="Confirm new password"
                        id="outlined-size-small"
                        size="small"
                    />
                  
                </div>
            </Box>
            <AcceptChangesButton module="ChangePasswor" />
        </div>

    )
}

    