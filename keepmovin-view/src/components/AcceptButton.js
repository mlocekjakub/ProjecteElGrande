import  React from "react";
import './Register/registrationComponents/RegisterCSS.css';
import { Button } from "@mui/material";
import { registerValidation, loginAndPasswordValidation } from "./Register/registrationComponents/ValidateInputs";
import { Navigate } from "react-router-dom";
import { useState } from 'react';


export default function AcceptButton(props) {
    const [redirectToMainPage, setRedirect1] = useState(false);
    const [redirectToLogin, setRedirect2] = useState(false);

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
            SendRegisterData(email, password);
        }                 
    }

    async function SendRegisterData(email, password) {
        let data_package_form = {
            "Email": email,
            "Password": password
        }
        await fetch("/user/register", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data_package_form)

        }).then(response => response.status)
            setRedirect2(true);


    }
    if (redirectToLogin) {
        return <Navigate to="/login" />
    }

    const CollectAndPassLoginInfo = () => {
        let email = document.getElementById('outlined-required-login').value;
        let password = document.getElementById('outlined-required-password').value;
        if (loginAndPasswordValidation(email, password)) {
             SendLoginData(email, password);
        }       
    }

    async function SendLoginData(email, password) {
        let data_package_form = {
            "Email": email,
            "Password": password
        }
        await fetch("/user/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data_package_form)

        }).then(response => response.status)
        setRedirect1(true);
        
        
    }
    if (redirectToMainPage) {
        return <Navigate to="/" />
    }

    
    


    return (
        
        <Button  id="confirmButton" onClick={Dispose} variant="contained" disableElevation sx={{
            top: '30ch', width: '80ch'
        }}>
            {props.title}
        </Button>

    )
}

