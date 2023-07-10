import React from "react";
import "./registration.css"
import "../login/login.css"
import {Link} from "react-router-dom";

const Registration = ()=>{

    return (
        <section className="container-users container-registration">
            <main className="container-form">
                <Link to="/">
                    <div className="container-title">
                        <span style={{color : '#FFA16C', cursor: "pointer"}}>Purr'</span>
                        <span style={{color : 'black', cursor: "pointer"}}>Coffee</span>
                    </div>
                </Link>
                <form className="container-form-dates space-buttons">
                    <input type="text" name="name" required placeholder="Name"/>
                    <input type="email" name="email" required placeholder="Email"/>
                    <input type="password" name="password" required placeholder="Password" />
                    <div className="container-form-dates-buttons">
                        <Link to="/">
                            <button type="button">BACK</button>
                        </Link>
                        <input type="submit" value="CONFIRM"/>
                    </div>

                </form>
            </main>
            <section className="container-registration-image">
            </section>
        </section>
    )
}



export default Registration;