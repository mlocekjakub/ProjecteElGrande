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
        </div>
    );
}