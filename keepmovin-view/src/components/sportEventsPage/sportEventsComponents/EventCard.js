import React, {useState, useEffect} from 'react';
import ButtonCard from "./ButtonCard";
import axios from "axios";



function EventCard(props) {
    const [sportCategory, setSportCategory] = useState([])
    useEffect(() => {
        axios
            .get(`/api/sport/${props.sportId}`)
            .then(response => {
                setSportCategory(response.data);
            });
    }, [])
    
    return (
        <div className="event-1">
            <div className="item image">
            </div>
            <div className="item description d-flex flex-column">
                <div className="title p-2">
                    <h4>{props.eventName}</h4>
                </div>
                <div className="location p-2">
                    Location: Lacko
                </div>
                <div className="date p-2">
                    Date: {(props.dateStart).slice(0,10)} - {(props.dateEnd).slice(0,10)}
                </div>
                <div className="category p-2">
                    Category: {sportCategory.name}
                </div>
            </div>
            <article className="item go-to">
                <ButtonCard name="join" />
                <ButtonCard name="details" />
                <section className="price">
                    <h5>100 PLN</h5>
                </section>
            </article>
        </div>
    )
}

export default EventCard;