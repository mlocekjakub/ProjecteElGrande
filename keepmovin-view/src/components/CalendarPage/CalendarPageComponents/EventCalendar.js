import React, {useEffect, useState} from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import EventModal from "./EventModal";

export default function EventCalendar() {
    const [calendarStartDate, setCalendarStartDate] = useState(new Date());
    const [calendarEndDate, setCalendarEndDate] = useState(new Date());
    const [url, setUrl] = useState(null);
    const [listOfEvents, setListOfEvents] = useState([]);

    const [show, setShow] = useState(false);
    const [givenId, setGivenId] = useState(null);

    const [showUserEvents, setShowUserEvents] = useState(false);

    const eventMultiplier = (events) => {
        let tempList = [];
        events.forEach(event => {
            const start = new Date(event.startEvent).getDate();
            const end = new Date(event.endEvent).getDate();

            if ((end - start) !== 0) {
                for (let i = 0; i <= (end - start); i++) {
                    let newStart = new Date(event.startEvent);
                    let newEnd = new Date(event.endEvent);

                    switch (i) {
                        case 0: // first day of event
                            newEnd.setDate(newStart.getDate());
                            newEnd.setHours(23, 59, 59);
                            break;
                        case (end - start): // last day of event 
                            newStart.setDate(newStart.getDate() + i);
                            newStart.setHours(0, 0, 0);
                            break;
                        default: // middle days
                            newStart.setDate(newStart.getDate() + i);
                            newStart.setHours(0, 0, 0);
                            newEnd.setDate(newStart.getDate());
                            newEnd.setHours(23, 59, 59);
                    }
                    tempList.push(
                        {
                            'id': event.eventId,
                            'title': event.name,
                            'start': newStart,
                            'end': newEnd,
                        })
                }
            } else { // one-day events
                tempList.push(
                    {
                        'id': event.eventId,
                        'title': event.name,
                        'start': new Date(event.startEvent),
                        'end': new Date(event.endEvent),
                    }
                )
            }
        })
        setListOfEvents(tempList);
    }

    useEffect(() => {
        if (calendarStartDate != null && calendarEndDate != null) {
            setUrl(`api/Calendar${showUserEvents === true ? "/user-events" : ""}?startDate=${calendarStartDate.toJSON().slice(0, 10)}&endDate=${calendarEndDate.toJSON().slice(0, 10)}`);
        }
    }, [calendarStartDate, calendarEndDate, showUserEvents])

    useEffect(() => {
        if (url != null) {
            fetch(url, {
                headers: {
                    'userId': `${localStorage.getItem("session")}`,
                }
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                })
                .then(data => {
                    eventMultiplier(data);
                })
                .catch(error => {
                    console.error("Error fetching data: ", error);
                })
        }
    }, [url])

    return (
        <div className="calendar-container">
            <EventModal onClose={() => {
                setShow(false);
                setGivenId(null)
            }} show={show} eventId={givenId}/>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                customButtons={{
                    userEventsButton: {
                        text: `${showUserEvents === true ? "all events" : "my events"}`,
                        click: function () {
                            setShowUserEvents(!showUserEvents);
                        }
                    }
                }}
                eventTimeFormat={{
                    hour: '2-digit',
                    minute: '2-digit',
                    meridiem: false,
                    hourCycle: 'h23' // necessary, to do not have time like 24:00 instead of 00:00 
                }}
                firstDay={1} // 1 = Monday
                initialView="dayGridMonth"
                headerToolbar={{
                    left: "userEventsButton",
                    center: "title",
                    right: "today prev next"
                }}
                displayEventTime={false}
                events={listOfEvents}
                eventClick={(e) => {
                    setGivenId(e.event.id);
                    setShow(true);
                }}
                dateClick={(e) => console.log(e.dateStr)}
                datesSet={(dateInfo) => {
                    setCalendarStartDate(dateInfo.start); // start of the range the calendar date
                    setCalendarEndDate(dateInfo.end); // end of the range the calendar date
                }}
                contentHeight={"90vh"}
            />
        </div>
    );
}