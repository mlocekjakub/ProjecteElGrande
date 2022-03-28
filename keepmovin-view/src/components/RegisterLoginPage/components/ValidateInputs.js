export function ValidateEmail(email) {
    return (email.length > 5 && email.length < 61 && 
    email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
}

export function ValidatePassword(password) {
    return (password.length > 5 && password.length <= 30);
}

export function ComparePasswords(password, passwordConfirmation) {
    return (password === passwordConfirmation);
}
export function ValidateLength(value) {
    return (value.length < 6)
}

export function IsEmailTooLong(email) {
    return (email.length > 60)
}

export function IsEmailTooShort(email) {
    return (email.length <= 5 && email.length > 0)
}

export function IsPasswordTooLong(password) {
    return (password.length > 30)
}

export function IsPasswordTooShort(password) {
    return (password.length <= 5 && password.length > 0)
}

export function ValidateRegister(email, password, passwordConfirmation) {
    return (
        ValidateEmail(email) &&
        ValidatePassword(password) &&
        ComparePasswords(password, passwordConfirmation)
    );
}


