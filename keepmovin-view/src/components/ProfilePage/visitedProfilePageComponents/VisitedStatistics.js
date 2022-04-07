import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import VisitedHostedEventsDiagram from "./visitedDiagramComponents/VisitedHostedEventsDiagram";
import VisitedRecreationalEventsDiagram from "./visitedDiagramComponents/VisitedRecreationalEventsDiagram";
import VisitedProfessionalEventsDiagram from "./visitedDiagramComponents/VisitedProfessionalEventsDiagram";
import axios from "axios";
import LockIcon from "@mui/icons-material/Lock";

function VisitedStatistics(props) {

    let { visitedUserId } = useParams();
    
    const theme = useSelector((state) => state.theme.value)
    
    const [isSectionPrivate, setIsSectionPrivate] = useState(false);

    const routeChange = useSelector((state) => state.isRouteChanged.value);

    useEffect(() => {
        axios
            .get(`/api/Setting/upload/visited-user`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "visitedUserId" : visitedUserId,
                }
            })
            .then(response => {
                if (response.data.statistics === false) {
                    setIsSectionPrivate(false);
                }
                else {
                    setIsSectionPrivate(true);
                }
            })

    },[routeChange])
    
    return (
        <div className={`flex-row-container ${theme === 'light' ? 'flex-row-container__light' : 'flex-row-container__dark'}`}>
            {isSectionPrivate 
                ? <div className={`${theme === 'light' ? 'section-diagrams-private-light' : 'section-diagrams-private-dark'}`}><LockIcon /> This section is private</div>
            :   <>
                <div className="flex-row-item"> <VisitedProfessionalEventsDiagram /></div>
                <div className="flex-row-item"><VisitedRecreationalEventsDiagram /></div>
                <div className="flex-row-item"><VisitedHostedEventsDiagram /></div>
                </>
            }
        </div>
    );
}

export default VisitedStatistics;