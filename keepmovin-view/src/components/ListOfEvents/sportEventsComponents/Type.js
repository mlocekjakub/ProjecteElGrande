﻿import React, {useRef} from 'react';
import CheckIcon from '@mui/icons-material/Check';
import {useDispatch, useSelector} from "react-redux";
import {updateType} from "../../../features/Type";

const Type = (props) => {

    const ref = useRef(null);

    const markedTypes = useSelector((state) => state.type.value)
    
    const theme = useSelector((state) => state.theme.value)

    const dispatch = useDispatch();

    function MarkAsChecked() {
        let typeCheck = ref.current

        typeCheck.classList.toggle("check-icon__toggle")

        if (typeCheck.classList.contains("check-icon__toggle")) {
            dispatch(updateType([...markedTypes, props.typeSelected]))
        }
        else {
            dispatch(updateType(markedTypes.filter((markType) =>
                markType.typeId !== props.typeSelected.typeId)))
        }

    }

    return (
        <div onClick={MarkAsChecked} className={`${theme === 'light' ? 'type-item' : 'dark-type-item'}`}>
            {props.typeName}<CheckIcon className="check-icon check-icon__toggle" ref={ref}/>
        </div>
    )
}
export default Type;