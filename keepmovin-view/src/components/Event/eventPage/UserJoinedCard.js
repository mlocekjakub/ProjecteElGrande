import React, {useEffect, useState} from 'react';
import defaultProfileImage from "../../../Images/DefaultProfileImage.jpg";
import {useSelector} from "react-redux";
import axios from "axios";
import Profile from "../../NavbarComponents/Profile";
import LoadingSpinner from "../../ListOfEvents/sportEventsComponents/LoadingSpinner";
import {useNavigate} from "react-router-dom";

function UserJoinedCard(props) {

    const routeChange = useSelector((state) => state.isRouteChanged.value)
    
    const [profileDetails, setProfileDetails] = useState()
    
    const navigate = useNavigate()
    
    useEffect(() => {
        axios
            .get(`/api/UserProfile/GetUserProfile`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "etag" : props.user.userid,
                }
            })
            .then(content => {
                setProfileDetails(content.data)
            })
    }, [routeChange])

    function handleProfile() {
        if (props.user.userid === localStorage['session']) {
            navigate('/profile')
        }
        else {
            navigate(`/profile/${props.user.userid}`)
        }
        
    }
    
    return (
        <div className="participant-card" onClick={handleProfile}>
            {profileDetails &&
                <>
                <img src={defaultProfileImage} alt=""/>
                <div className="participant-card__data">
                <div className="organiser">
                    {!profileDetails.name && !profileDetails.surname && <span>User</span>}
                    {profileDetails.name && <span>{profileDetails.name}</span>}
                    {profileDetails.surname && <span>{profileDetails.surname}</span>}
                </div>
                <div className="person-join-info">Joined</div>
                </div> </> }
            
        </div>
    );
}

export default UserJoinedCard;