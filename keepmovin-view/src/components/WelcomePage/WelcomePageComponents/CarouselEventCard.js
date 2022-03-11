import React from 'react';
import EventImage from "../../../Images/News-Trailer-Web-4Sep20.png";  

export default function CarouselEventCard({eventId, eventTitle, startDate, eventInfo, eventPicture}) { //eventId, eventTitle for future implementation
    if (eventPicture == null) {
        eventPicture = EventImage;  
    }

    return (
        <div className="card">
            <img src={eventPicture} alt='' style={{
                maxWidth: "100%",
                maxHeight: "100%"
            }}/>
            <div style={{backgroundColor: "rgba(0, 0, 0, 0.7)", color: "white"}}>
                {startDate.slice(0, 10)}
            </div>
            <div className="event-info" style={{backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", padding: "0.2rem"}}>
                {eventInfo}
            </div>
            <button style={{border: "0", backgroundColor: "rgba(0, 0, 0, 0.75)", color: "white"}}>Go for more!</button>
        </div>
    );
}