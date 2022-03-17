import React, {useState, useEffect} from 'react';
import "./Filter.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./ExperienceFilter.css";
import ExperienceLevel from "./ExperienceLevel";
import {ExpandFilter} from "./Filter";
import {useDispatch} from "react-redux";
import {changeExperience, clearExperience} from "../../../features/Experience";
import axios from "axios";

function ExperienceFilter() {
    const dispatch = useDispatch();
    
    const [level, setLevel] = useState([])
    
    

    useEffect(() => {
        axios
            .get(`/api/Experience`)
            .then(response => {
                setLevel(response.data)
                dispatch(changeExperience(response.data))
            })
    }, [])

    function CheckAllLevels() {
        let allExperienceLevels = document.querySelectorAll(".level");
        allExperienceLevels.forEach(level => {
            if (!level.children[0].classList.contains("check-icon__toggle")) {
                level.children[0].classList.toggle("check-icon__toggle")
            }
        })
        dispatch(changeExperience(level));
    }
    
    function UncheckAllLevels() {
        let allExperienceLevels = document.querySelectorAll(".level");
        allExperienceLevels.forEach(level => {
            if (level.children[0].classList.contains("check-icon__toggle")) {
                level.children[0].classList.toggle("check-icon__toggle")
            }
        })
        dispatch(clearExperience());
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
                {level.map((level) =>
                    (<ExperienceLevel key={level.experienceLevelId} id={level.experienceLevelId} levelSelected={level} level={level.name} />))}
            </div>
        </div>
    )
}

export default ExperienceFilter;