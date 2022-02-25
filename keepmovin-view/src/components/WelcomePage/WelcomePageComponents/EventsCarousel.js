import './EventCarouselStyles.css';
import {ArrowBack, ArrowForward} from "@material-ui/icons";
import CarouselEventCard from "./CarouselEventCard";
import {useEffect, useState} from "react";

export default function EventsCarousel() {
    const baseTransform = 20;
    const [multiplier, setMultiplier] = useState(0);
    const [transformValue, setTransformValue] = useState(baseTransform * multiplier)

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('/api/event')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                setEvents(data);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            })
    }, [])

    let listOfCards = events.map((event) =>
        <div className='card-container' key={event.eventId}>
            <CarouselEventCard
                key={event.eventId}
                eventId={event.eventId}
                eventTitle={event.name}
                startDate={event.startEvent}
                eventInfo={event.eventInfo}
                eventPicture={event.profilePicture}
            />
        </div>)

    // console.log(events);
    // events.map((event) => {
    //     console.log(typeof(event.name))})

    const nextCard = () => {
        if (multiplier < events.length - 3) {
            setMultiplier(multiplier + 1);
        }
    }

    const previousCard = () => {
        if (multiplier >= 1) {
            setMultiplier(multiplier - 1);
        }
    }

    useEffect(() => {
        setTransformValue(baseTransform * multiplier);
    }, [multiplier])

    return (
        <div className="carousel-container">
            <button className="prev" id="nav-button" onClick={() => {
                previousCard();
            }}><ArrowBack/></button>
            <div className="carousel-inner">
                <div className="track" style={{transform: `translateX(-${transformValue}rem)`}}>
                    {listOfCards}
                </div>
            </div>
            <button className="next" id="nav-button" onClick={() => {
                nextCard();
            }}><ArrowForward/></button>
        </div>
    );
}