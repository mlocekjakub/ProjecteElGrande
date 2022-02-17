import React from "react";
import "./JoinButtonStyles.css";
import { Link } from "react-router-dom";

export default function JoinButton() {
    return (
        <Link to="/register" style={{ margin: 'auto'}}>
            <button className="join-button">
                Join now!
            </button>
        </Link>
    );
}