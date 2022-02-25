import React from 'react';
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import {Link} from "react-router-dom";

function Calendar(props) {
    return (
        <Link className="nav-item" to="#">
            <div className="nav-item__icon">
                <CalendarTodayIcon />
            </div>
        </Link>
    );
}

export default Calendar;