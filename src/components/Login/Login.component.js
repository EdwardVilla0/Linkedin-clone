import React from 'react';
import './Login.styles.css';

function Login() {
    const loginToApp = () => { };
    const register = () => {

    }

    return (
        <div className="login">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"
                alt="linked in logo" />

            <form>
                <input placeholder="full name(required if registering)" type="text" />

                <input placeholder="Profile pic URL(optional)" type="text" />
                <input placeholder="email" type="email" />
                <input placeholder="password" type="password" />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?
            <span className="login__register" onClick={register}> Register Now</span>
            </p>

        </div>
    )
}

export default Login;
