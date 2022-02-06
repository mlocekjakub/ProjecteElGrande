import * as React from "react";
import './WelcomePageStyles.css';
import WelcomePageTitle from "./components/WelcomePageTitle";
import RegisterButton from "./components/RegisterButton";
import EventScroll from "./components/EventsScroll";

export default function WelcomePage() {
    return (
        <div className="welcome-page">
            <WelcomePageTitle />
            <RegisterButton />
            <EventScroll />
            <div id="background" />
        </div>
    )
}