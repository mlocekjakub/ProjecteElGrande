import Input from "@mui/material/Input";
import * as React from "react";

export default function PictureInput() {
    
    var item = {
        img: 'https://media.istockphoto.com/photos/various-sports-equipment-balls-on-wooden-background-picture-id1145660545?k=20&m=1145660545&s=612x612&w=0&h=pGqnwVdTNl1J4XfKnMoTzw9LJkJy-2Z3f6cIzvCzi4s=',
        title: '',
        author: '',
    }
    
    return(
    <div className="grid-container-image">
        <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
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