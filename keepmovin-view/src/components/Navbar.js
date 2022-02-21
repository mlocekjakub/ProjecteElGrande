import * as React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
    return (
        <header>
            <div className="logo">Keep Movin'</div>
            <nav>
                <ul className="nav__links">
                    <li><Link className="Link" to="/home">Home</Link></li>
                    <li><Link className="Link" to="/list-of-events">Events</Link></li>
                    <li><Link className="Link" to="/profile">Profile</Link></li>
                    <li><Link className="Link" to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}

