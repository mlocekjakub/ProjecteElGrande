import * as React from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm"
import { useEffect, useState } from "react";
import ForgottenPassword from "./components/ForgottenPassword";
import "../../index.css"
import "./RegisterLoginPage.css";


export default function RegisterLoginPage(props) {

    const [activeButton, setActiveButton] = useState(props.action)
    
    const changeContent = (state) => {
        setActiveButton(state)
    }

    useEffect(async () => {
        const response = await fetch("/user/validate", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        })
        const content = await response.json()
            .then(content => localStorage.setItem('session', content))

    })
    
    return (
        <div className="register-login__page">
            <div className="register-login__container">
                <div className="register-login__bg-container">
                    {activeButton === "register" 
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
                <div className="register-login__forms">
                    <div className="login-register__buttons">
                        <div onClick={() => changeContent("login")} className="go-to__login">
                            Login
                        </div>
                        <div onClick={() => changeContent("register")} className="go-to__register">
                            Register
                        </div>
                    </div>
                    {activeButton === "register" 
                        ?
                        <div>
                            <RegisterForm />
                        </div>
                        :
                        <div>
                            <LoginForm /> 
                        </div>}
                    {/*<ForgottenPassword />*/}
                </div>
            </div>
        </div>
    )
}

