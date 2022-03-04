import React, {useState, useEffect} from 'react';
import ButtonCard from "./ButtonCard";
import axios from "axios";
import eventImage from "../../../Images/News-Trailer-Web-4Sep20.png";
import eventImage2 from "../../../Images/tempevent.jpg";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PersonIcon from "@mui/icons-material/Person";



function EventCard(props) {
    const [sportCategory, setSportCategory] = useState([])
    useEffect(() => {
        axios
            .get(`/api/sport/${props.sport}`)
            .then(response => {
                setSportCategory(response.data);
            });
    }, [sportCategory])
    return (
        <div className="event-1">
            <img src={eventImage} alt="" />
            <div className="description">
                <div className="info">
                    <div className="date">
                        Date: {(props.dateStart).slice(0,10)} - {(props.dateEnd).slice(0,10)}
                    </div>
                    <div className="title">
                        <h4>{props.eventName}</h4>
                    </div>
                    <div className="category">
                        {sportCategory.name}
                    </div>
                </div>
                <div className="events-statistics">
                    <div className="location">
                        <LocationOnIcon className="location-icon"/>
                        Lacko
                    </div>
                    <div className="events-level">
                        <SignalCellularAltIcon className="level-icon"/>
                        Beginner
                    </div>
                    <div className="events-participants">
                        <PersonIcon className="participants-icon" />
                        0 / {props.maxParticipants}
                    </div>
                </div>
            </div>
            <article className="go-to">
                <div className="go-to__join go-to__item">Join</div>
                <div className="go-to__details go-to__item">Details <ArrowRightIcon/></div>
                <div className="go-to__price go-to__item">{props.price} {props.currency}</div>
            </article>
        </div>
    )
}

export default EventCard;