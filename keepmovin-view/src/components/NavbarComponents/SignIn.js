import React from 'react';
import defaultProfileImage from "../../Images/DefaultProfileImage.jpg";
import {Link} from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";

export default function SignIn() {
    return (
        <div className="nav-item">
            <Link className="sign-in__button" to="/login">Sign in</Link>
        </div>
    );
}