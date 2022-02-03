import {Button} from "@mui/material";
import { createTheme } from '@mui/material/styles';
import {ThemeProvider} from "@emotion/react";

export default function ProfileButton(props) {

    const theme = createTheme({
        palette: {
            neutral: {
                main: '#1C1F23',
                contrastText: 'rgb(255,255,255)',
            },
        },
    });
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Button variant="contained" color="neutral">{props.name}</Button>
            </ThemeProvider>
        </div>
    )
}