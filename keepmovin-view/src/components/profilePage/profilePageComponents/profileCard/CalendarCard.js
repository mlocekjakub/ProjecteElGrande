import "./Calendar.css";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Button} from "@mui/material";

export default function CalendarCard(props) {
    const style = {
        fontColor: "white"
    }
    return (
        <div className="calendar">
            <div className="calendar-body">
                <span className="month-name">
                    {props.monthName}
                </span>
                <span className="day-name">
                    {props.dayName}
                </span>
                <span className="date-name">
                    {props.dateName}
                </span>
                <span className="event-name">
                   <Button>{props.eventName}</Button> 
                </span>
            </div>
        </div>
    );
}