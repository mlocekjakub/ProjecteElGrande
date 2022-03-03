import React, {useRef} from 'react';
import profileImage from "../../Images/pexels-photo-771742.jpeg";
import {Link} from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import {useDetectClickOutside} from "react-detect-click-outside";
import {LogOut} from "../API/Api";

function Profile(props) {

    const refProfileMenu = useRef(null);

    const refClickOutsideProf = useDetectClickOutside(
        { onTriggered: closeProfileMenu });
    
    function closeProfileMenu() {
        refProfileMenu.current.classList.remove("expanded__active")
    }
    
    function toggleProfileMenu() {
        refProfileMenu.current.classList.toggle("expanded__active")
    }

    let execute = () => {
        LogOut('/user/logOut');
    }
    
    return (
        <div className="nav-item" onClick={toggleProfileMenu} ref={refClickOutsideProf}>
            <img src={profileImage} alt="" />
            <div className="expanded__profile-menu" ref={refProfileMenu}>
                <div className="profile-page-expanded-container">
                    <Link className="go__profile profile-link" to="/profile">
                        <AccountBoxIcon />
                        <span>Profile</span>
                    </Link>
                    <Link className="go__settings profile-link" to="/Settings">
                        <SettingsIcon />
                        <span>Settings</span>
                    </Link>
                    <Link className="go__log-out profile-link" to="/" onClick={execute}>
                        Log out
                    </Link>
                </div>
                <div className="triangle__profile-menu"></div>
            </div>
        </div>
    );
}

export default Profile;