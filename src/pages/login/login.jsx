import React from 'react';
import "./login.css"
import Logo from "../../components/logo.jsx";
import {Link} from "react-router-dom";

const Login = ()=>{

    return (
        <section className="container-login">
            <section className="container-image">
            </section>
            <section className="container-form">
                <Logo />
                <form className="container-form-dates">
                    <input type="email" id="email" name="email" required placeholder="Email"/>
                    <input type="password" name="password" required placeholder="Password"/>
                    <div className="container-form-dates-buttons">
                        <button>SIGN UP</button>
                        <input type="submit" value="LOGIN"/>
                    </div>
                </form>
            </section>
        </section>
    )
}

export default Login;