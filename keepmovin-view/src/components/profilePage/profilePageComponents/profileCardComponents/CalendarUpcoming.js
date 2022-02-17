import "./Calendar.css";
import CalendarCard from "./CalendarCard";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {Button} from "@mui/material";

export default function CalendarUpcoming() {
    return (
        <div className="upcoming-calendar-container">
            <Button><ArrowBackIosIcon/></Button>
            <CalendarCard month="March" day="Monday" dayNumber="27" category="Swimming"/>
            <CalendarCard month="March" day="Monday" dayNumber="27" category="Swimming"/>
            <CalendarCard month="March" day="Monday" dayNumber="27" category="Swimming"/>
            <CalendarCard month="March" day="Monday" dayNumber="27" category="Swimming"/>
            <CalendarCard month="March" day="Monday" dayNumber="27" category="Swimming"/>
            <Button><ArrowForwardIosIcon/></Button>
        </div>
    );
}



