import * as React from "react";
import { useEffect, useState } from "react";
import Menu from "./settingsComponents/Menu";
import  "./settingsComponents/Settings.css";
import UserChoices from "./settingsComponents/UserChoices";



export default function Settings() {


    return (
        <div className="wr">  
            <Menu/>
            <UserChoices/>
        </div>

    )
}

