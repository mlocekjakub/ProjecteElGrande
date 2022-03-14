import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from "react";
import "./Settings.css";




export default function ChangePassword() {

    let ChangePassword = (e) => {
        var collectUserInputs = {
            'OldPassword': document.GetElementById().value,
            'NewPassword': document.GetElementById().value,
            'ConfirmPassword': document.GetElementById().value
        }
        SendChangePasswordForm(collectUserInputs);
    }

    return (
        
        <div className="centered" >
            <Box className="centered"
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                
                <div>
                    <TextField
                        id ="OldPassword"
                        label="Old password"
                        id="outlined-size-small"
                        size="small"
                    />
                </div>
                <div>
                    <TextField
                        id="NewPassword"
                        label="New password"
                        id="outlined-size-small"
                        size="small"
                    />
                </div>
                <div>
                    <TextField
                        id="ConfirmNewPassword"
                        label="Confirm new password"
                        id="outlined-size-small"
                        size="small"
                    />
                  
                </div>
            </Box>
            <div className="save-button">

                <Button onClick={ChangePassword} variant="contained" endIcon={<SendIcon />} >
                    Save
                </Button>

            </div>
        </div>

    )
}

    