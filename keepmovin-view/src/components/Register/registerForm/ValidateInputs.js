export function validateEmail(x) {
    if(x.length >5 && x.length < 61)
        return true;
    else return false;

}

export function validatePassword1(y) {
    if (y.length > 5 && y.length <= 30)
        return true;
    else
        return false

}

export function comparePasswords(z, y) {
    if (z === y)
        return true;
    else
        return false;

}

export function validateLength(z) {
    if (z.length < 6)
        return true;
}