import "./login.scss"

export default function Login(){
    

    return(
        <div className="login">
            <div className="top">
                <div className="wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" className="logo" />
                </div>
            </div>
            <div className="container">
            <form>
                <h1>Sign In</h1>
                
                <input type="email" placeholder="E-mail or phone number" />
                <input type="password" placeholder="Password" />
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