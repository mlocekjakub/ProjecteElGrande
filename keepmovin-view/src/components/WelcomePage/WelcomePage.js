import * as React from "react";
import './WelcomePage.css';
import '../../index.css'
import EventsCarousel from "./WelcomePageComponents/EventsCarousel";
 import {useEffect} from "react";
import {Link} from "react-router-dom";

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
            <div className="welcome-page-content">
                <div className="welcome-info">
                    <div className="welcome-page-title">
                        Welcome <span>to Keep Movin</span>
                        <hr className="welcome__separator"/>
                        <div className="web-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ex sed ante lobortis dapibus ac in enim. Sed massa nisl, pellentesque vel est et, vulputate maximus eros.
                        </div>
                    </div>
                    <div className="welcome__nav">
                        <Link className="join-button nav-welcome" to="/register">
                            Join now
                        </Link>
                        <Link className="welcome__events-details-button nav-welcome" to="/list-of-events">
                            Check Events
                        </Link>
                    </div>
                </div>
            {/*   <EventsCarousel />*/}
            </div>
            
        </div>
    )
}