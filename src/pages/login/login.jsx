import React, {useContext, useState} from 'react';
import "./login.css"
import {Link, useNavigate} from "react-router-dom";
import {TokenContext} from "../../components/token/TokenContext.jsx";

const Login = ()=>{

    const navigate = useNavigate()
    const { setToken } = useContext(TokenContext);

    const [user, setUser] = useState({
        login : "",
        password : "",
    })

    const handleChange = (event) =>{
        const {name, value} = event.target;

        setUser((prevState) =>({
            ...prevState,
            [name] : value,
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault()

        const dataToSubmit = {
            login : user.login,
            password : user.password
        }

        fetch("http://localhost:8072/auth/login", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset-UTF-"8',
            },
            body : JSON.stringify(dataToSubmit)
        })
            .then(res => res.json())
            .then(res => {
                if(res){
                    setToken(res)
                    navigate('/home')
                }
            })
            .catch((error) => {
                if(error){
                    console.log(error.message)
                }
            })
     }


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
                <form className="container-form-dates" onSubmit={handleSubmit}>
                    <input type="text" value={user.login} onChange={handleChange} id="name" name="login" required placeholder="Username"/>
                    <input type="password" value={user.password} onChange={handleChange} name="password" required placeholder="Password"/>
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