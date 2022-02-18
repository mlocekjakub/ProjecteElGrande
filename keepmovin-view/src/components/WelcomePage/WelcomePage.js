import * as React from "react";
import './WelcomePageStyles.css';
import WelcomePageTitle from "./WelcomePageComponents/WelcomePageTitle";
import EventsCarousel from "./WelcomePageComponents/EventsCarousel";
import JoinButton from "./WelcomePageComponents/JoinButton";


export default function WelcomePage() {
    return (
        <div className="welcome-page">
            <WelcomePageTitle/>
            <JoinButton/>
            <EventsCarousel/>
        </div>
    )
}