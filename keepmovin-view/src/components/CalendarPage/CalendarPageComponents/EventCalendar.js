import React, {useEffect, useState} from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import EventModal from "./EventModal";

export default function EventCalendar() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [url, setUrl] = useState(null);
    const [events, setEvents] = useState([]);
    const [listOfEvents, setListOfEvents] = useState([]);

    const [show, setShow] = useState(false);
    const [givenId, setGivenId] = useState(null);
    
    // console.log(localStorage.getItem('session'));

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
        <div className="calendar-container">
            <EventModal onClose={() => {
                setShow(false);
                setGivenId(null)
            }} show={show} eventId={givenId}/>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                customButtons={{
                    userEventsButton: {
                        text: "My events",
                        click: function() {
                            alert("clicked");
                        }
                    }
                }}
                eventTimeFormat={{
                    hour: '2-digit',
                    minute: '2-digit',
                    meridiem: false,
                    hour12: false
                }}
                firstDay={1} // 1 = Monday
                initialView="dayGridMonth"
                headerToolbar={{
                    left: "userEventsButton prev next",
                    center: "title",
                    right: "dayGridMonth list"
                }}
                views={{
                    list: {
                        duration: {months: 1}, // full month in list
                        displayEventTime: true,
                        eventClick: (e) => {
                            setGivenId(e.event.id);
                            setShow(true);
                        }
                    }
                }}
                displayEventTime={false}
                events={listOfEvents}
                eventClick={(e) => {
                    setGivenId(e.event.id);
                    setShow(true);
                }}
                dateClick={(e) => console.log(e.dateStr)}
                datesSet={(dateInfo) => {
                    setStartDate(dateInfo.start); // start of the range the calendar date
                    setEndDate(dateInfo.end); // end of the range the calendar date
                }}
                contentHeight={"80vh"}
            />
        </div>
    );
}