import React from "react";
import CheckIcon from '@mui/icons-material/Check';

function RotateExpandIcon(expandIcon) {
    if (expandIcon.classList.contains("active-expand-icon")) {
        expandIcon.classList.remove("active-expand-icon")
        expandIcon.classList.add("inactive-expand-icon")
    }
    else {
        expandIcon.classList.remove("inactive-expand-icon")
        expandIcon.classList.add("active-expand-icon")
    }
}

function CollapseOtherFilters(e) {
    let currentFilterBox = e.currentTarget.nextElementSibling;
    let filterBoxes = document.querySelectorAll(".filter-box")
    filterBoxes.forEach(filterBox => {
        if (currentFilterBox !== filterBox && filterBox.parentElement.classList.contains("active-filter")) {
            filterBox.parentElement.classList.toggle("active-filter")
        }
    })
}

export function ExpandFilter(e) {
    const expandedContainer = e.currentTarget.parentNode
    const expandIcon = e.currentTarget.children[1]
    RotateExpandIcon(expandIcon)
    expandedContainer.classList.toggle("active-filter")
    CollapseOtherFilters(e)

}
