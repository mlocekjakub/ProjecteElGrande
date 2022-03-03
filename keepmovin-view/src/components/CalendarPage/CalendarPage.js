import {useEffect, useState} from "react";
import * as React from "react";
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'


export default function CalendarPage() {
    const [inputDate, setInputDate] = useState(new Date());
    const [url, setUrl] = useState(`api/Calendar?inputDate=${inputDate.toJSON().slice(0, 10)}`);
    const [events, setEvents] = useState([]);

    // localStorage.getItem('session');

    useEffect(() => {
        console.log(`fetch: ${url}`);
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                setEvents(data);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            })
    }, [url])

    const localizer = momentLocalizer(moment);

    const listOfEvents = events.map((event) => 
        [
            {
                'title': event.name, 
                'start': event.startDate,
                'end': event.endDate
            }
        ]
    )

    const MyCalendar = () => (
        <div>
            <Calendar
                localizer={localizer}
                events={listOfEvents}
                startAccessor="start"
                endAccessor="end"
                style={{height: 500}}
            />
        </div>
    )

    return (
        <div className="calendar-page" style={{marginTop: "6rem", marginRight: "2rem", marginLeft: "2rem"}}>
            <MyCalendar/>
        </div>
    )
    //
    // const changeDate = (count) => {
    //     inputDate.setMonth(inputDate.getMonth() + count)
    //     setUrl(`api/Calendar?inputDate=${inputDate.toJSON().slice(0,10)}`);
    // }    
    //
    // let listOfCards = events.map((event) =>
    //     <div key={event.eventId}>
    //         {event.startEvent.slice(0,10)}
    //     </div>)

    // return (
    //     <div className="calendar-page" style={{ marginTop: "50%"}}>
    //         <button onClick={() => {changeDate(-1)}}>
    //             prev month
    //         </button>
    //         <button onClick={() => {changeDate(1)}}>
    //             next month
    //         </button>
    //         {listOfCards}
    //     </div>
    // )
}