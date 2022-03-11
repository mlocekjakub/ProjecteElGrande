import React, {useEffect, useState} from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import "./Filter.css"
import {useDispatch, useSelector} from "react-redux";
import {changeMinDate} from "../../../features/MinDate";
import {changeMaxDate} from "../../../features/MaxDate";

export default function DatePicker() {
    const [value, onChange] = useState([new Date(), new Date()]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeMinDate(value[0].toString()))
        dispatch(changeMaxDate(value[1].toString()))
    }, [onChange]) 
    return (
        <div className="date-picker">
            <DateRangePicker onChange={onChange} value={value} />
        </div>
    );
}