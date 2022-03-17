import * as React from "react";
import TextBoxes from "./loginComponents/TextBoxes";
import AcceptButton from "../AcceptButton";
import RegistrationHyperLink from "./loginComponents/RegistrationHyperLink";
import LoginHyperLink from "./loginComponents/LoginHyperLink";
import './loginComponents/LoginCSS.css';
import { useEffect, useState } from "react";
import ForgottenPassword from "../ForgottenPassword";






export default function LoginForm() {

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
            <div className="img1">
            </div>
            <div className="centered">
                <ForgottenPassword />
                <LoginHyperLink variant="contained" color="white"/>
                  <RegistrationHyperLink variant ="outlined" />
                  <TextBoxes />
                <AcceptButton title='Sign In'/>
            </div>
                
        </div>
        
    )
}

