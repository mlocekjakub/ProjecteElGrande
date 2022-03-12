import * as React from 'react';
import "./Navbar.css";
import "../index.css"
import Notifications from "./NavbarComponents/Notifications";
import Profile from "./NavbarComponents/Profile";
import Home from "./NavbarComponents/Home";
import Searchbar from "./NavbarComponents/Searchbar";
import Logo from "./NavbarComponents/Logo";
import Calendar from "./NavbarComponents/Calendar";


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

