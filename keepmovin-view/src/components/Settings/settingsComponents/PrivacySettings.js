import * as React from "react";
import { useEffect, useState } from "react";
import "./Slider.css"

export default function PrivacySettings() {
    
    const [privacyDetails, setPrivacyDetails] = useState({
        location: false,
        follow: false,
        stats: false,
        aboutMe: false,
        upcomingEvents: false,
        previousEvents: false,
        photo: false
    })

    useEffect(async () => {
        const response = await fetch("api/Setting/upload", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "etag": localStorage.getItem('session')

            },
            credentials: 'include',
        })
        const content = await response.json()
            .then(content => {
                SetSettingsStatesFromDataBase(content)
            })
        
    },[])

    
    function SetSettingsStatesFromDataBase(data) {
        setPrivacyDetails({
            location: data.location, 
            follow: data.followersFollowing,
            stats: data.statistics,
            aboutMe: data.aboutMe,
            upcomingEvents: data.upcomingEvents,
            previousEvents: data.previousEvents,
            photo: data.photo
        })
    }
    
    function HandleSubmit(e) {
        e.preventDefault()
        let privacy = {
            'Location': privacyDetails.location,
            'FollowersFollowing': privacyDetails.follow,
            'Statistics': privacyDetails.stats,
            'AboutMe': privacyDetails.aboutMe,
            'UpcomingEvents': privacyDetails.upcomingEvents,
            'PreviousEvents': privacyDetails.previousEvents,
            'Photo': privacyDetails.photo,
            'userId': localStorage.getItem('session')
        }
        localStorage.setItem("privacy", JSON.stringify(privacy));
    }

    return (
        <form className="settings__privacy-container">
            <div className="privacy__header">
                <h2>Privacy</h2>
                <p> These options will allow 
                    You to set up Your privacy policy 
                    to users which are not in Your followers
                    every person which is not added to that 
                    group will be limited to these settings</p>  
            </div>
            
            <div className="privacy__localization-container">
                <h4>Localization</h4>
                <div className="privacy-switch">
                    <input 
                        type="checkbox" 
                        id="localization-privacy" 
                        className="toggle" 
                        checked={privacyDetails.location}
                        onChange={e => setPrivacyDetails({...privacyDetails, location: e.target.checked})}/>
                    <label htmlFor="localization-privacy">Hide Localization</label>
                </div>
                <p>Your City and Your country will not be seen for people outside Your 
                    followers group. If You will take part in the
                    event , person who organize current event will 
                    see Your data.</p>
            </div>
            
            <div className="privacy__followers-container">
                <h4>Followers</h4>
                <div className="privacy-switch">
                    <input
                        type="checkbox"
                        id="followers-privacy"
                        className="toggle"
                        checked={privacyDetails.follow}
                        onChange={e => setPrivacyDetails({...privacyDetails, follow: e.target.checked})}/>
                    <label htmlFor="followers-privacy">Hide Followers</label>
                </div>
                <p>Anyone who does not follow 
                    You will not have access to the accounts 
                    You are following or following You.</p>
            </div>
            
            <div className="privacy__statistics-container">
                <h4>Hide Statistics</h4>
                <div className="privacy-switch">
                    <input
                        type="checkbox"
                        id="statistics-privacy"
                        className="toggle"
                        checked={privacyDetails.stats}
                        onChange={e => setPrivacyDetails({...privacyDetails, stats: e.target.checked})}/>
                    <label htmlFor="statistics-privacy">Hide Statistics</label>
                </div>
                <p>Your statistics, including the number of 
                    events in which You participated or were the organizer, 
                    will be blurred together with the charts 
                    and the percentage results</p>
            </div>

            <div className="privacy__aboutMe-container">
                <h4>About Me</h4>
                <div className="privacy-switch">
                    <input
                        type="checkbox"
                        id="about-me-privacy"
                        className="toggle"
                        checked={privacyDetails.aboutMe}
                        onChange={e => setPrivacyDetails({...privacyDetails, aboutMe: e.target.checked})}/>
                    <label htmlFor="about-me-privacy">Hide AboutMe</label>
                </div>
                <p>The description box on your 
                    profile will be blurred</p>
            </div>

            <div className="privacy__upcoming-container">
                <h4>Upcoming Events</h4>
                <div className="privacy-switch">
                    <input
                        type="checkbox"
                        id="upcoming-privacy"
                        className="toggle"
                        checked={privacyDetails.upcomingEvents}
                        onChange={e => setPrivacyDetails({...privacyDetails, upcomingEvents: e.target.checked})}/>
                    <label htmlFor="upcoming-privacy">Hide Upcoming Events</label>
                </div>
                <p>No one other than your followers 
                    will have access to the list of 
                    events in which you will participate 
                    in the future.</p>
            </div>

            <div className="privacy__previous-container">
                <h4>Previous Events</h4>
                <div className="privacy-switch">
                    <input
                        type="checkbox"
                        id="previous-privacy"
                        className="toggle"
                        checked={privacyDetails.previousEvents}
                        onChange={e => setPrivacyDetails({...privacyDetails, previousEvents: e.target.checked})}/>
                    <label htmlFor="previous-privacy">Hide Upcoming Events</label>
                </div>
                <p>No one other than your followers 
                    will have access to the list of events 
                    in which you have already participated</p>
            </div>

            <div className="privacy__photo-container">
                <h4>Photo</h4>
                <div className="privacy-switch">
                    <input
                        type="checkbox"
                        id="photo-privacy"
                        className="toggle"
                        checked={privacyDetails.photo}
                        onChange={e => setPrivacyDetails({...privacyDetails, photo: e.target.checked})}/>
                    <label htmlFor="photo-privacy">Hide Photo</label>
                </div>
                <p>Your profile photo will be blured 
                    and no one who is not Your follower 
                    will not be able to see it</p>
            </div>
            
            <input type="submit"
                   name="submit"
                   id="submit-privacy-settings"
                   onClick={(e) => HandleSubmit(e)}
                   value="Save Changes"/>
        </form>

    )
}

