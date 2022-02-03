import ProfilePageOptionButtons from "./profilePageComponents/ProfilePageOptionButtons";
import Diagrams from "./profilePageComponents/Diagrams";
import "./ProfilePage.css"
import ProfileCard from "./profilePageComponents/ProfileCard";
import BackgroundImage from "./profilePageComponents/profileCard/a9f990e6b096f439d7c2b89bd1ee174c_XL.jpg"

export default function ProfilePage() {
    const style = {
        paddingLeft: "120px",
        paddingRight: "120px",
        paddingTop: "50px",
        backgroundColor: "#E2E8F0",
        backgroundImage: `url(${BackgroundImage})`
    }
    return (
        <div className="profile-page">
            <div className="d-flex flex-column align-content-start" style={style}>
                <div className="p-2" style={{backgroundColor: "#E2E8F0"}}>
                    <ProfileCard />
                </div>
                <div className="p-2" style={{backgroundColor: "#E2E8F0"}}>
                    <ProfilePageOptionButtons />
                </div>
                <div className="p-2" id="profileContent" style={{backgroundColor: "#E2E8F0"}}>
                    <Diagrams />
                </div>
            </div>
        </div>
    )
}