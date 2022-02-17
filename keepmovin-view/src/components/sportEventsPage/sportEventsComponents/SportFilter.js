import React, {useState, useEffect} from 'react';
import "./Filter.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./SportFilter.css";
import {ExpandFilter, SportSearchBar} from "./Filter";
import {GetCheckIcon} from "./Filter";
import ReactDOM from "react-dom";
import CalendarUpcoming from "../../profilePage/profilePageComponents/profileCardComponents/CalendarUpcoming";
import CheckIcon from '@mui/icons-material/Check';
import Sport from "./Sport";
import {forEach} from "react-bootstrap/ElementChildren";
import {BrowserRouter} from "react-router-dom";
import App from "../../../App";



function SportFilter() {

    const [sports, setSports] = useState([
        {
            id: 1,
            type: 'Swimming',
        },
        {
            id: 2,
            type: 'Basketball',
        },
        {
            id: 3,
            type: 'Football',
        },
        {
            id: 4,
            type: 'Hockey',
        },
        {
            id: 5,
            type: 'Volleyball',
        }
    ])
    
    const [sportsSelected, setSportsSelected] = useState([
        {
            id: 1,
            type: 'Swimming',
        }
    ])
    
    
    function MarkAsCheckedSport(e) {
        let sport = e.currentTarget;
        let sports = document.querySelectorAll(".sport")
        sport.children[0].classList.toggle("check-icon__toggle")
        
    }
    
    function CheckAllSports() {
        let allSports = document.querySelectorAll(".sport");
            allSports.forEach(sport => {
                if (!sport.children[0].classList.contains("check-icon__toggle")) {
                    sport.children[0].classList.toggle("check-icon__toggle")
                }
            })
    }
    function UncheckAllSports() {
        let allSports = document.querySelectorAll(".sport");
        allSports.forEach(sport => {
            if (sport.children[0].classList.contains("check-icon__toggle")) {
                sport.children[0].classList.toggle("check-icon__toggle")
            }
        })
    }

    
    return (
        <div className="filter-parent">
            <div onClick={ExpandFilter} className="filter">
                <div className="filter-type">Sport</div>
                <ExpandMoreIcon className="expand-icon"/>
            </div>
            <div className="filter-sport-expanded-container filter-box">
                <SportSearchBar />
                <div className="expanded-header">Sports:</div>
                <div className="check-hide-container">
                    <div onClick={CheckAllSports} className="check-hide-all-sports sport-item">Choose All</div>
                    <div onClick={UncheckAllSports} className="check-hide-all-sports sport-item hide-btn">Hide All</div>
                </div>
                {sports.map((sport) =>
                (<Sport key={sport.id} id={sport.id} type={sport.type} markSport={MarkAsCheckedSport} />))}
            </div>
        </div>
    )
}

export default SportFilter;