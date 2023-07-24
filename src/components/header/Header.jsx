import React, {useEffect, useState} from "react"
import "./Header.css"


const Header = ()=>{

    const [openMenu, setOpenMenu] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    useEffect(()=>{

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [])


    return(
        <header className="box-header">
            <section className="box-header-mobile">
                <div className="box-title">
                    <span style={{color : '#FFA16C', cursor: "pointer"}}>Purr'</span>
                    <span style={{color : 'black', cursor: "pointer"}}>Coffee</span>
                </div>
                {openMenu ?(
                    <section className="box-hamburger">
                        <div onClick={() => setOpenMenu(false)} className="box-hamburger-container">
                            <div className="box-hamburger-horizontal"/>
                            <div className="box-hamburger-vertical"/>
                        </div>
                        <div className="list-element">
                            <li>Home</li>
                            <li>Search</li>
                            <li>My orders</li>
                            <li>Profile</li>
                        </div>
                    </section>
                ) : ( windowWidth > 1100 && (
                    <section className="box-hamburger">
                        <div className="list-element">
                            <li>Home</li>
                            <li>Search</li>
                            <li>My orders</li>
                            <li>Profile</li>
                        </div>
                    </section>
                ))}
                <div onClick={() => setOpenMenu(true)} className="box-mobile-menu">
                    <div/>
                    <div/>
                    <div/>
                </div>
            </section>
        </header>
    )
}

export default Header;