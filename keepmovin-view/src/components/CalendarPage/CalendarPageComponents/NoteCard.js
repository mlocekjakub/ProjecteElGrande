import React from 'react';
import parse from 'html-react-parser'
import "./NoteCardStyles.css"

export default function NoteCard({noteId, time, title, message}) {
    return (
        <div className="note-card">
            <div className="note-card-header">
                <div className="note-card-title">{title}</div>
                <div className="note-card-date">{time.slice(0, 10)}</div>
            </div>
            <div className="note-card-body">
                {parse(message)}
            </div>
        </div>
    );
}