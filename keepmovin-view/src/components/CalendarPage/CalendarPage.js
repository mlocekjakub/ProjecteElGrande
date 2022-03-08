import {useEffect, useState} from "react";
import * as React from "react";
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../../index.css';
import './CalendarPageStyles.css';

export default function CalendarPage() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [url, setUrl] = useState(null);
    const [events, setEvents] = useState([]);
    const [listOfEvents, setListOfEvents] = useState([]);

    // localStorage.getItem('session');

    useEffect(() => {
        if (startDate != null && endDate != null) {
            setUrl(`api/Calendar?startDate=${startDate.toJSON().slice(0, 10)}&endDate=${endDate.toJSON().slice(0, 10)}`);
        }
    }, [startDate, endDate])

    useEffect(() => {
        if (url != null) {
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                })
                .then(data => {
                    let tempList = [];
                    setEvents(data);
                    data.forEach(element => {
                        tempList.push(
                            {
                                'id': element.eventId,
                                'title': element.name,
                                'start': new Date(element.startEvent),
                                'end': new Date(element.endEvent),
                            }
                        )
                    })
                    setListOfEvents(tempList);
                })
                .catch(error => {
                    console.error("Error fetching data: ", error);
                })
        }
    }, [url])

    return (
        <div className="calendar-page">
            <div className="calendar-container" style={{textDecoration: "none"}}>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                    eventTimeFormat={{
                        hour: '2-digit',
                        minute: '2-digit',
                        meridiem: false,
                        hour12: false
                    }}
                    firstDay={1} // 1 = Monday
                    initialView="dayGridMonth"
                    headerToolbar={{
                        left: "title",
                        center: "prev next",
                        right: "dayGridMonth list"
                    }}
                    views={{
                        list: {
                            duration: {months: 1} // full month in list
                        }
                    }}
                    events={listOfEvents}
                    eventClick={(e) => {
                        console.log(e.event.id);
                    }}
                    dateClick={(e) => console.log(e.dateStr)}
                    datesSet={(dateInfo) => {
                        setStartDate(dateInfo.start); // start of the range the calendar date
                        setEndDate(dateInfo.end); // end of the range the calendar date
                    }}
                    contentHeight={"80vh"}
                />
            </div>
        </div>
    )
}