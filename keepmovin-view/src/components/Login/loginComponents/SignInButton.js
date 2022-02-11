import * as React from "react";
import { Button } from "@mui/material";


export default function SignInButton(props) {
    
    return (
        <Button  variant="contained"  disableElevation sx={{
            top: '30ch', width: '80ch'
        }}>
            {props.title}
        </Button>

    )
}
