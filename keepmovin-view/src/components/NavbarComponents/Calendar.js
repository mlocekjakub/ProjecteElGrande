import React from 'react';
import DateRangeIcon from '@mui/icons-material/DateRange';
import {Link} from "react-router-dom";

export default function Calendar(props) {
    return (
        <Link className="nav-item" to="calendar">
            <div className="nav-item__icon">
                <DateRangeIcon />
            </div>
        </Link>
    );
}