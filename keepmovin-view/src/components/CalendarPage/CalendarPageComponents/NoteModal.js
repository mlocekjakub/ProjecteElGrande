import React, {useState} from 'react';
import './CalendarModalStyles.css';
import CloseIcon from '@mui/icons-material/Close';
import NoteList from "./NoteList";
import NoteModalForm from "./NoteModalForm";

export default function NoteModal({openNote, onClose, eventId}) {
    const [openNoteForm, setOpenNoteForm] = useState(false);

    const handleOpenNoteForm = () => {
        setOpenNoteForm(true);
    }

    if (openNote) {
        return (
            <div className="event-calendar-modal" onClick={onClose}>
                <div className="event-modal-content" onClick={e => e.stopPropagation()}>
                    <div className="event-modal-buttons" style={{justifyContent: "flex-end"}}>
                        <div className="close-button" role="button" onClick={() => {
                            onClose();
                            setOpenNoteForm(false);
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
                            {openNoteForm === false ?
                                <div className="create-note-button" role="button" onClick={handleOpenNoteForm}>
                                    Create note
                                </div> : <NoteModalForm openForm={openNoteForm} eventId={eventId} onClose={onClose}/>}
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