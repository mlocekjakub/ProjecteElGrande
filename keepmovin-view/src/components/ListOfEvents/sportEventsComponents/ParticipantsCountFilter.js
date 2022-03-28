import React, {useEffect} from 'react';
import "./Filter.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ExpandFilter} from "./Filter";
import "./ParticipantsCountFilter.css";
import {useDispatch, useSelector} from "react-redux";
import {changeMinParticipants} from "../../../features/MinParticipants";
import {changeMaxParticipants} from "../../../features/MaxParticipants";


function ParticipantsCountFilter() {
    const minParticipants = useSelector((state) => state.minParticipants.value)
    
    const maxParticipants = useSelector((state) => state.maxParticipants.value)

    const theme = useSelector((state) => state.theme.value)
    
    const dispatch = useDispatch()
    
    useEffect(() => {

        const rangeInput = document.querySelectorAll(".range-input__participants input"),
            participantsInput = document.querySelectorAll(".price-input__participants input"),
            range = document.querySelector(".slider__participants .progress__participants");
        let priceGap = 500;

        participantsInput.forEach(input => {
            input.addEventListener("input", e => {
                let minParticipants = parseInt(participantsInput[0].value),
                    maxParticipants = parseInt(participantsInput[1].value);
                if ((maxParticipants - minParticipants >= priceGap) && maxParticipants <= rangeInput[1].max) {
                    if (e.target.className === "input-min__participants") {
                        rangeInput[0].value = minParticipants;
                        range.style.left = ((minParticipants / rangeInput[0].max) * 100) + "%";
                        setTimeout(() => {
                            dispatch(changeMinParticipants(minParticipants))
                        }, 1000)
                    } else {
                        rangeInput[1].value = maxParticipants;
                        range.style.right = 100 - (maxParticipants / rangeInput[1].max) * 100 + "%";
                        setTimeout(() => {
                            dispatch(changeMaxParticipants(maxParticipants))
                        }, 1000)
                    }
                }
            });
        });

        rangeInput.forEach(input => {
            input.addEventListener("input", e => {
                let minVal = parseInt(rangeInput[0].value),
                    maxVal = parseInt(rangeInput[1].value);

                if ((maxVal - minVal) < priceGap) {
                    if (e.target.className === "range-min__participants") {
                        rangeInput[0].value = maxVal - priceGap
                        dispatch(changeMinParticipants(maxVal - priceGap))
                    } else {
                        rangeInput[1].value = minVal + priceGap;
                        dispatch(changeMaxParticipants(maxVal + priceGap))
                    }
                } else {
                    participantsInput[0].value = minVal;
                    dispatch(changeMinParticipants(minVal))
                    participantsInput[1].value = maxVal;
                    dispatch(changeMaxParticipants(maxVal))
                    range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                }
            });
        });
    })
    
    

    return (
        <div className="filter-parent">
            <div onClick={ExpandFilter} className={`filter ${theme === 'light' ? 'filter-light' : 'filter-dark'}`}>
                <div className="filter-type">Participants</div>
                <ExpandMoreIcon />
            </div>
            <div className="filter-type-expanded-container filter-box">
                <div className="price-filter-wrapper__participants">
                    <div className="price-input__participants">
                        <div className="field__participants">
                            <span className={`min-max__participants ${theme === 'light' ? '' : 'min-max-dark'}`}>Min</span>
                            <input type="number" className={`input-min__participants ${theme === 'light' ? '' : 'input-min-dark'}`} defaultValue={minParticipants}/>
                        </div>
                        <div className="separator__participants">-</div>
                        <div className="field__participants">
                            <span className={`min-max__participants ${theme === 'light' ? '' : 'min-max-dark'}`}>Max</span>
                            <input type="number" className={`input-max ${theme === 'light' ? '' : 'input-min-dark'}`} defaultValue={maxParticipants} />
                        </div>
                    </div>
                    <div className="slider__participants">
                        <div className="progress__participants"></div>
                    </div>
                    <div className="range-input__participants">
                        <input type="range" className="range-min__participants" min="0" max="10000" defaultValue={minParticipants} step="1" />
                        <input type="range" className="range-max__participants" min="0" max="10000" defaultValue={maxParticipants} step="1" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ParticipantsCountFilter;