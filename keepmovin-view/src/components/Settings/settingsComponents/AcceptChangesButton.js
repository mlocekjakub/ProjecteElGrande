import React from "react";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';



export default function AcceptChangesSettings(props) {

    const BigBangTraffic = (e) => {
        var privacyData = JSON.parse(localStorage.getItem("privacy"));
        EditUserSettings();

        //let dataValues = {
        //    'Location': location,
        //    'FollowersFollowing': followersFollowing,
        //    'Statistics': stats,
        //    'AboutMe': aboutMe,
        //    'UpcomingEvents': upcomingEvents,
        //    'PreviousEvents': previousEvents,
        //    'Photo' : photo
        //}
        //console.log(dataValues);

        //function ConvertInput(input) {
        //    if (input === 'on')
        //        return true;
        //    if(input === )



        //}

        function EditUserSettings() {
            fetch('api/Setting/edit', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(privacyData)

            }).then(response => response.status)
                .then(data => console.log(data))
                .then(localStorage.removeItem('privacy'))

        }

    }


    return (
    

        <div className="save-button">
            
            <Button onClick={BigBangTraffic} variant="contained" endIcon={<SendIcon />} >
                Save
            </Button>
        
        </div>
        
    );
}
