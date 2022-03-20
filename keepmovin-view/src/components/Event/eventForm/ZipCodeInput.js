import TextField from "@mui/material/TextField";
import * as React from "react";

export default function ZipCodeInput() {
    return (<TextField
        id="zipCode"
        label="Zip Code"
        name="ZipCode"
        placeholder="Required"
    />)
}
