import HoverRating from "./HoverRating";
import * as React from "react";

export default function OrganiserInfo()
{
    const [rateCount, setRateCount] = React.useState(420);
    return (
        <div> Organiser Rating: <HoverRating /></div>
    )
}