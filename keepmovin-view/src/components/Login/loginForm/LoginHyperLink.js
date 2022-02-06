import * as React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

export default function LoginHyperLink() {

    return (
        <Button>
            <NavLink
                textDecoration ="auto"
                className="LoginHyperLink"

            to="/login"

        >
            login
        </NavLink>
        </Button>

    )
}