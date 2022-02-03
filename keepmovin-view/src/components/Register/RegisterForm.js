import * as React from "react";
import TextBoxes from "./registerForm/TextBoxes"
import SignInButton from "./registerForm/SignInButton"
import './registerForm/RegisterCSS.css';
import TextBox from "./registerForm/TextBox";



export default function RegisterForm() {
    return (
        <div className="Centered">
                <div className="FormContainerCSS">
                    <TextBox/>
                    <TextBoxes />
                    <SignInButton />
                </div>
        </div>
    )
}