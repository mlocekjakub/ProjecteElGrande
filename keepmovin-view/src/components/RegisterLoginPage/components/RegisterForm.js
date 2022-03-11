import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {ValidateRegister} from './ValidateInputs';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changeRegisterData} from "../../../features/Register";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function RegisterForm() {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const confirmPasswordRef = useRef(null)
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [details, setDetails] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })
    
    
    useEffect(() => {
        if (redirectToLogin === true) {
            navigate("/")
        }
    }, [redirectToLogin])
    
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
    
    useEffect( () => {
        if(details.confirmPassword === "") {
            confirmPasswordRef.current.classList.remove("input-active")
        }
        else {
            confirmPasswordRef.current.classList.add("input-active")
        }

    }, [details.confirmPassword])
    
    const submitHandler = () => {
        if (ValidateRegister(details.email, details.password, details.confirmPassword)) {
            FetchRegisterData(details.email, details.password);
            dispatch(changeRegisterData(details))
        }
    }

    async function FetchRegisterData(email, password) {
        let data_package_form = {
            "Email": email,
            "Password": password
        }
        await fetch("/user/register", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data_package_form)

        }).then(response => response.status)
        setRedirectToLogin(true);
    }
    
    return (
        
        <form className="register-login__register" onSubmit={submitHandler}>
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
            <div className="password-container">
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
            <div className="confirm-password-container">
                <div className="register-icon-container" ref={confirmPasswordRef}>
                    <LockOpenIcon />
                </div>
                <input type="password"
                       name="confirmPassword"
                       id="confirmPassword"
                       autoComplete="off"
                       placeholder="Confirm Password"
                       onChange={e => setDetails({...details, confirmPassword: e.target.value})} />
            </div>
            <div className="submit-container">
                <input type="submit" value="register"/>
            </div>
        </form>

    );

}


