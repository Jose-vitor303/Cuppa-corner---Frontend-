import React, {useState} from 'react';
import "./menu.css"



const Menu = ()=>{

    const [openMenu, setOpenMenu] = useState(false)
    const [changeText, setChangeText] = useState("Add to car")
    const [changeStyle, setChangeStyle] = useState("box-data-button")

    const changePhrase = ()=>{
        setChangeText("Added to cart");
        setChangeStyle("box-data-button add")
    }

    return (
        <>
            <header className="box-header">
                <section className="box-header-logo">
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
                        ) : ( window.innerWidth > 999 && (
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
                <ul className="box-header-list">
                    <li>Coffee</li>
                    <li>Food</li>
                    <li>Snack</li>
                    <li>Dessert</li>
                </ul>
            </header>
            <main className="box-data">
                <div className="box-data-image">
                    <img src="" alt="coffee"/>
                    <input type="number" name="quantity" min="0" value="0"/>
                </div>
                <section className="box-data-details">
                    <div className="box-values">
                        <h4>Cappuccino</h4>
                        <span>$ 4.98</span>
                    </div>

                    <p className="box-data-text">The combination of coffee, milk, and palm sugar makes this drink have a delicious</p>
                    <div className="box-data-sizes">
                        <span>Size</span>
                        <button>Small</button>
                        <button>Large</button>
                    </div>
                    <button className={changeStyle} onClick={changePhrase}>{changeText}</button>
                </section>
            </main>
        </>
    )
}

export default Menu;