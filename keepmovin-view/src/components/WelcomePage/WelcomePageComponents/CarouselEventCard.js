import React from 'react';
import EventImage from "../../../Images/News-Trailer-Web-4Sep20.png";

export default function CarouselEventCard( { date } ) {
    return (
        <div className="card">
            <img src={EventImage} alt='' style={{
                maxWidth: "100%",
                maxHeight: "100%"
            }}/>
            <div>{date}</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus id augue lobortis
                accumsan. Proin iaculis lacinia nibh in aliquet. Integer vestibulum aliquet lacinia.
            </div>
            <button style={{border: "0"}}>Go for more!</button>
        </div>
    );
}