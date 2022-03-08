import * as React from "react";
import { useEffect, useState } from "react";
import AcceptChangesButton from "./AcceptChangesButton";
import Switch from '@mui/material/Switch';




export default function PrivacySettings() {
    const [location, setLocation] = useState(true);
    const [follow, setFollow] = useState(false);
    const [stats, setStats] = useState(true);
    const [aboutMe, setAboutMe] = useState(false);
    const [upEvents, setUpEvents] = useState(false);
    const [prEvents, setPrEvents] = useState(false);


    const handleLocation = (event) => {
        setLocation(event.target.checked);
    };

    const handleFollow = (event) => {
        setFollow(event.target.checked);
    };

    const handleStats = (event) => {
        setStats(event.target.checked);
    };

    const handleAboutMe = (event) => {
        setAboutMe(event.target.checked);
    };

    const handleUpcomingEvents = (event) => {
        setUpEvents(event.target.checked);
    };

    const handlePreviosEvents = (event) => {
        setPrEvents(event.target.checked);
    };

    return (
        <div>
            <p><h4>"PRIVACY SETTINGS"</h4></p>
            <p> These options will allow You to set up Your privacy policy to users which are not in Your followers
                every person which is not added to that group will be limited to these settings</p>
            <p><h5>"Hide location"</h5></p>
            <p>Your City and Your country will not be seen for people outside Your followers group. If You will take part in the
                event , person who organize current event will see Your data.</p>
            <Switch
                checked={location}
                onChange={handleLocation}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <p><h5>"Hide follow"</h5></p>
            <p>Anyone who does not follow You will not have access to the accounts You are following or following You.</p>
            <Switch
                checked={follow}
                onChange={handleFollow}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <p><h5>"Hide Stats"</h5></p>
            <p>Your statistics, including the number of events in which You participated or were the organizer, will be blurred together with the charts and the percentage results</p>
            <Switch
                checked={stats}
                onChange={handleStats}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <p><h5>"Hide Information 'about me'"</h5></p>
            <p>The description box on your profile will be blurred</p>
            <Switch
                checked={aboutMe}
                onChange={handleAboutMe}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            
            <p><h5>"Hide UpComming'"</h5></p>
            <Switch
                checked={upEvents}
                onChange={handleUpcomingEvents}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <p><h5>"Hide PreviousEvents'"</h5></p>
            <Switch
                checked={prEvents}
                onChange={handlePreviosEvents}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <br></br>
            <AcceptChangesButton/>
        </div>

    )
}

