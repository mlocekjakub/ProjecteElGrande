import "./Calendar.css";
import {Button} from "@mui/material";

export default function CalendarCard(props) {
    return (
        <div className="calendar-card">
            <div className="month">{props.month}</div>
            <div className="day">{props.day}</div>
            <div className="day-number">{props.dayNumber}</div>
            <div className="event-upcoming"><a className="go-to-event">{props.category} Event</a></div>
        </div>
    );
}