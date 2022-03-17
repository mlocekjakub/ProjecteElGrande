import TextField from "@mui/material/TextField";
import * as React from "react";

export default function CountryInput() {
    return (<TextField
        id="country"
        label="Country"
        name="country"
        placeholder="Required"
    />)
}
