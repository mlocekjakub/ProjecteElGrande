import React, {useState} from 'react';
import CheckIcon from '@mui/icons-material/Check';

const Sport = (props) => {
    return (
        <div onClick={props.markSport} className="sport-item sport">
            {props.type}<CheckIcon className="check-icon"/>
        </div>
    )
}
export default Sport;