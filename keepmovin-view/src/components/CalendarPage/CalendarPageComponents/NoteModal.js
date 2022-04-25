import React from 'react';
import './CalendarModalStyles.css';
import CloseIcon from '@mui/icons-material/Close';
import NoteList from "./NoteList";

export default function NoteModal({openNote, onClose, eventId}) {
    if (openNote) {
        return (
            <div className="event-calendar-modal" onClick={e => e.stopPropagation()}>
                <div className="event-modal-content">
                    <div className="event-modal-buttons" style={{justifyContent: "flex-end"}}>
                        <div className="close-button" role="button" onClick={() => {
                            onClose();
                        }}>
                            <CloseIcon/>
                        </div>
                    </div>
                    <div className="event-modal-event-info">
                        <div className="note-modal-header"
                             style={{
                                 marginLeft: "0.5rem",
                                 marginRight: "0.5rem"
                             }}>
                            <div className="create-note-button" role="button">
                                Create note
                            </div>
                        </div>
                        <div className="note-modal-body" style={{padding: "0.5rem"}}>
                            <NoteList eventId={eventId}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
}