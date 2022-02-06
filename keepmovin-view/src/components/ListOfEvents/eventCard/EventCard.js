import React, {useState, useEffect} from 'react';
import {Button} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@emotion/react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ButtonCard from "./ButtonCard";


function EventCard() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#0971f1',
                darker: '#053e85',
            },
            join: {
                main: '#27AB69',
                contrastText: '#ffffff',
            },
            details: {
                main: '#242626',
                contrastText: '#ffffff',
            }
        },
    });
    return (
        <div className="event-1">
            <div className="item image">
            </div>
            <div className="item description d-flex flex-column">
                <div className="p-2">
                    <h4>Name: 100 Miles Of Beskid Wyspowy</h4>
                </div>
                <div className="p-2">
                    Location: Lacko
                </div>
                <div className="p-2">
                    Date: 21/10/2022 - 22/10/2022
                </div>
                <div className="p-2">
                    Category: Running
                </div>
            </div>
            <article className="item go-to">
                <ButtonCard name="join" />
                <ButtonCard name="details" />
                <section className="price">
                    <h4>600$</h4>
                </section>
            </article>
        </div>
    )
}

export default EventCard;