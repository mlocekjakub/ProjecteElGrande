import React, {useEffect, useState} from 'react';
import './CalendarModalStyles.css';
import CloseIcon from '@mui/icons-material/Close';
import NoteAltIcon from '@mui/icons-material/NoteAlt';

export default function EventModal({show, eventId, onClose}) {
    const [eventData, setEventData] = useState([]);

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
                .catch(error => {
                    console.error("Error fetching data: ", error);
                })
        }
    }, [eventId, show])

    if (!show) {
        return null;
    }

    return (
        <div className="event-calendar-modal" onClick={() => {
            onClose();
            setEventData([])
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
                <div className="event-modal-header">
                    <div className="event-modal-title">
                        {eventData.name}
                    </div>
                </div>
                <div className="event-modal-body">
                    {eventData.eventInfo}
                </div>
                <div className="event-modal-footer">
                    <div className="event-details-button" role="button">
                        Details
                    </div>
                </div>
            </div>
        </div>
    );
}