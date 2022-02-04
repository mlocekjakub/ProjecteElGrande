import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



export default function FormPropsTextFields() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {
                    m: 1, width: '35ch', top: '1ch'
                },
            }}
            noValidate
            autoComplete="off"
        >
            {/*public DateTime StartEvent { get; set; }*/}
            {/*public DateTime EndEvent { get; set; }*/}
            {/*public int OrganizerUserId { get; set; }*/}
            {/*public int SportId { get; set; }*/}
            {/*public string ExperienceLevel { get; set; }*/}
            {/*public string EventInfo { get; set; }*/}
            {/*public int MaxParticipants { get; set; }*/}
            {/*public string Link { get; set; }*/}
            {/*public decimal? Rating { get; set; }*/}
            {/*public string Status { get; set; }*/}
            {/*public int PriceId { get; set; }*/}
            <div>
                <TextField
                    required
                    id="start-event"
                    label="Start Event"
                    name ="StartEvent"
                    placeholder="Required"
                />
            </div>
            <div>
                <TextField
                    required
                    id="end-event"
                    label="End Event"
                    name = "EndEvent"
                    placeholder="Required"
                />
            </div>
            <div>
                <TextField
                    required
                    id="sport"
                    label="Sport"
                    name = "SportId"
                    placeholder ="Required"
                />
            </div>
            <div>
                <TextField
                    required
                    id="experience-level"
                    label="Experience Level"
                    name = "ExperienceLevel"
                    placeholder ="Required"
                />
            </div>
            <div>
                <TextField
                    required
                    id="event-info"
                    label="Event Info"
                    name = "EventInfo"
                    placeholder ="Required"
                />
            </div>
            <div>
                <TextField
                    required
                    id="max-participants"
                    label="Max Participants"
                    name = "MaxParticipants"
                    placeholder ="Required"
                />
            </div>
            <div>
                <TextField
                    required
                    id="experience-level"
                    label="Experience Level"
                    name = "ExperienceLevel"
                    placeholder ="Required"
                />
            </div>
            <div>
            </div>
        </Box>
    );
}

