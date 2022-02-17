import React, {useEffect, useState} from 'react';
import './EventCarouselStyles.css';
import {ArrowBack, ArrowForward} from "@material-ui/icons";
import CarouselEventCard from "./CarouselEventCard";

export default function EventsCarousel() {
    const [cardNumber, setCardNumber] = useState(0);
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    
    let listOfCards = cards.slice(cardNumber).map((card) =>
        <CarouselEventCard date={card} key={card}/>);
    
    //sprawdzenie ile elementów jest widocznych na stronie
    // const x = () => {
    //     listOfCards.forEach(element => console.log(element.style.gridRow));
    // }
    
    // useEffect(() => {
    //     x();
    // })
    //
    const nextCard = () => {
        if (cardNumber !== cards.length - 1) {
            setCardNumber(cardNumber + 1);
        }
    }

    const previousCard = () => {
        if (cardNumber !== 0) {
            setCardNumber(cardNumber - 1);
        }
    }

    return (
        <div className="carousel-container">
            <button className="prev" id="nav-button" onClick={() => {
                previousCard();
            }}><ArrowBack/></button>
            <div className="track">
                {listOfCards}
            </div>
            <button className="next" id="nav-button" onClick={() => {
                nextCard();
            }}><ArrowForward/></button>
        </div>
    );
}