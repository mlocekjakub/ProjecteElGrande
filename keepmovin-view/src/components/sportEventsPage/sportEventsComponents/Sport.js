import React, {useEffect, useRef, useState} from 'react';
import CheckIcon from '@mui/icons-material/Check';
import {useDispatch, useSelector} from "react-redux";
import {updateSport} from "../../../features/Sport";

const Sport = (props) => {

    const ref = useRef(null);

    const markedSports = useSelector((state) => state.sports.value)

    const dispatch = useDispatch();
    

    function MarkAsChecked() {
        const sportCheck = ref.current
        sportCheck.classList.toggle("check-icon__toggle")
        if (sportCheck.classList.contains("check-icon__toggle")) {
     
            dispatch(updateSport([...markedSports, props.sportSelected]))
        }
        else {
       
            dispatch(updateSport(markedSports.filter((markSport) =>
                markSport.sportId !== props.sportSelected.sportId)))
        }
        
    }
    return (
        <div onClick={MarkAsChecked} className="sport-item sport">
            {props.type}<CheckIcon className="check-icon check-icon__toggle" ref={ref}/>
        </div>
    )
}
export default Sport;