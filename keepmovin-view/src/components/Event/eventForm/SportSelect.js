import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";

const items = []
fetch('/api/Sport')
    .then(response => response.json())
    .then(data => {
        for (let sport of data) {
            items.push(
                <MenuItem key={sport.sportId}
                          value={JSON.stringify(sport)}>
                    {sport.name}
                </MenuItem>);
        }
    });

export default function SportSelect() {

    const [sportId, setSportId] = React.useState('');
    const handleSportIdChange = (event) => {
        setSportId(event.target.value);
    };

    return (
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
                {items}
            </Select>
        </FormControl>
    )
}