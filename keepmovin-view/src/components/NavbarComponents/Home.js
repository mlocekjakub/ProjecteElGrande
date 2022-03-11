import React from 'react';
import HomeIcon from "@mui/icons-material/Home";
import {Link} from "react-router-dom";

function Home(props) {
    return (
        <Link className="nav-item" to="/list-of-events">
            <div className="nav-item__icon">
                <HomeIcon />
                {/*<EmojiEventsIcon />*/}
            </div>
        </Link>
    );
}

export default Home;