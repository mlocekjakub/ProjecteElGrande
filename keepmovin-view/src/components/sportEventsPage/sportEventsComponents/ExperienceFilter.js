import React, {useState, useEffect} from 'react';
import "./Filter.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./ExperienceFilter.css";
import ExperienceLevel from "./ExperienceLevel";
import {ExpandFilter} from "./Filter";


function ExperienceFilter() {
    const [levelSelected, setLevelSelected] = useState([
        {
            id: 1,
            experienceLevel: 'Beginner'
        },
        {
            id: 2,
            experienceLevel: 'Intermediate',
        },
        {
            id: 3,
            experienceLevel: 'Experienced'
        }
    ])


    function MarkAsCheckedLevel(e) {
        let level = e.currentTarget;
        level.children[0].classList.toggle("check-icon__toggle")

    }

    function CheckAllLevels() {
        let allExperienceLevels = document.querySelectorAll(".level");
        allExperienceLevels.forEach(level => {
            if (!level.children[0].classList.contains("check-icon__toggle")) {
                level.children[0].classList.toggle("check-icon__toggle")
            }
        })
    }
    
    function UncheckAllLevels() {
        let allExperienceLevels = document.querySelectorAll(".level");
        allExperienceLevels.forEach(level => {
            if (level.children[0].classList.contains("check-icon__toggle")) {
                level.children[0].classList.toggle("check-icon__toggle")
            }
        })
    }
    
    return (
        <div className="filter-parent">
            <div onClick={ExpandFilter} className="filter">
                <div className="filter-type">Experience</div>
                <ExpandMoreIcon />
            </div>
            <div className="filter-experience-expanded-container filter-box">
                <div className="check-hide-container-levels">
                    <div onClick={CheckAllLevels} className="check-hide-all-levels experience-item">Choose All</div>
                    <div onClick={UncheckAllLevels} className="check-hide-all-levels experience-item hide-btn-levels">Hide All</div>
                </div>
                {levelSelected.map((level) =>
                    (<ExperienceLevel key={level.id} id={level.id} level={level.experienceLevel} markLevel={MarkAsCheckedLevel} />))}
            </div>
        </div>
    )
}

export default ExperienceFilter;