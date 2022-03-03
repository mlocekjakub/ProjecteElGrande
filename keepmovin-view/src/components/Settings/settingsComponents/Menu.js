import Button from '@mui/material/Button';
import ReactDOM from "react-dom";
import * as React from "react";
import ChangePassword from './ChangePassword';
import EditProfile from './EditProfile';
import Help from './Help';
import PrivacySettings from './PrivacySettings';
import "./Settings.css";
import { useState } from 'react';
import MultiButton from './MultiButton'



export default function Menu() {

    const [buttonChosen, setButtonChosen] = useState([
        {
            id: 1,
            chosenFunction: RenderChangePassword,
            type: 'Change password'
            
        },
        {
            id: 2,
            chosenFunction: RenderEditProfile,
            type: 'Edit profile'
        },
        {
            id: 3,
            chosenFunction: RenderHelp,
            type: 'Help'
        },
        {
            id: 3,
            chosenFunction: RenderPrivacySettings,
            type: 'Privacy Settings'
        },
    ])

    function RenderChangePassword() {
        ReactDOM.render(
            <ChangePassword />,
            document.getElementById('menuContent')
        );
    }
    function RenderEditProfile() {
        ReactDOM.render(
            <EditProfile />,
            document.getElementById('menuContent')
        );
    }
    function RenderHelp() {
        ReactDOM.render(
            <Help />,
            document.getElementById('menuContent')
        );
    }

    function RenderPrivacySettings() {
        ReactDOM.render(
            <PrivacySettings />,
            document.getElementById('menuContent')
        );
    }

    const style = {
        border: '2px solid ',
        color: '#242626',
        border: '1px solid rgba(5, 5, 5, 0.13)'
    };
    return (
        <div className="menu" >
            {buttonChosen.map((button) =>
            (<MultiButton key={button.id} sx={style} type={button.type}
                toggleFunction={button.chosenFunction} />)
            )
            }
        </div>
    )
}


