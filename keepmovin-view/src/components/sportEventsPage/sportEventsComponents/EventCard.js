import React, {useState, useEffect} from 'react';
import ButtonCard from "./ButtonCard";



function EventCard(props) {
    const price = [29, 45, 100, 150, 220];

    const [sportCategory, setSportCategory] = useState("")
    
    fetch(`/api/sport/${props.sportId}`)
            .then(response => response.json())
            .then(data => {
                setSportCategory(data.name);
            });
    
    return (
        <div className="event-1">
            <div className="item image">
            </div>
            <div className="item description d-flex flex-column">
                <div className="title p-2">
                    <h4>Name: {props.eventName}</h4>
                </div>
                <div className="location p-2">
                    Location: Lacko
                </div>
                <div className="date p-2">
                    Date: {(props.dateStart).slice(0,10)} - {(props.dateEnd).slice(0,10)}
                </div>
                <div className="category p-2">
                    Category: {sportCategory}
                </div>
            </div>
            <article className="item go-to">
                <ButtonCard name="join" />
                <ButtonCard name="details" />
                <section className="price">
                    <h5>{price[Math.floor(Math.random()*price.length)]} PLN</h5>
                </section>
            </article>
        </div>
    )
}

export default EventCard;