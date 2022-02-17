import ReactDOM from "react-dom";
import React from "react";
import CalendarUpcoming from "./profileCardComponents/CalendarUpcoming";
import CalendarPrevious from "./profileCardComponents/CalendarPrevious";
import Diagrams from "./Diagrams";
import './ProfilePageOptionButtons.css';

export default function ProfilePageOptionButtons() {
    function RenderStatistics() {
        ReactDOM.render(
            <Diagrams />,
            document.getElementById('profileContent')
        );
    }
    function RenderUpcoming() {
        ReactDOM.render(
            <CalendarUpcoming/>,
            document.getElementById('profileContent')
        );
    }
    function RenderPrevious() {
        ReactDOM.render(
            <CalendarPrevious/>,
            document.getElementById('profileContent')
        );
    }
    
    return (
        <div className="button-options-container">
            <a onClick={RenderStatistics} className="button-item item-1">Statistics </a>
            <a onClick={RenderUpcoming} className="button-item item-2">Upcoming Events</a>
            <a onClick={RenderPrevious} className="button-item item-3">Previous Events</a>
        </div>
    );
}