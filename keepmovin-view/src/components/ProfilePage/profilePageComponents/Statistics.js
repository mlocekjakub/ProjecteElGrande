import React from 'react';
import ProfessionalEventsDiagram from "./diagramComponents/ProfessionalEventsDiagram";
import RecreationalEventsDiagram from "./diagramComponents/RecreationalEventsDiagram";
import HostedEventsDiagram from "./diagramComponents/HostedEventsDiagram";
import {useSelector} from "react-redux";

function Statistics(props) {
    const theme = useSelector((state) => state.theme.value)
    return (
        <div className={`flex-row-container ${theme === 'light' ? 'flex-row-container__light' : 'flex-row-container__dark'}`}>
            <div className="flex-row-item"> <ProfessionalEventsDiagram /></div>
            <div className="flex-row-item"><RecreationalEventsDiagram /></div>
            <div className="flex-row-item"><HostedEventsDiagram /></div>
        </div>
    );
}

export default Statistics;