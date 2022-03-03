import * as React from "react";
import { useEffect, useState } from "react";
import "./Settings.css";




export default function ChangePassword() {


    return (
        <div>
            <label>New Password :</label>
            <input type="text" id="fname" name="fname"/><br></br>
            <label>Confirm new password :</label>
            <input type="text" id="lname" name="lname"/><br></br>
        </div>

    )
}

