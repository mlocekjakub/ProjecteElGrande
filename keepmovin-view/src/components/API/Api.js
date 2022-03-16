import {useDispatch} from "react-redux";
import {changeIsLogged} from "../../features/IsLogged";

/*export function LogOut(uri) {
    /!*const dispatch = useDispatch();*!/
    /!*dispatch(changeIsLogged(false))*!/
    
    


}*/

export function SendChangePasswordForm(collectUserInputs) {
    fetch('/user/changePassword', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(collectUserInputs)

    }).then(response => response.status)
        .then(data => DisplayActionResult(data))

    function DisplayActionResult(data) {
        if (data === "200")
            alert('jUHUHUHUHUHU')
        else
            alert("dupa");

    }
}


export function EditUserSettings() {
    var privacyData = JSON.parse(localStorage.getItem("privacy"));
    fetch('api/Setting/edit', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(privacyData)

    }).then(response => response.status)
        .then(data => console.log(data))
        .then(localStorage.removeItem('privacy'))

}

export function createEvent() {
    let status = "upcoming";
    let owner = 1;
    let name = document.querySelector("#name").value;
    let start_event = document.querySelector("#datetime-local-start").value;
    let end_event = document.querySelector("#datetime-local-end").value;
    let sport_id = document.getElementsByName("SportId")[0].value;
    let max_participants = document.querySelector("#max-participants").value;
    let experience_level = document.getElementsByName("ExperienceLevel")[0].value;
    let price = document.querySelector("#price").value;
    let currency = document.getElementsByName("Currency")[0].value;
    let info = document.querySelector("#info-about-event").value;

    let event_model_json = {
        "Name": name,
        "StartEvent": start_event,
        "EndEvent": end_event,
        "ExperienceLevel": experience_level,
        "EventInfo": info,
        "MaxParticipants": max_participants,
        "Status": status,
        "Currency": currency,
        "Link": "",
        "Price": price,
    }
    fetch("/api/event", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event_model_json)
    })

    window.location.href = '/list-of-events';

}


