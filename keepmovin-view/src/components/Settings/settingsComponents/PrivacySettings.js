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
    const [photo, setPhoto] = useState(false);


    let privacy = {};

    useEffect(() => {
        privacy = {
            'location': location,
            'follow': follow,
            'stats': stats,
            'aboutMe': aboutMe,
            'upEvents': upEvents,
            'prEvents': prEvents,
            'photo': photo
        }
        localStorage.setItem("privacy", JSON.stringify(privacy));
    });
    

    
    
        

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
    const handlePhoto = (event) => {
        setPhoto(event.target.checked);
    };

    return (
        <div className ="centered">
            <p className="main-header"><h4>"PRIVACY SETTINGS"</h4></p>
            <p className="main-content"> These options will allow You to set up Your privacy policy to users which are not in Your followers
                every person which is not added to that group will be limited to these settings</p>
            <p className="secondary-header"><h5>"Hide location"</h5></p>
            <Switch id='1'
                checked={location}
                onChange={handleLocation}
                inputProps={{ 'aria-label': 'controlled' }}
            />          
            <p className="content">Your City and Your country will not be seen for people outside Your followers group. If You will take part in the
                event , person who organize current event will see Your data.</p>
            <p className="secondary-header"><h5>"Hide follow"</h5></p>
            <Switch id='2'
                checked={follow}
                onChange={handleFollow}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <p className="content">Anyone who does not follow You will not have access to the accounts You are following or following You.</p>
            
            <p className="secondary-header"><h5>"Hide Stats"</h5></p>
            <Switch id='3'
                checked={stats}
                onChange={handleStats}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <p className="content">Your statistics, including the number of events in which You participated or were the organizer, will be blurred together with the charts and the percentage results</p>
           
            <p className="secondary-header"><h5>"Hide Information 'about me'"</h5></p>
            <Switch id='4'
                checked={aboutMe}
                onChange={handleAboutMe}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <p className="content">The description box on your profile will be blurred</p>
            
            
            <p className="secondary-header"><h5>"Hide UpComming'"</h5></p>
            <Switch id='5'
                checked={upEvents}
                onChange={handleUpcomingEvents}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <p className="content">No one other than your followers will have access to the list of events in which you will participate in the future.</p>
            
            <p className="secondary-header"><h5>"Hide PreviousEvents'"</h5></p>
            <Switch className="switch" id='6'
                checked={prEvents}
                onChange={handlePreviosEvents}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <p className="content">No one other than your followers will have access to the list of events in which you have already participated</p>
            <p className="secondary-header"><h5>"Photo"</h5></p>
            <Switch className="switch" id='7'
                checked={photo}
                onChange={handlePhoto}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <p>Your profile photo will be blured and no one who is not Your follower will not be able to see it</p>
            <AcceptChangesButton module ="PrivacySettings"/>
        </div>

    )
}

