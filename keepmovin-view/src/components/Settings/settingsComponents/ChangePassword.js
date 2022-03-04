import * as React from "react";
import { useEffect, useState } from "react";
import "./Settings.css";




export default function ChangePassword() {


    return (
        <div className="change-password">
            <label>New Password :</label><br></br>
            <input type="text" id="fname" name="fname"/><br></br>
            <label>Confirm new password :</label><br></br>
            <input type="text" id="lname" name="lname"/><br></br>
        </div>

    )
}

