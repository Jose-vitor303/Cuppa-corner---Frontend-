import React, { useState} from "react";
import "./registration.css"
import "../login/login.css"
import {Link} from "react-router-dom";

const Registration = ()=>{

    const [newUser, setNewUser] = useState({
        login : "",
        password : "",
    })

    const handleChange = (event) =>{
        const {name, value} = event.target;

        setNewUser((prevState) =>({
            ...prevState,
            [name] : value,
        }))
    }


    const handleFormSubmit = (event) =>{
        event.preventDefault()

        const data = {
            login : newUser.login,
            password: newUser.password
        }

        fetch("http://localhost:8072/auth/register", {
            method : 'POST',
            headers : {
                'Content-type': 'application/json; charset-UTF-8',
            },
            body : JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {console.log(res)});
    }

    return (
        <section className="container-users container-registration">
            <main className="container-form">
                <Link to="/">
                    <div className="container-title">
                        <span style={{color : '#FFA16C', cursor: "pointer"}}>Purr'</span>
                        <span style={{color : 'black', cursor: "pointer"}}>Coffee</span>
                    </div>
                </Link>
                <form method='post' className="container-form-dates space-buttons" onSubmit={handleFormSubmit}>
                    <input type="text" value={newUser.login} name="login" onChange={handleChange} required placeholder="Username"/>
                    {/*<input type="email" name="email" required placeholder="Email"/>*/}
                    <input type="password" value={newUser.password} name="password" onChange={handleChange} required placeholder="Password" />
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