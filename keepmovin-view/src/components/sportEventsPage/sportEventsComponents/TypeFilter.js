import React, {useEffect, useRef, useState} from 'react';
import "./Filter.css";
import "./TypeFilter.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ExpandFilter} from "./Filter";
import {useDispatch, useSelector} from "react-redux";
import Sport from "./Sport";
import {changeExperience, clearExperience} from "../../../features/Experience";
import {updateSport} from "../../../features/Sport";
import Type from "./Type";
import {updateType} from "../../../features/Type";


function TypeFilter() {

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
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(updateType(types))
    }, [])
    
    return (
        <div className="filter-parent">
            <div onClick={ExpandFilter} className="filter">
                <div className="filter-type">Type</div>
                <ExpandMoreIcon className="expand-icon"/>
            </div>
            <div className="filter-type-expanded-container filter-box">
                {types.map((type) =>
                    (<Type key={type.id} typeSelected={type} typeName={type.type} />))}
            </div>
        </div>
    )
}

export default TypeFilter;