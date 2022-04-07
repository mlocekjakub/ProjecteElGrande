import * as React from 'react';
import "./Navbar.css";
import "../index.css"
import Notifications from "./NavbarComponents/Notifications";
import Profile from "./NavbarComponents/Profile";
import Home from "./NavbarComponents/Home";
import Searchbar from "./NavbarComponents/Searchbar";
import Logo from "./NavbarComponents/Logo";
import Calendar from "./NavbarComponents/Calendar";
import {useEffect, useState} from "react";
import SignIn from "./NavbarComponents/SignIn";
import {useSelect} from "@mui/base";
import {useSelector} from "react-redux";


export default function Navbar() {
    
    const isUserLogged = useSelector((state) => state.isLogged.value)
    
    const theme = useSelector((state) => state.theme.value)
    
    return (
        <header data-theme={theme}>
            <div className="logo-search">
                <Logo />
                <Searchbar />
            </div>
            <nav>
                <div className="nav__links">
                    <Home />
                    {isUserLogged && <Calendar />}
                    {isUserLogged && <Notifications />}
                    {isUserLogged ? <Profile /> : <SignIn />}
                </div>
            </nav>
        </header>
    );
}

{/*<li><Link className="Link" to="/login">Login</Link></li>*/}

