import React from 'react';
import DateRangeIcon from '@mui/icons-material/DateRange';
import {Link} from "react-router-dom";

export default function CalendarPageNav(props) {
    return (
        <Link className="nav-item" to="calendar">
            <div className="nav-item__icon">
                <DateRangeIcon />
            </div>
        </Link>
    );
}