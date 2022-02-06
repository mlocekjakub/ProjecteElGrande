import * as React from "react";


export default function SignInButton() {

    const CollectInfo = () => {
        let email = document.getElementById('outlined-required-mail').value;
        let password = document.getElementById('outlined-required-password').value;
        console.log(email);
        console.log(password);
    }
    return (
        <Button id="confirmButton" onClick={CollectInfo} variant="contained" disableElevation sx={{
            top: '6ch'
        }}>
            Sign In
        </Button>

    )
}
