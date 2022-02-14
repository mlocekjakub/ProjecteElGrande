import * as React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

export default function RegistrationHyperLink(props) {

    return (
        <Button style={{ top: '20ch'}} variant={props.variant}>
   
            <NavLink className="RegistrationHyperLink"
   
                style={{ textDecoration: 'none', color:props.color }}
            to="/register"

        >
           Registration
            </NavLink>
         </Button>
       

    )
}