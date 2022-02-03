import ProfessionalEventsDiagram from "./professionalEventsDiagram/ProfessionalEventsDiagram";
import RecreationalEventsDiagram from "./recreationalEventsDiagram/RecreationalEventsDiagram";
import HostedEventsDiagram from "./hostedEventsDiagram/HostedEventsDiagram";

export default function Diagrams() {
    return (
        <div className="flex-row-container">
            <div className="flex-row-item"> <ProfessionalEventsDiagram /></div>
            <div className="flex-row-item"><RecreationalEventsDiagram /></div>
            <div className="flex-row-item"><HostedEventsDiagram /></div>
        </div>
    );
}