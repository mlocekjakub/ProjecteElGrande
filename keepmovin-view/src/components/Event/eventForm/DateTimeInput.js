import TextField from "@mui/material/TextField";
import * as React from "react";

export default function DateTimeInput(props) {
    return (
        <TextField
            id={props.id}
            label={props.label}
            type="datetime-local"
            name={props.name}
            defaultValue={new Date()}
            InputLabelProps={{
                shrink: true,
            }}
        />)
}