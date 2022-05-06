import React, {useEffect, useRef, useState} from 'react';
import "./Filter.css";
import "./TypeFilter.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ExpandFilter} from "./Filter";
import {useDispatch, useSelector} from "react-redux";
import Type from "./Type";
import {updateType} from "../../../features/Type";
import axios from "axios";


function TypeFilter() {

    const [types, setType] = useState([]);
    
    const typesSelected = useSelector((state) => state.type.value)

    const theme = useSelector((state) => state.theme.value)

    const dispatch = useDispatch();
    
    useEffect(() => {
        let isMounted = true;
        axios
            .get(`/api/type`)
            .then(response => {
                if (isMounted) {
                    setType(response.data)
                    dispatch(updateType(response.data))
                }
            })
        
        return () => {
            isMounted = false
        }
    },[])
    
    return (
        <div className="filter-parent">
            <div onClick={ExpandFilter} className={`filter ${theme === 'light' ? 'filter-light' : 'filter-dark'}`}>
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