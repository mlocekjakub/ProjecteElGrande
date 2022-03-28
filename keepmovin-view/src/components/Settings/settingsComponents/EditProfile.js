import * as React from "react";
import { useEffect, useState } from "react";
import "./Settings.css";



export default function EditProfile() {
    const [profileDetails, setProfileDetails] = useState({
        name: "",
        surname: "",
        city: "",
        country: "",
        ageDate: "",
        phoneNumber: "",
        aboutMe: "",
        organization: "",
        krs: "",
    })

    useEffect(async () => {
        const response = await fetch("api/UserProfile/uploadProfileInformation", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "etag": localStorage.getItem('session')

            },
            credentials: 'include',
        })
        const content = await response.json()
            .then(content => console.log(content))
            .then(console.log(content))

    }, [])
    
    
    function HandleSubmit(e) {
        e.preventDefault()
    }
    
    
    return (
        <form className="settings__edit-profile-container">
            <div className="edit-profile__name-surname">
                <div className="edit-profile-labels">Name and Surname</div>
                <input type="text"
                       name="userName"
                       id="userName"
                       autoComplete="off"
                       placeholder="Name"
                       required
                       value={profileDetails.name}
                       onChange={e => setProfileDetails({...profileDetails, name: e.target.value})}
                />
                <input type="text"
                       name="userSurname"
                       id="userSurname"
                       autoComplete="off"
                       placeholder="Surname"
                       required
                       value={profileDetails.surname}
                       onChange={e => setProfileDetails({...profileDetails, surname: e.target.value})}
                />
            </div>
            <div className="edit-profile__localization">
                <div className="edit-profile-labels">Localization</div>
                <input type="text"
                       name="city"
                       id="city"
                       autoComplete="off"
                       placeholder="City"
                       required
                       value={profileDetails.city}
                       onChange={e => setProfileDetails({...profileDetails, city: e.target.value})}
                />
                <input type="text"
                       name="country"
                       id="country"
                       autoComplete="off"
                       placeholder="country"
                       required
                       value={profileDetails.country}
                       onChange={e => setProfileDetails({...profileDetails, country: e.target.value})}
                />
            </div>
            <div className="edit-profile__phone-number">
                <label className="edit-profile-labels" htmlFor="phoneNumber">Phone number</label>
                <input type="text"
                       name="phoneNumber"
                       id="phoneNumber"
                       autoComplete="off"
                       placeholder="Phone number"
                       required
                       value={profileDetails.phoneNumber}
                       onChange={e => setProfileDetails({...profileDetails, phoneNumber: e.target.value})}
                />
            </div>
            <div className="edit-profile__aboutMe">
                <label className="edit-profile-labels" htmlFor="aboutMe">About me</label>
                <textarea name="AboutMe"
                       id="aboutMe"
                       autoComplete="off"
                       placeholder="About me"
                       required
                       value={profileDetails.aboutMe}
                       onChange={e => setProfileDetails({...profileDetails, aboutMe: e.target.value})}
                />
            </div>
            <div className="edit-profile__organization">
                <div className="edit-profile-labels">Organization and KRS</div>
                <input type="text"
                       name="organization"
                       id="organization"
                       autoComplete="off"
                       placeholder="Organization Name"
                       required
                       value={profileDetails.organization}
                       onChange={e => setProfileDetails({...profileDetails, organization: e.target.value})}
                />
                <input type="text"
                       name="organization-krs"
                       id="organization-krs"
                       autoComplete="off"
                       placeholder="Organization KRS"
                       required
                       value={profileDetails.krs}
                       onChange={e => setProfileDetails({...profileDetails, krs: e.target.value})}
                />
            </div>
            <input type="submit"
                   name="submit"
                   id="change-password-submit"
                   onClick={(e) => HandleSubmit(e)}
                   value="Save changes"/>
        </form>
    )

}

