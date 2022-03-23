import * as React from "react";
import { useEffect, useState } from "react";
import "./settingsComponents/Settings.css";
import EditProfile from "./settingsComponents/EditProfile";
import PrivacySettings from "./settingsComponents/PrivacySettings";
import Help from "./settingsComponents/Help";
import ChangePassword from "./settingsComponents/ChangePassword";



export default function Settings() {
    const [activeButton, setActiveButton] = useState('editProfile')

    return (
        <div className="settings__container">
            <div className="settings__buttons"> 
                <div className={activeButton === 'editProfile' 
                    ? `settings__active-button` 
                    : `settings__inactive-button`} 
                     onClick={() => setActiveButton("editProfile")}>Edit Profile</div>
                <div className={activeButton === 'privacy'
                    ? `settings__active-button`
                    : `settings__inactive-button`} 
                     onClick={() => setActiveButton("privacy")}>Privacy</div>
                <div className={activeButton === 'help'
                    ? `settings__active-button`
                    : `settings__inactive-button`} 
                     onClick={() => setActiveButton("help")}>Help</div>
                <div className={activeButton === 'changePassword'
                    ? `settings__active-button`
                    : `settings__inactive-button`} 
                     onClick={() => setActiveButton("changePassword")}>Change password</div>
            </div>
            <div className="settings__content">
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

