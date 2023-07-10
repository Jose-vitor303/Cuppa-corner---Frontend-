import React from 'react';
import { Link } from "react-router-dom"
import "./Home.css"



const Home = ()=>{

    return (
       <section className="container">
           <div className="container-name">
               <span style={{color : '#FFA16C'}}>Purr'</span>
               <span style={{color : 'black'}}>Coffee</span>
           </div>
           <section className="container-user">
               <Link to="/login"  id="login-link">LOGIN</Link>
               <Link to="/registration" id="signup-link">SIGN UP</Link>
           </section>
       </section>
    )
}

export default Home;
