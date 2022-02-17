import React, {useState} from 'react';
import CheckIcon from '@mui/icons-material/Check';

const ExperienceLevel = (props) => {
    return (
        <div onClick={props.markLevel} className="experience-item level">
            {props.level}<CheckIcon className="check-icon"/>
        </div>
    )
}
export default ExperienceLevel;