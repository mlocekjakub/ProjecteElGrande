import ProfilePageOptionButtons from "./profilePageComponents/ProfilePageOptionButtons";
import Diagrams from "./profilePageComponents/Diagrams";
import "./ProfilePage.css"
import ProfileCard from "./profilePageComponents/ProfileCard";
import BackgroundImage from "../../Images/a9f990e6b096f439d7c2b89bd1ee174c_XL.jpg"

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