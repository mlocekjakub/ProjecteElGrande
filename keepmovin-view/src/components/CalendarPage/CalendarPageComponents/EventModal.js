import React, {useEffect, useState} from 'react';
import './CalendarModalStyles.css';
import CloseIcon from '@mui/icons-material/Close';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import LoadingSpinner from "./LoadingSpinner";
import {useNavigate} from "react-router-dom";

export default function EventModal({show, eventId, onClose}) {
    const [eventData, setEventData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    
    const navigate = useNavigate();

    useEffect(() => {
        if (eventId) {
            fetch(`api/Event/${eventId}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                })
                .then(data => {
                    setEventData(data);
                })
                .then(() => {
                    setIsFetching(false);
                })
                .catch(error => {
                    console.error("Error fetching data: ", error);
                })
        }
    }, [eventId, show])

    if (!show) {
        return null;
    }

    if (isFetching && show) {
        return (
            <div className="event-calendar-modal">
                <LoadingSpinner />
            </div>
        )
    } else {
        return (
            <div className="event-calendar-modal" onClick={() => {
                onClose();
                setIsFetching(true);
                setEventData([]);
            }}>
                <div className="event-modal-content" onClick={e => e.stopPropagation()}>
                    <div className="event-modal-buttons">
                        <div className="add-note-button" role="button" onClick={() => {
                            console.log("add note")
                        }}>
                            <NoteAltIcon/>
                        </div>
                        <div className="close-button" role="button" onClick={onClose}>
                            <CloseIcon/>
                        </div>
                    </div>
                    <div className="event-modal-event-info">
                        <div className="event-modal-header">
                            <div className="event-modal-title">
                                {eventData.name}
                            </div>
                        </div>
                        <div className="event-modal-date">
                            <div><b>Start:</b> {eventData.startEvent.slice(0, 10)} {eventData.startEvent.slice(11, 16)}</div>
                        </div>
                        <div className="event-modal-body">
                            {eventData.eventInfo}
                        </div>
                        <div className="event-modal-footer">
                            <div className="event-details-button" onClick={() => navigate(`/event/${eventId}`)} role="button">
                                Details
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}