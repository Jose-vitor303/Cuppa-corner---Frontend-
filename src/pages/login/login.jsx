import React from 'react';
import "./login.css"
import {Link} from "react-router-dom";

const Login = ()=>{

    return (
        <section className="container-users">
            <section className="container-login-image">
            </section>
            <section className="container-form">
                <Link to="/">
                    <div className="container-title">
                        <span style={{color : '#FFA16C', cursor: "pointer"}}>Purr'</span>
                        <span style={{color : 'black', cursor: "pointer"}}>Coffee</span>
                    </div>
                </Link>
                <form className="container-form-dates">
                    <input type="email" id="email" name="email" required placeholder="Email"/>
                    <input type="password" name="password" required placeholder="Password"/>
                    <div className="container-form-dates-buttons">
                        <Link to="/registration">
                            <button type="button">SIGN UP</button>
                        </Link>
                        <input type="submit" value="LOGIN"/>
                    </div>
                </form>
            </section>
        </section>
    )
}

export default Login;