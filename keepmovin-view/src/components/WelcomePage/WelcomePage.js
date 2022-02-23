import * as React from "react";
import './WelcomePageStyles.css';
import WelcomePageTitle from "./WelcomePageComponents/WelcomePageTitle";
import EventsCarousel from "./WelcomePageComponents/EventsCarousel";
import JoinButton from "./WelcomePageComponents/JoinButton";
import { useEffect, useState } from "react";



export default function WelcomePage() {
    useEffect(async () => {
        const response = await fetch("/user/validate", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        })
        const content = await response.json()
            .then(content => localStorage.setItem('session', content))
                           
    })
    
    return (

        <div className="welcome-page">
            <WelcomePageTitle/>
            <JoinButton/>
            <EventsCarousel/>
        </div>
    )
}