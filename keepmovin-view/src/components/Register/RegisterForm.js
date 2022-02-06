import * as React from "react";
import TextBoxes from "./registerForm/TextBoxes"
import SignUpButton from "./registerForm/SignUpButton"
import './registerForm/RegisterCSS.css';
import RegistrationHyperLink from "../Login/loginForm/RegistrationHyperLink"
import LoginHyperLink from "../Login/loginForm/LoginHyperLink"






export default function RegisterForm() {

    return (

        <div className="Centered">
            <div className="FormContainerCSS">
                <RegistrationHyperLink />
                <LoginHyperLink />
                <TextBoxes />
                <SignUpButton />
            </div>
        </div>

    )
}

