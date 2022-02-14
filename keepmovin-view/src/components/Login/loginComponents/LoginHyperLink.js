import * as React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { useState } from 'react';

export default function LoginHyperLink(props) {
    return (
        <Button style={{ top: '20ch' }} variant={props.variant}>
            <NavLink id="login" 
                style={{ textDecoration: 'none', color : props.color}}
            className="LoginHyperLink"
            to="/login"

        >
                Login
        </NavLink>
        </Button>

    )
}