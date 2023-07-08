import React from "react";
import "./registration.css"

const Registration = ()=>{

    return (
        <section className="container-account">
            <main className="container-registration">
                <form className="form-user">
                    <input type="text" name="name" required placeholder="name"/>
                    <input type="email" name="email" required placeholder="email"/>
                    <input type="password" name="password" required placeholder="password" />
                    <input type="file" name="image"/>
                    <input type="submit" value="CONFIRM"/>
                </form>
            </main>
            <section className="container-registration-image">
            </section>
        </section>
    )
}



export default Registration;