import * as React from "react";
import TextBoxes from "./loginComponents/TextBoxes";
import AcceptButton from "../AcceptButton";
import RegistrationHyperLink from "./loginComponents/RegistrationHyperLink";
import LoginHyperLink from "./loginComponents/LoginHyperLink";
import './loginComponents/LoginCSS.css';






export default function LoginForm() {

    return (
        <div className="grid">
            <div className="img">
            </div>
            <div className="Centered">
                <LoginHyperLink variant="contained" color="white"/>
                  <RegistrationHyperLink variant ="outlined" />
                  <TextBoxes />
                <AcceptButton title='Sign In'/>
            </div>
                
        </div>
        
    )
}

