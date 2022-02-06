import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@mui/material'

export default function EventsCarousel(props) {
    var items = [
        {
            name: "Event #1",
            description: "Hello World!"
        },
        {
            name: "Event #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel
            autoPlay={false}
            navButtonsAlwaysVisible
        >
            {
                items.map((item, i) => <Item key={i} item={item}/>)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper style={{width: "20%", margin: "auto"}}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="MoreButton">
                Go for more!
            </Button>
        </Paper>
    )
}