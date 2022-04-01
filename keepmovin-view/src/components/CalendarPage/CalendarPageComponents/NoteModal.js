import React, {useEffect, useState} from 'react';
import './CalendarModalStyles.css';
import CloseIcon from '@mui/icons-material/Close';
import TextField from "@mui/material/TextField";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function NoteModal({openNote, eventId, onClose}) {
    if (!openNote) {
        return null;
    }

    if (openNote) {
        return (
            <div className="event-calendar-modal" onClick={e => e.stopPropagation()}>
                <div className="event-modal-content" onClick={e => e.stopPropagation()}>
                    <div className="event-modal-buttons" style={{justifyContent: "flex-end"}}>
                        <div className="close-button" role="button" onClick={onClose}>
                            <CloseIcon/>
                        </div>
                    </div>
                    <div className="event-modal-event-info">
                        <div className="note-modal-header" 
                             style={{
                                 marginLeft: "0.5rem",
                                 marginRight: "0.5rem"
                        }}>
                            <TextField
                                id="note-title"
                                label="Title" fullWidth
                                name="Title"
                                style={{backgroundColor: "white"}}
                            />
                        </div>
                        <div className="note-modal-body" style={{padding: "0.5rem"}}>
                            {/*<TextField*/}
                            {/*    id="note-message"*/}
                            {/*    label="Message"*/}
                            {/*    name="Message"*/}
                            {/*/>*/}
                            <CKEditor
                                editor={ClassicEditor}
                                data=""
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    console.log({event, editor, data});
                                }}
                            />
                        </div>
                        <div className="event-modal-footer">
                            <div role="button">
                                Save note!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}