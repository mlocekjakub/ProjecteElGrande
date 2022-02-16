import React from "react";
import "./JoinButtonStyles.css";
import { Link } from "react-router-dom";

export default function JoinButton() {
    return (
        <Link to="/register" style={{ margin: 'auto', transform: 'translateY(-100%)'}}>
            <button className="join-button">
                Join now!
            </button>
        </Link>
    );
}