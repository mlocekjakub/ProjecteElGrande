import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {changeIsLogged} from "../../../features/IsLogged";
import {useDispatch, useSelector} from "react-redux";
import {changeTheme} from "../../../features/Theme";
import "../ThemeToggle.css";
import DarkModeToggle from "react-dark-mode-toggle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function MobileProfile() {

    const dispatch = useDispatch();

    const theme = useSelector((state) => state.theme.value)
    
    const [mobileProfileMenuExpanded, setMobileProfileMenuExpanded] = useState(false);
    
    let logout = () => {
        fetch('/user/logOut', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify("")})
            .then(() => {
                localStorage.removeItem("session")
                dispatch(changeIsLogged(false))
            });
    }

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        if (newTheme === 'dark') {
            localStorage.setItem('theme', 'dark')
        }
        else {
            localStorage.removeItem('theme')
        }
        dispatch(changeTheme(newTheme))
    }

    return (
        <div className="mobile-profile__container">
            <div className="mobile-nav-item" 
                 onClick={() => setMobileProfileMenuExpanded(!mobileProfileMenuExpanded)}>
                Profile
            </div>
            <div className={`
            mobile-expanded__profile-menu
            ${mobileProfileMenuExpanded 
                ? 'mobile-expanded__profile-menu-active' 
                : 'mobile-expanded__profile-menu-inactive'}`}>
                <Link to="/profile">
                    Profile
                </Link>
                <Link to="/settings">
                    Settings
                </Link>
                <div onClick={switchTheme}>
                    <DarkModeToggle
                        checked={theme === 'dark'}
                        size={37}
                    />
                    Dark theme
                </div>
                <Link to="/list-of-events" onClick={logout}>
                    Log out
                </Link>
            </div>
        </div>
    );
}

export default MobileProfile;
