import HoverRating from "./HoverRating";
import * as React from "react";

export default function OrganiserInfo()
{
    const [rateCount, setRateCount] = React.useState(420);
    const cardStyle = {
        width: "380px",
        border: "none",
        borderRadius: "10px",
        padding: "8px",
        marginBottom: "8px",
        backgroundColor: "rgba(255,255,255,0.83)",
        position: "relative",
        height: "100px",
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)"
    }
    return (
        <div style={cardStyle}><h3>Organiser Rating: ({rateCount}) <HoverRating/> </h3></div>
    )
}