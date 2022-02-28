import React, {useState} from 'react';
import "./Filter.css";
import "./TypeFilter.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ExpandFilter} from "./Filter";
import {useDispatch} from "react-redux";
import Sport from "./Sport";


function TypeFilter() {
    const dispatch = useDispatch();

    const [types, setType] = useState([
        {
            id: 1,
            type: 'Professional'
        },
        {
            id: 2,
            type: 'Recreational',
        },
    ])
    
    return (
        <div className="filter-parent">
            <div onClick={ExpandFilter} className="filter">
                <div className="filter-type">Type</div>
                <ExpandMoreIcon />
            </div>
            <div className="filter-type-expanded-container filter-box">
                {types.map((type) =>
                    (<div key={type.id} className="type-item">{type.type}</div>))}
            </div>
        </div>
    )
}

export default TypeFilter;