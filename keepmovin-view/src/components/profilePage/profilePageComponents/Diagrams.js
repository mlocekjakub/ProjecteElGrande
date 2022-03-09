import ProfessionalEventsDiagram from "./diagramComponents/ProfessionalEventsDiagram";
import RecreationalEventsDiagram from "./diagramComponents/RecreationalEventsDiagram";
import HostedEventsDiagram from "./diagramComponents/HostedEventsDiagram";
import '../profilePageComponents/diagramComponents/Diagram.css'

export default function Diagrams() {
    return (
        <div className="flex-row-container">
            <div className="flex-row-item"> <ProfessionalEventsDiagram /></div>
            <div className="flex-row-item"><RecreationalEventsDiagram /></div>
            <div className="flex-row-item"><HostedEventsDiagram /></div>
        </div>
    );
}