import * as React from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm"
import {useEffect, useRef, useState} from "react";
import ForgottenPassword from "./components/ForgottenPassword";
import "../../index.css"
import "./RegisterLoginPage.css";
import {useDispatch, useSelector} from "react-redux";
import {changeLoginActiveButton} from "../../features/LoginActiveButton";
import {useDetectClickOutside} from "react-detect-click-outside";


export default function RegisterLoginPage(props) {
    const dispatch = useDispatch();
    const modalClickOutside = useDetectClickOutside(
        { onTriggered: closeModalEmail });
    const modalErrorRegisterRef = useRef(null);
    const modalSuccessRegisterRef = useRef(null);
    const modalErrorLoginRef = useRef(null);
    const modalSuccessLoginRef = useRef(null);
    const loginActiveButton = useSelector((state) => state.loginActiveButton.value)
    
    const changeContent = (state) => {
        dispatch(changeLoginActiveButton(state))
    }
    
    function closeModalEmail() {
        modalErrorRegisterRef.current.classList.remove("open-modal__register-validation")
        modalSuccessRegisterRef.current.classList.remove("open-modal__register-validation")
        modalErrorLoginRef.current.classList.remove("open-modal__register-validation")
        modalSuccessLoginRef.current.classList.remove("open-modal__register-validation")
    }
    
    return (
        <div className="register-login__page">
            <div className="register-modal__container" ref={modalClickOutside}>
                <div className="register-validation__error" ref={modalErrorRegisterRef}>
                    Account with this email already exists
                </div>
                <div className="register-validation__success" ref={modalSuccessRegisterRef}>
                    Registration success
                </div>
                <div className="login-validation__error" ref={modalErrorLoginRef}>
                    Username or password is incorrect
                </div>
                <div className="login-validation__success" ref={modalSuccessLoginRef}>
                    Sucessfully logged in
                </div>
            </div>
            <div className="register-login__container">
                <div className="register-login__bg-container">
                    {loginActiveButton === "register" 
                        ?
                        <div onClick={() => changeContent('login')} className="go-to__login">
                            Login
                        </div>
                        :
                        <div onClick={() => changeContent('register')} className="go-to__register">
                            Register
                        </div>
                        
                    }
                </div>
                <div className="register-login__forms">
                    <div className="login-register__info-container">
                        {loginActiveButton === "register"
                        ?
                        <div className="header-info">
                            <div className="register__header">Welcome Friend!</div>
                            <div className="register__paragraph">Enter your personal details and start journey with us</div>
                        </div>
                            :
                            <div className="header-info">
                                <div className="register__header">Welcome Back!</div>
                                <div className="register__paragraph">To keep connected with us please login with your personal info</div>
                            </div>
                        }
                    </div>
                    {loginActiveButton === "register" 
                        ?
                        <div>
                            <RegisterForm 
                                emailErrorModal={modalErrorRegisterRef}
                                emailSuccessModal={modalSuccessRegisterRef}
                            />
                        </div>
                        :
                        <div>
                            <LoginForm
                                emailErrorModal={modalErrorLoginRef}
                                emailSuccessModal={modalSuccessLoginRef}/>
                        </div>}
                </div>
            </div>
        </div>
    )
}

