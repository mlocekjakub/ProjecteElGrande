import React from 'react';
import parse from 'html-react-parser'
import "./NoteCardStyles.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function NoteCard({noteId, time, title, message, handleReload}) {
    const handleRemoveNote = () => {
        fetch(`api/UserNote/remove-note`, {
            headers: {
                'Session': `${localStorage.getItem("session")}`,
                'Note': `${noteId}`,
            }
        })
            .then(response => {
                if (response.ok) {
                    handleReload();
                }
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            })
    }

    return (
        <div className="note-card">
            <div className="note-card-buttons">
                <div role="button">
                    <EditIcon fontSize="small"/>
                </div>
                <div role="button" onClick={handleRemoveNote}>
                    <DeleteForeverIcon fontSize="small"/>
                </div>
            </div>
            <div className="note-card-content">
                <div className="note-card-header">
                    <div className="note-card-title">{title}</div>
                    <div className="note-card-date">{time.slice(0, 10)}</div>
                </div>
                <div className="note-card-body">
                    {parse(message)}
                </div>
            </div>
        </div>
    );
}