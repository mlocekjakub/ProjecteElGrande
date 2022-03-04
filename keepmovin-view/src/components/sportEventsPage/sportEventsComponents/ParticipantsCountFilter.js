import React, {useState, useEffect} from 'react';
import "./Filter.css";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ExpandFilter} from "./Filter";
import "./ParticipantsCountFilter.css";
import {useDispatch, useSelector} from "react-redux";
import {changeMinParticipants} from "../../../features/MinParticipants";
import {changeMaxParticipants} from "../../../features/MaxParticipants";


function ParticipantsCountFilter() {
    const minParticipants = useSelector((state) => state.minParticipants.value)
    
    const maxParticipants = useSelector((state) => state.maxParticipants.value)
    
    const dispatch = useDispatch()
    
    useEffect(() => {

        const rangeInput = document.querySelectorAll(".range-input__participants input"),
            priceInput = document.querySelectorAll(".price-input__participants input"),
            range = document.querySelector(".slider__participants .progress__participants");
        let priceGap = 500;

        priceInput.forEach(input => {
            input.addEventListener("input", e => {
                let minPrice = parseInt(priceInput[0].value),
                    maxPrice = parseInt(priceInput[1].value);
                if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
                    if (e.target.className === "input-min__participants") {
                        rangeInput[0].value = minPrice;
                        range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                        setTimeout(() => {
                            dispatch(changeMinParticipants(minPrice))
                        }, 1500)
                    } else {
                        rangeInput[1].value = maxPrice;
                        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                        setTimeout(() => {
                            dispatch(changeMaxParticipants(maxPrice))
                        }, 1500)
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
                    priceInput[0].value = minVal;
                    dispatch(changeMinParticipants(minVal))
                    priceInput[1].value = maxVal;
                    dispatch(changeMaxParticipants(maxVal))
                    range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                }
            });
        });
    })
    
    

    return (
        <div className="filter-parent">
            <div onClick={ExpandFilter} className="filter">
                <div className="filter-type">Participants</div>
                <ExpandMoreIcon />
            </div>
            <div className="filter-type-expanded-container filter-box">
                <div className="price-filter-wrapper__participants">
                    <div className="price-input__participants">
                        <div className="field__participants">
                            <span className="min-max__participants">Min</span>
                            <input type="number" className="input-min__participants" defaultValue={minParticipants}/>
                        </div>
                        <div className="separator__participants">-</div>
                        <div className="field__participants">
                            <span className="min-max__participants">Max</span>
                            <input type="number" className="input-max__participants" defaultValue={maxParticipants} />
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