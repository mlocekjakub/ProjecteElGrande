export function SendDataFromForm(email, password, uri) {
    let data_package_form = {
        "Email": email,
        "Password": password
    }
    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data_package_form)

    }).then(response => response.status)
        .then(data => console.log(data));
        
}

export function createEvent() {
    console.log("yooooo")
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
        "OrganizerUserId": owner,
        "SportId": sport_id,
        "ExperienceLevel": experience_level,
        "EventInfo": info,
        "MaxParticipants": max_participants,
        "Status": status,
        "Price": {
            "Value": price,
            "Currency": currency
        }
    }
    fetch("/api/event", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event_model_json)
    })

}
