import * as React from 'react';
import "./Navbar.css";
import Notifications from "./navbarComponents/Notifications";
import Profile from "./navbarComponents/Profile";
import Home from "./navbarComponents/Home";
import Searchbar from "./navbarComponents/Searchbar";
import Logo from "./navbarComponents/Logo";
import Calendar from "./navbarComponents/Calendar";


export default function Navbar() {
    return (
        <header>
            <div className="logo-search">
                <Logo />
                <Searchbar />
            </div>
            <nav>
                <div className="nav__links">
                    <Home />
                    <Calendar />
                    <Notifications />
                    <Profile />
                </div>
            </nav>
        </header>
    );
}

{/*<li><Link className="Link" to="/login">Login</Link></li>*/}

