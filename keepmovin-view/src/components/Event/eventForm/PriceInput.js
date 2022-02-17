import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

export default function PriceInput() {

    const [currency, setCurrency] = React.useState('');
    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };
    
    return (
        <div className="grid-container-price">
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
        </div>)
}
