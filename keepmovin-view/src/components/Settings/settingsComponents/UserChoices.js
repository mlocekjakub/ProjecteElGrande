import * as React from "react";
import { useEffect, useState } from "react";
import EditProfile from './EditProfile';
import PrivacySettings from './PrivacySettings';
import "./Settings.css";
import Help from './Help';




export default function UserChoices(props) {

    function RenderStatistics() {
        ReactDOM.render(
            <Diagrams />,
            document.getElementById('profileContent')
        );
    }

    return (
        <div className="userChoices" >

        </div>
    )
}



