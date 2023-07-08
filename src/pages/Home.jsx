import React from 'react';
import { Link } from "react-router-dom"
import "./Home.css"
import Logo from "../components/logo.jsx";



const Home = ()=>{

    return (
       <section className="container">
           <Logo />
           <section className="container-user">
               <Link to="/login">Login</Link>
               <Link to="/daksds">Error</Link>
           </section>
       </section>
    )
}

export default Home;
