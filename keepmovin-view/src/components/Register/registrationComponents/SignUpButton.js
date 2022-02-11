import * as React from "react";
import './RegisterCSS.css';
import { Button } from "@mui/material";
import { SendForm } from "./RegistrationFormAPI";


export default function SignInButton(props) {

    const CollectInfo = () => {
        let email = document.getElementById('outlined-required-mail').value;
        let password = document.getElementById('outlined-required-password').value;
        let passwordConfirmation = document.getElementById('outlined-required-password1').value;
        SendForm(email,password,passwordConfirmation);        
    }
    return (
        <Button id="confirmButton" onClick={CollectInfo} variant="contained" disableElevation sx={{
            top: '30ch', width: '80ch'}}>
            {props.title}
        </Button>

    )
}

