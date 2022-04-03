import React, {useEffect, useState} from 'react';
import './CalendarModalStyles.css';
import CloseIcon from '@mui/icons-material/Close';
import TextField from "@mui/material/TextField";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function NoteModal({openNote, eventId, onClose}) {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteData, setNoteData] = useState("");

    const handleTitleChange = (e) => {
        setNoteTitle(e.target.value);
    }

    const handleMessageChange = (message) => {
        setNoteData(message);
    }

    if (!openNote) {
        return null;
    }

    if (openNote) {
        return (
            <div className="event-calendar-modal" onClick={e => e.stopPropagation()}>
                <div className="event-modal-content">
                    <div className="event-modal-buttons" style={{justifyContent: "flex-end"}}>
                        <div className="close-button" role="button" onClick={() => {
                            onClose();
                            setNoteTitle("");
                            setNoteData("");
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
                            <TextField
                                id="note-title"
                                label="Title" fullWidth
                                name="Title"
                                style={{backgroundColor: "white"}}
                                onChange={handleTitleChange}
                            />
                        </div>
                        <div className="note-modal-body" style={{padding: "0.5rem"}}>
                            <CKEditor
                                editor={ClassicEditor}
                                config={{
                                    toolbar: ["heading", "|", "bold", "italic", "link", "bulletedList", "numberedList", "undo", "redo"],
                                    removePlugins: ["EasyImage", "ImageUpload", "MediaEmbed", "Table", "TableToolbar", "Indent", "BlockQuote"]
                                }}
                                data=""
                                onChange={(event, editor) => {
                                    handleMessageChange(editor.getData());
                                }}
                            />
                        </div>
                        <div className="event-modal-footer">
                            <div role="button" onClick={() => {
                                console.log({noteTitle, noteData})
                            }}>
                                Save note!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}