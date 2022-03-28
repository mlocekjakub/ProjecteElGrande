import * as React from "react";
import {useEffect, useRef, useState} from "react";
import "./settingsComponents/Settings.css";
import EditProfile from "./settingsComponents/EditProfile";
import PrivacySettings from "./settingsComponents/PrivacySettings";
import Help from "./settingsComponents/Help";
import ChangePassword from "./settingsComponents/ChangePassword";
import {useSelector} from "react-redux";
import {useDetectClickOutside} from "react-detect-click-outside";



export default function Settings() {
    const [activeButton, setActiveButton] = useState('editProfile')

    const modalClickOutside = useDetectClickOutside(
        { onTriggered: closeModal });
    
    const modalError = useRef(null);
    const modalSuccess = useRef(null);
    
    const theme = useSelector((state) => state.theme.value)
    
    function closeModal() {
        modalError.current.classList.remove("open-modal__settings-validation")
        modalSuccess.current.classList.remove("open-modal__settings-validation")
    }

    return (
        <div className="settings-page">
            <div className="settings-modal__container" ref={modalClickOutside}>
                <div className="settings-validation__error" ref={modalError}>
                    Something went wrong
                </div>
                <div className="settings-validation__success" ref={modalSuccess}>
                    Success
                </div>
            </div>
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
                && <EditProfile errorModal={modalError} successModal={modalSuccess} buttonState={activeButton}/>}
                {activeButton === "privacy"
                && <PrivacySettings errorModal={modalError} successModal={modalSuccess} buttonState={activeButton}/>}
                {activeButton === "help"
                && <Help/>}
                {activeButton === "changePassword"
                && <ChangePassword errorModal={modalError} successModal={modalSuccess} buttonState={activeButton}/>}
            </div>
        </div>
        </div>

    )
}

