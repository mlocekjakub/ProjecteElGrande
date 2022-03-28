import * as React from "react";
import { useEffect, useState } from "react";
import "./Settings.css";
import {useSelector} from "react-redux";



export default function EditProfile() {
    const theme = useSelector((state) => state.theme.value)
    
    const [profileDetails, setProfileDetails] = useState({
        userId: localStorage.getItem('session'),
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
            .then(response => {
               setProfileDetails({
                   ...profileDetails,
                   name: `${response.name === null ? '' : response.name}`,
                   surname: `${response.surname === null ? '' : response.surname}`,
                   city: `${response.location.city === null ? '' : response.location.city}`,
                   country: `${response.location.country === null ? '' : response.location.country}`,
                   ageDate: `${response.ageDate === null ? '' : response.ageDate}`,
                   phoneNumber: `${response.phoneNumber === null ? '' : response.phoneNumber}`,
                   aboutMe: `${response.aboutMe === null ? '' : response.aboutMe}`,
                   organization: `${response.organization.name === null ? '' : response.organization.name}`,
               }) 
            })

    }, [])
    
    
    function HandleSubmit(e) {
        e.preventDefault()
        fetch("api/userProfile/editProfileInformation", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profileDetails)
        }.then(response => console.log(response)))
        
    }
    
    
    return (
        <form className="settings__edit-profile-container">
            <div className={`edit-profile__name-surname ${theme === 'light' ? 'edit-profile__light' : 'edit-profile__dark' }`}>
                <div className={`edit-profile-labels ${theme === 'light' ? 'edit-profile-labels__light' : 'edit-profile-labels__dark' }`}>Name and Surname</div>
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
            <div className={`edit-profile__localization ${theme === 'light' ? 'edit-profile__light' : 'edit-profile__dark' }`}>
                <div className={`edit-profile-labels ${theme === 'light' ? 'edit-profile-labels__light' : 'edit-profile-labels__dark' }`}>Localization</div>
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
            <div className={`edit-profile__phone-number ${theme === 'light' ? 'edit-profile__light' : 'edit-profile__dark' }`}>
                <label className={`edit-profile-labels ${theme === 'light' ? 'edit-profile-labels__light' : 'edit-profile-labels__dark' }`} htmlFor="phoneNumber">Phone number</label>
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
            <div className={`edit-profile__aboutMe ${theme === 'light' ? 'edit-profile__light' : 'edit-profile__dark' }`}>
                <label className={`edit-profile-labels ${theme === 'light' ? 'edit-profile-labels__light' : 'edit-profile-labels__dark' }`} htmlFor="aboutMe">About me</label>
                <textarea name="AboutMe"
                       id="aboutMe"
                       autoComplete="off"
                       placeholder="About me"
                       required
                       value={profileDetails.aboutMe}
                       onChange={e => setProfileDetails({...profileDetails, aboutMe: e.target.value})}
                />
            </div>
            <div className={`edit-profile__organization ${theme === 'light' ? 'edit-profile__light' : 'edit-profile__dark' }`}>
                <div className={`edit-profile-labels ${theme === 'light' ? 'edit-profile-labels__light' : 'edit-profile-labels__dark' }`}>Organization and KRS</div>
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

