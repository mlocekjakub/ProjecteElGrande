import * as React from "react";
import TextBoxes from "./registrationComponents/TextBoxes";
import AcceptButton from "../AcceptButton";
import './registrationComponents/RegisterCSS.css';
import RegistrationHyperLink from "../Login/loginComponents/RegistrationHyperLink";
import LoginHyperLink from "../Login/loginComponents/LoginHyperLink";
import { useEffect, useState } from "react";
import ForgottenPassword from "../ForgottenPassword";






export default function RegisterForm() {

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

