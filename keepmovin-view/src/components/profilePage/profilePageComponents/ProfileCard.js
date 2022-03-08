import OrganiserInfo from "./profileCardComponents/OrganiserInfo";
import "./ProfileCard.css";
import profileImage from '../../..//Images/pexels-photo-771742.jpeg';


export default function ProfileCard() {
    return (
        <div>
            <div className="profile-background"></div>
            <div className="profile-card-wrapper">
                <div className="personal-info-container">
                    <div className="asd">
                        <img src={profileImage} alt="" />
                        <div className="personal-info">
                            <div className="name">Filip Koniuszewski</div>
                            <div className="location">Poland, Kraków</div>
                        </div>
                    </div>
                    <div className="socials">
                        <div className="follow">
                            <div className="follow-heading"> 
                                followers
                            </div>
                            <div className="number">
                                479
                            </div>
                        </div>
                        <div className="follow">
                            <div className="follow-heading">
                                following
                            </div>
                            <div className="number">
                                399
                            </div>
                        </div>
                    </div>
                    <OrganiserInfo />
                </div>
                <div className="about">
                    <h3>
                        About me
                    </h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries
                    </p>
                </div>
            </div>
        </div>
    )
}
