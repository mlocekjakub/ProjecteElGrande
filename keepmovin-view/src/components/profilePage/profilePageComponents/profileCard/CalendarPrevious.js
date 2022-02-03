/*import "./Calendar.css";*/

import CalendarCard from "./CalendarCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {Button} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function CalendarPrevious() {
    const style = {
        fontColor: "white"
    }
    return (
        <div className="flex-row-calendar-container">
            <Button><ArrowBackIosIcon/></Button>
            <div className="flex-row-item">
                <CalendarCard monthName="June" dayName="Friday"
                              dateName="19" eventName="Running Event"/>
            </div>
            <div className="flex-row-item">
                <CalendarCard monthName="June" dayName="Saturday"
                              dateName="20" eventName="Basketball"/>
            </div>
            <div className="flex-row-item">
                <CalendarCard monthName="June" dayName="Sunday"
                              dateName="21" eventName="Swimming Event"/>
            </div>
            <div className="flex-row-item">
                <CalendarCard monthName="June" dayName="Monday"
                              dateName="22" eventName="Running Event"/>
            </div>
            <Button><ArrowForwardIosIcon/></Button>
        </div>
    );
}