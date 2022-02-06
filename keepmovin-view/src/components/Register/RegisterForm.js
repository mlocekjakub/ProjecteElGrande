import * as React from "react";
import TextBoxes from "./registerForm/TextBoxes"
import SignInButton from "./registerForm/SignInButton"
import './registerForm/RegisterCSS.css';
import SignInText from "./registerForm/SignInText";





export default function RegisterForm() {

    return (
        <div className="Centered">
                <div className="FormContainerCSS">
                    <SignInText/>
                    <TextBoxes />
                    <SignInButton />
                </div>
        </div>
    )
}

