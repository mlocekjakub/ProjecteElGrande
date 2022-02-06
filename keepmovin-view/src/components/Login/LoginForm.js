import * as React from "react";
import TextBoxes from "./loginForm/TextBoxes";
import SignInButton from "./loginForm/SignInButton";
import RegistrationHyperLink from "./loginForm/RegistrationHyperLink";
import LoginHyperLink from "./loginForm/LoginHyperLink";
import './loginForm/LoginCSS.css';


export default function LoginForm() {

    return (
        <div className="Centered">
            <div className="FormContainerCSS">
                <RegistrationHyperLink />
                <LoginHyperLink />  
                <TextBoxes />
                <SignInButton />
            </div>
        </div>
    )
}

