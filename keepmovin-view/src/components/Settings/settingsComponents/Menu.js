import Button from '@mui/material/Button';
import ReactDOM from "react-dom";
import * as React from "react";
import ChangePassword from './ChangePassword';
import EditProfile from './EditProfile';
import Help from './Help';
import PrivacySettings from './PrivacySettings';
import "./Settings.css";
import { useState } from 'react';
import MultiButton from './MultiButton';
import AcceptChangesButton from "./AcceptChangesButton";



export default function Menu() {

    const [buttonChosen, setButtonChosen] = useState([
        {
            id: 1,
            chosenFunction: RenderChangePassword,
            type: 'Change password',
            buttonClass: 'buttons',
            
        },
        {
            id: 2,
            chosenFunction: RenderEditProfile,
            type: 'Edit profile',
            buttonClass : 'buttons'
        },
        {
            id: 3,
            chosenFunction: RenderHelp,
            type: 'Help',
            buttonClass : 'buttons'
        },
        {
            id: 3,
            chosenFunction: RenderPrivacySettings,
            type: 'Privacy Settings',
            buttonClass : 'buttons'
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

   
    return (
        <div className="menu" >
            {buttonChosen.map((button) =>
            (<MultiButton key={button.id} type={button.type} buttonClass={button.buttonClass}
                toggleFunction={button.chosenFunction} />)
            )
            }
        </div>
    )
}


