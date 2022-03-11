import React, {useEffect} from 'react';
import "./Filter.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ExpandFilter} from "./Filter";
import "./PriceFilter.css";
import {useDispatch, useSelector} from "react-redux";
import {changeMinPrice} from "../../../features/MinPrice";
import {changeMaxPrice} from "../../../features/MaxPrice";


function PriceFilter() {

    const minPrice = useSelector((state) => state.minPrice.value)

    const maxPrice = useSelector((state) => state.maxPrice.value)
    
    const dispatch = useDispatch();
    
    useEffect(() => {

        const rangeInput = document.querySelectorAll(".range-input input"),
            priceInput = document.querySelectorAll(".price-input input"),
            range = document.querySelector(".slider .progress");
        let priceGap = 500;

        priceInput.forEach(input => {
            input.addEventListener("input", e => {
                let minPrice = parseInt(priceInput[0].value),
                    maxPrice = parseInt(priceInput[1].value);
                if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
                    if (e.target.className === "input-min") {
                        rangeInput[0].value = minPrice;
                        range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                        dispatch(changeMinPrice(minPrice))
                    } else {
                        rangeInput[1].value = maxPrice;
                        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                        dispatch(changeMaxPrice(maxPrice))
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
                        dispatch(changeMinPrice(maxVal - priceGap))
                    } else {
                        rangeInput[1].value = minVal + priceGap;
                        dispatch(changeMaxPrice(maxVal + priceGap))
                    }
                } else {
                    priceInput[0].value = minVal;
                    dispatch(changeMinPrice(minVal))
                    priceInput[1].value = maxVal;
                    dispatch(changeMaxPrice(maxVal))
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
                <div className="price-filter-wrapper">
                    <div className="price-input">
                        <div className="field">
                            <span className="min-max">Min PLN</span>
                            <input type="number" className="input-min" defaultValue={minPrice} />
                        </div>
                        <div className="separator">-</div>
                        <div className="field">
                            <span className="min-max">Max PLN</span>
                            <input type="number" className="input-max" defaultValue={maxPrice} />
                        </div>
                    </div>
                    <div className="slider">
                        <div className="progress"></div>
                    </div>
                    <div className="range-input">
                        <input type="range" className="range-min" min="0" max="10000" defaultValue={minPrice} step="10" />
                            <input type="range" className="range-max" min="0" max="10000" defaultValue={maxPrice} step="10" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PriceFilter;