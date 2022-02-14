export function SendRegisterForm(email, password) {
    const uri = "/user/register";
    SendDataFromForm(email,password,uri)
   
}

export function SendLoginForm(email, password) {
    const uri = "/user/login";
    SendDataFromForm(email, password,uri)

}


function SendDataFromForm(email,password,uri) {
    let data_package_form = {}
    data_package_form["Email"] = email;
    data_package_form["Password"] = password;
    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data_package_form)
    })

}
