import React from 'react';
import parse from 'html-react-parser'
import "./NoteCardStyles.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function NoteCard({noteId, time, title, message}) {
    return (
        <div className="note-card"> 
            <div className="note-card-buttons">
                <div role="button">
                    <EditIcon fontSize="small"/>
                </div>
                <div role="button">
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