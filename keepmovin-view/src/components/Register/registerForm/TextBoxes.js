import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './RegisterCSS.css';
import { validateEmail, validatePassword1, comparePasswords, validateLength } from './ValidateInputs';




export default function FormPropsTextFields() {


    const [color1, setColor1] = useState("secondary");
    const [color2, setColor2] = useState("secondary");
    const [color3, setColor3] = useState("secondary");
    const [input1, setInput1] = useState("* Field required");
    const [input2, setInput2] = useState("* Field required");
    const [input3, setInput3] = useState("* Field required");

    const ValidateInput = (e) => {

        let targetId = e.target.id;

        if (targetId === "outlined-required-mail") {
            let x = document.getElementById("outlined-required-mail").value;
            if (validateEmail(x)) {
                setColor1("primary");
                setInput1("* field required");
            }
            else {
                setColor1("secondary");
                setInput1("Min. 6  Max. 25 signs plus '&'");
            }
        }
        else if (targetId === "outlined-required-password") {
            let y = document.getElementById("outlined-required-password").value;
            if (validatePassword1(y)) {
                setColor2("primary");
                setInput2("* field required");
            }
            else {
                setColor2("secondary");
                setInput2("Min. 6  Max. 25 signs");
            }

        }
        else if (targetId === "outlined-required-password1") {
            let z = document.getElementById("outlined-required-password1").value;
            let q = document.getElementById("outlined-required-password").value;
            if (comparePasswords(z, q)) {
                setColor3("primary");
                setInput3("* field required");
            }
            else if (validateLength(z)) {
                setColor3("secondary");
                setInput3("Input is too short");
            }
            else {
                 setColor3("secondary");
                 setInput3("Passwords are not the same...");
            }
        }

    }
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {
                    m: 1, width: '35ch', top: '1ch'
                },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField className="email"

                    color={color1}
                    onKeyUp={ValidateInput}
                    required
                    id="outlined-required-mail"
                    label="Email"
                    helperText={input1}

                />
            </div>
            <div>
                <TextField className="pass1"
                    color={color2}
                    onKeyUp={ValidateInput}
                    required
                    id="outlined-required-password"
                    label="New password"
                    helperText={input2}
                />
            </div>
            <div>
                <TextField className="pass2"
                    color={color3}
                    onKeyUp={ValidateInput}
                    onFocus={ValidateInput}
                    required
                    id="outlined-required-password1"
                    label="Confirm password"
                    helperText={input3}
                />
            </div>
            <div>
            </div>
        </Box>

    );

}


