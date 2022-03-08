import React from "react";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';



export default function AcceptChangesSettings(props) {
    return (
        <div className="save-button">
            
            <Button variant="contained" endIcon={<SendIcon />} >
                Save
            </Button>
        
        </div>
        
    );
}
