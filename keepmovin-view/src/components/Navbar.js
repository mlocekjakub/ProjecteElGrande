import * as React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Keep Movin</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/home">
                        Home
                    </Link>
                </div>
                <div className="navbar-nav">
                    <Link to="/profile">
                        Profile
                    </Link>
                </div>
                <div className="navbar-nav">
                    <Link to="/list-of-events">
                        List Of Events
                    </Link>
                </div>
            </div>
        </nav>
    );
};