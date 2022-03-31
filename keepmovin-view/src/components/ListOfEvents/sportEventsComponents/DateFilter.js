import React, {useEffect, useState} from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {useDetectClickOutside} from "react-detect-click-outside";
import {useDispatch, useSelector} from "react-redux";
import {changeRangeDate, clearRangeDate} from "../../../features/RangeDate";
import "./DataFilter.scss";
import CrossIcon from '@material-ui/icons/Close';
import moment from "moment";

export default function DateFilter() {
    const dispatch = useDispatch();
    const [displayDates, setDisplayDates] = useState(false)
    const [open, setOpen] = useState(false)
    const [dates, setDates] = useState([
        {
            startDate: new Date(new Date().getFullYear(), 0, 1),
            endDate: new Date(new Date().getFullYear(), 12, 31),
            key: 'selection'
        }
        ]);

    const compareDates = !moment(dates[0].startDate.toISOString()).isSame(new Date(new Date().getFullYear(), 0, 1).toISOString())
        || !moment(dates[0].endDate.toISOString()).isSame(new Date(new Date().getFullYear(), 12, 31).toISOString())
    
    useEffect(() => {
        let startDate = dates[0].startDate.toISOString();
        let endDate = dates[0].endDate.toISOString();
        dispatch(changeRangeDate([startDate, endDate]))
    }, [dates])

    const refFoundEventsClickOutside = useDetectClickOutside(
        { onTriggered: CloseMenu });

    const theme = useSelector((state) => state.theme.value)
   
   function CloseMenu() {
       setOpen(false)
   }
    
    return (
        <div className="date-selector-container" ref={refFoundEventsClickOutside}>
            <div className={`date-picker__selected-dates-container ${theme === 'light' ? 'date-picker-selected-dates__light' : 'date-picker-selected-dates__dark'}`}>
                <div className="date-picker__selected-dates">
                    <div className={`date-picker__first-date ${theme === 'light' ? 'date-light' : 'date-dark'}`} onClick={(e)=> setOpen(!open)}>{
                        compareDates ? dates[0].startDate.toLocaleDateString() : <span>select date</span>}</div>
                    <div className={`date-separator ${theme === 'dark' ? 'date-separator-dark' : ''}`}> To </div>
                    <div className={`date-picker__first-date ${theme === 'light' ? 'date-light' : 'date-dark'}`} onClick={(e)=> setOpen(!open)}>{
                        compareDates ? dates[0].endDate.toLocaleDateString() : <span> select date</span>}</div>
                </div>
                <div className={`${theme === 'light' ? 'dates-clear-button-light' : 'dates-clear-button-dark' }`} onClick={() => {
                    setDates([
                        {
                            startDate: new Date(new Date().getFullYear(), 0, 1),
                            endDate: new Date(new Date().getFullYear(), 12, 31),
                            key: 'selection'
                        }
                    ]) 
                    setOpen(false)
                }}>
                    <CrossIcon />
                </div>
                
            </div> 
            {open &&
            <div className={`date-picker ${theme === 'light' ? 'date-picker-selected-dates__light' : 'date-picker-selected-dates__dark'}`}>
                {theme === 'light' 
                    ? 
                    <div className="calendar-light">
                        <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDates([item.selection])}
                        ranges={dates}
                    />
                </div> : 
                    <div className="calendar-dark">
                        <DateRange
                            editableDateInputs={true}
                            onChange={(item) => setDates([item.selection])}
                            ranges={dates}
                        /> 
                    </div>
                }
            </div>
            }
        
        </div>
    )
}



