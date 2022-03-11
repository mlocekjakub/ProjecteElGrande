import * as React from "react";
import EventCalendar from "./CalendarPageComponents/EventCalendar";
import '../../index.css';
import './CalendarPageStyles.css';

export default function CalendarPage() {

    return (
        <div className="calendar-page">
            <EventCalendar/>
        </div>
    )
}