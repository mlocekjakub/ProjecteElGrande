import React from 'react';
import {Link} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export default function MobileHome() {
    return (
        <Link className='mobile-nav-item' to="/list-of-events">
            Home
        </Link>
    );
}
