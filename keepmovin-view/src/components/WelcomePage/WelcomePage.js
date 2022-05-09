import * as React from "react";
import './WelcomePage.css';
import '../../index.css'
import EventsCarousel from "./WelcomePageComponents/EventsCarousel";
 import {useEffect} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export default function WelcomePage() {
    const isUserLogged = useSelector((state) => state.isLogged.value)
    
    return (
        <div className="welcome-page">
            <div className="welcome-page-content">
                <div className="welcome-info">
                    <div className="welcome-page-title">
                        Welcome <span>to Keep Movin</span>
                        <hr className="welcome__separator"/>
                        <div className="web-description">
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Donec ac ex sed ante lobortis 
                            dapibus ac in enim. Sed massa nisl, pellentesque 
                            vel est et, vulputate maximus eros.
                        </div>
                    </div>
                    <div className="welcome__nav">
                        {!isUserLogged &&
                            <Link className="join-button nav-welcome" to="/register">
                                Join now
                            </Link>
                        }
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