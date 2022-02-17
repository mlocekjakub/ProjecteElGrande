import React from 'react';
import "./Filter.css";
import "./TypeFilter.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ExpandFilter} from "./Filter";


function TypeFilter() {
    return (
        <div className="filter-parent">
            <div onClick={ExpandFilter} className="filter">
                <div className="filter-type">Type</div>
                <ExpandMoreIcon />
            </div>
            <div className="filter-type-expanded-container filter-box">
                <div className="choose-all-type type-item">Choose All</div>
                <div className="type-item">Professional</div>
                <div className="type-item">Recreational</div>
            </div>
        </div>
    )
}

export default TypeFilter;