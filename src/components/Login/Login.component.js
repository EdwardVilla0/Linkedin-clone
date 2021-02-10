import React from 'react';
import './Login.styles.css';

function Login() {
    const loginToApp = () => { };
    const register = () => {

    }

    return (
        <div className="login">
            <h1>you are not logged in</h1>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"
                alt="linked in logo" />

            <form className="login__form">
                <input placeholder="fullname(required if registering)" type="text" />

                <input placeholder="Profile pic" type="text" />
                <input placeholder="email" type="email" />
                <input placeholder="password" type="password" />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?</p>
            <span className="login__register" onClick={register}>Register Now</span>
        </div>
    )
}

export default Login;
