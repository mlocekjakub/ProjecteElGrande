import ReactDOM from "react-dom";
import React from "react";
import CalendarUpcoming from "./profileCardComponents/CalendarUpcoming";
import CalendarPrevious from "./profileCardComponents/CalendarPrevious";
import Diagrams from "./Diagrams";

export default function ProfilePageOptionButtons() {
    
    function RenderProfileContent(contentType) {
        switch(contentType) {
            case "Statistics":
                ReactDOM.render(
                    <Diagrams />,
                    document.getElementById('profileContent')
                );
                break;
            case "UpcomingEvents":
                ReactDOM.render(
                    <CalendarUpcoming/>,
                    document.getElementById('profileContent')
                );
                break;
            case "PreviousEvents":
                ReactDOM.render(
                    <CalendarPrevious/>,
                    document.getElementById('profileContent')
                );
                break;
        }
    }
    const style = {
        height: "50px",
    }
    return (
        <div className="btn-group d-flex" role="group" style={style}>
            <a onClick={() => RenderProfileContent("Statistics")} className="btn btn-dark w-50 align-content-center"> Statistics </a>
            <a onClick={() => RenderProfileContent("UpcomingEvents")} className="btn btn-dark w-50"> Upcoming Events </a>
            <a onClick={() => RenderProfileContent("PreviousEvents")} className="btn btn-dark w-50"> Previous Events </a>
        </div>
    );
}