import * as React from "react";
import './Register/registrationComponents/RegisterCSS.css';
import { Button } from "@mui/material";
import { SendDataFromForm } from "./API/Api";
import { registerValidation, loginAndPasswordValidation} from "./Register/registrationComponents/ValidateInputs"


export default function AcceptButton(props) {

    let Dispose = () => {
        if (props.title === 'Sign In')
            CollectAndPassLoginInfo();
        else if (props.title === 'Sign Up')
            CollectAndPassRegisterInfo();
        else
            throw new Error("Sth went wrong !!!");

    }

    const CollectAndPassRegisterInfo = () => {
        let email = document.getElementById('outlined-required-mail').value;
        let password = document.getElementById('outlined-required-password').value;
        let passwordConfirmation = document.getElementById('outlined-required-password1').value;
        if (registerValidation(email, password, passwordConfirmation)) {
            SendDataFromForm(email, password,"/user/register");
        }                 
    }

    const CollectAndPassLoginInfo = () => {
        let email = document.getElementById('outlined-required-login').value;
        let password = document.getElementById('outlined-required-password').value;
        if (loginAndPasswordValidation(email, password)) {
            SendDataFromForm(email, password,"/user/login");
        }       
    }

    return (
        
        <Button  id="confirmButton" onClick={Dispose} variant="contained" disableElevation sx={{
            top: '30ch', width: '80ch'
        }}>
            {props.title}
        </Button>

    )
}

