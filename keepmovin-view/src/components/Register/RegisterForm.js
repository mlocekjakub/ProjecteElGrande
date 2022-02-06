import * as React from "react";
import TextBoxes from "./registerForm/TextBoxes"
import SignUpButton from "./registerForm/SignUpButton"
import './registerForm/RegisterCSS.css';
import SignUpText from "./registerForm/SignUpText";





export default function RegisterForm() {

    return (
        <div className="Centered">
                <div className="FormContainerCSS">
                    <SignUpText/>
                    <TextBoxes />
                    <SignUpButton />
                </div>
        </div>
    )
}

