import React from 'react';
import './EventCarouselStyles.css';
import {ArrowBack, ArrowForward} from "@material-ui/icons";
import EventImage from '../../../Images/News-Trailer-Web-4Sep20.png';

export default function EventsCarousel() {
    return (
        <div className="carousel-container">
            <button className="prev" id="nav-button" onClick={() => {console.log("prev")}}><ArrowBack/></button>
            <div className="track">
                <div className="card">
                    <img src={EventImage} alt='' style={{ width: "100%" }}/>
                    <div>16-02-2022</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus id augue lobortis
                        accumsan. Proin iaculis lacinia nibh in aliquet. Integer vestibulum aliquet lacinia.
                    </div>
                    <button style={{ border: "0"}}>Go for more!</button>
                </div>
                <div className="card">
                    <img src={EventImage} alt='' style={{ width: "100%" }}/>
                    <div>16-02-2022</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus id augue lobortis
                        accumsan. Proin iaculis lacinia nibh in aliquet. Integer vestibulum aliquet lacinia.
                    </div>
                    <button style={{ border: "0"}}>Go for more!</button>
                </div>
                <div className="card">
                    <img src={EventImage} alt='' style={{ width: "100%" }}/>
                    <div>16-02-2022</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus id augue lobortis
                        accumsan. Proin iaculis lacinia nibh in aliquet. Integer vestibulum aliquet lacinia.
                    </div>
                    <button style={{ border: "0"}}>Go for more!</button>
                </div>
            </div>
            <button className="next" id="nav-button" onClick={() => {console.log("next")}}><ArrowForward/></button>
        </div>
    )
}