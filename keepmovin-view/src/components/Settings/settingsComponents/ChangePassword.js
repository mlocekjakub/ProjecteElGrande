import * as React from "react";
import { useEffect, useState } from "react";
import "./Settings.css";
import {SendChangePasswordForm} from '../../API/Api'



export default function ChangePassword() {
    
    const [passwordData, setPasswordData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    })
    const [isPasswordDataValid, setIsPasswordDataValid] = useState(false)
    
    
    useEffect(() => {
        if (passwordData.oldPassword 
            && passwordData.newPassword 
            && passwordData.confirmPassword) {
            setIsPasswordDataValid(true);
        }
        else {
            setIsPasswordDataValid(false);
        }
    }, [passwordData])

    function HandleSubmit(e) {
        e.preventDefault()
        let collectUserInputs = {
            'Userid': localStorage.getItem('session'),
            'OldPassword': passwordData.oldPassword,
            'NewPassword': passwordData.newPassword,
            'ConfirmPassword': passwordData.confirmPassword
        }
        SendChangePasswordForm(collectUserInputs);
    }

    return (
        <form className="settings__change-password-container">
            <div className="settings__old-password">
                <label htmlFor="old-password">Old Password</label>
                <input type="password"
                       name="old-password"
                       id="old-password"
                       autoComplete="off"
                       required
                       onChange={e => setPasswordData({...passwordData, oldPassword: e.target.value})}
                />
            </div>
            <div className="settings__new-password">
                <label htmlFor="new-password">New Password</label>
                <input type="password"
                       name="new-password"
                       id="new-password"
                       autoComplete="off"
                       required
                       onChange={e => setPasswordData({...passwordData, newPassword: e.target.value})}
                />
            </div>
            <div className="settings__confirm-new-password">
                <label htmlFor="confirm-new-password">Confirm New Password</label>
                <input type="password"
                       name="confirm-new-password"
                       id="confirm-new-password"
                       autoComplete="off"
                       required
                       onChange={e => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                />
            </div>
            <input type="submit" 
                   name="submit" 
                   id="change-password-submit" 
                   onClick={(e) => HandleSubmit(e)} 
                   disabled={!isPasswordDataValid} 
                   value="Change password"/>
        </form>

    )
}

    