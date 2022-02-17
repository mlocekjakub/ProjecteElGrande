import React, {useState, useEffect} from 'react';
import "./Filter.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ExpandFilter} from "./Filter";
import "./PriceFilter.css";


function PriceFilter() {
    useEffect(() => {

        const rangeInput = document.querySelectorAll(".range-input input"),
            priceInput = document.querySelectorAll(".price-input input"),
            range = document.querySelector(".slider .progress");
        let priceGap = 1000;

        priceInput.forEach(input => {
            input.addEventListener("input", e => {
                let minPrice = parseInt(priceInput[0].value),
                    maxPrice = parseInt(priceInput[1].value);

                if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
                    if (e.target.className === "input-min") {
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
                    if (e.target.className === "range-min") {
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
                <div className="filter-type">Price</div>
                <ExpandMoreIcon />
            </div>
            <div className="filter-type-expanded-container filter-box">
                <div className="choose-all-type type-item">Choose All</div>
                <div className="price-filter-wrapper">
                    <div className="price-input">
                        <div className="field">
                            <span className="min-max">Min PLN</span>
                            <input type="number" className="input-min" defaultValue="2500" />
                        </div>
                        <div className="separator">-</div>
                        <div className="field">
                            <span className="min-max">Max PLN</span>
                            <input type="number" className="input-max" defaultValue="7500" />
                        </div>
                    </div>
                    <div className="slider">
                        <div className="progress"></div>
                    </div>
                    <div className="range-input">
                        <input type="range" className="range-min" min="0" max="10000" defaultValue="2500" step="100" />
                            <input type="range" className="range-max" min="0" max="10000" defaultValue="7500" step="100" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PriceFilter;