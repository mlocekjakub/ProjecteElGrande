import React, {useState} from 'react';
import './CalendarModalStyles.css';
import TextField from "@mui/material/TextField";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './NoteModalFormStyles.css';

export default function NoteModalForm({openForm, eventId, closeForm}) {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteData, setNoteData] = useState("");

    const handleTitleChange = (e) => {
        setNoteTitle(e.target.value);
    }

    const handleMessageChange = (message) => {
        setNoteData(message);
    }

    let noteModel =
        {
            "time": new Date(),
            "title": noteTitle,
            "message": noteData,
            "eventId": eventId,
            "userid": localStorage.getItem("session"),
        }

    const handleNoteSave = () => {
        if (noteTitle !== "" && noteData !== "") {
            fetch("/api/UserNote/add-note", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(noteModel)
            })
                .then(response => {
                    if (response.ok) {
                        //TODO add close modal after successful added note
                    } else {
                        alert("ERROR!");
                    }
                })
                .then(() => {
                    closeForm();
                })
        }
    }

    if (!openForm) {
        return null;
    }

    if (openForm) {
        return (
            <div className="note-form">
                <div className="note-form-buttons-box">
                    <div className="note-form-button note-dismiss" role="button" onClick={closeForm}>
                        Dismiss
                    </div>
                    <div className="note-form-button note-save" role="button" onClick={handleNoteSave}>
                        Save
                    </div>
                </div>
                <div className="note-form-title">
                    <TextField
                        id="note-title"
                        label="Title" fullWidth
                        name="Title"
                        style={{backgroundColor: "white"}}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="note-form-message">
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
            </div>
        );
    }
}