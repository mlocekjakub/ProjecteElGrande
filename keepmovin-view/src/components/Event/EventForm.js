import * as React from "react";
import Form from "./eventForm/Form"
import "./EventForm.css";

fetch('/event/8')
    .then(response => response.json())
    .then(data => console.log(data));
export default function EventForm() {
    return (<div><Form /></div>)
}