import React, {useEffect, useState} from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import "./Filter.css"

export default function DatePicker() {
    const [value, onChange] = useState([new Date(), new Date()]);

    useEffect(() => {
    }, [onChange]) 
    return (
        <div className="date-picker">
            <DateRangePicker onChange={onChange} value={value} />
        </div>
    );
}