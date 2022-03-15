import * as React from 'react';
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ValidateLogin} from "./ValidateInputs";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ForgottenPassword from "./ForgottenPassword";


export default function LoginForm() {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const [redirectToMainPage, setRedirectToMainPage] = useState(false);
    const [details, setDetails] = useState({
        email: "",
        password: "",
    })

    useEffect(() => {
        if (redirectToMainPage === true) {
            navigate("/list-of-events")
        }
    }, [redirectToMainPage])
    

    function HandleSubmit() {
        if (ValidateLogin(details.email, details.password)) {
            FetchLoginData(details.email, details.password);
        }
    }

    async function FetchLoginData(email, password) {
        let data_package_form = {
            "Email": email,
            "Password": password
        }
        await fetch("/user/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data_package_form)

        }).then(response => response.status)
        setRedirectToMainPage(true);
    }
    
    return (
        <form className="register-login__login">
            <div className="email-container__login">
                <div className={`register-icon-container ${details.email === "" ? "" : 'input-active' }`}>
                    <MailOutlineIcon />
                </div>
                <input type="email"
                       name="email"
                       id="name"
                       autoComplete="off"
                       placeholder="Email"
                       onChange={e => setDetails({...details, email: e.target.value})} />
            </div>
            <div className="password-container__login">
                <div className="password-input-container__login">
                    <div className={`register-icon-container ${details.password === "" ? "" : 'input-active' }`}>
                        <LockOpenIcon />
                    </div>
                    <input type="password"
                           name="password"
                           id="password"
                           autoComplete="off"
                           placeholder="Password"
                           onChange={e => setDetails({...details, password: e.target.value})}/>
                </div>
                <div className="forgot-password">
                    <ForgottenPassword />
                </div>
            </div>
            <div className="submit-container">
                <input type="submit" onClick={HandleSubmit} value="login"/>
            </div>
        </form>
    );

}
