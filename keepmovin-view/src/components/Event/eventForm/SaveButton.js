import {createEvent} from "../../API/Api";
import {Button} from "@mui/material";
import * as React from "react";

export default function SaveButton(props) {
    return (
        <Button id="save-button" variant="contained" onClick={createEvent} disableElevation sx={{
            top: '30ch', width: '80ch', position: 'none'
        }}>
            {props.text}
        </Button>)
}