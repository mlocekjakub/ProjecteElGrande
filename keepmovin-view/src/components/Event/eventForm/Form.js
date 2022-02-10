import * as React from 'react';
// import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

export default function FormPropsTextFields() {
    const [sportId, setSportId] = React.useState('');
    const handleSportIdChange = (event) => {
        setSportId(event.target.value);
    };

    const [experienceLevel, setExperienceLevel] = React.useState('');
    const handleExperienceLevelChange = (event) => {
        setExperienceLevel(event.target.value);
    };

    const [currency, setCurrency] = React.useState('');
    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };
    var item = {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
            title: 'Bed',
            author: 'swabdesign',
    }
    return (
        <div class="grid-container">
            <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
            />
            <Input
                id="profile-picture"
                label="Profile Picture"
                type="file"
                name="ProfilePicture"
                sx={{width: 250}}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="datetime-local"
                label="Start Event"
                type="datetime-local"
                name="StartEvent"
                defaultValue="2017-05-24T10:30"
                sx={{width: 250}}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="datetime-local"
                label="End Event"
                type="datetime-local"
                name="EndEvent"
                defaultValue="2017-05-24T10:30"
                sx={{width: 250}}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <FormControl sx={{minWidth: 120}}>
                <InputLabel id="demo-controlled-open-select-label">Sport</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sportId}
                    name="SportId"
                    label="Sport"
                    onChange={handleSportIdChange}

                >
                    <MenuItem value={0}>Baseball</MenuItem>
                    {/*<MenuItem value={20}>Twenty</MenuItem>*/}
                    {/*<MenuItem value={30}>Thirty</MenuItem>*/}
                </Select>
            </FormControl>

            <FormControl sx={{minWidth: 180}}>
                <InputLabel id="demo-controlled-open-select-label">Experience Level</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={experienceLevel}
                    name="ExperienceLevel"
                    label="Experience Level"
                    onChange={handleExperienceLevelChange}
                >
                    <MenuItem value={"Beginner"}>Beginner</MenuItem>
                    <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                    <MenuItem value={"Expert"}>Expert</MenuItem>
                </Select>
            </FormControl>
            <TextField
                id="max-participants"
                label="Max Participants"
                name="MaxParticipants"
                placeholder="Required"
            />
            
            <TextareaAutosize
                aria-label="empty textarea"
                name="EventInfo"
                placeholder="Info about Event"
                style={{ width: 200 }}
            />
            <TextField
                id="link"
                label="Link"
                name="Link"
                placeholder="Required"
            />
            <TextField
                id="price"
                label="price"
                name="Price"
                placeholder="Required"
            />
            <FormControl sx={{minWidth: 180}}>
                <InputLabel id="demo-controlled-open-select-label">Currency</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="Currency"
                value={currency}
                label="Currency"
                onChange={handleCurrencyChange}
            >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"PLN"}>PLN</MenuItem>
                <MenuItem value={"EUR"}>EUR</MenuItem>
            </Select>
            </FormControl>
            <TextField
                hidden
                id="organizer-user-id"
                name="OrganizerUserId"
                value={1}
            />
            <TextField
                hidden
                id="status"
                name="Status"
                value="upcoming"
            />
        </div>
    );
}

