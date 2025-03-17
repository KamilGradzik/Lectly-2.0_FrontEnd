import { TextField } from "@mui/material"
import { JSX } from "react"
import "./login-page.scss"

const LoginPage = ():JSX.Element => {
    return(
        <div className="login-page">
            <div className="login-page-logo">
                <p>Login Placeholder</p>
            </div>
            <div className="login-page-form">
                <div className="login-page-form-wrapper">
                    <TextField variant={"filled"} label={"E-mail"} />
                    <TextField variant={"filled"}  label={"Password"} />
                </div>
            </div>
        </div>
    )
}

export default LoginPage