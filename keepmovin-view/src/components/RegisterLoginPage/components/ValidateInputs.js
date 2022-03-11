export function ValidateEmail(email) {
    return !!(email.length > 5 && email.length < 61 && email.includes("@"));
}

export function ValidateLogin(email, password) {
    return !!((email.length > 5 && email.length < 61 && email.includes("@")) &&
        (password.length > 5 && password.length <= 30));
}

export function ValidateRegister(email, password, passwordConfirmation) {
    return !!(email.length > 5 && email.length < 61 && email.includes("@") &&
        (password.length > 5 && password.length <= 30) &&
        (passwordConfirmation === password) && passwordConfirmation.length > 5);
}