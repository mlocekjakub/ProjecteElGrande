import Input from "@mui/material/Input";
import * as React from "react";

export default function PictureInput() {
    
    var item = {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
        author: 'swabdesign',
    }
    
    return(
    <div className="grid-container-image">
        <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
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