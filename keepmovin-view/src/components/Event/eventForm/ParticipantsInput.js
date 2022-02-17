import TextField from "@mui/material/TextField";
import * as React from "react";

export default function ParticipantsInput() {
    return (<TextField
        id="max-participants"
        label="Max Participants"
        name="MaxParticipants"
        placeholder="Required"
    />)
}
