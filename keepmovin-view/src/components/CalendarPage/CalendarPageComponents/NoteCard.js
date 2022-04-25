import React from 'react';
import parse from 'html-react-parser'

export default function NoteCard({noteId, time, title, message}) {
    return (
        <div>
            <div>{noteId}</div>
            <div>{time}</div>
            <div>{title}</div>
            <div>{parse(message)}</div>
        </div>
    );
}