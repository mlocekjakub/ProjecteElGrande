import React from 'react';
import parse from 'html-react-parser'

export default function NoteModal({noteData}) {
    if (noteData !== "") {
        return (
            <div>
                {parse(noteData)}
            </div>
        )
    } else {
        return null;
    }
}