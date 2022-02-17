import CalendarCard from "./CalendarCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {Button} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Calendar.css";

export default function CalendarPrevious() {
    return (
        <div className="previous-calendar-container">
            <Button><ArrowBackIosIcon/></Button>
            <CalendarCard month="February" day="Saturday" dayNumber="15" category="Basketball"/>
            <CalendarCard month="February" day="Saturday" dayNumber="15" category="Basketball"/>
            <CalendarCard month="February" day="Saturday" dayNumber="15" category="Basketball"/>
            <CalendarCard month="February" day="Saturday" dayNumber="15" category="Basketball"/>
            <CalendarCard month="February" day="Saturday" dayNumber="15" category="Basketball"/>
            <Button><ArrowForwardIosIcon/></Button>
        </div>
    );
}