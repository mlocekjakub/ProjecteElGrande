import TextField from "@mui/material/TextField";
import * as React from "react";

export default function NameInput()
{
    return (<div className="grid-container-name">
        <TextField
            sx={{minWidth: 100}}
            id="name"
            label="Name"
            name="Name"
            placeholder="Required"
        />
    </div>)
}