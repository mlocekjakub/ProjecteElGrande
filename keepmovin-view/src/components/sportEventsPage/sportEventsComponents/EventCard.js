import React, {useState, useEffect} from 'react';
import ButtonCard from "./ButtonCard";


function EventCard() {
    return (
        <div className="event-1">
            <div className="item image">
            </div>
            <div className="item description d-flex flex-column">
                <div className="p-2">
                    <h4>Name: 100 Miles Of Beskid Wyspowy</h4>
                </div>
                <div className="p-2">
                    Location: Lacko
                </div>
                <div className="p-2">
                    Date: 21/10/2022 - 22/10/2022
                </div>
                <div className="p-2">
                    Category: Running
                </div>
            </div>
            <article className="item go-to">
                <ButtonCard name="join" />
                <ButtonCard name="details" />
                <section className="price">
                    <h5>600$</h5>
                </section>
            </article>
        </div>
    )
}

export default EventCard;