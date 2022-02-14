import * as React from "react";
import TextBoxes from "./registrationComponents/TextBoxes";
import AcceptButton from "../AcceptButton";
import './registrationComponents/RegisterCSS.css';
import RegistrationHyperLink from "../Login/loginComponents/RegistrationHyperLink";
import LoginHyperLink from "../Login/loginComponents/LoginHyperLink";






export default function RegisterForm() {
    return (     
        <div className="grid">
            <div className="img">
            </div>
            <div className="Centered">
                <LoginHyperLink variant ="outlined" />
                <RegistrationHyperLink variant="contained" color ="white" />
                <TextBoxes />
                <AcceptButton title="Sign Up"/>
            </div>

        </div>

    )
}

