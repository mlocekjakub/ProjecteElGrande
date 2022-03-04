import React, {useEffect, useState} from 'react';
import axios from "axios";
import eventImage from "../../Images/News-Trailer-Web-4Sep20.png"
import Sport from "../sportEventsPage/sportEventsComponents/Sport";
import PersonIcon from '@mui/icons-material/Person';

function EventsSearchedCard(props) {

    const [sportCategory, setSportCategory] = useState("Basketball")
    
    const [sportLevel, setSportLevel] = useState("Beginner")
    
    function LevelComponent() {
        if (sportLevel === "Beginner") {
            return <span className="beginner"> Beginner</span>;
        }
        else if(sportLevel === "Intermediate") {
            return <span className="intermediate"> Intermedaite</span>;
        }
        else {
            return <span className="experienced"> Experienced</span>;
        }
    }
    
    /*useEffect(() => {
        axios
            .get(`/api/sport/${props.sportId}`)
            .then(response => {
                setSportCategory(response.data);
            });
    }, [])*/
    
    return (
        <div className="event-searched-card">
            <div className="event-searched-date">
                <div className="event-searched-day">{props.dateStart.slice(8, 10)}</div>
                <div className="event-searched-month">{props.dateStart.slice(5, 7)}</div>
            </div>
            <div className="event-info__found">
                <div className="event-info-category__found">
                    {sportCategory}
                </div>
                <div className="event-info-header__found">
                    {props.eventName}
                </div>
                <div className="event-info-paragraph__found">
                    <div className="event-info-paragraph-level__found">
                        level: <LevelComponent />
                    </div>
                    <div className="event-info-paragraph-people__found">
                        <span>{props.maxParticipants}</span> 
                        <PersonIcon className="found_icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventsSearchedCard;