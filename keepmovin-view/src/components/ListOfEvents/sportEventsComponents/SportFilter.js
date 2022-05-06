import React, {useState, useEffect} from 'react';
import "./Filter.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./SportFilter.css";
import {ExpandFilter} from "./Filter";
import Sport from "./Sport";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {clearSport, updateSport} from "../../../features/Sport";


function SportFilter() {

    const dispatch = useDispatch();
    
    const [sports, setSports] = useState([])
    
    const [sportSearch, setSportSearch] = useState("")
    
    const markedSports = useSelector((state) => state.sports.value)
    
    const theme = useSelector((state) => state.theme.value)
    
    
    useEffect(() => {
        let isMounted = true;
        axios
            .get(`/api/sport/${sportSearch}`)
            .then(response => isMounted && setSports(response.data))
        return () => {
            isMounted = false;
        }
    }, [sportSearch])
    
    useEffect(() => {
        axios
            .get(`/api/sport`)
            .then(response => {
                setSports(response.data)
                dispatch(updateSport(response.data))
            })
        
    }, [])
    
    
    function CheckAllSports() {
        let allSports = document.querySelectorAll(".sport");
            allSports.forEach(sport => {
                if (!sport.children[0].classList.contains("check-icon__toggle")) {
                    sport.children[0].classList.toggle("check-icon__toggle")
                }
            })
        dispatch(updateSport(sports))
    }
    function UncheckAllSports() {
        let allSports = document.querySelectorAll(".sport");
        allSports.forEach(sport => {
            if (sport.children[0].classList.contains("check-icon__toggle")) {
                sport.children[0].classList.toggle("check-icon__toggle")
            }
        })
        dispatch(clearSport())
    }
    
    return (
        <div className="filter-parent">
            <div onClick={ExpandFilter} className={`filter ${theme === 'light' ? 'filter-light' : 'filter-dark'}`}>
                <div className="filter-type">Sport</div>
                <ExpandMoreIcon className="expand-icon"/>
            </div>
            <div className="filter-sport-expanded-container filter-box">
                <div className="search-bar-sport-filter">
                    <input type="text" className={`sport-filter-searchbar ${theme === 'dark' ? 'searchbar-sport-dark' : 'search-txt-sport-filter'} `} placeholder="Search.."
                           required value={sportSearch}
                           onChange={(e) => {
                               setSportSearch(e.target.value)
                           }}
                           
                    />
                </div>
                <div className={`${theme === 'light' ? 'expanded-header' : 'expanded-header-dark'}`}>Sports:</div>
                <div className="check-hide-container">
                    <div onClick={CheckAllSports} className="check-hide-all-sports sport-item">Choose All</div>
                    <div onClick={UncheckAllSports} className="check-hide-all-sports sport-item hide-btn">Hide All</div>
                </div>
                <div className="scroll-container">
                    {sports.map((sport) =>
                        
                    (<Sport key={sport.sportId} sportSelected={sport} id={sport.sportId} type={sport.name}/>) )}
                </div>
            </div>
        </div>
    )
}

export default SportFilter;