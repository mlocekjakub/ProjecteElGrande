import * as React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

export default function RegistrationHyperLink() {

    return (
        <Button>
   
        <NavLink className="RegistrationHyperLink"

            to="/register"

        >
           Registration
            </NavLink>
         </Button>
       

    )
}