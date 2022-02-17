import TextField from "@mui/material/TextField";
import * as React from "react";

export default function DateTimeInput(props) {
    return (
        <TextField
            id={props.id}
            label={props.label}
            type="datetime-local"
            name={props.name}
            defaultValue="2017-05-24T10:30"
            InputLabelProps={{
                shrink: true,
            }}
        />)
}