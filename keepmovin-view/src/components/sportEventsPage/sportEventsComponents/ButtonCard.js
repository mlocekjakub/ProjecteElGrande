import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@emotion/react";
import {Button} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import React from "react";
import {Link} from "react-router-dom";

function ButtonCard(props) {
    const theme = createTheme({
        palette: {
            join: {
                main: '#4285F4',
                contrastText: '#ffffff',
            },
            details: {
                main: '#242626',
                contrastText: '#ffffff',
            }
        },
    });
    switch(props.name) {
        case "create":
            return(
                <ThemeProvider theme={theme}>
                    <Button component={Link} to="/event/create"  className="join" color="join" variant="contained">
                        Create Event
                    </Button>
                </ThemeProvider>
            )
    }
}

export default ButtonCard;