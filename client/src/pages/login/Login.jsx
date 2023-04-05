import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import "./login.scss"
import axios from "axios"

export default function Login(){
    
    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);

    const postLogin = async (e) => {
        e.preventDefault();
        let res = await axios.post("http://localhost:4000/login", { email, password })
        
        localStorage.setItem("token", res.data.accessToken)
        console.log(res)
    }

    return(
        <div className="login">
            <div className="top">
                <div className="wrapper">
                <Link to=""><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" className="logo" /></Link>
                </div>
            </div>
            <div className="container">
            <form onSubmit={postLogin}>
                <h1>Sign In</h1>
                
                <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="E-mail or phone number" />
                <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password" />
                <button className="loginButton">Sign In</button>
                <span>New to Netflix? <b>Sign up now!</b></span>
                <small>
                    This page is protected by Google reCAPTCHA to ensure you are not a bot. <b>Learn more</b>.
                </small>
                </form>
            </div>
        </div>
    )
}