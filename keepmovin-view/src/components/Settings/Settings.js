import * as React from "react";
import { useEffect, useState } from "react";
import "./settingsComponents/Settings.css";
import EditProfile from "./settingsComponents/EditProfile";
import PrivacySettings from "./settingsComponents/PrivacySettings";
import Help from "./settingsComponents/Help";
import ChangePassword from "./settingsComponents/ChangePassword";
import {useSelector} from "react-redux";



export default function Settings() {
    const [activeButton, setActiveButton] = useState('editProfile')
    
    const theme = useSelector((state) => state.theme.value)

    return (
        <div className={`settings__container ${theme === 'light' ? 'settings__container__light' : 'settings__container__dark'}`}>
            <div className={`settings__buttons ${theme === 'dark' ? 'settings__buttons__dark' : 'settings__buttons__light'}`}> 
                <div className={activeButton === 'editProfile' 
                    ? `settings__active-button` 
                    : `${theme === 'light' ? 'settings__inactive-button' : 'settings__inactive-button__dark edit-profile-button__dark'}`} 
                     onClick={() => setActiveButton("editProfile")}>Edit Profile</div>
                <div className={activeButton === 'privacy'
                    ? `settings__active-button`
                    : `${theme === 'light' ? 'settings__inactive-button' : 'settings__inactive-button__dark'}`}
                     onClick={() => setActiveButton("privacy")}>Privacy</div>
                <div className={activeButton === 'help'
                    ? `settings__active-button`
                    : `${theme === 'light' ? 'settings__inactive-button' : 'settings__inactive-button__dark'}`}
                     onClick={() => setActiveButton("help")}>Help</div>
                <div className={activeButton === 'changePassword'
                    ? `settings__active-button`
                    : `${theme === 'light' ? 'settings__inactive-button' : 'settings__inactive-button__dark'}`}
                     onClick={() => setActiveButton("changePassword")}>Change password</div>
            </div>
            <div className={`settings__content ${theme === 'dark' ? 'settings__content__dark' : ''}`}>
                {activeButton === "editProfile" 
                && <EditProfile />}
                {activeButton === "privacy"
                && <PrivacySettings />}
                {activeButton === "help"
                && <Help />}
                {activeButton === "changePassword"
                && <ChangePassword />}
            </div>
        </div>

    )
}

