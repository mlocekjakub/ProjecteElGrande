import Input from "@mui/material/Input";
import * as React from "react";

export default function PictureInput(props) {
    
    return(
    <div className="grid-container-image">
        <img
            src={props.src}
            srcSet=''
            alt=''
            loading="lazy"
        />
        <Input
            id="profile-picture"
            label="Profile Picture"
            type="file"
            name="ProfilePicture"
            sx={{width: 250}}
            InputLabelProps={{
                shrink: true,
            }}
        />
    </div>)
}