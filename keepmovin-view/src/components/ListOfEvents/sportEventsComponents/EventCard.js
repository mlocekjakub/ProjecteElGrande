import React, {useEffect, useState} from 'react';
import eventImage from "../../../Images/News-Trailer-Web-4Sep20.png";
import {useSelector} from "react-redux";
import defaultProfileImage from "../../../Images/DefaultProfileImage.jpg";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import EventCardNav from "./EventCardNav";
import EventCardDescription from "./EventCardDescription";


function EventCard(props) {
    const isUserLogged = useSelector((state) => state.isLogged.value)
    
    const [usersJoined, setUsersJoined] = useState([])
    
    const [joinButtonState, setJoinButtonState] = useState('join')
    
    const [isFetchingData, setIsFetchingData] = useState(false)
    
    const theme = useSelector((state) => state.theme.value)
    
    const [isUserOrganiser, setIsUserOrganiser] = useState(false);
    
    const navigate = useNavigate();
    
    const [organiserProfile, setOrganiserProfile] = useState({
        name: "",
        surname: "",
    });

    const routeChange = useSelector((state) => state.isRouteChanged.value);

    let joinToEvent = (eventId) => {
        fetch(`api/Event/join?userId=${localStorage["session"]}&eventId=${eventId}`)
        window.location.reload(false);
    }
    
    useEffect(() => {
        let isMounted = true;
        setIsFetchingData(true);
        axios
            .get(`/api/Event/events-user`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "eventsId": props.eventId
                }
            })
            .then(response => {
                if (isMounted) {
                    setUsersJoined(response.data)
                    if (isUserLogged) {
                        response.data.map((user) => {
                            if (user.userid === localStorage['session']) {
                                setJoinButtonState('joined')
                            }
                        })
                        if (props.organiserId === localStorage['session']) {
                            setJoinButtonState('hosting')
                        }
                    }
                    if (props.organiserId !== localStorage['session']) {
                        axios
                            .get(`/api/UserProfile/GetUserProfile`, {
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                    "visitedUserId": props.organiserId,
                                }
                            }).then(content => {
                            setOrganiserProfile({
                                name: `${content.data.name ? content.data.name : ''}`,
                                surname: `${content.data.surname ? content.data.surname : ''}`
                            })
                        })
                        setIsUserOrganiser(false);
                    }
                    else {
                        setIsUserOrganiser(true)
                    }
                    setIsFetchingData(false);  
                }
            })
        
        return () => {
            isMounted = false;
        };
        
    }, [routeChange])
    
    useEffect(() => {
        if (isUserLogged === false) {
            setJoinButtonState('signIn')
        }
    }, [isUserLogged])
    
    
    return (
        <div className={`event-1 ${theme === 'light' ? 'event-1-light' : 'event-1-dark'}`}>
            <div className="img-section">
                <img src={eventImage} alt="event-image" />
                <EventCardNav
                    isFetchingData={isFetchingData}
                    organiserProfile={organiserProfile}
                    joinButtonState={joinButtonState}
                    theme={theme}
                    eventId={props.eventId}
                    isUserOrganiser={isUserOrganiser}
                    defaultProfileImage={defaultProfileImage}
                    joinToEvent={joinToEvent}
                    organiserId={props.organiserId}
                    isMobile={true}
                />
            </div>
            <EventCardDescription
                eventId={props.eventId}
                sport={props.sport}
                eventName={props.eventName}
                price={props.price}
                currency={props.currency}
                dateStart={props.dateStart}
                location={props.location}
                experienceLevels={props.experienceLevels}
                usersJoined={usersJoined}
                maxParticipants={props.maxParticipants}
                theme={theme}
                navigate={navigate}
            />
            <EventCardNav 
                isFetchingData={isFetchingData}
                organiserProfile={organiserProfile}
                joinButtonState={joinButtonState}
                theme={theme}
                eventId={props.eventId}
                isUserOrganiser={isUserOrganiser}
                defaultProfileImage={defaultProfileImage}
                joinToEvent={joinToEvent}
                organiserId={props.organiserId}
                isMobile={false}
                />
        </div>
    )
}

export default EventCard;