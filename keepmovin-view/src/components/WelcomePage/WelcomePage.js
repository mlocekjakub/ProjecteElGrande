import * as React from "react";
import RegisterButton from "./RegisterButton";
import WelcomePageTitle from "./WelcomePageTitle";
/*import './src/WelcomePage.css';*/

export default function WelcomePage() {
    return (
        <div className="welcome-page">
            <WelcomePageTitle />
            <RegisterButton />
        </div>
    )
}