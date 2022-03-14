import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {
    ComparePasswords,
    IsEmailTooLong, IsEmailTooShort, IsPasswordTooLong, IsPasswordTooShort, ValidateEmail,
    ValidateLength,
    ValidatePassword,
    ValidateRegister
} from './ValidateInputs';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function RegisterForm() {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const confirmPasswordRef = useRef(null)
    const [isEmailValidated, setIsEmailValidated] = useState(false)
    const [isPasswordValidated, setIsPasswordValidated] = useState(false)
    const [isConfirmPasswordValidated, setIsConfirmPasswordValidated] = useState(false)
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [isRegisterValid, setIsRegisterValid] = useState(false)
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
    
    useEffect(() => {
        if (ValidateRegister(details.email, details.password, details.confirmPassword)) {
            setIsRegisterValid(true)
        }
        else {
            setIsRegisterValid(false)
        }
        
    }, [details])
    
    const submitHandler = () => {
        FetchRegisterData(details.email, details.password)
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
            <div className="email-container__register">
                <div className={`input-container__register ${ValidateEmail(details.email) 
                && 'input-email-valid'}`}>
                    <div className=
                             {`register-icon-container 
                             ${details.email === "" 
                                 ? '' 
                                 : ValidateEmail(details.email) 
                                     ? 'input-valid' 
                                     : 'input-active'}`}>
                        <MailOutlineIcon />
                    </div>
                    <input type="email" 
                           name="email" 
                           id="name" 
                           autoComplete="off"
                           placeholder="Email"
                           required
                           onChange={e => setDetails({...details, email: e.target.value})}
                    />
                </div>
                <div className="validation__info">
                    {
                    IsEmailTooLong(details.email)
                        ? <span>Email is too long</span>
                        : IsEmailTooShort(details.email) 
                            ? <span>Email is too short</span> 
                            : ""
                }
                    </div>
            </div>
            <div className="password-container__register">
                <div className={`input-container__register 
                ${ValidatePassword(details.password) 
                && 'input-password-valid'}`}>
                    <div className=
                             {`register-icon-container 
                             ${details.password === "" 
                                 ? '' 
                                 : ValidatePassword(details.password) 
                                     ? 'input-valid' 
                                     : 'input-active'}`}>
                        <LockOpenIcon />
                    </div>
                    <input type="password"
                           name="password"
                           id="password"
                           autoComplete="off"
                           placeholder="Password"
                           required
                           onChange={e => setDetails({...details, password: e.target.value})}
                    />
                    </div>
                <div className="validation__info">
                    {
                        IsPasswordTooLong(details.password)
                            ? <span>Password is too long</span>
                            : IsPasswordTooShort(details.password)
                                ? <span>Password is too short</span>
                                : ""
                    }
                </div>
            </div>
            <div className="confirm-password-container__register">
                <div className={`input-container__register 
                ${ComparePasswords(details.password, details.confirmPassword) 
                && details.password.length > 0
                && details.confirmPassword.length > 0
                && 'input-confirm-valid'}`}>
                    <div className=
                             {`register-icon-container 
                             ${details.confirmPassword === "" 
                                 ? '' 
                                 : ComparePasswords(details.password, details.confirmPassword) 
                                     ? 'input-valid' 
                                     : 'input-active'}`}>
                        <LockOpenIcon />
                    </div>
                    <input type="password"
                           name="confirmPassword"
                           id="confirmPassword"
                           autoComplete="off"
                           placeholder="Confirm Password"
                           required
                           onChange={e => setDetails({...details, confirmPassword: e.target.value})}
                    />
                </div>
                <div className="validation__info">{
                    ComparePasswords(details.password, details.confirmPassword)
                        ? ""
                        : <span>Passwords does not match</span>
                           
                }</div>
            </div>
            <div className="submit-container">
                <input type="submit" disabled={!isRegisterValid} value="register"/>
            </div>
        </form>

    );

}


