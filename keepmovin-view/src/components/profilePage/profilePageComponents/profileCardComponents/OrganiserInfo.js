import HoverRating from "./HoverRating";
import * as React from "react";

export default function OrganiserInfo()
{
    const [rateCount, setRateCount] = React.useState(420);
    return (
        <div> <h4>Organiser Rating:</h4> <HoverRating /></div>
    )
}