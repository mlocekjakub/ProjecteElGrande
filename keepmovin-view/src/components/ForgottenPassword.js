import * as React from "react";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

export default function ForgottenPassword() {

    return (
        <div>
            <Fab variant="extended" size="small" color="primary" aria-label="add">
                <NavigationIcon sx={{ mr: 7 }} />
                Extended
            </Fab>
        </div>


    )
}
