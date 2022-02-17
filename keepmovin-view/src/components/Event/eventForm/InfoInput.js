import TextareaAutosize from "@mui/base/TextareaAutosize";
import * as React from "react";

export default function InfoInput() {
    return (
        <div className="grid-container-infos">
            <TextareaAutosize
                className="info-about-event"
                id="info-about-event"
                aria-label="empty textarea"
                name="EventInfo"
                placeholder="Info about Event"
                minRows={18}
            />
        </div>)
} 