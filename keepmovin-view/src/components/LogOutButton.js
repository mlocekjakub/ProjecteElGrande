import { LogOut } from "./API/Api";
import { Button } from "@mui/material";
import * as React from "react";

export default function LogOutButton() {
    let execute = () => {
        LogOut('/user/logOut');
    }
    return (
        <Button id="save-button" variant="contained" onClick={execute} disableElevation sx={{
            top: '30ch', width: '80ch', position: 'none'
        }}>
            {props.text}
        </Button>)
}
