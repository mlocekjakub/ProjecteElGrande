import * as React from 'react';
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ValidateLogin} from "./ValidateInputs";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ForgottenPassword from "./ForgottenPassword";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {changeIsLogged} from "../../../features/IsLogged";




export default function LoginForm() {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const [redirectToMainPage, setRedirectToMainPage] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [details, setDetails] = useState({
        email: "",
        password: "",
    })

    useEffect(() => {
        if (redirectToMainPage === true) {
            navigate("/list-of-events")
        }
    }, [redirectToMainPage])
    

    const HandleSubmit = (e) => {
        e.preventDefault()
        if (ValidateLogin(details.email, details.password)) {
            FetchLoginData(details.email, details.password);
        }
    }
    

    async function FetchLoginData(email, password) {
        let data_package_form = {
            "Email": email,
            "Password": password
        }
        const response = await fetch("/user/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data_package_form)
        })
        if (response.ok) {
            let content = await response.json()
                .then(content => {
                    localStorage.setItem('session', content)
                    dispatch(changeIsLogged(true))
                })
            setRedirectToMainPage(true);
        }
    }
    
    return (
        <form className="register-login__login">
            <div className="email-container__login">
                <div className={`register-icon-container ${details.email === "" ? "" : 'input-active' }`}>
                    <MailOutlineIcon />
                </div>
                <label htmlFor="login-email"></label>
                <input type="email"
                       name="email"
                       id="login-email"
                       autoComplete="off"
                       placeholder="Email"
                       onChange={e => setDetails({...details, email: e.target.value})} />
            </div>
            <div className="password-container__login">
                <div className="password-input-container__login">
                    <div className={`register-icon-container ${details.password === "" ? "" : 'input-active' }`}>
                        <LockOpenIcon />
                    </div>
                    <label htmlFor="login-password"></label>
                    <input type={isPasswordVisible ? "text" : "password"}
                           name="password"
                           id="login-password"
                           autoComplete="off"
                           placeholder="Password"
                           onChange={e => setDetails({...details, password: e.target.value})}/>
                    
                </div>
                <div className="forgot-password">
                    {isPasswordVisible ?
                        <div className="password__visible" onClick={() => setIsPasswordVisible(false)}><VisibilityIcon /></div>
                        : <div className="password__visible" onClick={() => setIsPasswordVisible(true)}><VisibilityOffIcon /></div>}
                    <ForgottenPassword />
                </div>
            </div>
            <div className="submit-container">
                <label htmlFor="login-submit"></label>
                <input type="submit" name="submit" id="login-submit" onClick={(e) => HandleSubmit(e)} value="login"/>
            </div>
        </form>
    );

}
