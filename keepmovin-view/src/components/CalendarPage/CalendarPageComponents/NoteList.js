import React, {useEffect, useState} from 'react';
import LoadingSpinner from "./LoadingSpinner";
import NoteCard from "./NoteCard";

export default function NoteList({eventId, reload, handleReload, handleOpenNoteForm, handleCloseNoteForm}) {
    const [notesData, setNotesData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        if (eventId != null) {
            fetch(`api/UserNote/event-notes`, {
                headers: {
                    'Session': `${localStorage.getItem("session")}`,
                    'Event': `${eventId}`,
                }
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                })
                .then(data => {
                    setNotesData(data);
                })
                .then(() => {
                    setIsFetching(false);
                })
                .catch(error => {
                    console.error("Error fetching data: ", error);
                })
        }
    }, [eventId, reload]);

    if (!isFetching) {
        if (notesData.length === 0) {
            return (
                <div className="note-empty-list">
                    <div>There is no notes.</div>
                    <div>Create your first one!</div>
                </div>
            )
        } else {
            return notesData.map((note) =>
                (<NoteCard key={note.noteId}
                           eventId={eventId}
                           noteId={note.noteId}
                           time={note.time}
                           title={note.title}
                           message={note.message}
                           handleReload={handleReload}
                           handleOpenNoteForm={handleOpenNoteForm}
                           handleCloseNoteForm={handleCloseNoteForm}/>))
        }
    } else {
        return (
            <div>
                <LoadingSpinner/>
            </div>
        )
    }
}