import React, {useEffect, useState} from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

export default function DatePicker() {
    const [value, onChange] = useState([new Date(), new Date()]);

    useEffect(() => {
        console.log(value);
    }, [onChange]) 
    return (
        <div>
            <DateRangePicker onChange={onChange} value={value} />
        </div>
    );
}