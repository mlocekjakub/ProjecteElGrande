import React, {useState, useEffect} from 'react';
import "./Filter.css";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ExpandFilter} from "./Filter";
import "./ParticipantsCountFilter.css";


function ParticipantsCountFilter() {
    useEffect(() => {

        const rangeInput = document.querySelectorAll(".range-input__participants input"),
            priceInput = document.querySelectorAll(".price-input__participants input"),
            range = document.querySelector(".slider__participants .progress__participants");
        let priceGap = 1000;

        priceInput.forEach(input => {
            input.addEventListener("input", e => {
                let minPrice = parseInt(priceInput[0].value),
                    maxPrice = parseInt(priceInput[1].value);

                if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
                    if (e.target.className === "input-min__participants") {
                        rangeInput[0].value = minPrice;
                        range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                    } else {
                        rangeInput[1].value = maxPrice;
                        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
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
                    } else {
                        rangeInput[1].value = minVal + priceGap;
                    }
                } else {
                    priceInput[0].value = minVal;
                    priceInput[1].value = maxVal;
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
                <div className="choose-all-type type-item">Choose All</div>
                <div className="price-filter-wrapper__participants">
                    <div className="price-input__participants">
                        <div className="field__participants">
                            <span className="min-max__participants">Min</span>
                            <input type="number" className="input-min__participants" defaultValue="2500" />
                        </div>
                        <div className="separator__participants">-</div>
                        <div className="field__participants">
                            <span className="min-max__participants">Max</span>
                            <input type="number" className="input-max__participants" defaultValue="7500" />
                        </div>
                    </div>
                    <div className="slider__participants">
                        <div className="progress__participants"></div>
                    </div>
                    <div className="range-input__participants">
                        <input type="range" className="range-min__participants" min="0" max="10000" defaultValue="2500" step="100" />
                        <input type="range" className="range-max__participants" min="0" max="10000" defaultValue="7500" step="100" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ParticipantsCountFilter;