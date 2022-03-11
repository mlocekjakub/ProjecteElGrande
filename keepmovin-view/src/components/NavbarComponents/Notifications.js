import React, {useRef} from 'react';
import {useDetectClickOutside} from "react-detect-click-outside";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Notifications(props) {

    const refNotificationMenu = useRef(null);

    const refClickOutsideNotification = useDetectClickOutside(
        { onTriggered: closeNotificationMenu });

    function closeNotificationMenu() {
        refNotificationMenu.current.classList.remove("expanded__active")
    }
    function toggleNotificationsMenu() {
        refNotificationMenu.current.classList.toggle("expanded__active")
    }
    return (
        <div className="nav-item" onClick={toggleNotificationsMenu} ref={refClickOutsideNotification}>
            <div className="nav-item__icon">
                <NotificationsIcon/>
            </div>
            <div className="expanded__notification-menu" ref={refNotificationMenu}>
                <div className="notification-expanded-container">
                    <div className="notification-header">2 notifications here</div>
                    <div className="notification-container">
                        <div className="notification">
                            Filip Liked your photo
                        </div>
                        <div className="notification">
                            Filip Followed you
                        </div>
                    </div>
                </div>
                {/*<div className="triangle__notification-menu"></div>*/}
            </div>
        </div>
    );
}

export default Notifications;