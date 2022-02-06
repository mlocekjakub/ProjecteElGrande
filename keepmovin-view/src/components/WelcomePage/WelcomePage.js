import * as React from "react";
import './WelcomePageStyles.css';
import WelcomePageTitle from "./components/WelcomePageTitle";
import RegisterButton from "./components/RegisterButton";
import EventsCarousel from "./components/EventsCarousel"

export default function WelcomePage() {
    return (
        <div className="welcome-page">
            <WelcomePageTitle />
            <RegisterButton />
            <EventsCarousel />
            <div id="background" />
        </div>
    )
}