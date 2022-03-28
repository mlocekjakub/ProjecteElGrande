import * as React from "react";
import { useEffect, useState } from "react";
import "./Settings.css";
import {useSelector} from "react-redux";



export default function ChangePassword(props) {

    const theme = useSelector((state) => state.theme.value)
    
    const [passwordData, setPasswordData] = useState({
        userid: localStorage.getItem('session'),
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
        fetch('/user/changePassword', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(passwordData)

        }).then(response => {
            if (response.ok) {
                props.successModal.current.classList.add('open-modal__settings-validation')
            }
            else {
                props.errorModal.current.classList.add('open-modal__settings-validation')
            }
            window.scrollTo(0, 0);
        })
        
    }

    return (
        <form className="settings__change-password-container" autoComplete="off">
            <div className={`settings__old-password ${theme === 'light' ? 'settings-password__light' : 'settings-password__dark'}`}>
                <label htmlFor="old-password">Old Password</label>
                <input type="password"
                       name="old-password"
                       id="old-password"
                       autoComplete="off"
                       required
                       onChange={e => setPasswordData({...passwordData, oldPassword: e.target.value})}
                />
            </div>
            <div className={`settings__new-password ${theme === 'light' ? 'settings-password__light' : 'settings-password__dark'}`}>
                <label htmlFor="new-password">New Password</label>
                <input type="password"
                       name="new-password"
                       id="new-password"
                       autoComplete="off"
                       required
                       onChange={e => setPasswordData({...passwordData, newPassword: e.target.value})}
                />
            </div>
            <div className={`settings__confirm-new-password ${theme === 'light' ? 'settings-password__light' : 'settings-password__dark'}`}>
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

    