import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";

const items = []
fetch('/api/Type')
    .then(response => response.json())
    .then(data => {
        for (let sportType of data) {
            items.push(
                <MenuItem key={sportType.typeId}
                          value={JSON.stringify(sportType)}>
                    {sportType.name}
                </MenuItem>);
        }
    });

export default function TypeSelect() {

    const [typeId, setTypeId] = React.useState('');
    const handleTypeIdChange = (event) => {
        setTypeId(event.target.value);
    };

    return (
        <FormControl sx={{minWidth: 120}}>
            <InputLabel id="demo-controlled-open-select-label">Type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="type-select"
                value={typeId}
                name="TypeId"
                label="Type"
                onChange={handleTypeIdChange}
            >
                {items}
            </Select>
        </FormControl>
    )
}