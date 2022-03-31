import "./Filter.css"
import {useSelector} from "react-redux";

export default function LoadingSpinner() {
    const theme = useSelector((state) => state.theme.value)
    
    return (
        <div className="text-center spinner">
            <div className={`spinner-border ${theme === 'light' ? 'event-btn-light' : 'event-btn-dark'}`} role="status">
            </div>
        </div>
    );
}