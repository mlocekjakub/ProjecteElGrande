import React from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import {Link} from "react-router-dom";

function Calendar(props) {
    return (
        <Link className="nav-item" to="list-of-events">
            <div className="nav-item__icon">
                <EmojiEventsIcon />
            </div>
        </Link>
    );
}

export default Calendar;