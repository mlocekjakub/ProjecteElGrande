import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import * as React from "react";

const items = []
fetch('/api/Experience')
    .then(response => response.json())
    .then(data => {
        for (const [index, value] of data.entries()) {
            items.push(<MenuItem value={JSON.stringify(value)}>{value["name"]}</MenuItem>)
        }
    });

export default function ExperienceSelect(){

    const [experienceLevel, setExperienceLevel] = React.useState('');
    const handleExperienceLevelChange = (event) => {
        setExperienceLevel(event.target.value);
    };

    return(
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
                {items}
            </Select>
        </FormControl>
    )
}
