import * as React from "react";
import EventCalendar from "./CalendarPageComponents/EventCalendar";
import '../../index.css';
import './CalendarPageStyles.css';
import {useSelector} from "react-redux";
import "./CalendarPage.scss";

export default function CalendarPage() {
    
    const theme = useSelector((state) => state.theme.value)

    return (
        <div className="calendar-page" data-theme={theme}>
            <EventCalendar/>
        </div>
    )
}