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
import axios from "axios";


function TypeFilter() {

    const [types, setType] = useState([]);
    
    const typesSelected = useSelector((state) => state.type.value)

    const dispatch = useDispatch();
    
    
    useEffect(() => {
        axios
            .get(`/api/Type`)
            .then(response => {
                setType(response.data)
                dispatch(updateType(response.data))
            })
    },[])
    
    
    
    return (
        <div className="filter-parent">
            <div onClick={ExpandFilter} className="filter">
                <div className="filter-type">Type</div>
                <ExpandMoreIcon className="expand-icon"/>
            </div>
            <div className="filter-type-expanded-container filter-box">
                {types.map((type) =>
                    (<Type key={type.typeId} typeSelected={type} typeName={type.name} />))}
            </div>
        </div>
    )
}

export default TypeFilter;