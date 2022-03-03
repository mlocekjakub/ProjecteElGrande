import * as React from "react";
import { Link } from 'react-router-dom';
import './Register/registrationComponents/RegisterCSS.css';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { Button } from "@mui/material";
import { validateEmail } from "./Register/registrationComponents/ValidateInputs";
import { useState } from "react";
import TextField from '@mui/material/TextField';

export default function ForgottenPassword() {

    const StyledModal = styled(ModalUnstyled)`
        position: fixed;
        z-index: 1300;
        right: 0;
        bottom: 0;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        `;

    const Backdrop = styled('div')`
        z-index: -1;
        position: fixed;
        right: 0;
        bottom: 0;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        -webkit-tap-highlight-color: transparent;

        `;

    const ValidateInput = (e) => {

        const Email = document.getElementById(e.target.id).value;  /// refactor na UseRef !!!
        const EmailValidation = validateEmail(Email);
        if (EmailValidation) {
            localStorage.setItem("email", Email);
        }
        else {
            localStorage.removeItem("email");
            
        }

    }

    const ManageResponse = (data) => {
        if (data == 200) {
            setOpen(false);
            alert("Email was sent");
            localStorage.removeItem("email");
        }
        else {
            setOpen(false);
            alert("Something went wrong, please try again !!!");
            localStorage.removeItem("email");
        }

    }


    async function SendForm() {
        let data_package_form = {
            "Email": localStorage.getItem('email'),
        }
        await fetch("/user/reminder", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data_package_form)

        }).then(response => response.status)
            .then(data => ManageResponse(data))
        

    }
 

    const style = {
        width: 400,
        bgcolor: 'white',
        border: '2px solid #000',
        p: 2,
        px: 4,
        pb: 3,
    };


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="forgot-password" > <Button onClick={handleOpen}>Forgot password? </Button>
            <StyledModal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={handleClose}
                BackdropComponent={Backdrop}
            >
                <Box sx={style} >
                    <div >
                        <h2 id="unstyled-modal-title">Password Reminder:</h2>
                        <TextField onKeyUp={ValidateInput} className="input-reminder" id="email" placeholder="Your Registrated email" />
                        <div>&nbsp;</div>
                        <p> After verifying Your email we will send You a form which will allow You to change Your current password </p>
                        <Button className="reminder-button" type="click" onClick={SendForm} variant="contained" color="success">Send </Button>
                    </div>
                </Box>
            </StyledModal>
        </div>
   )

}