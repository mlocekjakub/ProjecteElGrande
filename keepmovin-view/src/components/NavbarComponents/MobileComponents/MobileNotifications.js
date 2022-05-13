import React, {useRef, useState} from 'react';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function MobileNotifications() {
    
    const [mobileNotificationMenuExpanded, setMobileNotificationMenuExpanded] = useState(false);
    
    
    
    return (
        <div className="mobile-profile__container">
            <div className="mobile-nav-item"
                 onClick={() => setMobileNotificationMenuExpanded(!mobileNotificationMenuExpanded)}>
                Notifications
            </div>
            <div className={`
            mobile-expanded__profile-menu
            ${mobileNotificationMenuExpanded
                ? 'mobile-expanded__profile-menu-active'
                : 'mobile-expanded__profile-menu-inactive'}`}>
                <div className="menu-notification">
                    Filip liked your photo
                </div>
                <div className="menu-notification">
                    Filip followed you
                </div>
            </div>
        </div>
    );
}

export default MobileNotifications;