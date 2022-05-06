import React from 'react';
import {Link} from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MobileCalendar(props) {
    return (
        <Link className="mobile-nav-item" to="calendar">
            Calendar
        </Link>
    );
}
