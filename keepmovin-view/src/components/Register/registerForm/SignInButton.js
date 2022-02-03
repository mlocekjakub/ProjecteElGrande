import * as React from "react";
import './RegisterCSS.css';
import { Button } from "@mui/material";


export default function SignInButton() {
    const SendForm = () => {           
        let x = document.getElementById("outlined-required-mail").value;
        alert(x);

        
    }
    return (
        <Button onClick={SendForm} variant="contained" disableElevation sx={{
        top:'6ch'}}>
            Sign Up
        </Button>

    )
}

