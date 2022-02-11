import "./Calendar.css";
import CalendarCard from "./CalendarCard";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {Button} from "@mui/material";

export default function CalendarUpcoming() {
    const style = {
        fontColor: "white"
    }
    return (
        <div className="flex-row-calendar-container">
            <Button><ArrowBackIosIcon/></Button>
            <div className="flex-row-item">
                <CalendarCard monthName="March" dayName="Friday"
                              dateName="23" eventName="Running Event"/>
            </div>
            <div className="flex-row-item">
                <CalendarCard monthName="March" dayName="Saturday"
                              dateName="24" eventName="Basketball"/>
            </div>
            <div className="flex-row-item">
                <CalendarCard monthName="March" dayName="Sunday" 
                              dateName="25" eventName="Swimming Event"/>
            </div>
            <div className="flex-row-item">
                <CalendarCard monthName="March" dayName="Monday" 
                              dateName="26" eventName="Running Event"/>
            </div>
            <Button><ArrowForwardIosIcon/></Button>
        </div>
    );
}



