import React, {useRef} from 'react';
import profileImage from "../../Images/pexels-photo-771742.jpeg";
import defaultProfileImage from "../../Images/DefaultProfileImage.jpg"
import {Link} from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import {useDetectClickOutside} from "react-detect-click-outside";
import {LogOut} from "../API/Api";
import {changeIsLogged} from "../../features/IsLogged";
import {useDispatch} from "react-redux";

function Profile(props) {

    const refProfileMenu = useRef(null);
    
    const dispatch = useDispatch();

    const refClickOutsideProf = useDetectClickOutside(
        { onTriggered: closeProfileMenu });
    
    function closeProfileMenu() {
        refProfileMenu.current.classList.remove("expanded__active")
    }
    
    function toggleProfileMenu() {
        refProfileMenu.current.classList.toggle("expanded__active")
    }

    let logout = () => {
        fetch('/user/logOut', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify("")})
            .then(localStorage.removeItem("session"));
        dispatch(changeIsLogged(false))
    }
    
    return (
        <div className="nav-item" onClick={toggleProfileMenu} ref={refClickOutsideProf}>
            <img src={defaultProfileImage} alt="" />
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
                    <Link className="go__log-out profile-link" to="#" onClick={logout}>
                        Log out
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Profile;