import * as React from "react";
import TextBoxes from "./registrationComponents/TextBoxes";
import AcceptButton from "../AcceptButton";
import './registrationComponents/RegisterCSS.css';
import RegistrationHyperLink from "../Login/loginComponents/RegistrationHyperLink";
import LoginHyperLink from "../Login/loginComponents/LoginHyperLink";
import { useEffect, useState } from "react";
import ForgottenPassword from "../ForgottenPassword";






export default function RegisterForm() {
    useEffect(async () => {
        const response = await fetch("/user/validate", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        })
        const content = await response.json()
            .then(content => localStorage.setItem('session', content))

    })
    
    return (     
        <div className="grid">
            <div className="img2">
            </div>
            <div className="centered">
                <ForgottenPassword/>
                <LoginHyperLink variant="outlined" />             
                <RegistrationHyperLink variant="contained" color="white" />              
                <TextBoxes />
                <AcceptButton title="Sign Up" />
            </div>
        </div>

    )
}

