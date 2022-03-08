import ProfilePageOptionButtons from "./profilePageComponents/ProfilePageOptionButtons";
import Diagrams from "./profilePageComponents/Diagrams";
import "./ProfilePage.css"
import "../../index.css"
import ProfileCard from "./profilePageComponents/ProfileCard";

export default function ProfilePage() {
    return (
        <div className="profile-page-wrapper">
            <ProfileCard/>
            <ProfilePageOptionButtons />
            <div id="profileContent" className="profile-content">
                <Diagrams />
            </div>
        </div>
    )
}