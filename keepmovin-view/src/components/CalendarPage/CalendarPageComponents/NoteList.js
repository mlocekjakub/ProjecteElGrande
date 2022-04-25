import React, {useEffect, useState} from 'react';
import LoadingSpinner from "./LoadingSpinner";
import NoteCard from "./NoteCard";

export default function NoteList({eventId}) {
    const [notesData, setNotesData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    
    const requestOptions = {
        headers: {
            'Session': `${localStorage.getItem("session")}`,
            'Event': `${eventId}`,
        }
    }

    useEffect(() => {
        if (eventId != null) {
            fetch(`api/UserNote/event-notes`, requestOptions)
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
    }, [eventId]);

    if (!isFetching) {
        return notesData.map((note) =>
            (<NoteCard key={note.noteId} 
                       noteId={note.noteId}
                       time={note.time}
                       title={note.title}
                       message={note.message}/>))
    } else {
        return (
            <div>
                <LoadingSpinner/>
            </div>
        )
    }
}