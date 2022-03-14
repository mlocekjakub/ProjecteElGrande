import * as React from 'react';
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ValidateLogin} from "./ValidateInputs";
import {changeLoginData} from "../../../features/Login";
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

    useEffect( () => {
        if(details.email === "") {
            emailRef.current.classList.remove("input-active")
        }
        else {
            emailRef.current.classList.add("input-active")
        }

    }, [details.email])

    useEffect( () => {
        if(details.password === "") {
            passwordRef.current.classList.remove("input-active")
        }
        else {
            passwordRef.current.classList.add("input-active")
        }

    }, [details.password])
    

    const submitHandler = () => {
        if (ValidateLogin(details.email, details.password)) {
            FetchLoginData(details.email, details.password);
            dispatch(changeLoginData(details))
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
        <form className="register-login__login" onSubmit={submitHandler}>
            <div className="email-container">
                <div className="register-icon-container" ref={emailRef}>
                    <MailOutlineIcon />
                </div>
                <input type="email"
                       name="email"
                       id="name"
                       autoComplete="off"
                       placeholder="Email"
                       onChange={e => setDetails({...details, email: e.target.value})} />
            </div>
            <div className="password-login-container">
                <div className="password-input-container">
                    <div className="register-icon-container" ref={passwordRef}>
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
                <input type="submit" value="login"/>
            </div>
        </form>
    );

}
