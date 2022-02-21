import ReactDOM from "react-dom";
import React, {useState} from "react";
import CalendarUpcoming from "./profileCardComponents/CalendarUpcoming";
import CalendarPrevious from "./profileCardComponents/CalendarPrevious";
import Diagrams from "./Diagrams";
import './ProfilePageOptionButtons.css';
import OptionButton from "./OptionButton";
import Sport from "../../sportEventsPage/sportEventsComponents/Sport";

export default function ProfilePageOptionButtons() {

    const [buttonChosen, setButtonChosen] = useState([
        {
            id: 1,
            type: 'Statistics',
            buttonClass: 'item-1',
            chosenFunction: RenderStatistics
        },
        {
            id: 2,
            type: 'Upcoming Events',
            buttonClass: 'item-2',
            chosenFunction: RenderUpcoming
        },
        {
            id: 3,
            type: 'Previous Events',
            buttonClass: 'item-3',
            chosenFunction: RenderPrevious
        },
        ])
    
    
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
                {buttonChosen.map((button) =>
                    (<OptionButton key={button.id} type={button.type} buttonClass={button.buttonClass} 
                                   toggleFunction={button.chosenFunction} />)
                )
                }
        </div>
    );
}