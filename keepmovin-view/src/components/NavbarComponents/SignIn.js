import React from 'react';
import defaultProfileImage from "../../Images/DefaultProfileImage.jpg";
import {Link} from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";

export default function SignIn({windowSize, theme}) {
    return (
        <div className="nav-item">
            <Link className={`sign-in__button 
            ${windowSize < 768 && theme === 'light' 
            && 'sign-in-mobile-display'}`} 
                  to="/login">Sign in</Link>
        </div>
    );
}