import ProfileImage from "./profileCard/ProfileImage";
import "./ProfileCard.css"
import OrganiserInfo from "./profileCard/OrganiserInfo";
import Description from "./profileCard/Description";


export default function ProfileCard() {
    const cardStyle = {
        width: "380px",
        border: "none",
        borderRadius: "10px",
        padding: "8px",
        backgroundColor: "rgb(255,255,255)",
        position: "relative",
        height: "40vh",
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)"
    }

    return (
        <div className="container d-flex flex-row justify-content-center">
            <div className="p-2">
                <div className="card" style={cardStyle}>
                    <div className="user text-center">
                        <div className="profile"><ProfileImage/></div>
                    </div>
                    <div className="mt-5 text-center">
                        <h4 className="mb-0">Filip Koniuszewski</h4> <span className="text-muted d-block mb-2">Kraków, Poland</span>
                        <button className="btn btn-dark btn-sm follow">Edit Profile</button>
                        <div className="d-flex justify-content-between align-items-center mt-4 px-4">
                            <div className="stats">
                                <h6 className="mb-0">Followers</h6> <span>311</span>
                            </div>
                            <div className="stats">
                                <h6 className="mb-0">Following</h6> <span>101</span>
                            </div>
                            <div className="stats">
                                <h6 className="mb-0">Rating</h6> <span>4.9</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="p-2">
                <Description/>
            </div>
            <div className="p-2">
                <OrganiserInfo/>
            </div>
        </div>
    )
}
