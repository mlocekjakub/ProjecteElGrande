import profileImage from './pexels-photo-771742.jpeg';
import {useState} from "react";

export default function ProfileImage() {
    const [ image, setImage ] = useState(profileImage); 
    const style = {
        borderRadius: "50%"
    }
    return (
        <img src={image} alt="Profile Image" width="155" style={style}/>
    )
    
}