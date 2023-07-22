import React, {useEffect, useState} from 'react';
import "./menu.css"
import coffee from "../assets/coffee1.png"
import {Link} from "react-router-dom";
import Header from "./header/Header.jsx";
import List from "../pages/menu/list/List.jsx";



const Menu = ()=>{

    const minValue = 0;
    const maxValue = 10;
    const [changeText, setChangeText] = useState("Add to car")
    const [changeStyle, setChangeStyle] = useState("box-data-button")
    const [overviewPackage, setOverviewPackage] = useState(false)
    const [widthWindow, setWidthWindow] = useState(window.innerWidth)
    const [amount, setAmount] = useState(0)
    const [list, setList] = useState(false)

    const changePhrase = ()=>{
        setChangeText("Added to cart");
        setChangeStyle("box-data-button add")
        setOverviewPackage(true)
    }

    const listProducts = ()=>{
        setList(true)
    }


    const increment = () => {
        if(amount < maxValue){
            setAmount((prevAmount) => prevAmount + 1);
        }
    };

    const decrement = () => {

        if(amount > minValue){
            setAmount((prevAmount) => prevAmount - 1);
        }
    };


    return (
        <section className="box">
            <Header/>
            <main className="box-data">
                <section className="box-information">
                    <section className="box-product-image">
                        <div className="box-data-image">
                            <img className="image" src={coffee} alt="coffee"/>
                        </div>
                        <div className="box-amount">
                            <button onClick={decrement} disabled={amount === minValue}>-</button>
                            <span>{amount}</span>
                            <button onClick={increment}  disabled={amount === maxValue}>+</button>
                        </div>
                    </section>
                    <section className="box-data-details">
                        <div className="box-values">
                            <h4>Cappuccino</h4>
                            <span>$ 4.98</span>
                        </div>

                        <p className="box-data-text">The combination of coffee, milk, and palm sugar makes this drink have a delicious</p>
                        <div className="box-data-sizes">
                            <span>Size</span>
                            <button className="box-sizes-button">Small</button>
                            <button className="box-sizes-button">Large</button>
                        </div>
                        <button className={changeStyle} onClick={widthWindow < 768 ? changePhrase : listProducts}>{changeText}</button>
                    </section>
                </section>
                <section className="box-information">
                    <div className="box-data-image">
                        <img className="image" src={coffee} alt="coffee"/>
                        {/*<input type="number" name="quantity" min="0" value="0"/>*/}
                    </div>
                    <section className="box-data-details">
                        <div className="box-values">
                            <h4>Cappuccino</h4>
                            <span>$ 4.98</span>
                        </div>

                        <p className="box-data-text">The combination of coffee, milk, and palm sugar makes this drink have a delicious</p>
                        <div className="box-data-sizes">
                            <span>Size</span>
                            <button className="box-sizes-button">Small</button>
                            <button className="box-sizes-button">Large</button>
                        </div>
                        <button className={changeStyle} onClick={changePhrase}>{changeText}</button>
                    </section>
                </section>
                <section className="box-information">
                    <div className="box-data-image">
                        <img className="image" src={coffee} alt="coffee"/>
                        {/*<input type="number" name="quantity" min="0" value="0"/>*/}
                    </div>
                    <section className="box-data-details">
                        <div className="box-values">
                            <h4>Cappuccino</h4>
                            <span>$ 4.98</span>
                        </div>

                        <p className="box-data-text">The combination of coffee, milk, and palm sugar makes this drink have a delicious</p>
                        <div className="box-data-sizes">
                            <span>Size</span>
                            <button className="box-sizes-button">Small</button>
                            <button className="box-sizes-button">Large</button>
                        </div>
                        <button className={changeStyle} onClick={changePhrase}>{changeText}</button>
                    </section>
                </section>
                <section className="box-information">
                    <div className="box-data-image">
                        <img className="image" src={coffee} alt="coffee"/>
                        {/*<input type="number" name="quantity" min="0" value="0"/>*/}
                    </div>
                    <section className="box-data-details">
                        <div className="box-values">
                            <h4>Cappuccino</h4>
                            <span>$ 4.98</span>
                        </div>

                        <p className="box-data-text">The combination of coffee, milk, and palm sugar makes this drink have a delicious</p>
                        <div className="box-data-sizes">
                            <span>Size</span>
                            <button className="box-sizes-button">Small</button>
                            <button className="box-sizes-button">Large</button>
                        </div>
                        <button className={changeStyle} onClick={changePhrase}>{changeText}</button>
                    </section>
                </section>
                <section className="box-information">
                    <div className="box-data-image">
                        <img className="image" src={coffee} alt="coffee"/>
                        {/*<input type="number" name="quantity" min="0" value="0"/>*/}
                    </div>
                    <section className="box-data-details">
                        <div className="box-values">
                            <h4>Cappuccino</h4>
                            <span>$ 4.98</span>
                        </div>

                        <p className="box-data-text">The combination of coffee, milk, and palm sugar makes this drink have a delicious</p>
                        <div className="box-data-sizes">
                            <span>Size</span>
                            <button className="box-sizes-button">Small</button>
                            <button className="box-sizes-button">Large</button>
                        </div>
                        <button className={changeStyle} onClick={changePhrase}>{changeText}</button>
                    </section>
                </section>
            </main>

            {overviewPackage && (
                <footer className="box-footer">
                    <div className="box-footer-package">
                        <Link to="/package" className="box-footer-button">
                            <span>Icon</span>
                            <span>Ver Sacola</span>
                            <span>R$ 12,30</span>
                        </Link>
                    </div>
                </footer>
            )}

            {list && (
                <section className="footer-desktop">
                    <List/>
                </section>
            )}

        </section>
    )
}

export default Menu;