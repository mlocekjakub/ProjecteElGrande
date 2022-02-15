export function SendDataFromForm(email, password, uri) {
    let data_package_form = {
        "Email": email,
        "Password": password
    }
    console.log(email);
    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data_package_form)
        
    })
        .then(console.log(JSON.stringify(data_package_form)))

}
