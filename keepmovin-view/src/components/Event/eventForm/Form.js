import * as React from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {Button} from "@mui/material";
import {createEvent} from "../../API/Api"; 


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

        <div class="grid-container-3">
            <div className="grid-container-name">
                <TextField
                    sx={{minWidth: 100}}
                    id="name"
                    label="Name"
                    name="Name"
                    placeholder="Required"
                />
            </div>
            
            <div class="grid-container-image">
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
            </div>
            <div class="grid-container-infos">
                <TextField
                    id="datetime-local-start"
                    label="Start Event"
                    type="datetime-local"
                    name="StartEvent"
                    defaultValue="2017-05-24T10:30"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="datetime-local-end"
                    label="End Event"
                    type="datetime-local"
                    name="EndEvent"
                    defaultValue="2017-05-24T10:30"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <FormControl sx={{minWidth: 120}}>
                    <InputLabel id="demo-controlled-open-select-label">Sport</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="sport-select"
                        value={sportId}
                        name="SportId"
                        label="Sport"
                        onChange={handleSportIdChange}

                    >
                        <MenuItem value={1}>Baseball</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    id="max-participants"
                    label="Max Participants"
                    name="MaxParticipants"
                    placeholder="Required"
                />
                <FormControl sx={{minWidth: 180}}>
                    <InputLabel id="demo-controlled-open-select-label">Experience Level</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="exp-lvl"
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
                <div class="grid-container-price">
                    <TextField
                        sx={{minWidth: 100}}
                        id="price"
                        label="price"
                        name="Price"
                        placeholder="Required"
                    />
                    <FormControl sx={{minWidth: 100}}>
                        <InputLabel id="demo-controlled-open-select-label">Currency</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="currency"
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
                </div>
            </div>
            <div class="grid-container-infos">
                <TextareaAutosize
                    className="info-about-event"
                    id="info-about-event"
                    aria-label="empty textarea"
                    name="EventInfo"
                    placeholder="Info about Event"
                    minRows={18}
                />
            </div>
            <Button id="save-button" variant="contained" onClick={createEvent} disableElevation sx={{
                    top: '30ch', width: '80ch', position:'none'
                }}>
                    Save
                </Button>
        </div>
    )
}

