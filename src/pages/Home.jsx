import React from 'react';
import { Link } from "react-router-dom"
import "./Home.css"



const Home = ()=>{

    return (
       <section className="container">
           <div>
               <span style={{color : '#FFA16C'}}>Purr'</span>
               <span style={{color : 'black'}}>Coffee</span>
           </div>
           <section className="container-user">
               <Link to="/login">Login</Link>
               <Link to="/daksds">Error</Link>
           </section>
       </section>
    )
}

export default Home;
