import React, {useState} from 'react';
import './CalendarModalStyles.css';
import CloseIcon from '@mui/icons-material/Close';
import NoteList from "./NoteList";
import NoteModalForm from "./NoteModalForm";

export default function NoteModal({openNote, onClose, eventId}) {
    const [openNoteForm, setOpenNoteForm] = useState(false);
    const [fetchNoteData, setFetchNoteData] = useState(false); //dummy toggle state to rerender list of notes 

    const handleOpenNoteForm = () => {
        setFetchNoteData(!fetchNoteData);
        setOpenNoteForm(true);
    }

    const handleCloseNoteForm = () => {
        setFetchNoteData(!fetchNoteData);
        setOpenNoteForm(false);
    }
    
    const handleRemoveOrEditNote = () => {
        setFetchNoteData(!fetchNoteData);
    }

    if (openNote) {
        return (
            <div className="event-calendar-modal" onClick={openNoteForm ? e => e.stopPropagation() : onClose}>
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
                        <div className="note-modal-header">
                            {openNoteForm === false ?
                                <div className="create-note-button" role="button" onClick={handleOpenNoteForm}>
                                    Create note
                                </div> : <NoteModalForm openForm={openNoteForm}
                                                        eventId={eventId}
                                                        closeForm={handleCloseNoteForm}/>}
                        </div>
                        <div className="note-modal-body">
                            <NoteList eventId={eventId} reload={fetchNoteData} handleReload={handleRemoveOrEditNote} />
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
}