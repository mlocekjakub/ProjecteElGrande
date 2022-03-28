import * as React from "react";
import { useEffect, useState } from "react";
import "./Settings.css";
import {useSelector} from "react-redux";
import axios from "axios";



export default function EditProfile(props) {
    const theme = useSelector((state) => state.theme.value)
    
    const [profileDetails, setProfileDetails] = useState({
        userId: localStorage.getItem('session'),
        name: "",
        surname: "",
        location: {city: "", country: "", zipCode: ""},
        birthDate: Date.now().toLocaleString(),
        phoneNumber: "",
        personalInfo: "",
        organisation: {name: "", isVerify: "verified"},
    })

    useEffect(async () => {
        const response = await axios
            .get(`/api/UserProfile/uploadProfileInformation`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "etag" : localStorage.getItem('session'),
                }
        }).then(content => {
               setProfileDetails({
                   name: `${content.data.name === null ? '' : content.data.name}`,
                   surname: `${content.data.surname === null ? '' : content.data.surname}`,
                   location: {
                       city: `${content.data.location === null ? '' : content.data.location?.city}`,
                       country: `${content.data.location === null ? '' : content.data.location?.country}`, 
                       zipCode: `${content.data.location === null ? '' : content.data.location?.zipCode}`,
                   },
                   birthDate: `${content.data.birthDate === undefined ? Date.now().toLocaleString() : content.data.birthDate}`,
                   phoneNumber: `${content.data.phoneNumber === null ? '' : content.data.phoneNumber}`,
                   personalInfo: `${content.data.aboutMe === undefined ? '' : content.data.aboutMe}`,
                   organisation: {
                       ...profileDetails.organisation,
                       name: `${content.data.organisation === null ? '' : content.data.organisation?.name}`
                   },
                   userId: localStorage.getItem('session')
               }) 
            })

    }, [props.buttonState])
    
    
    function HandleSubmit(e) {
        e.preventDefault()
        console.log(profileDetails)
        fetch("/api/UserProfile/editProfileInformation", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profileDetails)
        }).then(response => {
            if (response.ok) {
                props.successModal.current.classList.add('open-modal__settings-validation')
            }
            else {
                props.errorModal.current.classList.add('open-modal__settings-validation') 
            }
            window.scrollTo(0, 0);
        })
        
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
                       value={profileDetails.name}
                       onChange={e => setProfileDetails({...profileDetails, name: e.target.value})}
                />
                <input type="text"
                       name="userSurname"
                       id="userSurname"
                       autoComplete="off"
                       placeholder="Surname"
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
                       value={profileDetails.location.city}
                       onChange={e => setProfileDetails({...profileDetails, location: {...profileDetails.location, city: e.target.value}})}
                />
                <input type="text"
                       name="country"
                       id="country"
                       autoComplete="off"
                       placeholder="country"
                       value={profileDetails.location.country}
                       onChange={e => setProfileDetails({...profileDetails, location: {...profileDetails.location, country: e.target.value}})}
                />
                <input type="text"
                       name="zip"
                       id="zip"
                       autoComplete="off"
                       placeholder="Zip-code"
                       value={profileDetails.location.zipCode}
                       pattern="[0-9]*"
                       onChange={e => setProfileDetails({...profileDetails, location: {...profileDetails.location, zipCode: e.target.value}})}
                />
            </div>
            <div className={`edit-profile__phone-number ${theme === 'light' ? 'edit-profile__light' : 'edit-profile__dark' }`}>
                <label className={`edit-profile-labels ${theme === 'light' ? 'edit-profile-labels__light' : 'edit-profile-labels__dark' }`} htmlFor="phoneNumber">Phone number</label>
                <input type="text"
                       name="phoneNumber"
                       id="phoneNumber"
                       autoComplete="off"
                       placeholder="Phone number"
                       value={profileDetails.phoneNumber}
                       onChange={e => setProfileDetails({...profileDetails, phoneNumber: e.target.value})}
                />
            </div>
            <div className={`edit-profile__aboutMe ${theme === 'light' ? 'edit-profile__light' : 'edit-profile__dark' }`}>
                <label className={`edit-profile-labels ${theme === 'light' ? 'edit-profile-labels__light' : 'edit-profile-labels__dark' }`} htmlFor="personalInfo">About me</label>
                <textarea name="personalInfo"
                       id="personalInfo"
                       autoComplete="off"
                       placeholder="About me"
                       value={profileDetails.personalInfo}
                       onChange={e => setProfileDetails({...profileDetails, personalInfo: e.target.value})}
                />
            </div>
            <div className={`edit-profile__organization ${theme === 'light' ? 'edit-profile__light' : 'edit-profile__dark' }`}>
                <label className={`edit-profile-labels ${theme === 'light' ? 'edit-profile-labels__light' : 'edit-profile-labels__dark' }`} htmlFor="organisation">Organisation</label>
                <input type="text"
                       name="organisation"
                       id="organisation"
                       autoComplete="off"
                       placeholder="Organisation Name"
                       value={profileDetails.organisation.name}
                       onChange={e => setProfileDetails({...profileDetails, organisation: {...profileDetails.organisation, name: e.target.value } } ) }
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

