import './EventCarouselStyles.css';
import {ArrowBack, ArrowForward} from "@material-ui/icons";
import CarouselEventCard from "./CarouselEventCard";
import {useEffect, useState} from "react";

export default function EventsCarousel() {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const baseTransform = 20;
    
    const [multiplier, setMultiplier] = useState(0);
    const [transformValue, setTransformValue] = useState(baseTransform * multiplier)

    let listOfCards = cards.map((card) =>
        <div className='card-container' key={card}><CarouselEventCard date={card} key={card}/></div>)

    const nextCard = () => {
        console.log("next");
        if (multiplier < cards.length - 3) {
            setMultiplier(multiplier + 1);
            console.log(multiplier);
        }
    }

    const previousCard = () => {
        console.log("prev");
        if (multiplier >= 1) {
            setMultiplier(multiplier - 1);
            console.log(multiplier);
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