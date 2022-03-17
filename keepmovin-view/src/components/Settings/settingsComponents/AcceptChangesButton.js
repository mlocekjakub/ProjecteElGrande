import React from "react";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { EditUserSettings } from "../../API/Api"



export default function AcceptChangesSettings(props) {


    const BigBangTraffic = (e) => {

        let currentButton = e.target.id;

        if (currentButton == "PrivacySettings")
            EditUserSettings();
        else if (currentButton = ChangePassword)
            ChangePassword();

        


     
    }

    let ChangePassword = (e) => {

    }


    return (
    

        <div className="save-button">
            
            <Button onClick={BigBangTraffic} id={props.module} variant="contained" endIcon={<SendIcon />} >
                Save
            </Button>
        
        </div>
        
    );
}
