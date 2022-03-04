import Button from '@mui/material/Button';
import * as React from "react";
import "./Settings.css";



export default function Menu() {

    const choiceId = (e) => {
        let targetId = e.target.id;
        localStorage.setItem('choice', targetId);
    }

    const style = {
        border: '2px solid ',
        color: '#242626',
        border: '1px solid rgba(5, 5, 5, 0.13)'
    };
    return (
        <div className="menu" >
            <Button id='1' onClick={choiceId} sx={style}>Edit Profile</Button>
            <Button id='2' onClick={choiceId} sx={style}>Privacy settings</Button>
            <Button id='3' onClick={choiceId} sx={style}>Change Password</Button>
            <Button id='4' onClick={choiceId} sx={style} >Help</Button>
        </div>
    )
}


