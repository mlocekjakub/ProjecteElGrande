import "./Filter.css"

export default function LoadingSpinner() {
    return (
        <div className="text-center spinner">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading..</span>
            </div>
        </div>
    );
}