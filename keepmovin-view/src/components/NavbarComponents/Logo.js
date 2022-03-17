import React from 'react';
import {Link} from "react-router-dom";

function Logo(props) {
    return (
        <Link className="nav-item" to="/home">
            <span className="nav-item__icon">Keep Movin'</span>
        </Link>
    );
}

export default Logo;