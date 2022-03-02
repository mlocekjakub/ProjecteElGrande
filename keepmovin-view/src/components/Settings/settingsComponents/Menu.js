import Button from '@mui/material/Button';
import * as React from "react";
import { useEffect, useState } from "react";
import "./Settings.css";



export default function Menu() {


    return (
        <div className="menu" >
                <Button className="buttons" variant="outlined">Edit Profile</Button>
                <Button className="buttons" variant="outlined">Privacy settings</Button>
                <Button className="buttons"variant="outlined">Change Password</Button>
                <Button className="buttons" variant="outlined">Help</Button>
        </div>
    )
}


