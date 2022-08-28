import { useRef, useState } from "react"
import "./register.scss"

export default function Register(){
    const[email,setEmail] = useState("")
    const[password, setPassword] = useState("")
    const passwordRef = useRef()
    const emailRef = useRef()
    const handleStart= () =>{
        setEmail(emailRef.current.value)
    }
    const handleFinish = () =>{
        setPassword(passwordRef.current.value)
    }

    return(
        <div className="register">
            <div className="top">
                <div className="wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" className="logo" />
                <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your emailto create or restart your membership.</p>
                {!email ? (
                <div className="input">
                    <input type="email" placeholder="E-mail address" className="email" ref={emailRef}/>
                    <button className="registerButton" onClick={handleStart} >Get Started!</button>
                </div>
                ) :
                (<form className="input">
                <input type="password" placeholder="Password" className="password" ref={passwordRef}/>
                <button className="registerButton" onClick={handleFinish} >Start!</button>
            </form>)}
                
            </div>
        </div>
    )
}